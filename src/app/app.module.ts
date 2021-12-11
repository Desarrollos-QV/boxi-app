import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder} from '@ionic-native/native-geocoder/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
// Facebook
import { Facebook } from '@ionic-native/facebook/ngx';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';


// ModalBox
import { EndsignupPageModule } from './welcome/endsignup/endsignup.module';
import { SetLenguagePageModule } from './set-lenguage/set-lenguage.module'; 
import { FormCardPageModule } from './form-card/form-card.module'; 
import { RateTripPageModule } from './done-comm/rate-trip/rate-trip.module';
  
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

    // ModalBox
    EndsignupPageModule,
    SetLenguagePageModule,
    FormCardPageModule,
    RateTripPageModule
  ],
  providers: [
    Geolocation,
    NativeGeocoder,
    Facebook,
    Stripe,
    OneSignal,
    FirebaseAuthentication,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
