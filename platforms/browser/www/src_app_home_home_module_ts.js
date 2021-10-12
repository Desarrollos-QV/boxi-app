(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .././service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .././service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let HomePage = class HomePage {
    constructor(server, toastController, nav, loadingController, events, platform, menu) {
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.platform = platform;
        this.menu = menu;
        this.serviceComm = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menu.enable(true);
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        else {
            this.server.SetLenguage();
        }
        this.verifyUser();
        this.loadData();
        // Verificamos Servicios activos
        this.chkEvents_comm();
    }
    verifyUser() {
        if (localStorage.getItem('app_text'))
            this.text = JSON.parse(localStorage.getItem('app_text'));
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
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let city_id = localStorage.getItem('city_id');
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.homepage(city_id + "?lid=" + lid).subscribe((response) => {
                console.log(response);
                this.text = response.data.text;
                this.events.publish('text', this.text);
                this.events.publish('admin', response.data.admin);
                localStorage.setItem('app_text', JSON.stringify(response.data.text));
                localStorage.setItem('admin', JSON.stringify(response.data.admin));
                // Registramos en oneSignal
                // this.subPush();
            });
        });
    }
    chkEvents_comm() {
        this.server.chkEvents_comm(localStorage.getItem('user_id')).subscribe((data) => {
            this.serviceComm = data.data;
            console.log(this.serviceComm);
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
};
HomePage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  width: 100%;\n  padding: 5px 12px;\n}\nion-toolbar ion-buttons {\n  width: 30%;\n}\nion-toolbar ion-buttons ion-menu-button {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar ion-buttons ion-menu-button img {\n  width: 100%;\n}\nion-toolbar ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\nion-toolbar ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\nion-toolbar .address_pin ion-label {\n  position: relative;\n}\nion-toolbar .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  margin: -40px auto 0 auto;\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  z-index: 1000;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUVRO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7QUFBWjtBQUtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsaURBQUE7QUFKWjtBQVNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTWTtFQUNJLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUHBCO0FBY0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVhKO0FBYUk7RUFDSSxnQkFBQTtBQVhSIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzo1cHggMTJweDtcclxuXHJcbiAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuXHJcbiAgICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyAvLyNmNGY1Zjg7XHJcbiAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojZjBmMGYwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46MCA3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hZGRyZXNzX3BpbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIGNvbHVtbi13aWR0aDogNTAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXJzdF9jYXJkcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjotNDBweCBhdXRvIDAgYXV0bztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen>\n\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button mode=\"ios\">\n        <img src=\"https://image.flaticon.com/icons/png/512/584/584840.png\" alt=\"Menu\">\n      </ion-menu-button>\n    </ion-buttons>\n\n    <ion-text id=\"icon_head_move\" slot=\"end\"  #searchicon>\n      <img src=\"assets/outline_local_tracking.png\" alt=\"orderview\" *ngIf=\"serviceComm.length > 0\" routerLink=\"/done-comm\" routerDirection=\"forward\">\n      <img src=\"https://image.flaticon.com/icons/png/128/1198/1198479.png\" alt=\"history\" *ngIf=\"serviceComm.length == 0\" routerLink=\"/history\" routerDirection=\"forward\">\n      <img src=\"assets/wallet_icon.png\" class=\"wallet_icon\" alt=\"wallet\" routerLink=\"/option-pay\" routerDirection=\"forward\">\n    </ion-text>\n  </ion-toolbar>\n  <ion-toolbar color=\"success\">\n    <div class=\"address_pin\">\n      <ion-label id=\"label_head_move\" *ngIf=\"!user\">\n        <ion-skeleton-text animated style=\"width: 40%;height:25px;\"></ion-skeleton-text><br />\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </ion-label>\n      <ion-label id=\"label_head_move\" *ngIf=\"user\" routerLink=\"/add-credit\" routerDirection=\"forward\">\n        <h2>{{user.saldo | currency}}</h2>\n        <span>{{user.name}}</span>\n      </ion-label>\n    </div>\n  </ion-toolbar>\n\n  <ion-card class=\"first_cards\">\n\n    <ion-card-header>\n      <h3>{{'elements_avail' | translate}} </h3>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/commanded\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"https://image.flaticon.com/icons/png/512/1254/1254761.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'make_shipment' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n\n        <!--\n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"https://image.flaticon.com/icons/png/512/1255/1255248.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>Ingresar Código</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        -->\n\n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/history\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"https://image.flaticon.com/icons/png/128/1198/1198479.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'shipments' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/offers\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"https://image.flaticon.com/icons/png/128/1235/1235557.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'promotions' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"https://image.flaticon.com/icons/png/512/1246/1246483.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'profile' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map