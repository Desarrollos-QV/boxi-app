import { Component, OnInit } from '@angular/core';
import { NavController,Platform,LoadingController,IonSlides,ToastController,ModalController } from '@ionic/angular';
import { ServiceService } from '../service/service.service';
 
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  data:any;
  text:any;
  constructor(
    public loadingController: LoadingController,
    public nav : NavController,
    public server : ServiceService,
    public toastController: ToastController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadData();
  }

  ionViewWillEnter(){
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));  
    }else {
      this.server.SetLenguage();
    }
  }

  async loadData()
  {
    const loading = await this.loadingController.create({
      mode:'ios'
      });
      await loading.present();
  
      let city_id = localStorage.getItem('city_id');
      var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
      this.server.homepage(city_id+"?lid="+lid).subscribe((response:any) => {
        console.log(response);
        this.data = response.data.offers;
        console.log(this.data);
        loading.dismiss();
      });
    }
  
    async applyNow(cdata)
    {
      await this.modalController.dismiss({id:cdata});
    }
  
    async closeModal() {
      
      await this.modalController.dismiss({id:false});
    }

}
