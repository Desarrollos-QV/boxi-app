(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_commanded_commanded_module_ts"],{

/***/ 4199:
/*!*******************************************************!*\
  !*** ./src/app/commanded/commanded-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandedPageRoutingModule": () => (/* binding */ CommandedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _commanded_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commanded.page */ 6722);




const routes = [
    {
        path: '',
        component: _commanded_page__WEBPACK_IMPORTED_MODULE_0__.CommandedPage
    }
];
let CommandedPageRoutingModule = class CommandedPageRoutingModule {
};
CommandedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommandedPageRoutingModule);



/***/ }),

/***/ 2517:
/*!***********************************************!*\
  !*** ./src/app/commanded/commanded.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandedPageModule": () => (/* binding */ CommandedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9790);
/* harmony import */ var _commanded_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commanded-routing.module */ 4199);
/* harmony import */ var _commanded_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commanded.page */ 6722);








let CommandedPageModule = class CommandedPageModule {
};
CommandedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _commanded_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommandedPageRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ],
        declarations: [_commanded_page__WEBPACK_IMPORTED_MODULE_1__.CommandedPage]
    })
], CommandedPageModule);



/***/ }),

/***/ 6722:
/*!*********************************************!*\
  !*** ./src/app/commanded/commanded.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandedPage": () => (/* binding */ CommandedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_commanded_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./commanded.page.html */ 764);
/* harmony import */ var _commanded_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commanded.page.scss */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);
/* harmony import */ var _service_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/events.service */ 4665);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ 2551);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);










let CommandedPage = class CommandedPage {
    constructor(modalController, nav, server, events, geolocation, zone, nativeGeocoder, toastController, loadingController, alertController, stripe) {
        this.modalController = modalController;
        this.nav = nav;
        this.server = server;
        this.events = events;
        this.geolocation = geolocation;
        this.zone = zone;
        this.nativeGeocoder = nativeGeocoder;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.stripe = stripe;
        this.MyLocation = [];
        this.step_comm = 0;
        this.text_address = "Punto de recogida";
        this.first_instr = "";
        this.second_instr = "";
        this.ready = false;
        this.stripeView = false;
        this.header_bal_text = "Saldo Insuficiente";
        this.msg_bal_text = "Deseas agregar saldo a tu cuenta?";
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
        this.admin = JSON.parse(localStorage.getItem('admin'));
        this.autocomplete = { input: '' };
        this.searchQuery = null;
        this.hasSearch = false;
        this.autocompleteItems = [];
        this.send_terminal = this.admin.send_terminal;
        this.comm_stripe = this.admin.comm_stripe;
        if (this.admin.paypal_client_id)
            this.paypal_id = this.admin.paypal_client_id;
        if (this.admin.stripe_client_id)
            this.stripe_id = this.admin.stripe_client_id;
        // Si no cuenta con metodo de pago predeterminado Redireccionamos
        if (!localStorage.getItem('otype_user') && localStorage.getItem('otype_user') == null) {
            this.presentToast("Agrega un método de pago predeterminado.", 'warning');
            this.nav.navigateForward('/option-pay');
        }
        else {
            this.otype = JSON.parse(localStorage.getItem('otype_user'));
        }
        this.setPayment(1);
        this.loadData();
    }
    loadData() {
        this.server.getAllAdress(localStorage.getItem('user_id')).subscribe((response) => {
            this.address = response.data;
        });
        if (localStorage.getItem('lenguage') == 'es') {
            console.log('español');
            this.header_bal_text = "Saldo Insuficiente";
            this.msg_bal_text = "Deseas agregar saldo a tu cuenta?";
        }
        else {
            this.header_bal_text = "Insufficient balance";
            this.msg_bal_text = "Do you want to add balance to your account?";
        }
        // Obtenemos la ubicación actual
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lng = resp.coords.longitude;
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        }).catch((error) => {
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
            this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, location: new google.maps.LatLng(this.lat, this.lng), radius: 10 }, (predictions, status) => {
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
        this.autocomplete = { input: '' };
    }
    SelectSearchResult(item) {
        if (this.set_type_address == 'origin') {
            this.address_origin = item.description;
            this.step_comm = 2;
            this.chargeMap(this.address_origin, 'address_origin');
        }
        else {
            this.address_destin = item.description;
            this.step_comm = 3;
            this.chargeMap(this.address_destin, 'address_destin');
        }
    }
    saveAddress(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.set_type_address == 'origin') {
                this.address_origin = item.address;
                this.step_comm = 2;
                this.chargeMap(this.address_origin, 'address_origin');
            }
            else {
                this.address_destin = item.address;
                this.step_comm = 3;
                this.chargeMap(this.address_destin, 'address_destin');
            }
        });
    }
    removeAddress(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.trashAddress(id).subscribe(data => {
                loading.dismiss();
                if (data) {
                    this.presentToast("La dirección se ha eliminado...", 'success');
                    this.clearSearch();
                }
                else {
                    this.presentToast(data, 'danger');
                }
            });
        });
    }
    next_step(step) {
        if (step == 'back') {
            this.step_comm = Number(this.step_comm) - 1;
        }
        if (step == "add_origin") {
            this.step_comm = 1;
            this.set_type_address = "origin";
            this.text_address = "Punto de recogida";
            this.clearSearch();
            setTimeout(() => {
                this.searchad.setFocus();
            }, 400);
        }
        else if (step == "add_destin") {
            if (this.address_origin) {
                this.set_type_address = "destination";
                this.text_address = "Punto de entrega";
                this.step_comm = 1;
                this.clearSearch();
                setTimeout(() => {
                    this.searchad.setFocus();
                }, 400);
            }
            else {
                this.presentToast("Ingresa un punto de partida", 'danger');
                this.next_step('add_origin');
            }
        }
        else if (step == 'ready') {
            this.step_comm = 0;
            setTimeout(() => {
                // Cargamos costos de envio
                this.ViewCostShipCommanded();
            }, 500);
        }
    }
    ViewCostShipCommanded() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            let allData = {
                lat_orig: this.lat_orig,
                lng_orig: this.lng_orig,
                lat_dest: this.lat_dest,
                lng_dest: this.lng_dest,
                city_id: localStorage.getItem('city_id')
            };
            this.server.ViewCostShipCommanded(allData).subscribe((data) => {
                loading.dismiss();
                console.log(data);
                if (data.data.service == 1) {
                    this.ready = true;
                    this.cost_ship = data.data;
                    this.total_amount = data.data.costs_ship;
                }
                else {
                    this.presentToast(data.err, 'danger');
                }
            });
        });
    }
    chargeMap(address, type) {
        // Obtenemos las coordenadas de la direccion de recogida
        this.server.GeocodeFromAddress(address, this.admin.ApiKey_google).subscribe((data) => {
            if (data.status != 'ZERO_RESULTS') {
                if (type == 'address_origin') {
                    this.lat_orig = data.results[0].geometry.location.lat;
                    this.lng_orig = data.results[0].geometry.location.lng;
                }
                else {
                    this.lat_dest = data.results[0].geometry.location.lat;
                    this.lng_dest = data.results[0].geometry.location.lng;
                }
            }
            else {
                this.presentToast("No se encontraro resultado de busqueda", 'danger');
                this.step_comm = 1;
            }
        });
    }
    formatMoney(number) {
        return new Intl.NumberFormat('es-CL', { style: "currency", currency: "CLP" }).format(number);
    }
    closeComm() {
        this.nav.navigateRoot('/home');
    }
    ConfirmPayStripe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Advertencia!!',
                message: 'El pago via tarjeta de Crédito/Débito genera una comisión de ' + this.comm_stripe + " %",
                mode: 'ios',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.stripeView = false;
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.total_amount = Number(this.total_amount) + Number(this.getComm(this.total_amount, this.comm_stripe));
                            this.stripeView = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    setPayment(id) {
        this.payment = id;
        if (id == 3) {
            this.ConfirmPayStripe();
        }
        else {
            if (this.stripeView == true) {
                this.total_amount = Number(this.total_amount) - Number(this.iva_stripe);
                this.iva_stripe = 0;
                this.stripeView = false;
            }
        }
    }
    getComm(total, comm) {
        let com = (total * comm) / 100;
        this.iva_stripe = com.toFixed(2);
        return this.iva_stripe;
    }
    makeOrder() {
        if (this.payment == 3) {
            this.payWithStripe();
        }
        else {
            this.order();
        }
    }
    order() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            let allData = {
                address_origin: this.address_origin,
                lat_orig: this.lat_orig,
                lng_orig: this.lng_orig,
                address_destin: this.address_destin,
                lat_dest: this.lat_dest,
                lng_dest: this.lng_dest,
                first_instr: this.first_instr,
                second_instr: this.second_instr,
                user_id: localStorage.getItem('user_id'),
                price_comm: this.iva_stripe,
                payment: this.payment,
                payment_id: this.payment_id,
                payment_method: this.otype,
                d_charges: this.cost_ship['costs_ship'],
                total: this.total_amount
            };
            this.server.OrderComm(allData).subscribe((data) => {
                loading.dismiss();
                console.log(data);
                if (data.data == 'done') {
                    this.presentToast("Tu solicitud ha sido enviada", 'success');
                    this.nav.navigateRoot('/done-comm');
                }
                else if (data.data == 'fail') {
                    this.balance_insuficient();
                }
                else {
                    this.presentToast("Ha ocurrido un problema con el servido, por favor intente mas tarde.", 'danger');
                    this.nav.navigateRoot('/home');
                }
            });
        });
    }
    balance_insuficient() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: this.header_bal_text,
                message: this.msg_bal_text,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.nav.navigateRoot('/home');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            this.nav.navigateForward('/add-credit');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    payWithStripe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({});
            yield loading.present();
            if (this.card_no && this.card_no.length > 10 && this.exp_month && this.exp_year && this.cvv) {
                loading.dismiss();
                this.stripe.setPublishableKey(this.stripe_id);
                let card = {
                    number: this.card_no,
                    expMonth: this.exp_month,
                    expYear: this.exp_year,
                    cvc: this.cvv
                };
                this.stripe.createCardToken(card)
                    .then(token => {
                    this.makePayment(token.id);
                })
                    .catch(error => {
                    this.presentToast("Por favor ingrese detalles de pago válidos", "warning");
                });
            }
            else {
                loading.dismiss();
                this.presentToast("Por favor ingrese detalles de pago válidos", "warning");
            }
        });
    }
    makePayment(token) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Enviando Informacion...',
                mode: 'ios'
            });
            yield loading.present();
            this.server.makeStripePayment("?token=" + token + "&amount=" + this.total_amount).subscribe((response) => {
                if (response.data == "done") {
                    this.payment_id = response.id;
                    if (this.payment_id) {
                        this.order();
                    }
                }
                else {
                    this.presentToast("Algo salió mal. Por favor, vuelva a intentarlo.", "danger");
                }
                loading.dismiss();
            });
        });
    }
    presentToast(txt, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
CommandedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _service_events_service__WEBPACK_IMPORTED_MODULE_3__.EventsService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__.Geolocation },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_5__.Stripe }
];
CommandedPage.propDecorators = {
    searchad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ["searchad", { static: false },] }]
};
CommandedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-commanded',
        template: _raw_loader_commanded_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_commanded_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CommandedPage);



/***/ }),

/***/ 3913:
/*!***********************************************!*\
  !*** ./src/app/commanded/commanded.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-buttons:first-child {\n  margin-right: 0 !important;\n}\nion-header ion-toolbar ion-buttons:last-child {\n  margin-left: 0 !important;\n}\nion-header ion-toolbar ion-buttons ion-title ion-icon {\n  font-size: 22px;\n  margin: 6px 0px;\n  padding: 8px;\n  border-radius: 50%;\n  background-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);\n}\nion-header ion-toolbar ion-buttons ion-searchbar {\n  margin-top: 12px;\n}\n.title {\n  box-shadow: none;\n}\n.from_to {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.from_to ion-item {\n  --padding-start:0 !important;\n  --inner-padding-end:0 !important;\n  --padding-bottom: 8px;\n  --padding-top:8px;\n}\n.from_to ion-item:first-child {\n  border-bottom: 1px solid #54d854;\n}\n.costes {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.costes:first-child {\n  margin-top: 50px;\n}\n.foot {\n  box-shadow: none;\n  padding: 0 15px;\n}\n.foot p {\n  padding: 15px 0;\n  color: #747474;\n}\n.foot ion-button {\n  --border-radius:15px;\n  text-transform: none;\n  font-size: 12px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT1k7RUFDSSwwQkFBQTtBQU5oQjtBQVNZO0VBQ0kseUJBQUE7QUFQaEI7QUFXZ0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0FBVHBCO0FBYVk7RUFDSSxnQkFBQTtBQVhoQjtBQWlCQTtFQUNJLGdCQUFBO0FBZEo7QUFpQkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBZEo7QUFnQkk7RUFDSSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQWRSO0FBaUJRO0VBQ0ksZ0NBQUE7QUFmWjtBQW9CQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFqQko7QUFtQkk7RUFDSSxnQkFBQTtBQWpCUjtBQXFCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWxCSjtBQW9CSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBbEJSO0FBcUJJO0VBQ0ksb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBbkJSIiwiZmlsZSI6ImNvbW1hbmRlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWhlYWRlciB7XHJcblxyXG4gICAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgICAgICBpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA2cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLDAuMDcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZnJvbV90byB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIC0tcGFkZGluZy10b3A6OHB4O1xyXG5cclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODQsIDIxNiwgODQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvc3RlcyB7XHJcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZvb3Qge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgY29sb3I6IHJnYigxMTYsIDExNiwgMTE2KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6MTVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 764:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commanded/commanded.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar mode=\"md\">\n    <ion-buttons slot=\"start\">\n      <ion-title>\n        <ion-icon name=\"arrow-back\" (click)=\"closeComm()\" *ngIf=\"step_comm == 0\"></ion-icon>\n        <ion-icon name=\"arrow-back\" (click)=\"next_step('back')\" *ngIf=\"step_comm != 0\"></ion-icon>\n      </ion-title>\n    </ion-buttons>\n    \n    <ion-buttons *ngIf=\"step_comm == 1\" class=\"animate__animated animate__fadeInRight\">\n      <ion-searchbar #searchad placeholder=\"{{text_address}}\" type=\"text\" mode=\"ios\" autocomplete=\"street-address\" search-icon=\"undefined\" animated=\"true\"\n                  (ionInput)=\"search($event)\" \n                  (ionClear)=\"clearSearch()\" \n                  [(ngModel)]=\"autocomplete.input\"></ion-searchbar>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- Todo Listo -->\n  <div *ngIf=\"step_comm == 0\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title *ngIf=\"ready == false\">\n          {{'header_comm_text' | translate}}\n        </ion-card-title>\n        <ion-card-title *ngIf=\"ready == true\">\n          {{'resumen_comm_text' | translate}}\n        </ion-card-title>\n\n        <ion-card-subtitle>\n         {{'subheader_comm_text' | translate}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <img *ngIf=\"ready == true\" src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=600x200&maptype=roadmap&markers=color:0x533186|size:mid|label:D|{{lat_dest}},{{lng_dest}}&key={{admin.ApiKey_google}}\">\n      \n      <ion-item lines=\"none\" (click)=\"next_step('add_origin')\">\n        <ion-icon slot=\"start\" src=\"assets/archive-outline.svg\"></ion-icon>\n        <ion-label>\n          {{'point_origin' | translate}}\n          <br />\n          <span *ngIf=\"address_origin\">{{address_origin | slice:0:26}}...</span>\n        </ion-label>\n        <ion-icon src=\"assets/chevron-forward-outline.svg\"></ion-icon>\n      </ion-item>\n      <ion-item lines=\"none\" (click)=\"next_step('add_destin')\">\n        <ion-icon slot=\"start\" src=\"assets/location-outline.svg\"></ion-icon>\n        <ion-label>\n          {{'point_destin' | translate}}\n          <br />\n          <span *ngIf=\"address_destin\">{{address_destin | slice:0:26}}...</span>\n        </ion-label>\n        <ion-icon src=\"assets/chevron-forward-outline.svg\"></ion-icon>\n      </ion-item>\n    </ion-card>\n\n    <!-- Metodo de pago -->\n    <ion-card class=\"costes animate__animated animate__fadeInRight\" *ngIf=\"ready == true\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          {{'payment_methods' | translate}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-radio-group value=\"{{otype}}\">\n          <ion-item *ngIf=\"otype == 1\" style=\"font-size: 13px\">\n            <ion-label>\n              {{'cash_payment' | translate}}\n            </ion-label>\n            <ion-radio mode=\"ios\" slot=\"start\" value=\"1\"></ion-radio>\n          </ion-item>\n          \n          <ion-item *ngIf=\"otype == 2\" style=\"font-size: 13px\">\n            <ion-label>\n              {{'balance_payment' | translate}}\n            </ion-label>\n            <ion-radio mode=\"ios\" slot=\"start\" value=\"2\"></ion-radio>\n          </ion-item>\n      \n\n          <ion-item style=\"font-size: 13px\" *ngIf=\"stripe_id && otype == 3\">\n            <ion-label>\n              {{'card_payment' | translate}}\n            </ion-label>\n            <ion-radio mode=\"ios\" slot=\"start\" value=\"3\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"costes animate__animated animate__fadeInRight\" *ngIf=\"ready == true && stripeView\">\n      <ion-card-header>\n        <ion-card-subtitle>\n         {{'enter_bank_info' | translate}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\">{{'card_number' | translate}}</ion-label>\n              <ion-input type=\"tel\" [(ngModel)]=\"card_no\" name=\"card_no\"></ion-input>\n            </ion-item>\n          </ion-col>\n        \n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">{{'expiry_month' | translate }}</ion-label>\n              <ion-input type=\"tel\" [(ngModel)]=\"exp_month\" name=\"exp_month\"></ion-input>\n            </ion-item>\n          </ion-col>\n        \n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">{{'expiry_year' | translate }}</ion-label>\n              <ion-input type=\"tel\" [(ngModel)]=\"exp_year\" name=\"exp_year\"></ion-input>\n            </ion-item>\n          </ion-col>\n        \n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\">{{'cvv_code' | translate }}</ion-label>\n              <ion-input type=\"tel\" [(ngModel)]=\"cvv\" name=\"cvv\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <!-- Metodo de pago -->\n\n    <!-- Costos de envio -->\n    <ion-card class=\"costes animate__animated animate__fadeInRight\" *ngIf=\"ready == true\">\n      <ion-card-header>\n        <ion-card-subtitle>\n          <b>{{'amount_comm_text' | translate}}</b>\n        </ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content *ngIf=\"cost_ship\">   \n        <ion-row class=\"fontSize\">\n          \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            {{'ditance_comm_text' | translate}}\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.distance}} MI</b>\n          </ion-col>\n      \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            {{'times_delivery' | translate}}\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{cost_ship.duration}}</b>\n          </ion-col>\n      \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            <b>{{'ship_costs' | translate}}</b>\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{ cost_ship.costs_ship | currency}}</b>  \n          </ion-col>\n          \n          <ion-col size=\"8\" class=\"border_bottom_only\">\n            <b>{{'amount_comm' | translate}}</b>\n          </ion-col>\n          <ion-col size=\"4\" class=\"border_bottom_only\">\n            <b>{{ total_amount | currency }}</b>  \n          </ion-col>\n\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <!-- Costos de envio-->\n  </div>\n  <!-- Todo Listo -->\n\n  <!-- Guardar direccion de recoger -->\n  <div *ngIf=\"step_comm == 1\">\n    <!-- Search AutoComplete -->\n    <ion-list *ngIf=\"autocompleteItems && hasSearch\">\n      <ion-item *ngFor=\"let item of autocompleteItems\" tappable (click)=\"SelectSearchResult(item)\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"pin\" style=\"font-size: 22px;\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <h4>{{item.structured_formatting.main_text}}</h4>\n          <p style=\"font-size: 12px;\" *ngIf=\"item.structured_formatting.secondary_text\">\n            {{item.structured_formatting.secondary_text | slice:0:45}} \n            <i *ngIf=\"item.structured_formatting.secondary_text.length > 45\">...</i>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <!-- Search AutoComplete -->\n\n    <!-- LocationNow -->\n    <ion-item *ngIf=\"!LocationNow\" style=\"margin-top: 15px;\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>{{'your_location' | translate}}</h4>\n        <p>\n          <ion-skeleton-text animated style=\"width: 100%;height: 15px;\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item *ngIf=\"LocationNow && !hasSearch\" (click)=\"saveAddress(MyLocation[0])\" style=\"margin-top: 15px;\">\n      <ion-avatar slot=\"start\">\n        <ion-icon name=\"navigate\" style=\"font-size: 22px;\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <h4>{{'your_location' | translate}}</h4>\n        \n        <p style=\"font-size: 12px;\">\n          {{LocationNow | slice:0:45}} <i *ngIf=\"LocationNow.length > 45\">...</i>\n        </p>\n      </ion-label>\n    </ion-item>\n    <!-- LocationNow -->\n\n    <!-- Save Address -->\n    <ion-list *ngIf=\"!hasSearch\">\n      <ion-list-header>\n        <span>{{'recents_text' | translate}}</span>\n      </ion-list-header>\n\n      <ion-item-sliding *ngFor=\"let add of address\">\n        <ion-item (click)=\"saveAddress(add)\">\n          <ion-avatar slot=\"start\">\n            <ion-icon name=\"time\" style=\"font-size: 22px;\"></ion-icon>\n          </ion-avatar>\n          <ion-label>\n            <h4 *ngIf=\"add.type\">{{add.type}}</h4>\n            <h4 *ngIf=\"!add.type\">{{'not_especific' | translate}}</h4>\n            \n            <p style=\"font-size: 12px;\">\n              {{add.address | slice:0:45}} <i *ngIf=\"add.address.length > 45\">...</i>\n            </p>\n          </ion-label>\n        </ion-item>\n    \n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"danger\" (click)=\"removeAddress(add.id)\">\n            <ion-icon name=\"trash\"></ion-icon>\n            {{'delete' | translate}}\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n    <!-- Save Address -->\n  </div>\n  <!-- Guardar direccion de recoger -->\n\n  <!-- Que vamos a recoger -->\n  <div *ngIf=\"step_comm == 2\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title>\n          {{'what_should_point' | translate}}\n        </ion-card-title>\n        <ion-card-subtitle>\n         {{address_origin}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <ion-item lines=\"none\">\n        <ion-textarea [(ngModel)]=\"first_instr\" name=\"first_instr\" placeholder=\"{{'first_instr_placeholder' | translate}}\"></ion-textarea>\n      </ion-item>\n    </ion-card>\n  </div>\n  <!-- Que vamos a recoger -->\n\n  <!-- Direccion de entrega -->\n  <div *ngIf=\"step_comm == 3\">\n    <ion-card class=\"title\">\n      <ion-card-header>\n        <ion-card-title>\n          {{'what_should_point' | translate}}\n        </ion-card-title>\n        <ion-card-subtitle>\n         {{address_destin}}\n        </ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card class=\"from_to\">\n      <ion-item lines=\"none\">\n        <ion-textarea [(ngModel)]=\"second_instr\" name=\"second_instr\" placeholder=\"{{'second_instr_placeholder' | translate}}\"></ion-textarea>\n      </ion-item>\n    </ion-card>\n  </div>\n  <!-- Direccion de entrega -->\n\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-card class=\"foot\" *ngIf=\"step_comm == 0\">\n    <p class=\"ion-text-center\" *ngIf=\"ready == false\">\n      {{'terms_cond' | translate}}\n    </p>\n    <ion-button expand=\"block\" (click)=\"makeOrder()\" [disabled]=\"ready == false\">\n      {{'confirm' | translate}}\n    </ion-button>\n  </ion-card>\n\n  <ion-card class=\"foot\" *ngIf=\"step_comm == 2\">\n    <ion-button expand=\"block\" (click)=\"next_step('add_destin')\" [disabled]=\"first_instr == ''\">\n      {{'next' | translate}}\n    </ion-button>\n  </ion-card> \n  \n  <ion-card class=\"foot\" *ngIf=\"step_comm == 3\">\n    <ion-button expand=\"block\" (click)=\"next_step('ready')\" [disabled]=\"second_instr == ''\">\n      {{'confirm' | translate}}\n    </ion-button>\n  </ion-card>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_commanded_commanded_module_ts.js.map