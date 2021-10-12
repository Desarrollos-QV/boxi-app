(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_account_address_setaddress_setaddress_module_ts"],{

/***/ 2075:
/*!*************************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPageRoutingModule": () => (/* binding */ SetaddressPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _setaddress_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setaddress.page */ 3158);




const routes = [
    {
        path: '',
        component: _setaddress_page__WEBPACK_IMPORTED_MODULE_0__.SetaddressPage
    }
];
let SetaddressPageRoutingModule = class SetaddressPageRoutingModule {
};
SetaddressPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SetaddressPageRoutingModule);



/***/ }),

/***/ 6029:
/*!*****************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPageModule": () => (/* binding */ SetaddressPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _setaddress_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setaddress-routing.module */ 2075);
/* harmony import */ var _setaddress_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setaddress.page */ 3158);








let SetaddressPageModule = class SetaddressPageModule {
};
SetaddressPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _setaddress_routing_module__WEBPACK_IMPORTED_MODULE_0__.SetaddressPageRoutingModule
        ],
        declarations: [_setaddress_page__WEBPACK_IMPORTED_MODULE_1__.SetaddressPage]
    })
], SetaddressPageModule);



/***/ }),

/***/ 3158:
/*!***************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetaddressPage": () => (/* binding */ SetaddressPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_setaddress_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./setaddress.page.html */ 7419);
/* harmony import */ var _setaddress_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setaddress.page.scss */ 2582);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.././service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../.././service/events.service */ 4665);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);









let SetaddressPage = class SetaddressPage {
    constructor(server, toastController, geolocation, nativeGeocoder, zone, nav, loadingController, events) {
        this.server = server;
        this.toastController = toastController;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.zone = zone;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.MyLocation = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.admin = JSON.parse(localStorage.getItem('admin'));
        this.autocomplete = { input: '' };
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
        this.loadData();
    }
    loadData() {
        this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response) => {
            this.address = response.data;
        });
        // Obtenemos la ubicación actual
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
            console.log('Error al obtener la ubicación', error);
        });
    }
    getAddressFromCoords(lattitude, longitude) {
        this.server.GeocodeFromCoords(lattitude, longitude, this.admin.ApiKey_google).subscribe((data) => {
            let formatted_address = data.results[0].formatted_address;
            this.LocationNow = formatted_address;
            this.MyLocation.push({
                "lat": data.results[0].geometry.location.lat,
                "lng": data.results[0].geometry.location.lng,
                "address": this.LocationNow
            });
            console.log(this.MyLocation);
        });
    }
    search(ev) {
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        var val = ev.target.value;
        if (val && val.length > 0) {
            this.data = null;
            this.hasSearch = val;
            if (this.autocomplete.input == '') {
                this.autocompleteItems = [];
                return;
            }
            this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, (predictions, status) => {
                this.autocompleteItems = [];
                this.zone.run(() => {
                    predictions.forEach((prediction) => {
                        this.autocompleteItems.push(prediction);
                    });
                });
            });
        }
        else {
            this.ngOnInit();
            this.hasSearch = false;
        }
    }
    clearSearch() {
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
    }
    SelectSearchResult(item) {
        var geocoder = new google.maps.Geocoder;
        let $this = this;
        let options = {
            useLocale: true,
            maxResults: 2
        };
        geocoder.geocode({ 'placeId': item.place_id }, function (results, status) {
            if (status !== 'OK') {
                window.alert('Geocoder failed due to: ' + status);
                return;
            }
            let navigationExtras = {
                queryParams: {
                    location: JSON.stringify(results[0].geometry.location),
                    address: item.description
                }
            };
            $this.nav.navigateForward(['/address'], navigationExtras);
        });
    }
    removeAddress(id) {
        this.server.trashAddress(id).subscribe(data => {
            if (data) {
                this.presentToast("La dirección se ha eliminado...", 'success');
                this.ionViewWillEnter();
            }
            else {
                this.presentToast(data, 'danger');
            }
        });
    }
    saveAddress(item, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Guardando Dirección...',
            });
            yield loading.present();
            // Cargamos la ciudad
            var lat = item.lat; //localStorage.getItem("current_lat") ? localStorage.getItem("current_lat") : 0;
            var lng = item.lng; //localStorage.getItem("current_lng") ? localStorage.getItem("current_lng") : 0;
            this.server.GetNearbyCity("&lat=" + lat + "&lng=" + lng).subscribe((response) => {
                if (response.data.nearby == true) {
                    if (localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null') {
                        localStorage.setItem('city_id', response.data.data[0].id);
                        localStorage.setItem('city_name', response.data.data[0].name);
                        this.events.publish('change_city', response.data.data[0].id);
                        this.server.updateCity("id=" + localStorage.getItem('user_id') + "&city_id=" + response.data.data[0].id).subscribe(() => { });
                    }
                    else {
                        localStorage.setItem('city_id', response.data.data[0].id);
                        localStorage.setItem('city_name', response.data.data[0].name);
                        this.events.publish('change_city', response.data.data[0].id);
                    }
                    if (type == 'LocationNow') {
                        var allData = {
                            address: item.address,
                            lat: this.lat,
                            lng: this.lng,
                            user_id: localStorage.getItem('user_id')
                        };
                        this.server.saveAddress(allData).subscribe((response) => {
                            if (response.msg == 'done') {
                                localStorage.setItem("address", item.address);
                                localStorage.setItem('address_id', response.id);
                                localStorage.setItem("current_lat", this.lat);
                                localStorage.setItem('current_lng', this.lng);
                            }
                            else {
                                this.presentToast(JSON.stringify(response.data), 'danger');
                            }
                            loading.dismiss();
                            this.nav.navigateForward('home');
                            this.presentToast("Dirección guardada con éxito.", 'success');
                        });
                    }
                    else {
                        localStorage.setItem("address", item.address);
                        localStorage.setItem('address_id', item.id);
                        localStorage.setItem("current_lat", item.lat);
                        localStorage.setItem('current_lng', item.lng);
                        loading.dismiss();
                        this.nav.navigateForward('home');
                        this.presentToast("Dirección guardada con éxito.", 'success');
                    }
                }
                else {
                    loading.dismiss();
                    this.presentToast("Aún no tenemos servicio en esta ubicación", 'danger');
                }
            });
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 2000,
                position: 'top',
                color: color
            });
            toast.present();
        });
    }
};
SetaddressPage.ctorParameters = () => [
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeGeocoder },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService }
];
SetaddressPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-setaddress',
        template: _raw_loader_setaddress_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_setaddress_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SetaddressPage);



/***/ }),

/***/ 2582:
/*!*****************************************************************!*\
  !*** ./src/app/account/address/setaddress/setaddress.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXRhZGRyZXNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7419:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/address/setaddress/setaddress.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: 17px;font-family: 'SF Pro Display';margin-left: -8px !important;\">Detalles de la entrega</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"searchBar\" *ngIf=\"autocomplete\">\n    <ion-searchbar style=\"font-size: 12px;font-family: 'SF Pro Display';--margin-bottom:0;--margin-top:0;\" \n                  (ionInput)=\"search($event)\" \n                  placeholder=\"Ingrese una nueva dirección\" \n                  mode=\"ios\" \n                  color=\"light\" \n                  (ionClear)=\"clearSearch()\" \n                  [(ngModel)]=\"autocomplete.input\">\n    </ion-searchbar>\n  </div>\n\n  <!-- Search AutoComplete -->\n  <ion-list *ngIf=\"autocompleteItems && hasSearch\">\n    <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"pin\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>{{item.structured_formatting.main_text}}</h4>\n        <p style=\"font-size: 12px;font-family: 'SF Pro Display';\" *ngIf=\"item.structured_formatting.secondary_text\">\n          {{item.structured_formatting.secondary_text | slice:0:45}} \n          <i *ngIf=\"item.structured_formatting.secondary_text.length > 45\">...</i>\n        </p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <!-- Search AutoComplete -->\n  \n  <!-- LocationNow -->\n  <ion-item *ngIf=\"!LocationNow\">\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n    </ion-avatar>\n    <ion-label>\n      <h4>Tu Ubicación</h4>\n      <p>\n        <ion-skeleton-text animated style=\"width: 100%;height: 15px;\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"LocationNow && !hasSearch\" (click)=\"saveAddress(MyLocation[0],'LocationNow')\">\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n    </ion-avatar>\n    <ion-label>\n      <h4>Tu Ubicación</h4>\n      \n      <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n        {{LocationNow | slice:0:45}} <i *ngIf=\"LocationNow.length > 45\">...</i>\n      </p>\n    </ion-label>\n  </ion-item>\n  <!-- LocationNow -->\n\n  <!-- Save Address -->\n  <ion-list *ngIf=\"!hasSearch\">\n    <ion-item-sliding *ngFor=\"let add of address\">\n      <ion-item (click)=\"saveAddress(add,0)\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"time\" style=\"font-size: 22px;\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h4 *ngIf=\"add.type\">{{add.type}}</h4>\n          <h4 *ngIf=\"!add.type\">Sin Especificar</h4>\n          \n          <p style=\"font-size: 12px;font-family: 'SF Pro Display';\">\n            {{add.address | slice:0:45}} <i *ngIf=\"add.address.length > 45\">...</i>\n          </p>\n        </ion-label>\n      </ion-item>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"removeAddress(add.id)\">\n          <ion-icon name=\"trash\"></ion-icon>\n          Eliminar\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <!-- Save Address -->\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" mode=\"ios\">Guardar</ion-button>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_account_address_setaddress_setaddress_module_ts.js.map