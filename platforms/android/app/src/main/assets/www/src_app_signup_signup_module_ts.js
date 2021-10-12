(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 159:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 159);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 1355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);








let SignupPage = class SignupPage {
    constructor(route, server, toastController, nav, loadingController, events, platform) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.platform = platform;
        this.dating = [];
        this.login_view = false;
        this.isKeyboardHide = true;
    }
    ngOnInit() {
        this.platform.keyboardDidShow.subscribe(ev => {
            this.isKeyboardHide = false;
        });
        this.platform.keyboardDidHide.subscribe(() => {
            this.isKeyboardHide = true;
        });
    }
    ionViewWillEnter() {
        if (localStorage.getItem('phone') && localStorage.getItem('phone') != null) {
            this.login_view = true;
            this.phone = JSON.parse(localStorage.getItem('phone'));
        }
    }
    signup(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'md'
            });
            yield loading.present();
            this.server.signup(data).subscribe((response) => {
                console.log(response);
                if (response.msg != "done") {
                    this.presentToast(response.msg, 'danger');
                }
                else {
                    localStorage.removeItem('phone');
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
                    if (this.login_view == true) { // Viene ya de la verificacion telefonica
                        let navigationExtras = {
                            queryParams: {
                                redirect: 'home'
                            }
                        };
                        this.nav.navigateForward(['/waitpage'], navigationExtras);
                    }
                    else {
                        this.nav.navigateRoot('/login');
                    }
                }
                loading.dismiss();
            });
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 4194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".form {\n  border-top: 6px solid var(--bg-color);\n  padding: 0px;\n  margin: 0;\n}\n.form ion-list h1 {\n  margin-bottom: 35px;\n  margin-left: 15px;\n}\n.form ion-list ion-item:last-of-type {\n  margin-bottom: 15px !important;\n}\n.form p {\n  margin: 0;\n  color: var(--text-light);\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n  font-weight: 400;\n}\n.form p span {\n  width: calc(100% - 35px);\n}\n.animate__animated.animate__fadeInUp:nth-child(1) {\n  --animate-duration: .25s;\n}\n.animate__animated.animate__fadeInUp:nth-child(2) {\n  --animate-duration: .3s;\n}\n.animate__animated.animate__fadeInUp:nth-child(3) {\n  --animate-duration: .35s;\n}\n.animate__animated.animate__fadeInUp:nth-child(4) {\n  --animate-duration: .4s;\n}\n.animate__animated.animate__fadeInUp:nth-child(5) {\n  --animate-duration: .45s;\n}\n.animate__animated.animate__fadeInUp:nth-child(6) {\n  --animate-duration: .5s;\n}\n.animate__animated.animate__fadeInUp:nth-child(7) {\n  --animate-duration: .55s;\n}\n.animate__animated.animate__fadeInUp:nth-child(8) {\n  --animate-duration: .6s;\n}\n.sign_rs {\n  margin-top: 50px;\n  text-align: center;\n  position: relative;\n}\n.sign_rs span {\n  position: relative;\n  display: block;\n  width: 80%;\n  font-size: 14px;\n  color: #808080;\n  margin: 15px auto;\n  border-top: 1px solid #e1e1e1;\n  padding: 15px;\n}\n.sign_rs div {\n  margin-top: 10px;\n}\n.sign_rs div img {\n  position: relative;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n.sign_rs div p {\n  position: relative;\n  margin: 0 !important;\n  padding: 0 !important;\n  font-size: 14px;\n  color: #808080;\n}\n.btn_next {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #000000;\n  margin: 15px;\n  --border-radius:25px !important;\n  border-radius: 25px !important;\n}\n.code_ref {\n  position: relative;\n  margin: 25px 15px;\n  padding: 12px 10px;\n  border: 1px solid #e1e1e1;\n}\n.code_ref label {\n  position: absolute;\n  font-size: 14px;\n  left: 10px;\n  top: -15px;\n  background-color: #fff;\n  padding: 6px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0o7QUFHUTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUtZO0VBQ0ksOEJBQUE7QUFIaEI7QUFRSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQU5SO0FBUVE7RUFDSSx3QkFBQTtBQU5aO0FBWUk7RUFDSSx3QkFBQTtBQVRSO0FBWUk7RUFDSSx1QkFBQTtBQVZSO0FBYUk7RUFDSSx3QkFBQTtBQVhSO0FBY0k7RUFDSSx1QkFBQTtBQVpSO0FBZUk7RUFDSSx3QkFBQTtBQWJSO0FBZ0JJO0VBQ0ksdUJBQUE7QUFkUjtBQWlCSTtFQUNJLHdCQUFBO0FBZlI7QUFrQkk7RUFDSSx1QkFBQTtBQWhCUjtBQXFCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWxCSjtBQW9CSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBRUEsNkJBQUE7RUFDQSxhQUFBO0FBbkJSO0FBc0JJO0VBQ0ksZ0JBQUE7QUFwQlI7QUFzQlE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFyQlo7QUEyQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQXhCSjtBQTRCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBekJKO0FBMkJJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBekJSIiwiZmlsZSI6InNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgdmFyKC0tYmctY29sb3IpO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1cHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJblVwIHtcclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4yNXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjNzO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC4zNXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjRzO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC40NXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoNikge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjVzO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICAtLWFuaW1hdGUtZHVyYXRpb246IC41NXM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoOCkge1xyXG4gICAgICAgIC0tYW5pbWF0ZS1kdXJhdGlvbjogLjZzO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnNpZ25fcnMge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IGF1dG87XHJcblxyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiM4MDgwODA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5idG5fbmV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6MjVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNvZGVfcmVmIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjoyNXB4IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title *ngIf=\"text\">\n        {{text.signup_title}}\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\">\n    <ion-input type=\"hidden\" name=\"phone\" ngModel value=\"{{phone}}\"></ion-input>\n                \n    <div class=\"form\">\n      <ion-list lines=\"none\">\n          <h1>{{'join_app' | translate}} Boxi App</h1>\n         \n          <div class=\"code_ref animate__animated animate__fadeInUp\">\n            <label>{{'complete_name' | translate}}</label>\n            <ion-input mode=\"md\" type=\"text\" clearInput name=\"name\" ngModel placeholder=\"Sam Smith\" required></ion-input>\n          </div>\n          \n          <div class=\"code_ref animate__animated animate__fadeInUp\">\n            <label>{{'email_address' | translate}}</label>\n            <ion-input mode=\"md\" type=\"email\" clearInput name=\"email\" ngModel placeholder=\"SamSmith@mail.com\" required></ion-input>\n          </div>\n\n          <div class=\"code_ref animate__animated animate__fadeInUp\" *ngIf=\"phone\">\n            <label>{{'phone' | translate}}</label>\n            <ion-input mode=\"md\" type=\"tel\" clearInput name=\"phone\" [(ngModel)]=\"phone\" placeholder=\"656 123 9856\" required></ion-input>\n          </div>\n\n          <div class=\"code_ref animate__animated animate__fadeInUp\">\n            <label>{{'password' | translate}}</label>\n            <ion-input mode=\"md\" type=\"password\" clearInput name=\"password\" ngModel placeholder=\"**********\" required></ion-input>\n          </div>\n\n      </ion-list>\n    </div>\n    \n    <ion-button class=\"btn_next\" *ngIf=\"isKeyboardHide\" [disabled]=\"!form.valid\" type=\"submit\" color=\"dark\" shape=\"round\" style=\"--border-radius:25px;\">\n      {{'sign_in' | translate}}\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n    </ion-button>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map