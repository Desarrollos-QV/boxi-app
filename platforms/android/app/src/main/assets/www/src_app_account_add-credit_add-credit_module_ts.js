(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_account_add-credit_add-credit_module_ts"],{

/***/ 1697:
/*!*****************************************************************!*\
  !*** ./src/app/account/add-credit/add-credit-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCreditPageRoutingModule": () => (/* binding */ AddCreditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_credit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-credit.page */ 5325);




const routes = [
    {
        path: '',
        component: _add_credit_page__WEBPACK_IMPORTED_MODULE_0__.AddCreditPage
    }
];
let AddCreditPageRoutingModule = class AddCreditPageRoutingModule {
};
AddCreditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddCreditPageRoutingModule);



/***/ }),

/***/ 5291:
/*!*********************************************************!*\
  !*** ./src/app/account/add-credit/add-credit.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCreditPageModule": () => (/* binding */ AddCreditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _add_credit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-credit-routing.module */ 1697);
/* harmony import */ var _add_credit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-credit.page */ 5325);








let AddCreditPageModule = class AddCreditPageModule {
};
AddCreditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_credit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddCreditPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_add_credit_page__WEBPACK_IMPORTED_MODULE_1__.AddCreditPage]
    })
], AddCreditPageModule);



/***/ }),

/***/ 5325:
/*!*******************************************************!*\
  !*** ./src/app/account/add-credit/add-credit.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCreditPage": () => (/* binding */ AddCreditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_credit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-credit.page.html */ 7182);
/* harmony import */ var _add_credit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-credit.page.scss */ 9800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _form_card_form_card_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../form-card/form-card.page */ 6379);








let AddCreditPage = class AddCreditPage {
    constructor(server, events, toastController, nav, loadingController, modalController) {
        this.server = server;
        this.events = events;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.history_bal = [];
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
        if (!localStorage.getItem('user_id') || localStorage.getItem('user_id') == 'null') {
            this.nav.navigateRoot('/login');
            this.presentToast("Please login for access your profile");
        }
        else {
            this.loadData();
        }
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
                this.data = response.data;
                this.history_bal = response.balance;
                this.history_bal.reverse();
                console.log(response);
                this.events.publish('user', response.data);
                loading.dismiss();
            });
        });
    }
    chkDate(fecha) {
        let date1 = fecha.substr(0, 10);
        let date2 = fecha.substr(11, 8);
        return date1 + ' - ' + date2;
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: 'dark'
            });
            toast.present();
        });
    }
    addSaldo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _form_card_form_card_page__WEBPACK_IMPORTED_MODULE_4__.FormCardPage,
                cssClass: "my-custom-endsign-class",
                backdropDismiss: true
            });
            modal.onDidDismiss().then(data => {
                this.loadData();
            });
            return yield modal.present();
        });
    }
    back() {
        this.nav.back();
    }
};
AddCreditPage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
AddCreditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-add-credit',
        template: _raw_loader_add_credit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_credit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddCreditPage);



/***/ }),

/***/ 9800:
/*!*********************************************************!*\
  !*** ./src/app/account/add-credit/add-credit.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0 auto;\n  border-bottom-left-radius: 35px;\n  border-bottom-right-radius: 35px;\n  z-index: 1000;\n}\n.header_cards div {\n  width: 100%;\n  padding: 5px 12px;\n}\n.header_cards div ion-buttons {\n  width: 30%;\n}\n.header_cards div ion-buttons ion-icon {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\n.header_cards div ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n}\n.header_cards div .address_pin ion-label {\n  position: relative;\n}\n.header_cards div .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0px auto 60px auto;\n  z-index: 800;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n.first_cards ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards ion-list ion-item {\n  margin: 0 10px;\n}\n.first_cards ion-list ion-item ion-icon {\n  font-size: 22px;\n}\n.cart_btn {\n  position: fixed;\n  bottom: 5px;\n  left: 0px;\n  right: 0;\n  margin: auto;\n  height: 55px;\n  width: 92%;\n  --border-radius:8px;\n  text-align: center;\n  z-index: 1000;\n}\n.cart_btn ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jcmVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRVE7RUFDSSxVQUFBO0FBQVo7QUFFWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFHQSxpREFBQTtBQUFoQjtBQUlRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsaURBQUE7QUFIaEI7QUFRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFOWjtBQVFnQjtFQUNJLGtCQUFBO0FBTnBCO0FBUW9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTnhCO0FBY0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFYSjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhaO0FBaUJRO0VBQ0ksY0FBQTtBQWZaO0FBaUJZO0VBQ0ksZUFBQTtBQWZoQjtBQXFCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUFTLFFBQUE7RUFDVCxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWpCSjtBQW1CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBakJSIiwiZmlsZSI6ImFkZC1jcmVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOjVweCAxMnB4O1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAvLyNmNGY1Zjg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I2YwZjBmMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCA3cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hZGRyZXNzX3BpbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAgICAgY29sdW1uczogYXV0bztcclxuICAgICAgICAgICAgY29sdW1uLXdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXJzdF9jYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW46MHB4IGF1dG8gNjBweCBhdXRvO1xyXG4gICAgei1pbmRleDogODAwO1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJ0X2J0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIGxlZnQ6MHB4O3JpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OjU1cHg7XHJcbiAgICB3aWR0aDogOTIlO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgXHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDojMmYxYjRlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gIH0iXX0= */");

/***/ }),

/***/ 7182:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/add-credit/add-credit.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"data\" fullscreen>\n\n<ion-card class=\"header_cards\" color=\"success\">\n  <!-- Header -->\n  <div>\n    <ion-buttons slot=\"start\">\n      <ion-icon name=\"chevron-back-outline\" (click)=\"back()\"></ion-icon>\n    </ion-buttons>\n  </div>\n\n  <div>\n    <div class=\"address_pin\">\n      <ion-label id=\"label_head_move\" *ngIf=\"!data\">\n        <ion-skeleton-text animated style=\"width: 40%;height:25px;\"></ion-skeleton-text><br />\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </ion-label>\n      <ion-label id=\"label_head_move\">\n        <h2>{{ data.saldo | currency }}</h2>\n        <span>{{ 'your_total_balance' | translate}}<br /><b>{{ data.name }}</b></span>\n      </ion-label>\n    </div>\n  </div>\n  <!-- Header -->\n  \n</ion-card>\n\n<ion-card mode=\"ios\" class=\"first_cards\">\n\n  <ion-card-header>\n    <ion-card-title>\n      {{ 'transactions' | translate }}\n    </ion-card-title>\n  </ion-card-header>\n\n  <ion-list lines=\"none\">\n      <ion-item *ngFor=\"let bal of history_bal\">\n        <ion-icon slot=\"start\" color=\"success\" *ngIf=\"bal.status == 1\" name=\"checkmark-circle-sharp\"></ion-icon>\n        <ion-icon slot=\"start\" color=\"meduim\" *ngIf=\"bal.status == 2\" name=\"close-circle-sharp\"></ion-icon>\n        <ion-label>\n          <span>{{'amount_text' | translate}}: <b>{{bal.amount | currency}}</b></span>\n          <h3>{{'date_Text' | translate}}: {{ chkDate(bal.created_at) }}</h3>\n        </ion-label>\n      </ion-item>\n  </ion-list>\n\n</ion-card>\n\n\n<!-- Add credit -->\n<ion-button mode=\"ios\" class=\"cart_btn animate__animated animate__bounceInUp\" (click)=\"addSaldo()\">\n  {{'add_credit' | translate }}\n</ion-button>\n<!-- Add credit -->\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_account_add-credit_add-credit_module_ts.js.map