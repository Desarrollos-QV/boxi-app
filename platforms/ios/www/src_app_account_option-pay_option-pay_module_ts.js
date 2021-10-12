(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_account_option-pay_option-pay_module_ts"],{

/***/ 9776:
/*!*****************************************************************!*\
  !*** ./src/app/account/option-pay/option-pay-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPayPageRoutingModule": () => (/* binding */ OptionPayPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _option_pay_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-pay.page */ 89);




const routes = [
    {
        path: '',
        component: _option_pay_page__WEBPACK_IMPORTED_MODULE_0__.OptionPayPage
    }
];
let OptionPayPageRoutingModule = class OptionPayPageRoutingModule {
};
OptionPayPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OptionPayPageRoutingModule);



/***/ }),

/***/ 2005:
/*!*********************************************************!*\
  !*** ./src/app/account/option-pay/option-pay.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPayPageModule": () => (/* binding */ OptionPayPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _option_pay_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option-pay-routing.module */ 9776);
/* harmony import */ var _option_pay_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-pay.page */ 89);








let OptionPayPageModule = class OptionPayPageModule {
};
OptionPayPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _option_pay_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionPayPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_option_pay_page__WEBPACK_IMPORTED_MODULE_1__.OptionPayPage]
    })
], OptionPayPageModule);



/***/ }),

/***/ 89:
/*!*******************************************************!*\
  !*** ./src/app/account/option-pay/option-pay.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionPayPage": () => (/* binding */ OptionPayPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_option_pay_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./option-pay.page.html */ 208);
/* harmony import */ var _option_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option-pay.page.scss */ 9050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);







let OptionPayPage = class OptionPayPage {
    constructor(server, modalController, loadingController, toastController, alertController, nav, events) {
        this.server = server;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.nav = nav;
        this.events = events;
        this.otype = (localStorage.getItem('otype_user')) ? JSON.parse(localStorage.getItem('otype_user')) : 1;
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        else {
            this.server.SetLenguage();
        }
        if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
            localStorage.setItem('otype_user', "1");
            this.otype = 1;
        }
        else {
            this.otype = Number(localStorage.getItem('otype_user'));
        }
        this.admin = JSON.parse(localStorage.getItem('admin'));
        // Verificamos si tiene la opcion de Paypal
        if (this.admin.paypal_client_id) {
            this.paypal_id = this.admin.paypal_client_id;
        }
        // Verificamos si tiene la opcion de Stripe
        if (this.admin.stripe_client_id) {
            this.stripe_id = this.admin.stripe_client_id;
        }
        // Obtenemos la info del usuario
        this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
            this.user = response.data;
            if (response.data) {
                // Verificamos si el telefono es null
                if (response.data.phone == 'null') {
                    this.presentToast("Valida tu número Telefonico", "warning");
                    this.nav.navigateBack('/login');
                    // Verificamos si esta bloqueado
                }
                else if (response.data.status == 1) {
                    this.presentToast("Tu cuenta ha sido bloqueada", 'danger');
                    this.nav.navigateBack('/locked');
                }
                // Verificamos si ya tiene una direccion de entrega
                if (!localStorage.getItem("address") || localStorage.getItem("address") == 'null') {
                    this.nav.navigateForward('setaddress');
                }
            }
            else {
                localStorage.removeItem('user_id');
                this.nav.navigateBack('/welcome');
            }
            this.events.publish('user', response.data);
        });
    }
    setType(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.otype = id.detail.value;
            localStorage.setItem('otype_user', id.detail.value);
            loading.dismiss();
        });
    }
    back() {
        this.nav.back();
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
};
OptionPayPage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
OptionPayPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-option-pay',
        template: _raw_loader_option_pay_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_option_pay_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OptionPayPage);



/***/ }),

/***/ 9050:
/*!*********************************************************!*\
  !*** ./src/app/account/option-pay/option-pay.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  width: 100%;\n  padding: 5px 12px;\n}\nion-toolbar ion-buttons {\n  width: 30%;\n}\nion-toolbar ion-buttons ion-icon {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\nion-toolbar ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\nion-toolbar .address_pin ion-label {\n  position: relative;\n}\nion-toolbar .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: -40px auto 0 auto;\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  z-index: 1000;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n.first_cards ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 32px;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbi1wYXkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FBQVo7QUFJSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUlBLGlEQUFBO0FBSFo7QUFRSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVk7RUFDSSxrQkFBQTtBQU5oQjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU5wQjtBQWFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVZKO0FBWUk7RUFDSSxnQkFBQTtBQVZSO0FBWVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVloiLCJmaWxlIjoib3B0aW9uLXBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLXRvb2xiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjVweCAxMnB4O1xyXG5cclxuICAgIGlvbi1idXR0b25zIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IC8vI2Y0ZjVmODtcclxuICAgICAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZjBmMGYwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MCA3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hZGRyZXNzX3BpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIGNvbHVtbi13aWR0aDogNTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXJzdF9jYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46LTQwcHggYXV0byAwIGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ 208:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/option-pay/option-pay.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen>\n\n  <!-- Header -->\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" (click)=\"back()\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"primary\">\n      <div class=\"address_pin\">\n        <ion-label id=\"label_head_move\" *ngIf=\"!user\">\n          <ion-skeleton-text animated style=\"width: 40%;height:25px;\"></ion-skeleton-text><br />\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label id=\"label_head_move\" *ngIf=\"user\">\n          <h2>{{user.saldo | currency}}</h2>\n          <span>{{'your_balance' | translate}}</span>\n        </ion-label>\n      </div>\n    </ion-toolbar>\n  <!-- Header -->\n\n  <!-- Content -->\n  <ion-card class=\"first_cards\">\n    <ion-card-header>\n      <ion-card-title>\n        {{'payment_methods' | translate}}\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <!-- Content -->\n\n   <!-- Por Defecto -->\n   <ion-list class=\"defaults_items\">\n    <ion-radio-group value=\"{{otype}}\" (ionChange)=\"setType($event)\">\n      <ion-list-header>\n        <span>{{'default_method' | translate}}</span>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img src=\"assets/cash_icon.png\" alt=\"Cash\">\n        </ion-thumbnail>\n\n        <ion-label>\n          <h3>{{'cash_payment' | translate}}</h3>\n        </ion-label>\n\n        <ion-radio slot=\"end\" value=\"1\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img src=\"assets/my_bal_icon.png\" alt=\"Cash\">\n        </ion-thumbnail>\n\n        <ion-label>\n          <h3>{{'balance_payment' | translate}}</h3>\n        </ion-label>\n\n        <ion-radio slot=\"end\" value=\"2\"></ion-radio>\n      </ion-item>\n      \n      <ion-item *ngIf=\"stripe_id\">\n        <ion-thumbnail slot=\"start\">\n          <img src=\"assets/card_icon.png\" alt=\"Stripe\">\n        </ion-thumbnail>\n\n        <ion-label>\n          <h3>{{'card_payment' | translate}}</h3>\n        </ion-label>\n        <!-- (ionSelect)=\"setType(3)\" [checked]=\"otype == 3\" -->\n        <ion-radio slot=\"end\" value=\"3\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  <!-- Por Defecto -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_account_option-pay_option-pay_module_ts.js.map