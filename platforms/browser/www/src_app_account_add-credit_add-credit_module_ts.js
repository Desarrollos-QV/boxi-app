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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0 auto;\n  border-bottom-left-radius: 35px;\n  border-bottom-right-radius: 35px;\n  z-index: 1000;\n}\n.header_cards div {\n  width: 100%;\n  padding: 25px 12px 5px 12px;\n}\n.header_cards div ion-buttons {\n  width: 30%;\n}\n.header_cards div ion-buttons ion-icon {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\n.header_cards div ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n}\n.header_cards div .address_pin ion-label {\n  position: relative;\n}\n.header_cards div .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0px auto 60px auto;\n  z-index: 800;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n.first_cards ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards ion-list ion-item {\n  margin: 0 10px;\n}\n.first_cards ion-list ion-item ion-icon {\n  font-size: 22px;\n}\n.cart_btn {\n  position: fixed;\n  bottom: 5px;\n  left: 0px;\n  right: 0;\n  margin: auto;\n  height: 55px;\n  width: 92%;\n  --border-radius:8px;\n  text-align: center;\n  z-index: 1000;\n}\n.cart_btn ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jcmVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUFSO0FBRVE7RUFDSSxVQUFBO0FBQVo7QUFFWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFHQSxpREFBQTtBQUFoQjtBQUlRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsaURBQUE7QUFIaEI7QUFRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFOWjtBQVFnQjtFQUNJLGtCQUFBO0FBTnBCO0FBUW9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTnhCO0FBY0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFYSjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhaO0FBaUJRO0VBQ0ksY0FBQTtBQWZaO0FBaUJZO0VBQ0ksZUFBQTtBQWZoQjtBQXFCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUFTLFFBQUE7RUFDVCxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWpCSjtBQW1CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBakJSIiwiZmlsZSI6ImFkZC1jcmVkaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOjI1cHggMTJweCA1cHggMTJweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgLy8jZjRmNWY4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgN3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYWRkcmVzc19waW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbHVtbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmlyc3RfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOjBweCBhdXRvIDYwcHggYXV0bztcclxuICAgIHotaW5kZXg6IDgwMDtcclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FydF9idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OjBweDtyaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDo1NXB4O1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIFxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzJmMWI0ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICB9Il19 */");

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