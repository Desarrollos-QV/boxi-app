(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_chkphone_chkphone_module_ts"],{

/***/ 6864:
/*!*****************************************************!*\
  !*** ./src/app/chkphone/chkphone-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChkphonePageRoutingModule": () => (/* binding */ ChkphonePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _chkphone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chkphone.page */ 1503);




const routes = [
    {
        path: '',
        component: _chkphone_page__WEBPACK_IMPORTED_MODULE_0__.ChkphonePage
    }
];
let ChkphonePageRoutingModule = class ChkphonePageRoutingModule {
};
ChkphonePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChkphonePageRoutingModule);



/***/ }),

/***/ 9243:
/*!*********************************************!*\
  !*** ./src/app/chkphone/chkphone.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChkphonePageModule": () => (/* binding */ ChkphonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _chkphone_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chkphone-routing.module */ 6864);
/* harmony import */ var _chkphone_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chkphone.page */ 1503);








let ChkphonePageModule = class ChkphonePageModule {
};
ChkphonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _chkphone_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChkphonePageRoutingModule
        ],
        declarations: [_chkphone_page__WEBPACK_IMPORTED_MODULE_1__.ChkphonePage]
    })
], ChkphonePageModule);



/***/ }),

/***/ 1503:
/*!*******************************************!*\
  !*** ./src/app/chkphone/chkphone.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChkphonePage": () => (/* binding */ ChkphonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_chkphone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chkphone.page.html */ 267);
/* harmony import */ var _chkphone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chkphone.page.scss */ 9544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ 569);








let ChkphonePage = class ChkphonePage {
    constructor(server, toastController, nav, loadingController, events, platform, menu, firebaseAuthentication) {
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.platform = platform;
        this.menu = menu;
        this.firebaseAuthentication = firebaseAuthentication;
        this.user_id = 'null';
    }
    ngOnInit() {
        // this.windowsRef = this.server.windowRef;
        this.phone_view = localStorage.getItem('phone');
        this.confirmationResult = localStorage.getItem('confirmationResult');
    }
    ionViewWillEnter() {
        this.menu.enable(false);
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        else {
            this.server.SetLenguage();
        }
        if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != null) {
            this.user_id = localStorage.getItem('user_id');
        }
    }
    valid() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Validando...',
            });
            yield loading.present();
            if (this.Code && this.Code.toString().length >= 4 && this.Code.toString().length <= 8) {
                let verificationCode = this.Code.toString();
                this.firebaseAuthentication.signInWithVerificationId(this.confirmationResult, verificationCode).then((data) => {
                    var allData = {
                        user_id: this.user_id,
                        phone: localStorage.getItem('phone')
                    };
                    this.server.chkUser(allData).subscribe((res) => {
                        loading.dismiss();
                        if (res.msg == 'phone_exist') {
                            this.presentToast("El número telefonico que intentas registrar ya se encuentra en uso, por favor intenta con otro.", "danger");
                        }
                        else if (res.msg == "not_exist") {
                            this.presentToast("Termina tu registro ingresando tus datos de contacto. ", "warning");
                            this.nav.navigateRoot('/signup');
                        }
                        else {
                            this.presentToast('Bienvenido(a) de nuevo...', 'success');
                            localStorage.setItem('user_id', res.user_id);
                            this.events.publish('user_login', res.user_id);
                            this.server.SignPhone({ phone: localStorage.getItem('phone'), user_id: res.user_id }).subscribe((req) => {
                                if (req.msg == 'done') {
                                    let navigationExtras = {
                                        queryParams: {
                                            redirect: 'home'
                                        }
                                    };
                                    this.nav.navigateForward(['/waitpage'], navigationExtras);
                                }
                                else {
                                    this.presentToast(req.msg, 'danger');
                                }
                            });
                        }
                    });
                }).catch(fail => {
                    console.log(fail);
                    // Fail
                    loading.dismiss();
                    this.presentToast('Algo ha ocurrido.' + fail, 'danger');
                });
            }
            else {
                loading.dismiss();
                this.presentToast('Porfavor Ingresa un Codigo valido!', 'danger');
            }
        });
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
ChkphonePage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_4__.FirebaseAuthentication }
];
ChkphonePage.propDecorators = {
    otp1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["otp1", { static: false },] }]
};
ChkphonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-chkphone',
        template: _raw_loader_chkphone_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chkphone_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChkphonePage);



/***/ }),

/***/ 9544:
/*!*********************************************!*\
  !*** ./src/app/chkphone/chkphone.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn_next {\n  position: absolute;\n  bottom: 50px;\n  right: 0;\n  background-color: #000000;\n  margin: 15px;\n  --border-radius:25px !important;\n  border-radius: 25px !important;\n}\n\n.welcome_text {\n  font-weight: 600;\n  font-style: normal;\n  letter-spacing: 0.8px;\n  z-index: 100;\n}\n\n.digit-group {\n  width: 90%;\n  margin: auto;\n}\n\n.digit-group ion-input {\n  display: inline-block;\n  width: 50px;\n  height: 25px;\n  margin: 3px;\n  text-align: center;\n  letter-spacing: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoa3Bob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlDO0VBQ08scUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRlIiLCJmaWxlIjoiY2hrcGhvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uYnRuX25leHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjI1cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi53ZWxjb21lX3RleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLmRpZ2l0LWdyb3VwIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG5cdGlvbi1pbnB1dHtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDo1MHB4O1xyXG4gICAgICAgIGhlaWdodDoyNXB4O1xyXG4gICAgICAgIG1hcmdpbjozcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 267:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chkphone/chkphone.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"ion-no-border\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Verify SMS OTP -->\n<div >\n  <ion-card-header>\n    <ion-row>\n        <ion-col>\n        <h1 class=\"welcome_text\">\n            {{'sms_verify' | translate}}\n        </h1>\n        </ion-col>\n    </ion-row>\n    <p style=\"color: rgb(85, 85, 85);font-weight: 500;font-style: normal;font-size: 14px;\">\n        {{'verify_code1' | translate}} &nbsp;{{phone_view}}&nbsp; {{'verify_code2' | translate}}\n    </p>\n  </ion-card-header>\n\n\n  <ion-item class=\"digit-group\" lines=\"none\">\n    <ion-input type=\"tel\" #otp1 [(ngModel)]=\"Code\" maxLength=\"6\" required placeholder=\"ej.- 859754\"></ion-input>\n  </ion-item>\n  \n  <p align=\"center\" *ngIf=\"resend_stat\" style=\"font-weight: 500;font-style: normal\"> \n      {{'not_code' | translate}} <a  routerLink=\"/home\" routerDirection=\"root\">{{'resend' | translate}}</a>\n  </p>\n\n  <ion-button class=\"btn_next\" (click)=\"valid()\" color=\"dark\" shape=\"round\" style=\"--border-radius:25px;\">\n      {{'valid' | translate}}\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-button>\n</div>\n<!-- Verify SMS OTP -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chkphone_chkphone_module_ts.js.map