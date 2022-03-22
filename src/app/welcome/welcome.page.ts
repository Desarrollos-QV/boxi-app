import { Component, OnInit,ViewChild } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { EventsService } from '../service/events.service';
import { NavController,Platform,LoadingController, MenuController, ToastController, ModalController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { EndsignupPage } from './endsignup/endsignup.page';
// Facebook
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  text:any;
  slideOptsTwo = {
      slidesPerView: 1,
      loop: true,
      autoplay:false,
      pagination: {
        el: '.swiper-pagination',
      }
  
  }
  
  data:any;
  
  // Datos del usuario
  Email: any;
  Name: String;
  Aps: String;
  Phone: any;
  Key: String;
  
  // Control de errores
  Error: String;  

  constructor(
    public server : ServiceService,
    public loadingController: LoadingController,
    public events: EventsService,
    public toastController: ToastController,
    public nav: NavController,
    public modalController: ModalController,
    public menu : MenuController,
    public platform: Platform,
    private fb: Facebook,
  ) {
    this.menu.enable(false);
  
  }

  ngOnInit()
  {
    this.platform.ready().then( () => {

    });
  }

  ionViewWillEnter(){
    if (!localStorage.getItem('lenguage') || localStorage.getItem('lenguage') == 'null') {
      this.server.SetLenguage();
    }else {
      this.server.globalize(localStorage.getItem('lenguage'));
    }

    if (localStorage.getItem('user_id') || localStorage.getItem('user_id') != null) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          redirect: 'home'
        }
      };
      this.nav.navigateForward(['/waitpage'], navigationExtras);
    }
  }

  LoginSignup()
  {
    this.nav.navigateForward('/login');
  }

 

  Signup()
  {
    this.nav.navigateForward('/signup');
  }

  /**
   * Solicitamos la autorizacion en Facebook para obtener los datos
  */

   fbLogin() {
     console.log("iniciamos");
     this.fb.login(['public_profile', 'email'])
    .then((res: FacebookLoginResponse) => {
      if (res.status == 'connected') {
        // Usuarios Logeado...
        let url = "https://graph.facebook.com/me?fields=id,name,email&access_token="+res.authResponse.accessToken;
        this.server.signupWithfb(url).subscribe(data => {
         this.loginfb({
            name : data['name'],
            email: data['email'],
            phone: 'null',
            password: data['id'],
            pswfb: data['id']
          });
        });
        }
    }).catch(e => {
      this.presentToast("Ha ocurrido un problema. vuelva a intentar más tarde.",'danger');
    });
  }

  /**
   * Login With Facebook
  */

  async loginfb(data)
  {
    const loading = await this.loadingController.create({
      mode:'ios'
    });

    await loading.present();
  
    this.server.loginfb(data).subscribe((response:any) => { 
    
      if(response.msg != "done")
      {
        /**
         * Si no existe la cuenta se va a crear
        */
        this.signup(data);
      }
      else
      {
        localStorage.setItem('user_id',response.user_id);
        this.events.publish('user_login', response.user_id);
        let navigationExtras: NavigationExtras = {
          queryParams: {
            redirect: 'home'
          }
        };
        this.nav.navigateForward(['/waitpage'], navigationExtras);
      }
      loading.dismiss();
    });
  }

  /**
   * SignUp With Facebook
  */

  async signup(data)
  {
    const modal = await this.modalController.create({
      cssClass: "my-custom-endsign-class",
      animated: true,
      swipeToClose:true,
      mode:'ios',
      component: EndsignupPage,
      
    });

    modal.onDidDismiss().then(data=>{
     
    });
    
    return await modal.present();
    // this.server.signup(data).subscribe((response:any) => {      
    //   if(response.msg != "done")
    //   {
    //     this.presentToast(response.msg,'danger');
    //   }
    //   else
    //   {
    //     localStorage.setItem('user_id',response.user_id);
    //     this.events.publish('user_login', response.user_id);
    //     this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
    //     this.nav.navigateForward('/login');
    //   }

    //   loading.dismiss();
    // });
  }

  /**
   * 
   * Cambio de idioma 
   *  
   */
  ChangeLng()
  {
    this.server.SetLenguage();
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
