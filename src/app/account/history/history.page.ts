import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService} from '../../service/service.service';
import { ToastController, NavController, Platform, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { RateTripPage } from '../../done-comm/rate-trip/rate-trip.page';
 
@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  data:any;
  event:any;
  text:any;
  count: any;
  constructor(
    public server: ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public modalController: ModalController
  ) { 
    this.text = JSON.parse(localStorage.getItem('app_text'));
  }

  ngOnInit() {
  }

  ionViewWillEnter()
  {
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));
    }else {
      this.server.SetLenguage();
    }
    
    if(!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null')
    {
      this.nav.navigateRoot('/login');

      this.presentToast("Inicia sesión para acceder a tu perfil");
    }
    else
    {
      this.loadData();
    }
  }

  async loadData()
  {
    const loading = await this.loadingController.create({
      mode:'ios'
    });
    await loading.present();

    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;

    this.server.myOrder(localStorage.getItem('user_id')+"?lid="+lid).subscribe((response:any) => {
      console.log(response);
      this.data   = response.data;
      this.event  = response.events; 
      loading.dismiss();
    });
  }

  async viewRateTrip(data)
  {
    const modal = await this.modalController.create({
      component: RateTripPage,
      animated:true,
      mode:'ios',
      cssClass: 'my-custom-commanded-modal-css',
      backdropDismiss:true,
      swipeToClose: true,
      showBackdrop: true,
      componentProps: {
        'data_post'  : JSON.stringify(data)
      }
    });

    modal.onDidDismiss().then( (data) => {
      console.log(data);
      this.loadData();
    });
    
    return await modal.present();
  }

  back()
  {
    this.nav.back();
  }

  async presentToast(txt) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 3000,
      position : 'top',
      mode:'ios',
      color:'dark'
    });
    toast.present();
  }

}
