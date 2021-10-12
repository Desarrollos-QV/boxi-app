import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../.././service/service.service';
import { EventsService } from '../.././service/events.service';
import { ToastController,NavController,Platform,LoadingController  } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google:any;

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  
  map: any;
  lat: any;
  lng: any;
  location:any;
  address:string;
  type_add:any;
  text:any;
  marker: any;
  admin:any;

  constructor(
    public route: ActivatedRoute,
    public server : ServiceService,
    public toastController: ToastController,
    public nav: NavController,
    public loadingController: LoadingController,
    public geolocation: Geolocation,
    public nativeGeocoder: NativeGeocoder,
    public events: EventsService,
  ) { 
    this.text = JSON.parse(localStorage.getItem('app_text'));
    this.route.queryParams.subscribe( params => {
      this.location = JSON.parse(params.location);
      this.lat      = this.location.lat;
      this.lng      = this.location.lng;
      this.address = params.address;
    }); 
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadMap();
    }, 800);
  }

  ionViewWillEnter(){
    this.admin = JSON.parse(localStorage.getItem('admin'));
  }
 
  async loadMap() {
    const loading = await this.loadingController.create({});
    await loading.present();

    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.map.addListener('drag', () => {
     
      this.server.GeocodeFromCoords(this.map.center.lat(), this.map.center.lng(),this.admin.ApiKey_google).subscribe((data:any) => {
        let formatted_address = data.results[0].formatted_address;
        this.address  = formatted_address;
      });
    });

    loading.dismiss();
  }
 
  async saveAddress(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor espere...',
    });
    await loading.present();

    var lat = this.map.center.lat();
    var lng = this.map.center.lng(); 
   
    this.server.GetNearbyCity("&lat="+lat+"&lng="+lng).subscribe((response:any) => {
      if (response.data.nearby == true) {
        if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
        {
            localStorage.setItem('city_id',response.data.data[0].id);
            localStorage.setItem('city_name',response.data.data[0].name);

            this.events.publish('change_city',response.data.data[0].id);
            this.server.updateCity("id="+localStorage.getItem('user_id')+"&city_id="+response.data.data[0].id).subscribe(() => {});
        } 
        else
        {
          localStorage.setItem('city_id',response.data.data[0].id);
          localStorage.setItem('city_name',response.data.data[0].name);
          this.events.publish('change_city',response.data.data[0].id);
        }
        
        var allData = {
          address : this.address,
          type    : this.type_add,
          lat     : this.map.center.lat(),
          lng     : this.map.center.lng(),
          user_id : localStorage.getItem('user_id')
        }
  
        this.server.saveAddress(allData).subscribe((response:any) => {
          if (response.msg == 'done') {
            localStorage.setItem("address",this.address);
            localStorage.setItem('address_id',response.id);
            localStorage.setItem("current_lat",this.map.center.lat());
            localStorage.setItem('current_lng',this.map.center.lng());
            
            this.nav.navigateForward('home');
            this.presentToast("Dirección guardada con éxito.",'success');  
          }else {
            this.presentToast(JSON.stringify(response.data),'danger');  
          }
          
          loading.dismiss();
          
        });

      }else {
        loading.dismiss();
        this.presentToast("Aún no tenemos servicio en esta ubicación",'danger');
      }
    });
    
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
