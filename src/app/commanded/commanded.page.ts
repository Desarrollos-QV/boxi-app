import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { AlertController, IonSearchbar, LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { EventsService } from '../service/events.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;

@Component({
  selector: 'app-commanded',
  templateUrl: './commanded.page.html',
  styleUrls: ['./commanded.page.scss'],
})
export class CommandedPage implements OnInit {

  @ViewChild("searchad",{static: false}) searchad : IonSearchbar;

  user: any;
  admin:any;
  data:any;
  searchQuery: any;
  hasSearch:any;
  address:any;
  set_type_address: any;
  address_origin: any;
  lat_orig: any;
  lng_orig: any;
  address_destin: any;
  lat_dest: any;
  lng_dest: any;
  LocationNow:any;
  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  lat:any;
  lng:any;
  MyLocation = [];

  step_comm:Number = 0;
  text_address: String = "Punto de recogida";

  first_instr: String = "";
  second_instr: String = "";

  ready: Boolean = false;
  cost_ship :any;
  iva_amount:any;

  
  otype:number;

  stripeView = false;
  payment_id:any;
  paypal_id:any;
  stripe_id:any;
  iva_stripe:any;
  comm_stripe: any;
  payment:any;
  send_terminal:any;
  total_amount:any;
  card_no:any;
  exp_month:any;
  exp_year:any;
  cvv:any;

  header_bal_text: string = "Saldo Insuficiente";
  msg_bal_text: string = "Deseas agregar saldo a tu cuenta?";
  constructor(
    public modalController: ModalController,
    public nav: NavController,
    public server : ServiceService,
    public events: EventsService,
    public geolocation: Geolocation,
    public zone: NgZone,
    public nativeGeocoder: NativeGeocoder,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private stripe: Stripe,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));
    }else {
      this.server.SetLenguage();
    }

    this.admin = JSON.parse(localStorage.getItem('admin'));
    this.autocomplete = { input: '' };
    this.searchQuery = null;
    this.hasSearch   = false;
    this.autocompleteItems = [];
    
    this.send_terminal = this.admin.send_terminal;
    this.comm_stripe   = this.admin.comm_stripe;
    if(this.admin.paypal_client_id) this.paypal_id = this.admin.paypal_client_id;
    if(this.admin.stripe_client_id) this.stripe_id = this.admin.stripe_client_id;

    // Si no cuenta con metodo de pago predeterminado Redireccionamos
    if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
      this.presentToast("Agrega un método de pago predeterminado.",'warning');
      this.nav.navigateForward('/option-pay');
    }else {
      this.otype = JSON.parse(localStorage.getItem('otype_user'));
    }

    this.setPayment(1);
    this.loadData();
  }

  loadData()
  {
    this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.address = response.data;
    });


    if (localStorage.getItem('lenguage') == 'es') {
      console.log('español');
      this.header_bal_text = "Saldo Insuficiente";
      this.msg_bal_text = "Deseas agregar saldo a tu cuenta?";
    }else {
      this.header_bal_text = "Insufficient balance";
      this.msg_bal_text = "Do you want to add balance to your account?";
    }

    // Obtenemos la ubicación actual
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    this.server.GeocodeFromCoords(lattitude, longitude,this.admin.ApiKey_google).subscribe((data:any) => {
      let formatted_address = data.results[0].formatted_address;
      this.LocationNow = formatted_address;
      this.MyLocation.push({
        "lat"          : data.results[0].geometry.location.lat,
        "lng"          : data.results[0].geometry.location.lng,
        "address"      : this.LocationNow
      });
      
    });
   
  }

  search(ev)
  {
    
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();

    var val = ev.target.value;
    if(val && val.length > 0)
    {
      this.data      = null;
      this.hasSearch = val;
      if (this.autocomplete.input == '') {
        this.autocompleteItems = [];
        return;
      }
      this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input,location : new google.maps.LatLng(this.lat,this.lng),radius: 10 },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
    }
    else
    {
      this.ngOnInit();
      this.hasSearch = false;
    }
  }
  
  clearSearch() {
    this.searchQuery = null;
    this.hasSearch   = false;
    this.autocompleteItems = [];
    this.autocomplete = { input: '' };
  }

  SelectSearchResult(item)
  {
    if (this.set_type_address == 'origin') {
      this.address_origin = item.description;
      this.step_comm = 2;
      this.chargeMap(this.address_origin, 'address_origin');
    }else {
      this.address_destin = item.description;
      this.step_comm = 3;
      this.chargeMap(this.address_destin, 'address_destin');
    }
   
  }
  
  async saveAddress(item)
  {
    if (this.set_type_address == 'origin') {
      this.address_origin = item.address;
      this.step_comm = 2;
      this.chargeMap(this.address_origin, 'address_origin');
    }else {
      this.address_destin = item.address;
      this.step_comm = 3;
      this.chargeMap(this.address_destin, 'address_destin');
    }    
  }

  async removeAddress(id) {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    this.server.trashAddress(id).subscribe(data => {
      loading.dismiss();
      if (data) {
        this.presentToast("La dirección se ha eliminado...",'success');
        this.clearSearch();
      }else {
        this.presentToast(data,'danger');
      }
    });
  }

  next_step(step)
  {

    if (step == 'back') {
      this.step_comm  = Number(this.step_comm) - 1; 
    }

    if (step == "add_origin") {
      this.step_comm = 1;
      this.set_type_address = "origin";
      this.text_address = "Punto de recogida";
      this.clearSearch();

      setTimeout(() => {
        this.searchad.setFocus();
      }, 400);
    }else if (step == "add_destin") {
      if (this.address_origin) {
        this.set_type_address = "destination";
        this.text_address = "Punto de entrega";
        this.step_comm = 1;
        this.clearSearch();
        setTimeout(() => {
          this.searchad.setFocus();
        }, 400);
      }else {
        this.presentToast("Ingresa un punto de partida",'danger');
        this.next_step('add_origin');
      }
    }else if (step == 'ready') {
      this.step_comm = 0;
      setTimeout(() => {
        // Cargamos costos de envio
        this.ViewCostShipCommanded();
      }, 500);
    }
  }

  async ViewCostShipCommanded()
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    let allData = {
      lat_orig : this.lat_orig, 
      lng_orig  : this.lng_orig,
      lat_dest  : this.lat_dest,
      lng_dest  : this.lng_dest,
      city_id   : localStorage.getItem('city_id')
    }
    this.server.ViewCostShipCommanded(allData).subscribe((data:any) => {
      loading.dismiss();
      console.log(data);
      if (data.data.service == 1) {
        this.ready = true;
        this.cost_ship = data.data;
        this.total_amount = data.data.costs_ship;
      }else {
        this.presentToast(data.err,'danger');
      }
    })
  }

  chargeMap(address, type)
  {
    // Obtenemos las coordenadas de la direccion de recogida
    this.server.GeocodeFromAddress(address,this.admin.ApiKey_google).subscribe((data:any) => {
      
      if (data.status != 'ZERO_RESULTS') {
        if (type == 'address_origin') {
          this.lat_orig = data.results[0].geometry.location.lat;
          this.lng_orig = data.results[0].geometry.location.lng;
        }else {
          this.lat_dest = data.results[0].geometry.location.lat;
          this.lng_dest = data.results[0].geometry.location.lng;
        }
      }else {
        this.presentToast("No se encontraro resultado de busqueda",'danger');
        this.step_comm = 1;
      }
    });
  }

  
  formatMoney(number) {
    return new Intl.NumberFormat('es-CL', { style: "currency", currency: "CLP" }).format(number);
  }

  closeComm()
  {
    this.nav.navigateRoot('/home');
  }

  async ConfirmPayStripe() {
    const alert = await this.alertController.create({
      header: 'Advertencia!!',
      message: 'El pago via tarjeta de Crédito/Débito genera una comisión de '+this.comm_stripe+" %",
      mode:'ios',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.stripeView = false;
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.total_amount = Number(this.total_amount) + Number(this.getComm(this.total_amount,this.comm_stripe));
            this.stripeView = true;
          }
        }
      ]
    });
    await alert.present();
  }

  setPayment(id)
  {
    this.payment = id;

    if(id == 3)
    {
      this.ConfirmPayStripe();
    }
    else
    {
      if (this.stripeView == true) {
        this.total_amount = Number(this.total_amount) - Number(this.iva_stripe);
        this.iva_stripe   = 0;
        this.stripeView   = false;
      }
    }
  }

  getComm(total,comm) {
    let com = (total * comm) / 100;
    this.iva_stripe = com.toFixed(2);
    return this.iva_stripe;
  }

  makeOrder()
  {
    if(this.payment == 3)
    {
      this.payWithStripe();
    }
    else
    {
      this.order();
    }
  }

  async order()
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    let allData = {
      address_origin  : this.address_origin,
      lat_orig  : this.lat_orig,
      lng_orig  : this.lng_orig,
      address_destin  : this.address_destin,
      lat_dest  : this.lat_dest,
      lng_dest  : this.lng_dest,
      first_instr   : this.first_instr,
      second_instr  : this.second_instr,
      user_id : localStorage.getItem('user_id'),
      price_comm : this.iva_stripe,
      payment : this.payment,
      payment_id : this.payment_id,
      payment_method: this.otype,
      d_charges: this.cost_ship['costs_ship'],
      total: this.total_amount
    }

    this.server.OrderComm(allData).subscribe((data:any) => {
      loading.dismiss();
      console.log(data);
      if (data.data == 'done') {
        this.presentToast("Tu solicitud ha sido enviada",'success');
        this.nav.navigateRoot('/done-comm');
      }else if(data.data == 'fail'){
        this.balance_insuficient();
      }else {
        this.presentToast("Ha ocurrido un problema con el servido, por favor intente mas tarde.",'danger');
        this.nav.navigateRoot('/home');
      }
    });
  
  }

  async balance_insuficient()
  {
    
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: this.header_bal_text,
        message: this.msg_bal_text,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.nav.navigateRoot('/home');
            }
          }, {
            text: 'Okay',
            handler: () => {
             this.nav.navigateForward('/add-credit');
            }
          }
        ]
      });
  
      await alert.present();
  }

  async payWithStripe()
  {
    const loading = await this.loadingController.create({});
    await loading.present();

    if(this.card_no && this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv)
    {
        loading.dismiss();
        this.stripe.setPublishableKey(this.stripe_id);

        let card = {
         number: this.card_no,
         expMonth: this.exp_month,
         expYear: this.exp_year,
         cvc: this.cvv
        }
        this.stripe.createCardToken(card)
          .then(token => {
            this.makePayment(token.id);
          })
          .catch(error => {
          this.presentToast("Por favor ingrese detalles de pago válidos","warning");

          });
    }
    else
    {
      loading.dismiss();
      this.presentToast("Por favor ingrese detalles de pago válidos","warning");
    }
  }

  async makePayment(token)
  {
    const loading = await this.loadingController.create({
      message: 'Enviando Informacion...',
      mode: 'ios'
    });
    await loading.present();

    this.server.makeStripePayment("?token="+token+"&amount="+this.total_amount).subscribe((response:any) => {

    if(response.data == "done")
    {
        this.payment_id = response.id;

        if(this.payment_id)
        {
          this.order();
        }
    }
    else
    {
      this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.","danger");
    }

    loading.dismiss();

    });
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000,
      position : 'top',
      color:color
    });
    toast.present();
  }

}
