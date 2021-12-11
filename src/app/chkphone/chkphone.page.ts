import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServiceService } from '.././service/service.service';
import { EventsService } from '.././service/events.service';
import { ToastController,NavController,Platform,LoadingController,IonInput, MenuController } from '@ionic/angular';
import firebase from '.././service/fbConfig';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-chkphone',
  templateUrl: './chkphone.page.html',
  styleUrls: ['./chkphone.page.scss'],
})
export class ChkphonePage implements OnInit {

  @ViewChild("otp1", {static: false}) otp1 : IonInput;
  Code: String;
  windowsRef:any;
  confirmationResult: any;
  phone_view: any;
  user_id: any = 'null';
  resend_stat: any;
  constructor(
    public server : ServiceService,
    public toastController: ToastController,
    private nav: NavController,
    public loadingController: LoadingController,
    public events: EventsService,
    public platform: Platform,
    public menu: MenuController,
    public firebaseAuthentication: FirebaseAuthentication
  ) { }

  ngOnInit() {
    // this.windowsRef = this.server.windowRef;
    this.phone_view = localStorage.getItem('phone');
    this.confirmationResult = localStorage.getItem('confirmationResult');
  }

  ionViewWillEnter(){
    this.menu.enable(false);
    
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.server.globalize(localStorage.getItem('lenguage'));
    }else {
      this.server.SetLenguage();
    }

    if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
      this.user_id = localStorage.getItem('user_id');
    }
  }
  
  async valid() {
    const loading = await this.loadingController.create({
      message: 'Validando...',
    });
    await loading.present();

    if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
      let verificationCode: string = this.Code.toString();
     
      this.firebaseAuthentication.signInWithVerificationId(this.confirmationResult,verificationCode).then((data:any) => {
          var allData = {
            user_id : this.user_id, 
            phone : localStorage.getItem('phone')
          }  
          this.server.chkUser(allData).subscribe((res:any) => {
              loading.dismiss();
              if (res.msg == 'phone_exist') {
                this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.","danger");
              }
              else if(res.msg == "not_exist")
              {
                this.presentToast("Termina tu registro ingresando tus datos de contacto. ","warning");
                this.nav.navigateRoot('/signup');
              }
              else {
                this.presentToast('Bienvenido(a) de nuevo...','success');
                localStorage.setItem('user_id',res.user_id);
                this.events.publish('user_login', res.user_id);
                this.server.SignPhone({phone : localStorage.getItem('phone'), user_id: res.user_id}).subscribe((req:any) => {
                  if (req.msg == 'done') {
                    let navigationExtras: NavigationExtras = {
                      queryParams: {
                        redirect: 'home'
                      }
                    };
                    this.nav.navigateForward(['/waitpage'], navigationExtras);
                  }else {
                    this.presentToast(req.msg,'danger');
                  }
                });
              }
          });
      }).catch(fail => {
          console.log(fail);
          // Fail
          loading.dismiss();
          this.presentToast('Algo ha ocurrido.'+fail, 'danger');
      });

    }else {
      loading.dismiss();
      this.presentToast('Porfavor Ingresa un Codigo valido!','danger');
    }
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
