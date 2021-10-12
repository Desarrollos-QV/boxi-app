import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from '.././service/service.service';
import { EventsService } from '.././service/events.service';
import { ToastController,NavController,Platform,LoadingController,IonInput, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  text: any;
  data:any;
  user:any;
  serviceComm = [];
  constructor(
    public server : ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    public platform: Platform,
    public menu: MenuController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.menu.enable(true);

    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));  
    }else {
      this.server.SetLenguage();
    }

    this.verifyUser();
    this.loadData();
    
    // Verificamos Servicios activos
    this.chkEvents_comm();
  }

  verifyUser()
  {
    if(localStorage.getItem('app_text')) this.text = JSON.parse(localStorage.getItem('app_text'));

    this.server.userInfo(localStorage.getItem('user_id')).subscribe((response:any) => {
      this.user = response.data;
      
      if (response.data) {
        // Verificamos si el telefono es null
        if (response.data.phone == 'null') {
          this.presentToast("Valida tu número Telefonico","warning");
          this.nav.navigateBack('/login');
        // Verificamos si esta bloqueado
        }else if (response.data.status == 1) {
          this.presentToast("Tu cuenta ha sido bloqueada",'danger');
          this.nav.navigateBack('/locked');
        }

        // Verificamos si ya tiene una direccion de entrega
        if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
          this.nav.navigateForward('setaddress');
        }    

      }else {
        localStorage.removeItem('user_id');
        this.nav.navigateBack('/welcome')
      }

      this.events.publish('user', response.data);
    });
  }

  async loadData()
  {
    let city_id = localStorage.getItem('city_id');
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    this.server.homepage(city_id+"?lid="+lid).subscribe((response:any) => {
      console.log(response);
      this.text = response.data.text;

      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);
      
      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
      
      // Registramos en oneSignal
      // this.subPush();
    });
  }

  chkEvents_comm()
  {
    this.server.chkEvents_comm(localStorage.getItem('user_id')).subscribe((data:any) => {
      this.serviceComm = data.data;
      console.log(this.serviceComm);
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
