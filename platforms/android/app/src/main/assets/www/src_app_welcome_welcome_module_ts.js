(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 752:
/*!***************************************************!*\
  !*** ./src/app/welcome/welcome-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageRoutingModule": () => (/* binding */ WelcomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    },
    {
        path: 'endsignup',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./endsignup/endsignup.module */ 7205)).then(m => m.EndsignupPageModule)
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ 2526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-routing.module */ 752);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page */ 3297);








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_0__.WelcomePageRoutingModule
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_1__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.page.html */ 2553);
/* harmony import */ var _welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss */ 2447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _endsignup_endsignup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./endsignup/endsignup.page */ 4783);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);








// Facebook

let WelcomePage = class WelcomePage {
    constructor(server, loadingController, events, toastController, nav, modalController, menu, platform, fb) {
        this.server = server;
        this.loadingController = loadingController;
        this.events = events;
        this.toastController = toastController;
        this.nav = nav;
        this.modalController = modalController;
        this.menu = menu;
        this.platform = platform;
        this.fb = fb;
        this.slideOptsTwo = {
            slidesPerView: 1,
            loop: true,
            autoplay: false,
            pagination: {
                el: '.swiper-pagination',
            }
        };
        this.menu.enable(false);
    }
    ngOnInit() {
        this.platform.ready().then(() => {
        });
    }
    ionViewWillEnter() {
        if (!localStorage.getItem('lenguage') || localStorage.getItem('lenguage') == 'null') {
            this.server.SetLenguage();
        }
        else {
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        if (localStorage.getItem('user_id') || localStorage.getItem('user_id') != null) {
            let navigationExtras = {
                queryParams: {
                    redirect: 'home'
                }
            };
            this.nav.navigateForward(['/waitpage'], navigationExtras);
        }
    }
    LoginSignup() {
        this.nav.navigateForward('/login');
    }
    Signup() {
        this.nav.navigateForward('/signup');
    }
    /**
     * Solicitamos la autorizacion en Facebook para obtener los datos
    */
    fbLogin() {
        console.log("iniciamos");
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,name,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.loginfb({
                        name: data['name'],
                        email: data['email'],
                        phone: 'null',
                        password: data['id'],
                        pswfb: data['id']
                    });
                });
            }
        }).catch(e => {
            this.presentToast("Ha ocurrido un problema. vuelva a intentar más tarde.", 'danger');
        });
    }
    /**
     * Login With Facebook
    */
    loginfb(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.loginfb(data).subscribe((response) => {
                if (response.msg != "done") {
                    /**
                     * Si no existe la cuenta se va a crear
                    */
                    this.signup(data);
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    let navigationExtras = {
                        queryParams: {
                            redirect: 'home'
                        }
                    };
                    this.nav.navigateForward(['/waitpage'], navigationExtras);
                }
                loading.dismiss();
            });
        });
    }
    /**
     * SignUp With Facebook
    */
    signup(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                cssClass: "my-custom-endsign-class",
                animated: true,
                swipeToClose: true,
                mode: 'ios',
                component: _endsignup_endsignup_page__WEBPACK_IMPORTED_MODULE_4__.EndsignupPage,
            });
            modal.onDidDismiss().then(data => {
            });
            return yield modal.present();
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
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
WelcomePage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__.Facebook }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomePage);



/***/ }),

/***/ 2447:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content.ion-padding {\n  --background: url('bg_wel.jpeg') 0 0/100% 100% no-repeat;\n}\n\n.banner {\n  position: absolute;\n  width: 50%;\n  bottom: 90px;\n  left: 15px;\n  margin: 15px auto;\n}\n\n.banner .logo {\n  display: block;\n  margin: 15px auto;\n}\n\n.banner .logo p {\n  width: 80%;\n  color: #fff;\n  font-size: 24px;\n}\n\n.social_btns {\n  position: absolute;\n  bottom: 25px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.social_btns ion-button {\n  width: 40%;\n  height: 45px;\n  margin: 15px 10px;\n  --border-radius: 25px;\n  display: inline-block;\n  text-transform: none;\n}\n\n.social_btns ion-button:first-child {\n  margin-left: 0 !important;\n}\n\n.social_btns ion-button.new {\n  --background:#ffffff;\n  color: #000;\n}\n\n.social_btns ion-button.phone {\n  border: 1px solid #ffff;\n  --background:transparent;\n  border-radius: 25px;\n  color: #fff;\n}\n\n@media screen and (max-width: 960px) {\n  .banner,\n.social_btns {\n    width: 75%;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .banner,\n.social_btns {\n    width: 100%;\n  }\n\n  .banner {\n    margin: 50% auto 0 auto;\n  }\n}\n\n.animate__animated.animate__fadeInUp {\n  --animate-duration: .2;\n}\n\n.animate__animated.animate__zoomInUp {\n  --animate-duration: 1s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFBYSxVQUFBO0VBQ2IsaUJBQUE7QUFFSjs7QUFBSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUVSOztBQUFRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRVo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQURSOztBQUdRO0VBQ0kseUJBQUE7QUFEWjs7QUFJUTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQUZaOztBQU1RO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpaOztBQVNBO0VBQ0k7O0lBRUksVUFBQTtFQU5OO0FBQ0Y7O0FBU0E7RUFDSTs7SUFFSSxXQUFBO0VBUE47O0VBVUU7SUFDSSx1QkFBQTtFQVBOO0FBQ0Y7O0FBVUE7RUFDQSxzQkFBQTtBQVJBOztBQVdBO0VBQ0Esc0JBQUE7QUFSQSIsImZpbGUiOiJ3ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50Lmlvbi1wYWRkaW5ne1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnX3dlbC5qcGVnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmJhbm5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgYm90dG9tOiA5MHB4O2xlZnQ6MTVweDtcclxuICAgIG1hcmdpbjoxNXB4IGF1dG87XHJcbiAgICBcclxuICAgIC5sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46MTVweCBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG59XHJcbiAgXHJcbi5zb2NpYWxfYnRucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWFyZ2luOjE1cHggMTBweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOm5vbmU7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5uZXcge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJi5waG9uZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCkgeyBcclxuICAgIC5iYW5uZXIsXHJcbiAgICAuc29jaWFsX2J0bnMge1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHsgXHJcbiAgICAuYmFubmVyLFxyXG4gICAgLnNvY2lhbF9idG5zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH0gICBcclxuXHJcbiAgICAuYmFubmVyIHtcclxuICAgICAgICBtYXJnaW46NTAlIGF1dG8gMCBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFkZUluVXAge1xyXG4tLWFuaW1hdGUtZHVyYXRpb246IC4yO1xyXG59XHJcblxyXG4uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fem9vbUluVXAge1xyXG4tLWFuaW1hdGUtZHVyYXRpb246IDFzO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 2553:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\" >\n  \n  <!-- \n  <div class=\"banner animate__animated animate__fadeInUp\">\n      <div class=\"logo\">\n        <p>Boxi App <br />\n            llevamos a los miembros de Boxi a los mejores productos, Inspiracion e historias del deporte.</p>\n      </div>\n  </div>\n  -->\n  \n  <div class=\"social_btns animate__animated animate__zoomInUp\">\n    <ion-button class=\"new\" (click)=\"Signup()\">\n        <span>{{'new_user' | translate}}</span>\n    </ion-button>\n\n    <ion-button class=\"phone\" (click)=\"LoginSignup()\">\n        <span>{{'login' | translate}}</span>\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map