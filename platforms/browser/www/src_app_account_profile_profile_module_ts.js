(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_account_profile_profile_module_ts"],{

/***/ 7095:
/*!***********************************************************!*\
  !*** ./src/app/account/profile/profile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 6489);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 1295:
/*!***************************************************!*\
  !*** ./src/app/account/profile/profile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 7095);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 6489);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 6489:
/*!*************************************************!*\
  !*** ./src/app/account/profile/profile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 9886);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 1206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/events.service */ 4665);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let ProfilePage = class ProfilePage {
    constructor(server, events, toastController, nav, loadingController) {
        this.server = server;
        this.events = events;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
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
    takeAction(type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.action = type;
        });
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.userInfo(localStorage.getItem('user_id')).subscribe((response) => {
                this.data = response.data;
                loading.dismiss();
            });
        });
    }
    update(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.updateInfo(data, localStorage.getItem('user_id')).subscribe((response) => {
                if (response.msg == "done") {
                    this.action = 0;
                    this.data = response.data;
                    this.presentToast("Updated Successfully");
                }
                else {
                    this.presentToast(response.error);
                }
                loading.dismiss();
            });
        });
    }
    changeLang() {
        this.server.SetLenguage();
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
    back() {
        this.nav.back();
    }
    logout() {
        localStorage.setItem('user_id', null);
        localStorage.removeItem('user_id');
        this.nav.navigateRoot('/welcome');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 1206:
/*!***************************************************!*\
  !*** ./src/app/account/profile/profile.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  width: 100%;\n  padding: 25px 12px 5px 12px;\n}\nion-toolbar ion-buttons {\n  width: 30%;\n}\nion-toolbar ion-buttons ion-icon {\n  background: #fff;\n  color: #4c4c4c;\n  border-radius: 12px;\n  font-size: 16px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar ion-text {\n  width: 70%;\n  position: relative;\n  float: right;\n  margin-right: 0px;\n}\nion-toolbar ion-text img {\n  width: 40px;\n  height: 40px;\n  background: #f0f0f0;\n  border-radius: 15px;\n  margin: 0 7px;\n  padding: 7px;\n  box-shadow: 0px 4px 14px -9px rgba(0, 0, 0, 0.75);\n}\nion-toolbar .address_pin {\n  width: 100%;\n  position: relative;\n  padding: 10px 15px;\n  columns: auto;\n  column-width: 50%;\n  justify-content: center;\n  margin-bottom: 50px;\n}\nion-toolbar .address_pin ion-label {\n  position: relative;\n}\nion-toolbar .address_pin ion-label h2 {\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards {\n  width: 100%;\n  box-shadow: none;\n  margin: -40px auto 0 auto;\n  border-top-left-radius: 35px;\n  border-top-right-radius: 35px;\n  z-index: 1000;\n}\n.first_cards ion-card-header {\n  margin-top: 10px;\n}\n.first_cards ion-card-header ion-card-title {\n  max-width: 80%;\n  font-size: 28px;\n  font-weight: 700;\n}\n.first_cards ion-list ion-item {\n  margin: 0 10px;\n}\n.first_cards ion-list ion-item ion-icon {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUdBLGlEQUFBO0FBQVo7QUFJSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUlBLGlEQUFBO0FBSFo7QUFRSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVk7RUFDSSxrQkFBQTtBQU5oQjtBQVFnQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU5wQjtBQWFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQVZKO0FBWUk7RUFDSSxnQkFBQTtBQVZSO0FBWVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVlo7QUFnQlE7RUFDSSxjQUFBO0FBZFo7QUFnQlk7RUFDSSxlQUFBO0FBZGhCIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi10b29sYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzoyNXB4IDEycHggNXB4IDEycHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjsgLy8jZjRmNWY4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxNHB4IC05cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDdweDtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggNHB4IDE0cHggLTlweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTRweCAtOXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmFkZHJlc3NfcGluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgY29sdW1uLXdpZHRoOiA1MCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIFxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLmZpcnN0X2NhcmRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1hcmdpbjotNDBweCBhdXRvIDAgYXV0bztcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1saXN0IHtcclxuXHJcbiAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 9886:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/profile/profile.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content *ngIf=\"data\" fullscreen>\n\n    <!-- Header -->\n    <ion-toolbar color=\"secondary\">\n      <ion-buttons slot=\"start\">\n        <ion-icon name=\"chevron-back-outline\" (click)=\"back()\"></ion-icon>\n      </ion-buttons>\n\n      <ion-text id=\"icon_head_move\" slot=\"end\"  #searchicon>\n        <h2>{{ data.saldo | currency }}</h2>\n      </ion-text>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"secondary\">\n      <div class=\"address_pin\">\n        <ion-label id=\"label_head_move\" *ngIf=\"!data\">\n          <ion-skeleton-text animated style=\"width: 40%;height:25px;\"></ion-skeleton-text><br />\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </ion-label>\n        <ion-label id=\"label_head_move\">\n          <h2>{{ text.profile_heading }}</h2>\n          <span>{{'welcome_prof' | translate}} <br /><b>{{ data.name }}</b></span>\n        </ion-label>\n      </div>\n    </ion-toolbar>\n    <!-- Header -->\n\n  <ion-card mode=\"ios\" class=\"first_cards\">\n\n    <ion-card-header>\n      <ion-card-title>\n        {{'config_text' | translate}}\n      </ion-card-title>\n    </ion-card-header>\n\n    <ion-list lines=\"none\">\n        <ion-item routerLink=\"/history\" routerDirection=\"forward\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"cart\"></ion-icon>\n          <ion-label>{{'order_history_text' | translate}}</ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"/option-pay\" routerDirection=\"forward\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"wallet\"></ion-icon>\n          <ion-label>{{'payment_methods' | translate}}</ion-label>\n        </ion-item>\n\n        <ion-item routerLink=\"/add-credit\" routerDirection=\"forward\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"cash-sharp\"></ion-icon>\n          <ion-label>{{'add_credit' | translate}}</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"changeLang()\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"globe-sharp\"></ion-icon>\n          <ion-label>{{'change_language' | translate}}</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"takeAction(1)\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n          <ion-label>{{'config_text' | translate}}</ion-label>\n        </ion-item>\n\n        <ion-item (click)=\"logout()\">\n          <ion-icon slot=\"start\" color=\"medium\" name=\"log-out\"></ion-icon>\n          <ion-label>{{ 'logout' | translate}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n  </ion-card>\n\n  <!-- Personal Information -->\n  <ion-card mode=\"ios\" *ngIf=\"action == 1\">\n    <form #form=\"ngForm\" (ngSubmit)=\"update(form.value)\">\n\n      <ion-card-header>\n        <ion-card-subtitle>{{ 'update_account' | translate }}</ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'name' | translate }}</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"data.name\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'email_address' | translate }}</ion-label>\n        <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"data.email\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'Phone' | translate }}</ion-label>\n        <ion-input type=\"tel\" name=\"phone\" [(ngModel)]=\"data.phone\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">{{ 'create_password' | translate }}</ion-label>\n        <ion-input type=\"password\" name=\"password\" ngModel></ion-input>\n      </ion-item>\n      <br>\n\n      <ion-button expand=\"block\" mode=\"ios\" type=\"submit\" [disabled]=\"!form\" style=\"width: 90%;margin-left: 5%\">{{ 'update_text' | translate }}</ion-button>\n    </form>\n  </ion-card>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_account_profile_profile_module_ts.js.map