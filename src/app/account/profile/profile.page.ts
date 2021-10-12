import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service'; 
import { EventsService } from '../../service/events.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  data:any;
  action:any;
  text:any;
  count: any;

  constructor(
    public server: ServiceService,
    public events: EventsService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController
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

  async takeAction(type)
  {    
    this.action = type;
  }

  async loadData()
  {
    const loading = await this.loadingController.create({
      mode: 'ios'
    });
    await loading.present();

    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.data = response.data;
      loading.dismiss();
    });
  }

  async update(data)
  {
    const loading = await this.loadingController.create({
      message: 'Porfavor Espere...',
    });
    await loading.present();

    this.server.updateInfo(data,localStorage.getItem('user_id')).subscribe((response:any) => {

    if(response.msg == "done")
    {
    	this.action = 0;
    	this.data = response.data;

    	this.presentToast("Updated Successfully");
    }
    else
    {
    	this.presentToast(response.error);
    }

    loading.dismiss();

    });
  }

  changeLang()
  {
    this.server.SetLenguage();
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

  back()
  {
    this.nav.back();
  }

  logout()
  {
    localStorage.setItem('user_id',null);
    localStorage.removeItem('user_id');
    this.nav.navigateRoot('/welcome');
  }

}
