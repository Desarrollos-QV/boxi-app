(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./welcome/welcome.module */ 2526)).then(m => m.WelcomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_firebase_auth_dist_index_esm_js"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then(m => m.SignupPageModule)
    },
    {
        path: 'waitpage',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_waitpage_waitpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./waitpage/waitpage.module */ 5925)).then(m => m.WaitpagePageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'set-lenguage',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./set-lenguage/set-lenguage.module */ 1824)).then(m => m.SetLenguagePageModule)
    },
    {
        path: 'chkphone',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chkphone_chkphone_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chkphone/chkphone.module */ 9243)).then(m => m.ChkphonePageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/profile/profile.module */ 1295)).then(m => m.ProfilePageModule)
    },
    {
        path: 'address',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_address_address_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/address/address.module */ 5107)).then(m => m.AddressPageModule)
    },
    {
        path: 'setaddress',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_address_setaddress_setaddress_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/address/setaddress/setaddress.module */ 6029)).then(m => m.SetaddressPageModule)
    },
    {
        path: 'option-pay',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_option-pay_option-pay_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/option-pay/option-pay.module */ 2005)).then(m => m.OptionPayPageModule)
    },
    {
        path: 'form-card',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./form-card/form-card.module */ 1509)).then(m => m.FormCardPageModule)
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/about/about.module */ 3111)).then(m => m.AboutPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/contact/contact.module */ 9138)).then(m => m.ContactPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/faq/faq.module */ 5546)).then(m => m.FaqPageModule)
    },
    {
        path: 'how',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_how_how_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/how/how.module */ 7460)).then(m => m.HowPageModule)
    },
    {
        path: 'add-credit',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_add-credit_add-credit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/add-credit/add-credit.module */ 5291)).then(m => m.AddCreditPageModule)
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/history/history.module */ 8214)).then(m => m.HistoryPageModule)
    },
    {
        path: 'commanded',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_commanded_commanded_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./commanded/commanded.module */ 2517)).then(m => m.CommandedPageModule)
    },
    {
        path: 'done-comm',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_done-comm_done-comm_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./done-comm/done-comm.module */ 8331)).then(m => m.DoneCommPageModule)
    },
    {
        path: 'offers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_offers_offers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offers/offers.module */ 9780)).then(m => m.OffersPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/events.service */ 4665);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 1779);









let AppComponent = class AppComponent {
    constructor(platform, server, events, renderer, oneSignal, nav, _document) {
        this.platform = platform;
        this.server = server;
        this.events = events;
        this.renderer = renderer;
        this.oneSignal = oneSignal;
        this.nav = nav;
        this._document = _document;
        this.rtlSide = "left";
        this.appPages = [];
        this.labels = [];
        this.info_text = "Informacion";
        this.logout_btn = "Cerrar Sesión";
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            this.lan = localStorage.getItem('lenguage');
            this.setMenuLang();
        }
        else {
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
        if (localStorage.getItem('admin')) {
            this.admin = JSON.parse(localStorage.getItem('admin'));
        }
        this.platform.ready().then(() => {
            this.initializeApp();
        });
    }
    initializeApp() {
        this.server.getGeolocation();
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let city_id = localStorage.getItem('city_id');
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.homepage(city_id + "?lid=" + lid).subscribe((response) => {
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
        });
    }
    subPush(id = 0) {
        this.oneSignal.startInit('8f5a3227-2ea6-4ec7-a5c1-39645b94d4b0', '4044870340');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
        });
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
            this.oneSignal.sendTags({ user_id: localStorage.getItem('user_id') });
        }
        if (id > 0)
            this.oneSignal.sendTags({ user_id: id });
        this.oneSignal.endInit();
    }
    setMenuLang() {
        this.labels = [];
        this.appPages = [];
        if (this.lan == "en") {
            this.info_text = "Information";
            this.logout_btn = "LogOut";
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
        }
        else {
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
    injectSDK() {
        return new Promise((resolve, reject) => {
            window['mapInit'] = () => {
                resolve(true);
            };
            let script = this.renderer.createElement('script');
            script.id = 'googleMaps';
            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places&key=' + this.apiKey;
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit&libraries=places';
            }
            this.renderer.appendChild(this._document.body, script);
        });
    }
    logout() {
        localStorage.setItem('user_id', null);
        localStorage.removeItem('user_id');
        this.nav.navigateRoot('/welcome');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2 },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__.OneSignal },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 9670:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_CONFIG": () => (/* binding */ APP_CONFIG),
/* harmony export */   "BaseAppConfig": () => (/* binding */ BaseAppConfig)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

let APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("app.config");
const BaseAppConfig = {
    availableLanguages: [
        {
            code: 'es',
            name: 'Spanish'
        }, {
            code: 'en',
            name: 'English'
        }
    ],
    showBuyPromt: false
};


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2472);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.config */ 9670);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ 2551);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 1779);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/auth */ 9743);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ 57);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _welcome_endsignup_endsignup_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/endsignup/endsignup.module */ 7205);
/* harmony import */ var _set_lenguage_set_lenguage_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./set-lenguage/set-lenguage.module */ 1824);
/* harmony import */ var _form_card_form_card_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form-card/form-card.module */ 1509);
/* harmony import */ var _done_comm_rate_trip_rate_trip_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./done-comm/rate-trip/rate-trip.module */ 6506);















// Facebook

// Firebase



// ModalBox




function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.TranslateHttpLoader(http);
}
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient]
                }
            }),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_fire__WEBPACK_IMPORTED_MODULE_20__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_21__.AngularFireAuthModule,
            // ModalBox
            _welcome_endsignup_endsignup_module__WEBPACK_IMPORTED_MODULE_9__.EndsignupPageModule,
            _set_lenguage_set_lenguage_module__WEBPACK_IMPORTED_MODULE_10__.SetLenguagePageModule,
            _form_card_form_card_module__WEBPACK_IMPORTED_MODULE_11__.FormCardPageModule,
            _done_comm_rate_trip_rate_trip_module__WEBPACK_IMPORTED_MODULE_12__.RateTripPageModule
        ],
        providers: [
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__.Facebook,
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__.Stripe,
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__.OneSignal,
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_1__.APP_CONFIG, useValue: _app_config__WEBPACK_IMPORTED_MODULE_1__.BaseAppConfig },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicRouteStrategy }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7535:
/*!*****************************************************************!*\
  !*** ./src/app/done-comm/rate-trip/rate-trip-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateTripPageRoutingModule": () => (/* binding */ RateTripPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _rate_trip_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-trip.page */ 9520);




const routes = [
    {
        path: '',
        component: _rate_trip_page__WEBPACK_IMPORTED_MODULE_0__.RateTripPage
    }
];
let RateTripPageRoutingModule = class RateTripPageRoutingModule {
};
RateTripPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RateTripPageRoutingModule);



/***/ }),

/***/ 6506:
/*!*********************************************************!*\
  !*** ./src/app/done-comm/rate-trip/rate-trip.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateTripPageModule": () => (/* binding */ RateTripPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _rate_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rate-trip-routing.module */ 7535);
/* harmony import */ var _rate_trip_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-trip.page */ 9520);








let RateTripPageModule = class RateTripPageModule {
};
RateTripPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _rate_trip_routing_module__WEBPACK_IMPORTED_MODULE_0__.RateTripPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_rate_trip_page__WEBPACK_IMPORTED_MODULE_1__.RateTripPage]
    })
], RateTripPageModule);



/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/done-comm/rate-trip/rate-trip.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RateTripPage": () => (/* binding */ RateTripPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_rate_trip_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rate-trip.page.html */ 464);
/* harmony import */ var _rate_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rate-trip.page.scss */ 8628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ 6794);






let RateTripPage = class RateTripPage {
    constructor(loadingController, toastController, modalController, server, nav) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.server = server;
        this.nav = nav;
        this.star = 0;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
        this.data = JSON.parse(this.data_post);
        console.log(this.data);
    }
    ionViewWillEnter() {
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            console.log(localStorage.getItem('lenguage'));
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        else {
            this.server.SetLenguage();
        }
    }
    setStar(val) {
        this.star = val;
    }
    giveRating(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.star == 0) {
                this.presentToast('Seleccione cualquier calificación para continuar.', 'warning');
            }
            else {
                const loading = yield this.loadingController.create({
                    message: 'Enviando Calificación',
                    duration: 3000
                });
                yield loading.present();
                var allData = {
                    comment: data.comment,
                    user_id: localStorage.getItem('user_id'),
                    star: this.star,
                    oid: this.data.event.id,
                    d_boy: this.data.dboy.id,
                    good_attention: data.good_attention,
                    efficient_delivery: data.efficient_delivery,
                };
                this.server.rateComm_event(allData).subscribe((response) => {
                    console.log(response);
                    loading.dismiss();
                    this.presentToast('¡Gracias! Calificación enviada con éxito.', 'success');
                    this.modalController.dismiss();
                });
            }
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top',
                color: color
            });
            toast.present();
        });
    }
};
RateTripPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
RateTripPage.propDecorators = {
    data_post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RateTripPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-rate-trip',
        template: _raw_loader_rate_trip_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rate_trip_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RateTripPage);



/***/ }),

/***/ 9649:
/*!*******************************************************!*\
  !*** ./src/app/form-card/form-card-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardPageRoutingModule": () => (/* binding */ FormCardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _form_card_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-card.page */ 6379);




const routes = [
    {
        path: '',
        component: _form_card_page__WEBPACK_IMPORTED_MODULE_0__.FormCardPage
    }
];
let FormCardPageRoutingModule = class FormCardPageRoutingModule {
};
FormCardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormCardPageRoutingModule);



/***/ }),

/***/ 1509:
/*!***********************************************!*\
  !*** ./src/app/form-card/form-card.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardPageModule": () => (/* binding */ FormCardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_card_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-card-routing.module */ 9649);
/* harmony import */ var _form_card_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-card.page */ 6379);








let FormCardPageModule = class FormCardPageModule {
};
FormCardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_card_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormCardPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_form_card_page__WEBPACK_IMPORTED_MODULE_1__.FormCardPage]
    })
], FormCardPageModule);



/***/ }),

/***/ 6379:
/*!*********************************************!*\
  !*** ./src/app/form-card/form-card.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormCardPage": () => (/* binding */ FormCardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_form_card_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./form-card.page.html */ 474);
/* harmony import */ var _form_card_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-card.page.scss */ 2429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/events.service */ 4665);
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ 2551);








let FormCardPage = class FormCardPage {
    constructor(server, events, toastController, loadingController, modalController, stripe) {
        this.server = server;
        this.events = events;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.stripe = stripe;
        this.filter = 0;
        this.amount = 20;
        this.admin = JSON.parse(localStorage.getItem('admin'));
    }
    ngOnInit() {
    }
    select_filters(badge) {
        this.filter = badge;
        if (badge == 0) {
            this.amount = 20;
        }
        if (badge == 1) {
            this.amount = 50;
        }
        if (badge == 2) {
            this.amount = 100;
        }
        if (badge == 3) {
            this.amount = 150;
        }
        if (badge == 4) {
            this.amount = 200;
        }
        if (badge == 5) {
            this.amount = 300;
        }
        if (badge == 6) {
            this.amount = 500;
        }
        if (badge == 7) {
            this.amount = 1000;
        }
    }
    ionViewWillEnter() {
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            let lang = localStorage.getItem('lenguage');
            this.server.globalize(localStorage.getItem('lenguage'));
            if (lang == 'es') {
                this.currency = "MXN";
            }
            else if (lang == 'en') {
                this.currency = "USD";
            }
        }
        else {
            this.server.SetLenguage();
        }
        this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
            this.user = response.data;
            this.events.publish('user', response.data);
            if (this.admin.stripe_client_id) {
                this.stripe_id = this.admin.stripe_client_id;
            }
        });
    }
    createCharge(data) {
        if (data.card_number.length > 10 && data.expiration_month && data.expiration_year && data.cvv2) {
            this.stripe.setPublishableKey(this.stripe_id);
            let card = {
                number: data.card_number,
                expMonth: data.expiration_month,
                expYear: data.expiration_year,
                cvc: data.cvv2
            };
            this.stripe.createCardToken(card)
                .then(token => {
                this.makePayment(token.id);
            })
                .catch(error => {
                this.presentToast("Por favor ingrese detalles de pago válidos", 'warning');
            });
        }
        else {
            this.presentToast("Por favor ingrese detalles de pago válidos", 'warning');
        }
    }
    makePayment(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Enviando Informacion de pago...',
                mode: 'ios'
            });
            yield loading.present();
            let allData = "?token=" + token
                + "&user_id=" + this.user.id
                + "&amount=" + this.amount
                + "&currency=" + this.currency
                + "&description=Recarga de saldo del usuario " + this.user.name + " por la cantidad de: $" + this.amount;
            this.server.makeStripePayment(allData).subscribe((response) => {
                console.log(response);
                if (response.data == "done") {
                    this.payment_id = response.id;
                    if (this.payment_id) {
                        this.presentToast("Has realizado con exito una recarga de saldo...", 'success');
                        this.modalController.dismiss("recharge_true", "recharge");
                    }
                }
                else {
                    this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.", 'danger');
                }
                loading.dismiss();
            });
        });
    }
    closeForm() {
        this.modalController.dismiss();
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
};
FormCardPage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_4__.Stripe }
];
FormCardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-form-card',
        template: _raw_loader_form_card_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_form_card_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FormCardPage);



/***/ }),

/***/ 4665:
/*!*******************************************!*\
  !*** ./src/app/service/events.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventsService": () => (/* binding */ EventsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);



let EventsService = class EventsService {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            // You can also use ReplaySubject with one concequence
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
EventsService.ctorParameters = () => [];
EventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], EventsService);



/***/ }),

/***/ 6794:
/*!********************************************!*\
  !*** ./src/app/service/service.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceService": () => (/* binding */ ServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././app.config */ 9670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _set_lenguage_set_lenguage_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../set-lenguage/set-lenguage.page */ 799);
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events.service */ 4665);










let ServiceService = class ServiceService {
    constructor(http, geolocation, events, config, translate, modalController) {
        this.http = http;
        this.geolocation = geolocation;
        this.events = events;
        this.config = config;
        this.translate = translate;
        this.modalController = modalController;
        this.url = "https://boxi.grupoorus.mx/api/";
        this.geoLatitude = null;
        this.geoLongitude = null;
        this.ModalLangStat = false;
    }
    get windowRef() {
        return window;
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
    SetLenguage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.ModalLangStat == false) {
                this.ModalLangStat = true;
                const modal = yield this.modalController.create({
                    cssClass: "my-custom-lenguage-class",
                    animated: true,
                    swipeToClose: true,
                    mode: 'ios',
                    component: _set_lenguage_set_lenguage_page__WEBPACK_IMPORTED_MODULE_2__.SetLenguagePage,
                });
                modal.onDidDismiss().then(data => {
                    this.ModalLangStat = false;
                    this.events.publish('change_lang');
                });
                return yield modal.present();
            }
        });
    }
    homepage(city_id) {
        return this.http.get(this.url + 'homepage/' + city_id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    getOffer(cartNo) {
        return this.http.get(this.url + 'getOffer/' + cartNo)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    getGeolocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.geoLatitude = resp.coords.latitude;
            this.geoLongitude = resp.coords.longitude;
            //this.geoAccuracy = resp.coords.accuracy; 
            localStorage.setItem('current_lat', this.geoLatitude);
            localStorage.setItem('current_lng', this.geoLongitude);
        }).catch((error) => {
            //  Fail
            console.log(error);
        });
    }
    GeocodeFromCoords(lat, lng, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=" + apikey)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    GeocodeFromAddress(address, apikey) {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + apikey)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    signupWithfb(data) {
        return this.http.get(data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    login(data) {
        return this.http.post(this.url + 'login', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    loginfb(data) {
        return this.http.post(this.url + 'loginfb', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    signup(data) {
        return this.http.post(this.url + 'signup', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    SignPhone(data) {
        return this.http.post(this.url + 'SignPhone', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    chkUser(data) {
        return this.http.post(this.url + 'chkUser', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    userInfo(id) {
        return this.http.get(this.url + 'userinfo/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    updateInfo(data, id) {
        return this.http.post(this.url + 'updateInfo/' + id, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    getAllAdress(id) {
        return this.http.get(this.url + 'getAllAdress/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    saveAddress(data) {
        return this.http.post(this.url + 'addAddress', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    trashAddress(data) {
        return this.http.get(this.url + 'removeAddress/' + data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    GetNearbyCity(data) {
        return this.http.get(this.url + 'GetNearbyCity?lid=' + localStorage.getItem('lid') + data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    updateCity(data) {
        return this.http.get(this.url + 'updateCity?' + data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    pages() {
        return this.http.get(this.url + 'pages?lid=' + localStorage.getItem('lid')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    makeStripePayment(token) {
        return this.http.get(this.url + 'makeStripePayment' + token).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    myOrder(id) {
        return this.http.get(this.url + 'myOrder/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    /**
     * Servicios
     * @param data
     * @returns
    */
    OrderComm(data) {
        return this.http.post(this.url + 'OrderComm', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    ViewCostShipCommanded(data) {
        return this.http.post(this.url + 'ViewCostShipCommanded', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    chkEvents_comm(id) {
        return this.http.get(this.url + 'chkEvents_comm/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    chkEvents_staffs(data) {
        return this.http.post(this.url + 'chkEvents_staffs', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    cancelComm_event(id) {
        return this.http.get(this.url + 'cancelComm_event/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
    rateComm_event(data) {
        return this.http.post(this.url + 'rateComm_event', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(results => results));
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation },
    { type: _events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_app_config__WEBPACK_IMPORTED_MODULE_0__.APP_CONFIG,] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
ServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ 2126:
/*!*************************************************************!*\
  !*** ./src/app/set-lenguage/set-lenguage-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetLenguagePageRoutingModule": () => (/* binding */ SetLenguagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _set_lenguage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-lenguage.page */ 799);




const routes = [
    {
        path: '',
        component: _set_lenguage_page__WEBPACK_IMPORTED_MODULE_0__.SetLenguagePage
    }
];
let SetLenguagePageRoutingModule = class SetLenguagePageRoutingModule {
};
SetLenguagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetLenguagePageRoutingModule);



/***/ }),

/***/ 1824:
/*!*****************************************************!*\
  !*** ./src/app/set-lenguage/set-lenguage.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetLenguagePageModule": () => (/* binding */ SetLenguagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _set_lenguage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-lenguage-routing.module */ 2126);
/* harmony import */ var _set_lenguage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-lenguage.page */ 799);








let SetLenguagePageModule = class SetLenguagePageModule {
};
SetLenguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _set_lenguage_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetLenguagePageRoutingModule
        ],
        declarations: [_set_lenguage_page__WEBPACK_IMPORTED_MODULE_1__.SetLenguagePage]
    })
], SetLenguagePageModule);



/***/ }),

/***/ 799:
/*!***************************************************!*\
  !*** ./src/app/set-lenguage/set-lenguage.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetLenguagePage": () => (/* binding */ SetLenguagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_set_lenguage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./set-lenguage.page.html */ 9958);
/* harmony import */ var _set_lenguage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set-lenguage.page.scss */ 4488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);






let SetLenguagePage = class SetLenguagePage {
    constructor(server, modalController) {
        this.server = server;
        this.modalController = modalController;
        this.lang = 'es';
    }
    ngOnInit() {
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            console.log(localStorage.getItem('lenguage'));
            this.lang = localStorage.getItem('lenguage');
        }
        else {
            this.server.globalize('es');
        }
    }
    ChangeLang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.server.globalize(this.lang);
        });
    }
    saveLang() {
        localStorage.setItem('lenguage', this.lang);
        this.server.globalize(this.lang);
        this.modalController.dismiss();
    }
};
SetLenguagePage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
SetLenguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-set-lenguage',
        template: _raw_loader_set_lenguage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_set_lenguage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SetLenguagePage);



/***/ }),

/***/ 3239:
/*!***************************************************************!*\
  !*** ./src/app/welcome/endsignup/endsignup-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndsignupPageRoutingModule": () => (/* binding */ EndsignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _endsignup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endsignup.page */ 4783);




const routes = [
    {
        path: '',
        component: _endsignup_page__WEBPACK_IMPORTED_MODULE_0__.EndsignupPage
    }
];
let EndsignupPageRoutingModule = class EndsignupPageRoutingModule {
};
EndsignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EndsignupPageRoutingModule);



/***/ }),

/***/ 7205:
/*!*******************************************************!*\
  !*** ./src/app/welcome/endsignup/endsignup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndsignupPageModule": () => (/* binding */ EndsignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endsignup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endsignup-routing.module */ 3239);
/* harmony import */ var _endsignup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endsignup.page */ 4783);







let EndsignupPageModule = class EndsignupPageModule {
};
EndsignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _endsignup_routing_module__WEBPACK_IMPORTED_MODULE_0__.EndsignupPageRoutingModule
        ],
        declarations: [_endsignup_page__WEBPACK_IMPORTED_MODULE_1__.EndsignupPage]
    })
], EndsignupPageModule);



/***/ }),

/***/ 4783:
/*!*****************************************************!*\
  !*** ./src/app/welcome/endsignup/endsignup.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndsignupPage": () => (/* binding */ EndsignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_endsignup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./endsignup.page.html */ 5943);
/* harmony import */ var _endsignup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endsignup.page.scss */ 8573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EndsignupPage = class EndsignupPage {
    constructor() { }
    ngOnInit() {
    }
};
EndsignupPage.ctorParameters = () => [];
EndsignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-endsignup',
        template: _raw_loader_endsignup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_endsignup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EndsignupPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCtgnc5ke76gIHDLdp0oTrFusJngOuC8j4",
        authDomain: "boxi-driver-b1102.firebaseapp.com",
        projectId: "boxi-driver-b1102",
        storageBucket: "boxi-driver-b1102.appspot.com",
        messagingSenderId: "4044870340",
        appId: "1:4044870340:web:8b1bfdd165e63052146f91",
        measurementId: "G-0V6SC7K8BC"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 20px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-menu ion-header {\n  box-shadow: none !important;\n}\n\nion-menu ion-header .banner {\n  padding-top: 15px;\n  height: 120px;\n}\n\nion-menu ion-header .banner .info {\n  column-count: 2;\n}\n\nion-menu ion-header .banner .info .img_box {\n  border-radius: 5px;\n  width: 60px;\n  height: 60px;\n  position: relative;\n  float: right;\n  margin: 25px;\n}\n\nion-menu ion-header .banner .info .img_box img {\n  width: 100%;\n  margin: auto;\n}\n\nion-menu ion-header .banner .info .text_box {\n  max-width: 85%;\n  margin-left: 15px;\n  position: relative;\n  z-index: 999;\n}\n\nion-menu ion-header .banner .info .text_box h2 {\n  margin: 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #000;\n  padding-bottom: 5px;\n  letter-spacing: 1.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBcUVBO0VBQ0UsbUJBQUE7QUFsRUY7O0FBcUVBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQWxFRjs7QUFxRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFsRUY7O0FBcUVBO0VBQ0UsK0JBQUE7QUFsRUY7O0FBcUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFsRUY7O0FBcUVBO0VBQ0Usa0JBQUE7QUFsRUY7O0FBcUVBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFsRUY7O0FBcUVBO0VBQ0Usa0JBQUE7QUFsRUY7O0FBcUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFuRUY7O0FBc0VBO0VBQ0UsaUNBQUE7QUFuRUY7O0FBeUVDO0VBQ0MsMkJBQUE7QUF0RUY7O0FBd0VFO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0FBdEVIOztBQXdFRztFQUNDLGVBQUE7QUF0RUo7O0FBd0VJO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF0RUw7O0FBd0VRO0VBQ0YsV0FBQTtFQUNBLFlBQUE7QUF0RU47O0FBMEVJO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBeEVMOztBQTBFSztFQUNDLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXhFTiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogOHB4O1xuLy8gICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCB7XG4vLyAgIHBhZGRpbmc6IDIwcHggMDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuLy8gICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG4vLyBpb24tbWVudS5tZCBpb24tbm90ZSB7XG4vLyAgIHBhZGRpbmctbGVmdDogMTBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4vLyAgIGZvbnQtc2l6ZTogMjJweDtcbi8vICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuLy8gICBtaW4taGVpZ2h0OiAyMHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuLy8gICBmb250LXNpemU6IDE2cHg7XG5cbi8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuLy8gICBjb2xvcjogIzc1NzU3NTtcblxuLy8gICBtaW4taGVpZ2h0OiAyNnB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4vLyAgIGNvbG9yOiAjNjE2ZTdlO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuLy8gICBmb250LXdlaWdodDogNTAwO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuLy8gICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xuLy8gfVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5cbmlvbi1tZW51IHtcblxuXHRpb24taGVhZGVyIHtcblx0XHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cblx0XHQuYmFubmVyIHtcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdFx0aGVpZ2h0OiAxMjBweDtcblxuXHRcdFx0LmluZm8ge1xuXHRcdFx0XHRjb2x1bW4tY291bnQ6IDI7XG5cblx0XHRcdFx0LmltZ19ib3gge1xuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0XHR3aWR0aDogNjBweDtcblx0XHRcdFx0XHRoZWlnaHQ6IDYwcHg7XG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdGZsb2F0OiByaWdodDtcblx0XHRcdFx0XHRtYXJnaW46IDI1cHg7XG5cblx0XHRcdFx0ICAgXHRpbWcge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnRleHRfYm94IHtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDg1JTtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTVweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0ei1pbmRleDogOTk5O1xuXG5cdFx0XHRcdFx0aDIge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOXJlbTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMwMDA7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdFx0XHRcdFx0bGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cblx0XHR9XG5cdH1cblxufSJdfQ== */");

/***/ }),

/***/ 8628:
/*!*********************************************************!*\
  !*** ./src/app/done-comm/rate-trip/rate-trip.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".success {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n  box-shadow: none;\n  position: relative;\n}\n.success ion-card-header {\n  text-align: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: #000;\n}\n.success ion-card-header img {\n  width: 80%;\n  margin: auto;\n}\n.success ion-card-header ion-card-title {\n  font-weight: 700;\n  font-size: 26px;\n}\n.success ion-card-content .btn {\n  margin-top: 25px;\n}\n.success ion-card-content .btn ion-button {\n  width: 100%;\n  height: 50px;\n}\n.success ion-card-content .btn ion-button.light {\n  --background:var(--bglight);\n  color: #000;\n}\n.container {\n  width: 100%;\n  padding: 0 0;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 100%;\n  background: #CCD1D9;\n  z-index: 1;\n}\n.timeline-block {\n  width: calc(50% + 8px);\n  display: flex;\n  justify-content: space-between;\n  clear: both;\n}\n.timeline-block-right {\n  float: right;\n}\n.marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #F5F7FA;\n  background: #4FC1E9;\n  margin-top: 10px;\n  z-index: 9999;\n}\n.timeline-content {\n  width: 95%;\n  padding: 0 15px;\n  color: #666;\n}\n.timeline-content p {\n  font-size: 14px;\n  line-height: 1.5em;\n  word-spacing: 1px;\n  color: #888;\n}\n@media screen and (max-width: 768px) {\n  .container:before {\n    left: 8px;\n    width: 2px;\n  }\n\n  .timeline-block {\n    width: 100%;\n  }\n\n  .timeline-block-right {\n    float: none;\n  }\n\n  .timeline-block-left {\n    float: none;\n    direction: ltr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGUtdHJpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFBUjtBQUVRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFBWjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRFo7QUFPUTtFQUNJLGdCQUFBO0FBTFo7QUFPWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTGhCO0FBT2dCO0VBQ0ksMkJBQUE7RUFDQSxXQUFBO0FBTHBCO0FBWUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVEo7QUFXSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVRSO0FBY0E7RUFHSSxzQkFBQTtFQUlBLGFBQUE7RUFJQSw4QkFBQTtFQUNBLFdBQUE7QUFYSjtBQWNBO0VBQ0ksWUFBQTtBQVhKO0FBZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVpKO0FBZUE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFaSjtBQWVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBWko7QUFnQkE7RUFDSTtJQUNHLFNBQUE7SUFDQSxVQUFBO0VBYkw7O0VBZUU7SUFDRyxXQUFBO0VBWkw7O0VBY0U7SUFDRyxXQUFBO0VBWEw7O0VBY0U7SUFDRyxXQUFBO0lBQ0EsY0FBQTtFQVhMO0FBQ0YiLCJmaWxlIjoicmF0ZS10cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3VjY2VzcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJi5saWdodCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnZhcigtLWJnbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNDQ0QxRDk7XHJcbiAgICAgICAgei1pbmRleDogMVxyXG4gICAgfVxyXG59XHJcbiBcclxuIFxyXG4udGltZWxpbmUtYmxvY2sge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYyg1MCUgKyA4cHgpO1xyXG4gICAgd2lkdGg6IC1tb3otY2FsYyg1MCUgKyA4cHgpO1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlICsgOHB4KTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgLW1vei1ib3gtcGFjazoganVzdGlmeTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbiBcclxuLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4gXHJcblxyXG4ubWFya2VyIHtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1RjdGQTtcclxuICAgIGJhY2tncm91bmQ6ICM0RkMxRTk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgei1pbmRleDogOTk5OVxyXG59XHJcbiBcclxuLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIGNvbG9yOiAjNjY2XHJcbn1cclxuICBcclxuLnRpbWVsaW5lLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICB3b3JkLXNwYWNpbmc6IDFweDtcclxuICAgIGNvbG9yOiAjODg4O1xyXG59XHJcbiBcclxuIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lcjpiZWZvcmUge1xyXG4gICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgd2lkdGg6IDJweDtcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1ibG9jayB7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50aW1lbGluZS1ibG9jay1yaWdodCB7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuIFxyXG4gICAgLnRpbWVsaW5lLWJsb2NrLWxlZnQge1xyXG4gICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 2429:
/*!***********************************************!*\
  !*** ./src/app/form-card/form-card.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  box-sizing: border-box;\n}\n\nbody,\nhtml {\n  height: 100%;\n  min-height: 100%;\n}\n\nbody {\n  margin: 0;\n  background-color: #e7e7e7;\n  font-family: \"Roboto\", sans-serif;\n}\n\n/* Credit Card */\n\n.credit-card {\n  margin: auto 0;\n  border-radius: 6px;\n  background-color: #fff;\n  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);\n}\n\n.form-header {\n  padding: 20px 30px 0;\n}\n\n.form-body {\n  margin: 10px auto 0;\n  padding: 30px 30px 20px;\n}\n\n.form-body ion-card-header {\n  padding: 0 !important;\n  margin-bottom: 15px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n/* Title */\n\n.title {\n  margin: 0 15px;\n  color: #5e6977;\n  font-size: 18px;\n}\n\n/* Common */\n\n.card-number,\n.cvv-input ion-input,\n.month ion-select,\n.paypal-btn,\n.proceed-btn,\n.year ion-select {\n  height: 42px;\n}\n\n.card-number,\n.month ion-select,\n.year ion-select {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 14px;\n}\n\n.card-number,\n.cvv-details,\n.cvv-input ion-input,\n.month ion-select,\n.year ion-select {\n  color: #2f2f2f;\n  opacity: 0.7;\n}\n\n/* Card Number */\n\n.card-number {\n  width: 100%;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  border: 2px solid #828383;\n  border-radius: 6px;\n}\n\n/* Date Field */\n\n.month ion-select,\n.year ion-select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  width: 92%;\n  border: 2px solid #828383;\n  border-radius: 6px;\n}\n\n.date-field {\n  position: relative;\n}\n\n.date-field ion-row {\n  padding: 0 !important;\n}\n\n.date-field ion-row ion-col {\n  padding: 0 !important;\n}\n\n/* Card Verification Field */\n\n.card-verification .cvv-input ion-input {\n  width: 145px;\n  padding-left: 20px;\n  border: 2px solid #828383;\n  border-radius: 6px;\n  background: #fff;\n}\n\n/* Buttons Section */\n\nion-button {\n  display: block;\n  margin-top: 25px;\n  text-transform: capitalize;\n  font-size: 14px;\n  height: 35px;\n}\n\n.cards_img ion-list {\n  column-count: 4;\n}\n\n.cards_img ion-list img {\n  margin: 10 12px;\n  max-width: 70px;\n}\n\n.filter_for {\n  box-shadow: none;\n  position: relative;\n}\n\n.filter_for ion-card-header {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.filter_for ion-card-content {\n  margin: 0 !important;\n}\n\n.filter_for ion-card-content ion-badge {\n  font-size: 12px;\n  padding: 8px 16px;\n  margin: 4px 3px;\n  border-radius: 10px;\n}\n\n.filter_for ion-card-content ion-badge.light {\n  color: var(--bgmedium);\n  background: #f4f5f8;\n}\n\n.filter_for ion-card-content ion-badge.active {\n  color: #fff;\n  background: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFRSxnQkFBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7QUFBSjs7QUFHRTtFQUNFLG9CQUFBO0FBQUo7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBRUk7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBSUUsVUFBQTs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFLFdBQUE7O0FBRUE7Ozs7OztFQU1FLFlBQUE7QUFISjs7QUFNRTs7O0VBR0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTs7Ozs7RUFLRSxjQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BLGdCQUFBOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0EsZUFBQTs7QUFFQTs7RUFFRSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQU9FO0VBQ0UscUJBQUE7QUFMSjs7QUFPSTtFQUNFLHFCQUFBO0FBTE47O0FBV0EsNEJBQUE7O0FBSUU7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYTjs7QUFjQSxvQkFBQTs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFaSjs7QUFpQkU7RUFDRSxlQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFkTjs7QUFvQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBakJKOztBQW1CSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQWpCUjs7QUFvQkk7RUFDSSxvQkFBQTtBQWxCUjs7QUFvQlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFsQlo7O0FBb0JZO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtBQWxCaEI7O0FBcUJZO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0FBbkJoQiIsImZpbGUiOiJmb3JtLWNhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcclxufVxyXG4gIFxyXG5ib2R5LFxyXG5odG1sIHtcclxuICAgIGhlaWdodCAgICAgOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodCA6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgbWFyZ2luICAgICAgICAgICA6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2U3ZTdlNztcclxuICAgIGZvbnQtZmFtaWx5ICAgICAgOiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xyXG59XHJcbiAgIFxyXG4gIC8qIENyZWRpdCBDYXJkICovXHJcbiAgXHJcbiAgLmNyZWRpdC1jYXJkIHtcclxuICAgIG1hcmdpbiAgICAgICAgICAgOiBhdXRvIDA7XHJcbiAgICBib3JkZXItcmFkaXVzICAgIDogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciA6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93ICAgICAgIDogMXB4IDJweCAzcHggMHB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nICAgICAgIDogMjBweCAzMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJvZHkge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcclxuICAgIHBhZGRpbmcgOiAzMHB4IDMwcHggMjBweDtcclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBUaXRsZSAqL1xyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBtYXJnaW4gICAgOiAwIDE1cHg7XHJcbiAgICBjb2xvciAgICAgOiAjNWU2OTc3O1xyXG4gICAgZm9udC1zaXplIDogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ29tbW9uICovXHJcbiAgXHJcbiAgLmNhcmQtbnVtYmVyLFxyXG4gIC5jdnYtaW5wdXQgaW9uLWlucHV0LFxyXG4gIC5tb250aCBpb24tc2VsZWN0LFxyXG4gIC5wYXlwYWwtYnRuLFxyXG4gIC5wcm9jZWVkLWJ0bixcclxuICAueWVhciBpb24tc2VsZWN0IHtcclxuICAgIGhlaWdodCA6IDQycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW51bWJlcixcclxuICAubW9udGggaW9uLXNlbGVjdCxcclxuICAueWVhciBpb24tc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZSAgIDogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQgOiAxNHB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1udW1iZXIsXHJcbiAgLmN2di1kZXRhaWxzLFxyXG4gIC5jdnYtaW5wdXQgaW9uLWlucHV0LFxyXG4gIC5tb250aCBpb24tc2VsZWN0LFxyXG4gIC55ZWFyIGlvbi1zZWxlY3Qge1xyXG4gICAgY29sb3IgICA6ICMyZjJmMmY7XHJcbiAgICBvcGFjaXR5IDogLjc7XHJcbiAgfVxyXG4gIFxyXG4vKiBDYXJkIE51bWJlciAqL1xyXG5cclxuLmNhcmQtbnVtYmVyIHtcclxuICAgIHdpZHRoICAgICAgICAgOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQgIDogMjBweDtcclxuICAgIGJvcmRlciAgICAgICAgOiAycHggc29saWQgIzgyODM4MztcclxuICAgIGJvcmRlci1yYWRpdXMgOiA2cHg7XHJcbn1cclxuICBcclxuLyogRGF0ZSBGaWVsZCAqL1xyXG5cclxuLm1vbnRoIGlvbi1zZWxlY3QsXHJcbi55ZWFyIGlvbi1zZWxlY3Qge1xyXG4gIC1tb3otYXBwZWFyYW5jZSAgICAgOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZSAgOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b20gICAgICAgOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdCAgICAgICAgOiAyMHB4O1xyXG4gIHdpZHRoICAgICAgICAgICAgICAgOiA5MiU7XHJcbiAgYm9yZGVyICAgICAgICAgICAgICA6IDJweCBzb2xpZCAjODI4MzgzO1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICAgOiA2cHg7XHJcbn1cclxuIFxyXG4uZGF0ZS1maWVsZCB7ICBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaW9uLWNvbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDYXJkIFZlcmlmaWNhdGlvbiBGaWVsZCAqL1xyXG5cclxuLmNhcmQtdmVyaWZpY2F0aW9uIHtcclxuXHJcbiAgLmN2di1pbnB1dCBpb24taW5wdXQge1xyXG4gICAgICB3aWR0aCAgICAgICAgIDogMTQ1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdCAgOiAyMHB4O1xyXG4gICAgICBib3JkZXIgICAgICAgIDogMnB4IHNvbGlkICM4MjgzODM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXMgOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gIH1cclxufVxyXG4vKiBCdXR0b25zIFNlY3Rpb24gKi9cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5jYXJkc19pbWcge1xyXG5cclxuICBpb24tbGlzdCB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDQ7XHJcbiAgICBcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMTAgMTJweDtcclxuICAgICAgbWF4LXdpZHRoOiA3MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5maWx0ZXJfZm9yIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgaW9uLWJhZGdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luOjRweCAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAmLmxpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1iZ21lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNWY4OztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 4488:
/*!*****************************************************!*\
  !*** ./src/app/set-lenguage/set-lenguage.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list {\n  margin-top: 25px;\n}\nion-list ion-item {\n  padding: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC1sZW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxlQUFBO0FBQVIiLCJmaWxlIjoic2V0LWxlbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 8573:
/*!*******************************************************!*\
  !*** ./src/app/welcome/endsignup/endsignup.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmRzaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app [dir]=\"rtlSide\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu mode=\"ios\" contentId=\"main-content\" type=\"overlay\">\n\n      <ion-header no-border class=\"ion-no-border\">\n        <ion-menu-toggle auto-hide=\"false\">\n          <div class=\"banner\" routerLink=\"/profile\" routerDirection=\"forward\">\n            <div class=\"info\">\n              \n              <div class=\"text_box\" *ngIf=\"user\">\n                <p>Hola</p>\n                <h2>{{user.name}}</h2>\n              </div>\n\n              <div class=\"img_box\">\n                <img src=\"https://image.flaticon.com/icons/png/512/1246/1246483.png\" class=\"crop_img\" style=\"border-radius: 50%;\">\n              </div>\n              \n            </div>\n          </div>\n        </ion-menu-toggle>\n      </ion-header>\n\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" name=\"{{p.icon}}\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>{{ info_text }}</ion-list-header>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let label of labels\">\n            <ion-item lines=\"none\" routerDirection=\"forward\" [routerLink]=\"[label.url]\" routerLinkActive=\"selected\">\n              <ion-label>{{ label.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          \n          <ion-item lines=\"none\" (click)=\"logout()\">\n            <ion-icon slot=\"start\" name=\"log-out\"></ion-icon>\n            <ion-label>{{ logout_btn }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ 464:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/rate-trip/rate-trip.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <ion-card class=\"success\">\n    <ion-card-header>\n      <img src=\"assets/ic_success.png\" alt=\"success icon\" style=\"width: 25%;\">\n      \n      <ion-card-title>\n        {{'order_delivered' | translate}}\n      </ion-card-title>\n\n      <ion-card-subtitle *ngIf=\"data\" class=\"ion-text-left\">\n        <div class=\"container\">\n          <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n            <div class=\"marker\"></div>\n            <div class=\"timeline-content\">\n               <p>{{data.event.address_origin | slice:0:50}}...</p>\n            </div>\n          </div>\n  \n          <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n            <div class=\"marker\"></div>\n            <div class=\"timeline-content\">\n               <p>{{data.event.address_destin | slice:0:50}}...</p>\n            </div>\n          </div>\n       </div>\n      </ion-card-subtitle>\n    </ion-card-header>\n\n    <ion-card-content style=\"padding: 0 !important;margin:0 !important;\">\n      <form #form=\"ngForm\" (ngSubmit)=\"giveRating(form.value)\" style=\"padding: 0 !important;margin:0 !important;\">\n        <ion-list class=\"ion-text-center\">\n          <h6>{{ 'rating_heading_text' | translate}}</h6>\n          <br>\n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 0\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 1\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 2\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 3\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 4\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star-outline\"></ion-icon></ion-col>\n          </ion-row>\n          \n          <ion-row style=\"font-size: 35px;color:#4FC1E9\" *ngIf=\"star == 5\">\n            <ion-col size=\"1\" (click)=\"setStar(1)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(2)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(3)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(4)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n            <ion-col size=\"1\" (click)=\"setStar(5)\" style=\"margin: 0 12px;\"><ion-icon name=\"star\"></ion-icon></ion-col>\n          </ion-row>\n        </ion-list>\n\n        <ion-list style=\"padding: 0 !important;margin:0 !important;\">\n          \n          <ion-item style=\"padding: 0 !important;margin:0 !important;\">\n            <ion-label>{{'good_attention_text' | translate}}</ion-label>\n            <ion-toggle ngModel name=\"good_attention\" mode=\"ios\"></ion-toggle>\n          </ion-item>\n\n          <ion-item style=\"padding: 0 !important;margin:0 !important;\">\n            <ion-label>{{'efficient_delivery_text' | translate}}</ion-label>\n            <ion-toggle ngModel name=\"efficient_delivery\" mode=\"ios\"></ion-toggle>\n          </ion-item>\n\n        </ion-list>\n        \n        <ion-item>\n          <ion-textarea ngModel name=\"comment\" placeholder=\"{{ text.rating_msg }}\"></ion-textarea>\n        </ion-item>\n\n        <div class=\"btn\">\n          <ion-button color=\"primary\" [disabled]=\"form.invalid\" type=\"submit\"  mode=\"ios\">\n            {{'qualify' | translate}}\n          </ion-button>\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ 474:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form-card/form-card.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" (click)=\"closeForm()\"></ion-icon>\n        <h4 class=\"title\">{{'enter_amount_text' | translate}}</h4>\n        </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form class=\"credit-card\" #form=\"ngForm\" (ngSubmit)=\"createCharge(form.value)\">\n\n    <ion-card class=\"filter_for\">\n      <ion-card-header>\n        {{'select_amount' | translate}}\n      </ion-card-header>\n      <ion-card-content>\n          <ion-badge [ngClass]=\"{active: filter == 0,light: filter != 0}\"  mode=\"ios\" (click)=\"select_filters(0)\">$20.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 1,light: filter != 1}\"  mode=\"ios\" (click)=\"select_filters(1)\">$50.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 2,light: filter != 2}\"  mode=\"ios\" (click)=\"select_filters(2)\">$100.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 3,light: filter != 3}\"  mode=\"ios\" (click)=\"select_filters(3)\">$150.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 4,light: filter != 4}\"  mode=\"ios\" (click)=\"select_filters(4)\">$200.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 5,light: filter != 5}\"  mode=\"ios\" (click)=\"select_filters(5)\">$300.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 6,light: filter != 6}\"  mode=\"ios\" (click)=\"select_filters(6)\">$500.00</ion-badge>\n          <ion-badge [ngClass]=\"{active: filter == 7,light: filter != 7}\"  mode=\"ios\" (click)=\"select_filters(7)\">$1,000.00</ion-badge>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"form-body\">\n      <ion-card-header>\n        {{'pay_info' | translate}}\n      </ion-card-header>\n\n      <!-- Card Number -->\n      <ion-input type=\"tel\" class=\"card-number\" maxlength=\"16\" name=\"card_number\" ngModel required placeholder=\"Número de tarjeta\" clearInput></ion-input>\n      <ion-input type=\"text\" class=\"card-number\" name=\"holder_name\" ngModel required placeholder=\"Nombre en la tarjeta\" clearInput></ion-input>\n      <!-- Date Field -->\n      <div class=\"date-field\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <div class=\"month\">\n              <ion-select mode=\"md\" interface=\"action-sheet\" placeholder=\"mes de vencimiento\" name=\"expiration_month\" ngModel required>\n                <ion-select-option value=\"01\">01</ion-select-option>\n                <ion-select-option value=\"02\">02</ion-select-option>\n                <ion-select-option value=\"03\">03</ion-select-option>\n                <ion-select-option value=\"04\">04</ion-select-option>\n                <ion-select-option value=\"05\">05</ion-select-option>\n                <ion-select-option value=\"06\">06</ion-select-option>\n                <ion-select-option value=\"07\">07</ion-select-option>\n                <ion-select-option value=\"08\">08</ion-select-option>\n                <ion-select-option value=\"09\">09</ion-select-option>\n                <ion-select-option value=\"10\">10</ion-select-option>\n                <ion-select-option value=\"11\">11</ion-select-option>\n                <ion-select-option value=\"12\">12</ion-select-option>\n              </ion-select>\n            </div>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <div class=\"year\">\n              <ion-select mode=\"md\" interface=\"action-sheet\" placeholder=\"año de vencimiento\" name=\"expiration_year\" ngModel required>\n                <ion-select-option value=\"16\">16</ion-select-option>\n                <ion-select-option value=\"17\">17</ion-select-option>\n                <ion-select-option value=\"18\">18</ion-select-option>\n                <ion-select-option value=\"19\">19</ion-select-option>\n                <ion-select-option value=\"20\">20</ion-select-option>\n                <ion-select-option value=\"21\">21</ion-select-option>\n                <ion-select-option value=\"22\">22</ion-select-option>\n                <ion-select-option value=\"23\">23</ion-select-option>\n                <ion-select-option value=\"24\">24</ion-select-option>\n                <ion-select-option value=\"25\">25</ion-select-option>\n                <ion-select-option value=\"26\">26</ion-select-option>\n                <ion-select-option value=\"27\">27</ion-select-option>\n                <ion-select-option value=\"28\">28</ion-select-option>\n                <ion-select-option value=\"29\">29</ion-select-option>\n                <ion-select-option value=\"30\">30</ion-select-option>\n              </ion-select>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- Card Verification Field -->\n      <div class=\"card-verification\">\n        <div class=\"cvv-input\">\n          <ion-input type=\"tel\" name=\"cvv2\" maxlength=\"4\" ngModel placeholder=\"CVV\" required></ion-input>\n        </div>\n      </div>\n\n      <!-- Buttons -->\n      <ion-button [disabled]=\"!form.valid\" type=\"submit\" color=\"primary\" >\n        {{'add_credit' | translate }}\n      </ion-button>\n    </ion-card>\n  </form>\n</ion-content>");

/***/ }),

/***/ 9958:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/set-lenguage/set-lenguage.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Selecciona tu idioma</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)=\"ChangeLang()\" [(ngModel)]=\"lang\" value=\"{{lang}}\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/es.png\">\n        </ion-avatar>\n\n        <ion-label>\n          Español\n        </ion-label>\n        \n        <ion-radio slot=\"end\"  value=\"es\"></ion-radio>\n      </ion-item>\n\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/en.png\">\n        </ion-avatar>\n\n        <ion-label>\n          Ingles\n        </ion-label>\n        \n        <ion-radio slot=\"end\" value=\"en\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-button expand=\"full\" (click)=\"saveLang()\">Guardar Cambios</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ 5943:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/endsignup/endsignup.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Termina tu registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map