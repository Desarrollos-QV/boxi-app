(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_done-comm_done-comm_module_ts"],{

/***/ 6254:
/*!*******************************************************!*\
  !*** ./src/app/done-comm/done-comm-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneCommPageRoutingModule": () => (/* binding */ DoneCommPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _done_comm_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done-comm.page */ 3514);




const routes = [
    {
        path: '',
        component: _done_comm_page__WEBPACK_IMPORTED_MODULE_0__.DoneCommPage
    },
    {
        path: 'rate-trip',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./rate-trip/rate-trip.module */ 6506)).then(m => m.RateTripPageModule)
    }
];
let DoneCommPageRoutingModule = class DoneCommPageRoutingModule {
};
DoneCommPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DoneCommPageRoutingModule);



/***/ }),

/***/ 8331:
/*!***********************************************!*\
  !*** ./src/app/done-comm/done-comm.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneCommPageModule": () => (/* binding */ DoneCommPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _done_comm_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./done-comm-routing.module */ 6254);
/* harmony import */ var _done_comm_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./done-comm.page */ 3514);







let DoneCommPageModule = class DoneCommPageModule {
};
DoneCommPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _done_comm_routing_module__WEBPACK_IMPORTED_MODULE_0__.DoneCommPageRoutingModule
        ],
        declarations: [_done_comm_page__WEBPACK_IMPORTED_MODULE_1__.DoneCommPage]
    })
], DoneCommPageModule);



/***/ }),

/***/ 3514:
/*!*********************************************!*\
  !*** ./src/app/done-comm/done-comm.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoneCommPage": () => (/* binding */ DoneCommPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_done_comm_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./done-comm.page.html */ 7575);
/* harmony import */ var _done_comm_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./done-comm.page.scss */ 183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ 6794);
/* harmony import */ var _rate_trip_rate_trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rate-trip/rate-trip.page */ 9520);







let DoneCommPage = class DoneCommPage {
    constructor(nav, server, toastController, loadingController, modalController) {
        this.nav = nav;
        this.server = server;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.status = 0;
        this.chargeMap = false;
        this.chargeaudio = false;
        this.box_rec = false;
        this.box_rute = false;
        this.box_end = false;
        this.rate_box = false;
        this.user_id = localStorage.getItem('user_id');
        this.loadData();
        this.Interval_1 = setInterval(() => {
            this.loadData();
        }, 4000);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.box_rec = false;
        this.box_rute = false;
        this.box_end = false;
        this.rate_box = false;
    }
    loadData() {
        this.server.chkEvents_comm(this.user_id).subscribe((data) => {
            console.log(data);
            if (data.data.length > 0) {
                this.data = data.data[0];
                let event = data.data[0].event;
                this.status = event.status;
                this.address_destin = event.address_destin;
                this.address_origin = event.address_origin;
                if (this.status != 0 && this.status != 3) {
                    if (data.data[0].dboy) {
                        this.lat = data.data[0].dboy.lat;
                        this.lng = data.data[0].dboy.lng;
                    }
                    else {
                        this.lat = event.lat_orig;
                        this.lng = event.lng_orig;
                    }
                    if (this.chargeMap == false) {
                        this.chargeMap = true;
                        setTimeout(() => {
                            this.loadMap();
                        }, 1200);
                    }
                    else {
                        this.ViewdBoy();
                    }
                }
                if (this.status == 3) {
                    this.box_rec = false;
                    this.box_rute = false;
                    this.box_end = false;
                    if (this.chargeaudio == false) {
                        this.chargeaudio = true;
                        var audio = new Audio('../../assets/comm_alert.mp3');
                        audio.play();
                    }
                }
                if (this.status == 2) {
                    this.box_rec = false;
                    this.box_rute = false;
                    this.box_end = false;
                    clearInterval(this.Interval_1);
                    this.presentToast("El pedido ha sido cancelado", 'warning');
                    this.nav.navigateForward('/home');
                }
                if (this.status == 4) {
                    this.box_rec = true;
                }
                if (this.status == 4.5) {
                    this.box_rec = true;
                    this.box_rute = true;
                }
                if (this.status == 5) {
                    clearInterval(this.Interval_1);
                    if (this.rate_box == false) {
                        this.rate_box = true;
                        this.box_rec = true;
                        this.box_rute = true;
                        this.box_end = true;
                        this.presentToast("El pedido ha sido entregado con éxito.", 'success');
                        this.viewRateTrip();
                    }
                }
                this.order_id = event.id;
            }
            else {
                clearInterval(this.Interval_1);
                this.presentToast("No tienes pedidos en curso", 'danger');
                this.nav.navigateRoot('/home');
            }
        });
    }
    chkEvents_staffs(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.chargeaudio = false;
            this.box_rec = false;
            this.box_rute = false;
            this.box_end = false;
            let data = {
                id_order: id
            };
            this.server.chkEvents_staffs(data).subscribe((data) => {
                loading.dismiss();
                if (data.data.status == false) {
                    this.presentToast("Algo ha ocurido por favor, vuelva a intentarlo", "danger");
                }
            });
        });
    }
    cancelComm_event(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                mode: 'ios'
            });
            yield loading.present();
            this.server.cancelComm_event(id).subscribe((data) => {
                loading.dismiss();
                if (data.data.status == 'done') {
                    this.presentToast("El pedido ha sido cancelado", 'warning');
                    this.nav.navigateForward('/home');
                }
                else {
                    this.presentToast("Algo ha ocurido, por favor vuelve a intentar", 'danger');
                }
            });
        });
    }
    loadMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({});
            yield loading.present();
            const icon = {
                url: 'assets/car_top.png',
                scaledSize: new google.maps.Size(50, 63), // scaled size
            };
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            let mapOptions = {
                center: latLng,
                zoom: 15,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            google.maps.event.addListenerOnce(this.map, 'idle', () => {
                this.marker = new google.maps.Marker({
                    position: latLng,
                    map: this.map,
                    icon: icon,
                });
                this.chargeMap = true;
            });
            loading.dismiss();
        });
    }
    ViewdBoy() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let latLng = new google.maps.LatLng(this.lat, this.lng);
            this.map.setCenter(latLng);
            this.marker.setPosition(latLng);
        });
    }
    viewRateTrip() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _rate_trip_rate_trip_page__WEBPACK_IMPORTED_MODULE_3__.RateTripPage,
                animated: true,
                mode: 'ios',
                cssClass: 'my-custom-modal-css',
                backdropDismiss: false,
                showBackdrop: true,
                componentProps: {
                    'data_post': JSON.stringify(this.data)
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                clearInterval(this.Interval_1);
                this.loadData();
            });
            return yield modal.present();
        });
    }
    backPage() {
        this.nav.navigateRoot('/home');
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
DoneCommPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__.ServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
DoneCommPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['map', { static: false },] }]
};
DoneCommPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-done-comm',
        template: _raw_loader_done_comm_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_done_comm_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DoneCommPage);



/***/ }),

/***/ 183:
/*!***********************************************!*\
  !*** ./src/app/done-comm/done-comm.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  z-index: 999;\n}\nion-header::after {\n  display: none !important;\n}\nion-header.bg_transparent {\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  height: auto;\n}\nion-header.bg_transparent ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  display: flex;\n  align-items: center;\n  min-height: 60px !important;\n  height: auto;\n  overflow: visible !important;\n  --border-width: 0 !important;\n}\nion-header.bg_transparent ion-toolbar ion-buttons {\n  position: relative !important;\n  margin: 0;\n  --color: #fff !important;\n}\nion-header.bg_transparent ion-toolbar ion-buttons ion-icon {\n  padding: 15px;\n  border-radius: 25px;\n  background: #fff;\n  margin: 15px;\n}\n.bg_pic {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.bg_pic img {\n  width: 100%;\n  height: 100%;\n}\n#container {\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n}\n.item {\n  z-index: 100;\n  padding: 5px;\n}\n.item img {\n  width: 60px;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0.5, 0.5);\n    opacity: 0.5;\n  }\n  to {\n    transform: scale(2.5, 2.5);\n    opacity: 0;\n  }\n}\n.circle {\n  border-radius: 50%;\n  background-color: #a1a6ad;\n  width: 150px;\n  height: 150px;\n  position: absolute;\n  opacity: 0;\n  animation: scaleIn 2s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);\n}\n.search_r_text {\n  position: absolute;\n  width: 94%;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999;\n  background: #fff;\n}\n.search_r_text ion-card-content ion-button {\n  text-transform: none;\n  flex-direction: column;\n}\n.map-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n.map-wrapper #map {\n  width: 100%;\n  height: 100%;\n}\n.staff_inrute_text {\n  position: absolute;\n  width: 100%;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 999;\n  background: #fff;\n}\n.staff_inrute_text ion-card-content .from_to {\n  padding: 4px 15px;\n  border-radius: 15px;\n}\n.staff_inrute_text ion-card-content .from_to ion-item {\n  --padding-start:0 !important;\n  --inner-padding-end:0 !important;\n  --padding-bottom: 5px;\n  --padding-top:5px;\n}\n.staff_inrute_text ion-card-content .from_to ion-item:first-child {\n  border-bottom: 1px solid #54d854;\n}\n.container {\n  width: 100%;\n  height: 120px;\n  padding: 0 0;\n  margin: 10px auto;\n  position: relative;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -1px;\n  width: 2px;\n  height: 100%;\n  background: #CCD1D9;\n  z-index: 1;\n}\n.timeline-block {\n  width: calc(50% + 8px);\n  display: flex;\n  justify-content: space-between;\n  clear: both;\n}\n.timeline-block-right {\n  float: right;\n}\n.marker {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid #F5F7FA;\n  background: #4FC1E9;\n  margin-top: 10px;\n  z-index: 9999;\n}\n.timeline-content {\n  width: 95%;\n  padding: 0 15px;\n  color: #666;\n}\n.timeline-content h6 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 500;\n}\n.timeline-content p {\n  font-size: 14px;\n  line-height: 1.5em;\n  word-spacing: 1px;\n  color: #888;\n}\n@media screen and (max-width: 768px) {\n  .container:before {\n    left: 8px;\n    width: 2px;\n  }\n\n  .timeline-block {\n    width: 100%;\n    margin-bottom: 30px;\n  }\n\n  .timeline-block-right {\n    float: none;\n  }\n\n  .timeline-block-left {\n    float: none;\n    direction: ltr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,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Q0EsV0FBQTtBQTFCSjtBQThCQztFQUNHO0lBQ0csU0FBQTtJQUNBLFVBQUE7RUEzQkw7O0VBNkJFO0lBQ0csV0FBQTtJQUNBLG1CQUFBO0VBMUJMOztFQTRCRTtJQUNHLFdBQUE7RUF6Qkw7O0VBNEJFO0lBQ0csV0FBQTtJQUNBLGNBQUE7RUF6Qkw7QUFDRiIsImZpbGUiOiJkb25lLWNvbW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5iZ190cmFuc3BhcmVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuLmJnX3BpYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzY2FsZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC41LCAuNSk7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDIuNSwgMi41KTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhNmFkO1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IHNjYWxlSW4gMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKC4zNiwgLjExLCAuODksIC4zMik7XHJcbn1cclxuXHJcbi5zZWFyY2hfcl90ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO3JpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG5cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIFxyXG4ubWFwLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgIFxyXG4gICAgI21hcF9jZW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC00MXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI21hcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdGFmZl9pbnJ1dGVfdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtyaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuXHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgICAuZnJvbV90byB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDowICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOjVweDtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODQsIDIxNiwgODQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0NEMUQ5O1xyXG4gICAgICAgIHotaW5kZXg6IDFcclxuICAgIH1cclxufVxyXG4gXHJcbiBcclxuIC50aW1lbGluZS1ibG9jayB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1jYWxjKDUwJSArIDhweCk7XHJcbiAgICB3aWR0aDogLW1vei1jYWxjKDUwJSArIDhweCk7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgKyA4cHgpO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAtbW96LWJveC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiB9XHJcbiBcclxuIC50aW1lbGluZS1ibG9jay1yaWdodCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiB9XHJcbiBcclxuXHJcbiAubWFya2VyIHtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Y1RjdGQTtcclxuICAgIGJhY2tncm91bmQ6ICM0RkMxRTk7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgei1pbmRleDogOTk5OVxyXG4gfVxyXG4gXHJcbiAudGltZWxpbmUtY29udGVudCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgY29sb3I6ICM2NjZcclxuIH1cclxuIFxyXG4gLnRpbWVsaW5lLWNvbnRlbnQgaDYge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG4gfVxyXG4gXHJcbiAudGltZWxpbmUtY29udGVudCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgIHdvcmQtc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiB9XHJcbiBcclxuIFxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb250YWluZXI6YmVmb3JlIHtcclxuICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICB9XHJcbiAgICAudGltZWxpbmUtYmxvY2sge1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpbWVsaW5lLWJsb2NrLXJpZ2h0IHtcclxuICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgfVxyXG4gXHJcbiAgICAudGltZWxpbmUtYmxvY2stbGVmdCB7XHJcbiAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgIGRpcmVjdGlvbjogbHRyO1xyXG4gICAgfVxyXG4gfVxyXG4gIl19 */");

/***/ }),

/***/ 7575:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/done-comm/done-comm.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"bg_transparent\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\" class=\"ion-text-center\">\n\t\t\t<ion-icon name=\"arrow-back\" (click)=\"backPage()\"></ion-icon>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  \n  <!-- Buscando Repartidor -->\n    <div class=\"bg_pic\" *ngIf=\"status == 0 || status == 3\">\n      <img src=\"/assets/search_driver.png\" alt=\"Buscando repartidor\">\n    </div>\n\n    <div id=\"container\" *ngIf=\"status == 0 || status == 3\">\n      <div class=\"item\">\n        <img src=\"/assets/car_top.png\" />\n      </div>\n      <div class=\"circle\" style=\"animation-delay: 0s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 1s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 2s\"></div>\n      <div class=\"circle\" style=\"animation-delay: 3s\"></div>\n    </div>\n\n    <ion-card *ngIf=\"status == 0\" class=\"search_r_text animate__animated animate__fadeInUp\">\n      <ion-card-header>\n        Buscando repartidor para tu pedido\n      </ion-card-header>\n\n      <ion-card-content>\n        <section>\n          <ion-button size=\"small\" color=\"primary\" mode=\"ios\" (click)=\"cancelComm_event(order_id)\">Cancelar pedido</ion-button>\n        </section>\n      </ion-card-content>\n\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </ion-card>\n\n    <ion-card *ngIf=\"status == 3\" class=\"search_r_text ion-text-center animate__animated animate__fadeInUp\">\n      <ion-card-header>\n        No pudimos encontrar repartidor\n      </ion-card-header>\n      \n      <ion-card-content>\n        <section>\n          <ion-button size=\"small\" color=\"success\" mode=\"ios\" (click)=\"chkEvents_staffs(order_id)\">Volver a solicitar</ion-button>\n          <ion-button size=\"small\" color=\"primary\" mode=\"ios\" (click)=\"cancelComm_event(order_id)\">Cancelar pedido</ion-button>\n        </section>\n      </ion-card-content>\n    </ion-card>\n  <!-- Buscando Repartidor -->\n\n  <!-- Repartidor acepto pedido -->\n  <div class=\"map-wrapper\" *ngIf=\"status == 1 || status == 4 || status == 4.5 || status == 5\">\n    <div id=\"map_center\">\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n\n  <ion-card *ngIf=\"status == 1 || status == 4 || status == 4.5 || status == 5\" class=\"staff_inrute_text\">\n    <ion-card-header>\n      Seguimiento de ruta.\n    </ion-card-header>\n    \n    <ion-card-content>\n      \n      <div class=\"container\">\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_end\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete entregado</h6>\n             <p>Tu paquete ha sido entregado con éxito.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_rute\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete en camino</h6>\n             <p>Tu paquete va en camino al destino.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\" *ngIf=\"box_rec\">\n          <div class=\"marker\"></div>\n          <div class=\"timeline-content\">\n             <h6>Paquete recolectado</h6>\n             <p>Tu paquete ha sido recolectado.</p>\n          </div>\n        </div>\n\n        <div class=\"timeline-block timeline-block-right animate__animated animate__fadeInRight\">\n           <div class=\"marker\"></div>\n           <div class=\"timeline-content\">\n              <h6>Pedido Aceptado</h6>\n              <p>El pedido fue aceptado por el repartidor.</p>\n           </div>\n        </div>\n     </div>\n    </ion-card-content>\n  </ion-card>\n  <!-- Repartidor acepto pedido -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_done-comm_done-comm_module_ts.js.map