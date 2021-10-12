(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_offers_offers_module_ts"],{

/***/ 6777:
/*!*************************************************!*\
  !*** ./src/app/offers/offers-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageRoutingModule": () => (/* binding */ OffersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.page */ 6168);




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_0__.OffersPage
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ 9780:
/*!*****************************************!*\
  !*** ./src/app/offers/offers.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPageModule": () => (/* binding */ OffersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-routing.module */ 6777);
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page */ 6168);








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_0__.OffersPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_1__.OffersPage]
    })
], OffersPageModule);



/***/ }),

/***/ 6168:
/*!***************************************!*\
  !*** ./src/app/offers/offers.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersPage": () => (/* binding */ OffersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./offers.page.html */ 2270);
/* harmony import */ var _offers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offers.page.scss */ 3749);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);






let OffersPage = class OffersPage {
    constructor(loadingController, nav, server, toastController, modalController) {
        this.loadingController = loadingController;
        this.nav = nav;
        this.server = server;
        this.toastController = toastController;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.loadData();
    }
    ionViewWillEnter() {
        if (localStorage.getItem('lenguage') && localStorage.getItem('lenguage') != null) {
            this.server.globalize(localStorage.getItem('lenguage'));
        }
        else {
            this.server.SetLenguage();
        }
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            let city_id = localStorage.getItem('city_id');
            var lid = localStorage.getItem('lid') ? localStorage.getItem('lid') : 0;
            this.server.homepage(city_id + "?lid=" + lid).subscribe((response) => {
                console.log(response);
                this.data = response.data.offers;
                console.log(this.data);
                loading.dismiss();
            });
        });
    }
    applyNow(cdata) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ id: cdata });
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss({ id: false });
        });
    }
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
OffersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-offers',
        template: _raw_loader_offers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_offers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OffersPage);



/***/ }),

/***/ 3749:
/*!*****************************************!*\
  !*** ./src/app/offers/offers.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2270:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offers/offers.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header no-border class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-back-button slot=\"start\" mode=\"ios\" text=\"\"></ion-back-button>\n    <ion-title>\n      {{'list_promotions' | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n  <ion-content *ngIf=\"data\">\n  \n  <ion-list *ngIf=\"data.length > 0\">\n  \n    <ion-card *ngFor=\"let offer of data\">\n      <img src=\"https://boxi.grupoorus.mx/upload/offers/{{offer.img}}\" />\n      \n      <ion-card-header>\n        <ion-card-title style=\"color:green;\">{{'code_offer' | translate}} {{offer.code}}</ion-card-title>\n        <ion-card-subtitle>{{offer.description}}</ion-card-subtitle>\n      </ion-card-header>\n      \n      <ion-card-content>\n        <span *ngIf=\"offer.min_cart_value > 0\">{{'offer_more_then' | translate}}{{offer.min_cart_value | currency}}</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n  \n  <p *ngIf=\"data.length == 0\" style=\"text-align: center;padding: 10px 10px;font-size: 11px;color:gray;line-height: 2\">\n    {{'not_cupons' | translate}}\n  </p>\n   \n  </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_offers_offers_module_ts.js.map