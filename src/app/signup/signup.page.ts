import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from '.././service/service.service';
import { EventsService } from '.././service/events.service';
import { ToastController,NavController,Platform,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  logedd: any;
  text:any;
  dating = [];
  phone: any;
  login_view: boolean = false;
  isKeyboardHide=true;
  constructor(
    private route: ActivatedRoute,
    public server : ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    public platform: Platform
  ){
  
  }

  ngOnInit() {
    this.platform.keyboardDidShow.subscribe(ev => {
      this.isKeyboardHide=false;
    });
  
    this.platform.keyboardDidHide.subscribe(() => {
      this.isKeyboardHide=true;
    });
  }

  ionViewWillEnter(){
    if (localStorage.getItem('phone') && localStorage.getItem('phone') != null) {
      this.login_view = true;
      this.phone = JSON.parse(localStorage.getItem('phone'));
    }  
  }

  async signup(data)
  {
    const loading = await this.loadingController.create({
      mode: 'md'
    });
    await loading.present();

    this.server.signup(data).subscribe((response:any) => {
      console.log(response);
      if(response.msg != "done")
      {
        this.presentToast(response.msg,'danger');
      }
      else
      {
        localStorage.removeItem('phone');
        localStorage.setItem('user_id',response.user_id);
        this.events.publish('user_login', response.user_id);
        this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');

        if (this.login_view == true) { // Viene ya de la verificacion telefonica
          let navigationExtras: NavigationExtras = {
            queryParams: {
              redirect: 'home'
            }
          };
          this.nav.navigateForward(['/waitpage'], navigationExtras);
        }else {
          this.nav.navigateRoot('/login');
        }
        
      }

      loading.dismiss();
    });
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

  goBck()
  {
    this.nav.navigateRoot('welcome');  
  }

}
