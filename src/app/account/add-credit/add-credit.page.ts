import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service'; 
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,Platform,LoadingController, ModalController } from '@ionic/angular';
import { FormCardPage } from '../../form-card/form-card.page';
 
@Component({
  selector: 'app-add-credit',
  templateUrl: './add-credit.page.html',
  styleUrls: ['./add-credit.page.scss'],
})
export class AddCreditPage implements OnInit {
  
  data:any;
  text:any;
  history_bal = [];
  constructor(
    public server: ServiceService,
    public events: EventsService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
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

      this.presentToast("Please login for access your profile");
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

    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.data = response.data;
      this.history_bal = response.balance;

      this.history_bal.reverse();
      console.log(response);
      this.events.publish('user', response.data);
      loading.dismiss();
    });
  }

  chkDate(fecha: string)
  {
    let date1 = fecha.substr(0,10);
    let date2 = fecha.substr(11,8);
    return date1 + ' - ' + date2;
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

  async addSaldo()
  {
    const modal = await this.modalController.create({
      component: FormCardPage,
      cssClass: "my-custom-endsign-class",
      backdropDismiss: true
    });

    modal.onDidDismiss().then(data=>{
      this.loadData(); 
    });
    return await modal.present();
  }

  back()
  {
    this.nav.back();
  }
}
