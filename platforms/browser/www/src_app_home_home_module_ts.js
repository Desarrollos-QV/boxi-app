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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  width: 100%;\n  padding: 25px 12px 5px 12px;\n}\nion-toolbar ion-buttons {\n  width: 30%;\n}\nion-toolbar ion-buttons ion-menu-button {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar ion-buttons ion-menu-button img {\n  width: 100%;\n}\nion-toolbar ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\nion-toolbar ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\nion-toolbar .address_pin ion-label {\n  position: relative;\n}\nion-toolbar .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  margin: -40px auto 0 auto;\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  z-index: 1000;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUVRO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FBQVI7QUFFUTtFQUNJLFdBQUE7QUFBWjtBQUtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSFI7QUFLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsaURBQUE7QUFKWjtBQVNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFTWTtFQUNJLGtCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUHBCO0FBY0E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVhKO0FBYUk7RUFDSSxnQkFBQTtBQVhSIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzoyNXB4IDEycHggNXB4IDEycHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcblxyXG4gICAgICAgIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgLy8jZjRmNWY4O1xyXG4gICAgICAgIGNvbG9yOiAjNGM0YzRjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2YwZjBmMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luOjAgN3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWRkcmVzc19waW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgY29sdW1uczogYXV0bztcclxuICAgICAgICBjb2x1bW4td2lkdGg6IDUwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4uZmlyc3RfY2FyZHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46LTQwcHggYXV0byAwIGF1dG87XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDM1cHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content style=\"padding-top:25px;\">\n\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button mode=\"ios\">\n        <img src=\"assets/menu.png\" alt=\"Menu\">\n      </ion-menu-button>\n    </ion-buttons>\n\n    <ion-text id=\"icon_head_move\" slot=\"end\"  #searchicon>\n      <img src=\"assets/outline_local_tracking.png\" alt=\"orderview\" *ngIf=\"serviceComm.length > 0\" routerLink=\"/done-comm\" routerDirection=\"forward\">\n      <img src=\"assets/history_icon.png\" alt=\"history\" *ngIf=\"serviceComm.length == 0\" routerLink=\"/history\" routerDirection=\"forward\">\n      <img src=\"assets/wallet_icon.png\" class=\"wallet_icon\" alt=\"wallet\" routerLink=\"/option-pay\" routerDirection=\"forward\">\n    </ion-text>\n  </ion-toolbar>\n  <ion-toolbar color=\"success\">\n    <div class=\"address_pin\">\n      <ion-label id=\"label_head_move\" *ngIf=\"!user\">\n        <ion-skeleton-text animated style=\"width: 40%;height:25px;\"></ion-skeleton-text><br />\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </ion-label>\n      <ion-label id=\"label_head_move\" *ngIf=\"user\" routerLink=\"/add-credit\" routerDirection=\"forward\">\n        <h2>{{user.saldo | currency}}</h2>\n        <span>{{user.name}}</span>\n      </ion-label>\n    </div>\n  </ion-toolbar>\n\n  <ion-card class=\"first_cards\">\n\n    <ion-card-header>\n      <h3>{{'elements_avail' | translate}} </h3>\n    </ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/commanded\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"assets/outline_local_tracking.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'make_shipment' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col> \n\n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/history\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"assets/history_icon.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'shipments' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/offers\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"assets/promotions_icon.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'promotions' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n        \n        <ion-col size-lg=\"4\" size-md=\"4\" size-sm=\"12\" size=\"12\" routerLink=\"/profile\" routerDirection=\"forward\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>\n                <img src=\"assets/account_icon.png\" style=\"width:75px;\" alt=\"\">\n              </ion-card-subtitle>\n              <ion-card-title>{{'profile' | translate}}</ion-card-title>\n            </ion-card-header>\n          </ion-card>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map