import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
import { RateTripPage } from './rate-trip/rate-trip.page';
 
declare var google:any;


@Component({
  selector: 'app-done-comm',
  templateUrl: './done-comm.page.html',
  styleUrls: ['./done-comm.page.scss'],
})
export class DoneCommPage implements OnInit {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  
  user_id: any;
  status: Number = 0;
  order_id: any;
  Interval_1:any;
  address_origin: any;
  address_destin: any;
  
  map: any;
  lat: any;
  lng: any;
  marker: any;
  
  chargeMap: boolean = false;
  chargeaudio: boolean = false;

  box_rec: boolean = false;
  box_rute: boolean = false;
  box_end: boolean = false;

  rate_box: boolean = false;
  data:any;
  constructor(
    public nav: NavController,
    public server : ServiceService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { 
    this.user_id = localStorage.getItem('user_id');
    
    this.loadData();
    this.Interval_1 = setInterval(() => {      
      this.loadData();
    },4000);

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.box_rec = false;
    this.box_rute = false;
    this.box_end = false;
    this.rate_box = false;
  }

  loadData()
  {
    this.server.chkEvents_comm(this.user_id).subscribe((data:any) => {
      console.log(data);
      if (data.data.length > 0) {
        this.data     = data.data[0];
        let event     = data.data[0].event;
        this.status   = event.status;
       
        this.address_destin = event.address_destin;
        this.address_origin = event.address_origin;

        if (this.status != 0 && this.status != 3) {
          if (data.data[0].dboy) {
            this.lat = data.data[0].dboy.lat;
            this.lng = data.data[0].dboy.lng;
          }else {
            this.lat = event.lat_orig;
            this.lng = event.lng_orig;
          }

          if (this.chargeMap == false) {
            this.chargeMap = true;
            setTimeout(() => {
              this.loadMap();
            }, 1200);
          }else {
            this.ViewdBoy();
          }
        }

        if (this.status == 3) {
          this.box_rec = false;
          this.box_rute = false;
          this.box_end = false;
          if (this.chargeaudio == false) {
            this.chargeaudio = true;
            var audio = new Audio('../../assets/comm_alert.mp3');
            audio.play();
          }
        }

        if (this.status == 2) {
          this.box_rec = false;
          this.box_rute = false;
          this.box_end = false;
          clearInterval(this.Interval_1);
          this.presentToast("El pedido ha sido cancelado",'warning');
          this.nav.navigateForward('/home');
        }

        if (this.status == 4) {
          this.box_rec = true;
        }

        if (this.status == 4.5) {
          this.box_rec = true;
          this.box_rute = true;
        }

        if (this.status == 5) {
          clearInterval(this.Interval_1);
          if (this.rate_box == false) {
            this.rate_box = true;    
            this.box_rec = true;
            this.box_rute = true;
            this.box_end = true;
            this.presentToast("El pedido ha sido entregado con éxito.",'success');
            this.viewRateTrip();
          }
        }
        this.order_id = event.id;
      }else {
        clearInterval(this.Interval_1);
        this.presentToast("No tienes pedidos en curso",'danger');
        this.nav.navigateRoot('/home');
      }
    });
  }

  async chkEvents_staffs(id)
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    this.chargeaudio = false;
    this.box_rec = false;
    this.box_rute = false;
    this.box_end = false;

    let data = {
      id_order : id
    };

    this.server.chkEvents_staffs(data).subscribe((data:any) => {
      loading.dismiss();
      if (data.data.status == false) {
        this.presentToast("Algo ha ocurido por favor, vuelva a intentarlo","danger");
      }
    });
  }

  async cancelComm_event(id)
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    
    this.server.cancelComm_event(id).subscribe((data:any) => {
      loading.dismiss();
      if (data.data.status == 'done') {
        this.presentToast("El pedido ha sido cancelado",'warning');
        this.nav.navigateForward('/home');
      }else {
        this.presentToast("Algo ha ocurido, por favor vuelve a intentar",'danger');
      }
    });
  }

  async loadMap() {
    const loading = await this.loadingController.create({});
    await loading.present();

    const icon = {
      url: 'assets/car_top.png', // image url
      scaledSize: new google.maps.Size(50, 63), // scaled size
    };

    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        icon: icon,
      });

      this.chargeMap = true;
    });
  
    loading.dismiss();
  }
  
  async ViewdBoy() {
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    this.map.setCenter(latLng);
    this.marker.setPosition(latLng);
  }

  async viewRateTrip()
  {
    const modal = await this.modalController.create({
      component: RateTripPage,
      animated:true,
      mode:'ios',
      cssClass: 'my-custom-modal-css',
      backdropDismiss:false,
      showBackdrop: true,
      componentProps: {
        'data_post'  : JSON.stringify(this.data)
      }
    });

    modal.onDidDismiss().then( (data) => {
      console.log(data);
      clearInterval(this.Interval_1);
      this.loadData();
    });
    
    return await modal.present();
  }

  backPage()
  {
    this.nav.navigateRoot('/home');
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
