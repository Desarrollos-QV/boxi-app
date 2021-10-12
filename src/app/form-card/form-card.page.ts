import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { EventsService } from '../service/events.service';
import { Stripe } from '@ionic-native/stripe/ngx';
 
@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.page.html',
  styleUrls: ['./form-card.page.scss'],
})
export class FormCardPage implements OnInit {

  
  filter: Number = 0;
  amount:any = 20;
  user:any;
  loadingCard: any;
  admin:any;
  stripe_id: any;
  payment_id: any;
  currency: any;
  constructor(
    public server: ServiceService,
    public events: EventsService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public stripe: Stripe,
  ) { 
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }

  ngOnInit() {
  }

  select_filters(badge)
  {
    this.filter = badge;
    if (badge == 0) {
      this.amount = 20;
    }
    if (badge == 1) {
      this.amount = 50;
    }
    if (badge == 2) {
      this.amount = 100;
    }
    if (badge == 3) {
      this.amount = 150;
    }
    if (badge == 4) {
      this.amount = 200;
    }
    if (badge == 5) {
      this.amount = 300;
    }
    if (badge == 6) {
      this.amount = 500;
    }
    if (badge == 7) {
      this.amount = 1000;
    }
  }

  ionViewWillEnter(){
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      let lang = localStorage.getItem('lenguage');
      this.server.globalize(localStorage.getItem('lenguage'));
      if (lang == 'es') {
       this.currency = "MXN";
      }else if (lang == 'en') {
       this.currency = "USD";
      }
    }else {
      this.server.SetLenguage();
    }

    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.user = response.data;
      this.events.publish('user', response.data);
      if(this.admin.stripe_client_id)
      {
         this.stripe_id    = this.admin.stripe_client_id;
      }
    });
  }


  createCharge(data)
  {

    if(data.card_number.length > 10 && data.expiration_month && data.expiration_year && data.cvv2)
    {
        this.stripe.setPublishableKey(this.stripe_id);

        let card = {
         number: data.card_number,
         expMonth: data.expiration_month,
         expYear: data.expiration_year,
         cvc: data.cvv2
        }
        this.stripe.createCardToken(card)
          .then(token => {
            this.makePayment(token.id);
          })
          .catch(error => {
          this.presentToast("Por favor ingrese detalles de pago válidos",'warning');

          });
    }
    else
    {
      this.presentToast("Por favor ingrese detalles de pago válidos",'warning');
    }
  }

  async makePayment(token)
  {
    const loading = await this.loadingController.create({
      message: 'Enviando Informacion de pago...',
      mode: 'ios'
    });
    await loading.present();

    let allData = "?token="+token
                  +"&user_id="+this.user.id
                  +"&amount="+this.amount
                  +"&currency="+this.currency
                  +"&description=Recarga de saldo del usuario "+this.user.name+" por la cantidad de: $"+this.amount

    this.server.makeStripePayment(allData).subscribe((response:any) => {
      console.log(response);
    if(response.data == "done")
    {
        this.payment_id = response.id;

        if(this.payment_id)
        {
          this.presentToast("Has realizado con exito una recarga de saldo...",'success');
          this.modalController.dismiss("recharge_true","recharge");
        }
    }
    else
    {
      this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.",'danger');
    }

    loading.dismiss();

    });
  }

  closeForm()
  {
    this.modalController.dismiss();
  }

  async presentToast(txt,color) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:color
    });
    toast.present();
  }

}
