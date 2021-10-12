import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavController, Platform } from '@ionic/angular';
import { Constants } from 'src/models/contants.models';
import { ServiceService } from './service/service.service';
import { EventsService } from './service/events.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rtlSide = "left";
  
  public appPages = [];
  public labels = [];
  
  text:any;
  apiKey: any;
  admin:any;
  user: any;
  lan: any;
  info_text: String = "Informacion";
  logout_btn: string = "Cerrar Sesión";
  constructor(
    private platform: Platform,
    public server: ServiceService,
    public events: EventsService,
    public renderer: Renderer2,
    private oneSignal: OneSignal,
    public nav: NavController,
    @Inject(DOCUMENT) private _document
  ) {
    if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
      this.lan = localStorage.getItem('lenguage');
      this.setMenuLang();
    }else {
      this.server.SetLenguage();
      this.setMenuLang();
    }

    this.events.subscribe('change_lang', () => {
      this.lan = localStorage.getItem('lenguage');
      this.setMenuLang();
    });

    this.loadData();
    this.events.subscribe('admin', (type) => {  
      this.admin = type;
    });
    
    this.events.subscribe('user', (data) => {
      this.user = data;
      this.subPush(this.user.id);
    });

    if(localStorage.getItem('admin'))
    {
      this.admin = JSON.parse(localStorage.getItem('admin'));
    }

    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  initializeApp() {
    this.server.getGeolocation();
  }

 
  async loadData()
  {
    let city_id = localStorage.getItem('city_id');
    var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
    this.server.homepage(city_id+"?lid="+lid).subscribe((response:any) => {
      
      this.text = response.data.text;

      this.events.publish('text', this.text);
      this.events.publish('admin', response.data.admin);
      this.apiKey = response.data.admin.ApiKey_google;
      this.injectSDK().then((res) => {
        // Obtenemos la Geolocalicacion
        if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
          this.server.getGeolocation();
        }
      });

      localStorage.setItem('app_text', JSON.stringify(response.data.text));
      localStorage.setItem('admin', JSON.stringify(response.data.admin));
      
      // Registramos en oneSignal
      this.subPush();
    });
  }

  subPush(id = 0)
  {
    this.oneSignal.startInit('8f5a3227-2ea6-4ec7-a5c1-39645b94d4b0', '4044870340');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.handleNotificationReceived().subscribe(() => {
     // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
    });
      
    if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
    {
      this.oneSignal.sendTags({user_id: localStorage.getItem('user_id')});
    }

    if(id > 0) this.oneSignal.sendTags({user_id: id});
    
    this.oneSignal.endInit();
  }

  setMenuLang()
  {
    this.labels = [];
    this.appPages = [];


    if (this.lan == "en") {
      this.info_text = "Information"
      this.logout_btn = "LogOut"
      this.labels = [
        {
          title: "How we work?",
          url: '/about',
          icon: 'chevron-forward-outline'
        },
        {
          title: "Frequent questions",
          url: '/how',
          icon: 'chevron-forward-outline'
        },
        {
          title: "Privacy policies",
          url: '/faq',
          icon: 'chevron-forward-outline'
        },
      ];

      this.appPages = [
        { 
          title: 'Home', 
          url: '/home', 
          icon: 'home' 
        },
        { 
          title: 'Your payment methods', 
          url: '/option-pay', 
          icon: 'wallet' 
        },
        { 
          title: 'Profile', 
          url: '/profile', 
          icon: 'person' 
        },
        { 
          title: 'Add Credit', 
          url: '/add-credit', 
          icon: 'cash' 
        },
        { 
          title: 'History', 
          url: '/history', 
          icon: 'bookmarks' 
        },
      ];
    }else {
      this.info_text = "Información";
      this.logout_btn = "Cerrar Sesión";
      this.labels = [
        {
          title: "¿Como Trabajamos?",
          url: '/about',
          icon: 'chevron-forward-outline'
        },
        {
          title: "Preguntas Frecuentes",
          url: '/how',
          icon: 'chevron-forward-outline'
        },
        {
          title: "Politicas de privacidad",
          url: '/faq',
          icon: 'chevron-forward-outline'
        },
      ];
  
      this.appPages = [
        { 
          title: 'Inicio', 
          url: '/home', 
          icon: 'home' 
        },
        { 
          title: 'Metodos de pago', 
          url: '/option-pay', 
          icon: 'wallet' 
        },
        { 
          title: 'Perfil', 
          url: '/profile', 
          icon: 'person' 
        },
        { 
          title: 'Cargar Crédito', 
          url: '/add-credit', 
          icon: 'cash' 
        },
        { 
          title: 'Historial', 
          url: '/history', 
          icon: 'bookmarks' 
        },
      ];
    }
  }

  private injectSDK(): Promise<any> {

    return new Promise((resolve, reject) => {

        window['mapInit'] = () => {
            resolve(true);
        }

        let script = this.renderer.createElement('script');
        script.id = 'googleMaps';

        if(this.apiKey){
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
        } else {
            script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';       
        }

        this.renderer.appendChild(this._document.body, script);

    });
  }

  logout()
  {
    localStorage.setItem('user_id',null);
    localStorage.removeItem('user_id');
    this.nav.navigateRoot('/welcome');
  }

}
