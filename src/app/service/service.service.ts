import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from '.././app.config';
import { map } from 'rxjs/operators';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { SetLenguagePage } from '../set-lenguage/set-lenguage.page';
import { EventsService } from './events.service';
 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = "https://boxi.grupoorus.mx/api/";
  geoLatitude = null;
  geoLongitude=null;

  ModalLangStat:boolean = false;
  constructor(
    private http: HttpClient,
    private geolocation: Geolocation,
    private events: EventsService,
    @Inject(APP_CONFIG) public config: AppConfig,
    private translate: TranslateService,
    public modalController: ModalController
  ) { }

  get windowRef() {
    return window
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang(languagePriority);
    
    for (let l = 0; l < this.config.availableLanguages.length; l++) {
      const lang = this.config.availableLanguages[l];
      
      if (lang.code == languagePriority) {
        this.translate.use(languagePriority && languagePriority.length ? languagePriority : lang.code);
        break;
      }
    }
    
  }
  
  async SetLenguage()
  {
    if (this.ModalLangStat == false) {
      this.ModalLangStat = true;
      const modal = await this.modalController.create({
        cssClass: "my-custom-lenguage-class",
        animated: true,
        swipeToClose:true,
        mode:'ios',
        component: SetLenguagePage,
        
      });

      modal.onDidDismiss().then(data=>{
        this.ModalLangStat = false;
        this.events.publish('change_lang');
      });

      return await modal.present();
    }
  }

  homepage(city_id)
  {
    return this.http.get(this.url+'homepage/'+city_id)
             .pipe(map(results => results));
  }

  getOffer(cartNo)
  {
    return this.http.get(this.url+'getOffer/'+cartNo)
             .pipe(map(results => results));
  }

  getGeolocation(){
      
    this.geolocation.getCurrentPosition().then((resp) => {
      this.geoLatitude = resp.coords.latitude;
      this.geoLongitude = resp.coords.longitude; 
      //this.geoAccuracy = resp.coords.accuracy; 
      
     localStorage.setItem('current_lat',this.geoLatitude);
     localStorage.setItem('current_lng',this.geoLongitude);

     }).catch((error) => {
      //  Fail
      console.log(error);
     });
  }
  
  GeocodeFromCoords(lat,lng,apikey)
  {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+apikey)
    .pipe(map(results => results)); 
  }

  GeocodeFromAddress(address,apikey)
  {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address+"&key="+apikey)
    .pipe(map(results => results)); 
  }
  
  signupWithfb(data)
  {
    return this.http.get(data).pipe(map(results => results));
  }

  
  login(data)
  {
    return this.http.post(this.url+'login',data)
             .pipe(map(results => results));
  }

  loginfb(data)
  {
    return this.http.post(this.url+'loginfb',data)
             .pipe(map(results => results));
  }

  signup(data)
  {
    return this.http.post(this.url+'signup',data)
             .pipe(map(results => results));
  }

  SignPhone(data)
  {
    return this.http.post(this.url+'SignPhone',data)
      .pipe(map(results => results));
  }

  chkUser(data)
  {
    return this.http.post(this.url+'chkUser',data)
      .pipe(map(results => results));
  }

  userInfo(id)
  {
    return this.http.get(this.url+'userinfo/'+id)
             .pipe(map(results => results));
  }

  updateInfo(data,id)
  {
    return this.http.post(this.url+'updateInfo/'+id,data)
             .pipe(map(results => results));
  }

  getAllAdress(id)
  {
    return this.http.get(this.url+'getAllAdress/'+id)
             .pipe(map(results => results));
  }

  saveAddress(data)
  {
    return this.http.post(this.url+'addAddress',data)
             .pipe(map(results => results));
  }
  
  trashAddress(data)
  {
    return this.http.get(this.url+'removeAddress/'+data)
             .pipe(map(results => results));
  }

  GetNearbyCity(data)
  {
    return this.http.get(this.url+'GetNearbyCity?lid='+localStorage.getItem('lid')+data)
    .pipe(map(results => results));
  }

  updateCity(data)
  {
    return this.http.get(this.url+'updateCity?'+data).pipe(
      map(results => results)
    );
  }

  pages()
  {
    return this.http.get(this.url+'pages?lid='+localStorage.getItem('lid')).pipe(
      map(results => results)
    );
  }

  makeStripePayment(token)
  {
    return this.http.get(this.url+'makeStripePayment'+token).pipe(
      map(results => results)
    );
  }

  myOrder(id)
  {
    return this.http.get(this.url+'myOrder/'+id)
             .pipe(map(results => results));
  }

  /**
   * Servicios
   * @param data 
   * @returns 
  */
   OrderComm(data)
   {
     return this.http.post(this.url+'OrderComm',data).pipe(
       map(results => results)
     );
   }
 
   ViewCostShipCommanded(data)
   {
     return this.http.post(this.url+'ViewCostShipCommanded',data).pipe(
       map(results => results)
     );
   }
 
   chkEvents_comm(id)
   {
     return this.http.get(this.url+'chkEvents_comm/'+id).pipe(
       map(results => results)
     );
   }
 
   chkEvents_staffs(data)
   {
     return this.http.post(this.url+'chkEvents_staffs',data).pipe(
       map(results => results)
     );
   }
 
   cancelComm_event(id)
   {
     return this.http.get(this.url+'cancelComm_event/'+id).pipe(
       map(results => results)
     );
   }

   rateComm_event(data)
  { 
    return this.http.post(this.url+'rateComm_event',data)
             .pipe(map(results => results));
  }
}
