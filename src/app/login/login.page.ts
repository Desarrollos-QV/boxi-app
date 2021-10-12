import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from '.././service/service.service';
import { EventsService } from '.././service/events.service';
import { ToastController,NavController,Platform,LoadingController,IonInput, MenuController } from '@ionic/angular';
import firebase from '.././service/fbConfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild("phone", {static: false}) phone : IonInput;
  
  text:any;
  user_id: any = null;
  verifyCode: Boolean = false;
  isKeyboardHide=true;
 

  timer_code: any;
  time_verify: boolean = false;
  resend_stat: boolean = false;

  stateVerify;
  windowsRef:any;
  img_prefjix: String = "assets/es.png";
  prefjix: any = "+521";
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;

  phone_view: String;
  constructor(
    private route: ActivatedRoute,
    public server : ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    public platform: Platform,
    public menu: MenuController,
  ){
    
  }

  ngOnInit() {
    this.windowsRef = this.server.windowRef;
  }

  ionViewWillEnter(){
    this.phone.setFocus();
    this.menu.enable(false);

    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      let lang = localStorage.getItem('lenguage');
      this.server.globalize(localStorage.getItem('lenguage'));
      if (lang == 'es') {
        this.img_prefjix = "assets/es.png";
        this.prefjix = "+521";
      }else if (lang == 'en') {
        this.img_prefjix = "assets/en.png";
        this.prefjix = "+1";
      }
    }else {
      this.server.SetLenguage();
    }


    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      // Do something with the keyboard height such as translating an input above the keyboard.
    });
    this.platform.keyboardDidHide.subscribe(() => {
      // Move input back to original location
    });
    
    if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
      this.user_id = localStorage.getItem('user_id');
    }
    
    this.windowsRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
      size: "invisible",
      callback: function(response) {
        this.login();
      }
    });
  }

  async login()
  {
    const loading = await this.loadingController.create({
      mode:'md'
    });
    await loading.present();

    if (this.phone.value.toString().length > 0) {
        let phone = this.prefjix+this.phone.value.toString();
        this.phone_view = phone;
        this.resend_stat = false;
        
        firebase.auth().signInWithPhoneNumber(phone,this.windowsRef.recaptchaVerifier).then(confirmationResult => {
          this.windowsRef.confirmationResult = confirmationResult;
          localStorage.setItem('confirmationResult',JSON.stringify(this.windowsRef.confirmationResult));
          localStorage.setItem('phone',this.phone.value.toString());
          loading.dismiss();
          this.nav.navigateForward('/chkphone');
        }).catch(fail => {
          console.log('fail: '+fail);
          this.presentToast(fail,"danger");
          loading.dismiss();
        });
    }
  }

  resend() {
    this.verifyCode = false;
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


  goBck()
  {
    this.nav.navigateRoot('welcome');  
  }

}
