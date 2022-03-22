(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_account_history_history_module_ts"],{

/***/ 4618:
/*!***********************************************************!*\
  !*** ./src/app/account/history/history-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 9581);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 8214:
/*!***************************************************!*\
  !*** ./src/app/account/history/history.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 4618);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 9581);








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 9581:
/*!*************************************************!*\
  !*** ./src/app/account/history/history.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./history.page.html */ 1495);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 4321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ 6794);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _done_comm_rate_trip_rate_trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../done-comm/rate-trip/rate-trip.page */ 9520);







let HistoryPage = class HistoryPage {
    constructor(server, toastController, nav, loadingController, alertController, modalController) {
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
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
            this.presentToast("Inicia sesión para acceder a tu perfil");
        }
        else {
            this.loadData();
        }
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.myOrder(localStorage.getItem('user_id') + "?lid=" + lid).subscribe((response) => {
                console.log(response);
                this.data = response.data;
                this.event = response.events;
                loading.dismiss();
            });
        });
    }
    viewRateTrip(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _done_comm_rate_trip_rate_trip_page__WEBPACK_IMPORTED_MODULE_3__.RateTripPage,
                animated: true,
                mode: 'ios',
                cssClass: 'my-custom-commanded-modal-css',
                backdropDismiss: true,
                swipeToClose: true,
                showBackdrop: true,
                componentProps: {
                    'data_post': JSON.stringify(data)
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                this.loadData();
            });
            return yield modal.present();
        });
    }
    back() {
        this.nav.back();
    }
    presentToast(txt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
};
HistoryPage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HistoryPage);



/***/ }),

/***/ 4321:
/*!***************************************************!*\
  !*** ./src/app/account/history/history.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0 auto;\n  border-bottom-left-radius: 35px;\n  border-bottom-right-radius: 35px;\n  z-index: 1000;\n}\n.header_cards div {\n  width: 100%;\n  padding: 25px 12px 5px 12px;\n}\n.header_cards div ion-buttons {\n  width: 30%;\n}\n.header_cards div ion-buttons ion-icon {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\n.header_cards div ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\n.header_cards div .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n}\n.header_cards div .address_pin ion-label {\n  position: relative;\n}\n.header_cards div .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: 0px auto 60px auto;\n  z-index: 800;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n.first_cards ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards ion-list ion-item {\n  margin: 0 10px;\n}\n.first_cards ion-list ion-item ion-icon {\n  font-size: 22px;\n}\n.cart_btn {\n  position: fixed;\n  bottom: 5px;\n  left: 0px;\n  right: 0;\n  margin: auto;\n  height: 55px;\n  width: 92%;\n  --border-radius:8px;\n  text-align: center;\n  z-index: 1000;\n}\n.cart_btn ion-text {\n  position: absolute;\n  left: 10px;\n  background: #2f1b4e;\n  color: #fff;\n  font-size: 14px;\n  padding: 6px 8px;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSwyQkFBQTtBQUFSO0FBRVE7RUFDSSxVQUFBO0FBQVo7QUFFWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFHQSxpREFBQTtBQUFoQjtBQUlRO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRlo7QUFJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsaURBQUE7QUFIaEI7QUFRUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFOWjtBQVFnQjtFQUNJLGtCQUFBO0FBTnBCO0FBUW9CO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBTnhCO0FBY0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFYSjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWFRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVhaO0FBaUJRO0VBQ0ksY0FBQTtBQWZaO0FBaUJZO0VBQ0ksZUFBQTtBQWZoQjtBQXFCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUFTLFFBQUE7RUFDVCxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQWpCSjtBQW1CSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBakJSIiwiZmlsZSI6Imhpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5oZWFkZXJfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOjI1cHggMTJweCA1cHggMTJweDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgLy8jZjRmNWY4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLXRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgN3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYWRkcmVzc19waW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgICAgIGNvbHVtbi13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmlyc3RfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luOjBweCBhdXRvIDYwcHggYXV0bztcclxuICAgIHotaW5kZXg6IDgwMDtcclxuXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG5cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2FydF9idG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OjBweDtyaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDo1NXB4O1xyXG4gICAgd2lkdGg6IDkyJTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czo4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gIFxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IzJmMWI0ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICB9Il19 */");

/***/ }),

/***/ 1495:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/history/history.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen>\n\n  <ion-card class=\"header_cards\" color=\"primary\">\n    <!-- Header -->\n    <div>\n      <ion-buttons slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" (click)=\"back()\"></ion-icon>\n      </ion-buttons>\n    </div>\n  \n    <div>\n      <div class=\"address_pin\">\n        <ion-label id=\"label_head_move\">\n          <h2>{{'history_text' | translate}}</h2>\n        <span>{{'check_your_history' | translate}}.</span>\n        </ion-label>\n      </div>\n    </div>\n    <!-- Header -->\n    \n  </ion-card>\n  \n  <ion-card mode=\"ios\" class=\"first_cards\">\n  \n    <ion-list lines=\"none\">\n      <ion-card class=\"welcome-card\" *ngFor=\"let order of event\" mode=\"ios\">\n        <ion-card-header>\n\n          <ion-card-subtitle>\n            (#{{order.id }}) <ion-badge color=\"primary\" style=\"float:right\">{{ order.total | currency}}</ion-badge>\n          </ion-card-subtitle>\n          <br>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ 'date_Text' | translate}}</b></ion-col>\n            <ion-col size=\"7\">{{ order.date }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"5\"><b> {{ 'history_status' | translate }}</b></ion-col>\n            <ion-col size=\"7\">{{ order.status }}</ion-col>\n          </ion-row>\n\n          <ion-row>\n            <div class=\"container\">\n                <div class=\"timeline-block timeline-block-right\">\n                  <div class=\"marker\"></div>\n                  <div class=\"timeline-content\">\n                    <h6>{{'point_origin' | translate}}</h6>\n                    <p>{{order.event.address_origin | slice:0:50}}...</p>\n                  </div>\n                </div>\n        \n                <div class=\"timeline-block timeline-block-right\">\n                  <div class=\"marker\"></div>\n                  <div class=\"timeline-content\">\n                    <h6>{{'point_destin' | translate}}</h6>\n                    <p>{{order.event.address_destin | slice:0:50}}...</p>\n                  </div>\n                </div>\n            </div>\n          </ion-row>\n          <br>\n          <ion-button *ngIf=\"order.hasRating == 0\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"viewRateTrip(order)\">{{'qualify' | translate}}</ion-button>\n          <ion-button *ngIf=\"order.st == 0\" fill=\"outline\" size=\"small\" style=\"float: right\">{{'cancel_order' | translate}}</ion-button>\n        </ion-card-header>\n      </ion-card>\n    </ion-list>\n  \n  </ion-card>\n  \n  </ion-content>\n  ");

/***/ })

}]);
//# sourceMappingURL=src_app_account_history_history_module_ts.js.map