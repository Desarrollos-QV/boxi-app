import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, ToastController, AlertController, NavController } from '@ionic/angular';
import { ServiceService } from '../../service/service.service'; 
import { EventsService } from '../../service/events.service';
import { FormCardPage } from '../../form-card/form-card.page';
  
@Component({
  selector: 'app-option-pay',
  templateUrl: './option-pay.page.html',
  styleUrls: ['./option-pay.page.scss'],
})
export class OptionPayPage implements OnInit {

  otype:number = (localStorage.getItem('otype_user')) ? JSON.parse(localStorage.getItem('otype_user')) : 1;
  admin: any;
  paypal_id: any;
  stripe_id:any;
  user:any;
  text: any;
  count: any;

  constructor(
    public server: ServiceService,
    public modalController: ModalController,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public alertController: AlertController,
    public nav: NavController,
    public events: EventsService,
  ) {
    this.text = JSON.parse(localStorage.getItem('app_text'));
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));
    }else {
      this.server.SetLenguage();
    }
    
    if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
      localStorage.setItem('otype_user',"1");
      this.otype = 1;
    }else {
      this.otype = Number(localStorage.getItem('otype_user'));
    }

    this.admin = JSON.parse(localStorage.getItem('admin'));

    // Verificamos si tiene la opcion de Paypal
    if(this.admin.paypal_client_id){
        this.paypal_id    = this.admin.paypal_client_id;
    }

    // Verificamos si tiene la opcion de Stripe
    if(this.admin.stripe_client_id)
    {
      this.stripe_id    = this.admin.stripe_client_id;
    }

    // Obtenemos la info del usuario
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

  async setType(id)
  {
    const loading = await this.loadingController.create({
      mode:'ios'
    });
    await loading.present();
    this.otype = id.detail.value;
    localStorage.setItem('otype_user',id.detail.value);
    loading.dismiss();
  }

  back()
  {
    this.nav.back();
  }

  async presentToast(txt, color) {
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
