(self["webpackChunkboxi_app"] = self["webpackChunkboxi_app"] || []).push([["src_app_waitpage_waitpage_module_ts"],{

/***/ 2056:
/*!*****************************************************!*\
  !*** ./src/app/waitpage/waitpage-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitpagePageRoutingModule": () => (/* binding */ WaitpagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _waitpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waitpage.page */ 973);




const routes = [
    {
        path: '',
        component: _waitpage_page__WEBPACK_IMPORTED_MODULE_0__.WaitpagePage
    }
];
let WaitpagePageRoutingModule = class WaitpagePageRoutingModule {
};
WaitpagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WaitpagePageRoutingModule);



/***/ }),

/***/ 5925:
/*!*********************************************!*\
  !*** ./src/app/waitpage/waitpage.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitpagePageModule": () => (/* binding */ WaitpagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _waitpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waitpage-routing.module */ 2056);
/* harmony import */ var _waitpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitpage.page */ 973);







let WaitpagePageModule = class WaitpagePageModule {
};
WaitpagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _waitpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.WaitpagePageRoutingModule
        ],
        declarations: [_waitpage_page__WEBPACK_IMPORTED_MODULE_1__.WaitpagePage]
    })
], WaitpagePageModule);



/***/ }),

/***/ 973:
/*!*******************************************!*\
  !*** ./src/app/waitpage/waitpage.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitpagePage": () => (/* binding */ WaitpagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_waitpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./waitpage.page.html */ 637);
/* harmony import */ var _waitpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitpage.page.scss */ 6860);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);






let WaitpagePage = class WaitpagePage {
    constructor(route, nav) {
        this.route = route;
        this.nav = nav;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            if (params.redirect) {
                this.RedirectPage(params.redirect);
            }
        });
    }
    RedirectPage(page) {
        setTimeout(() => {
            this.nav.navigateRoot(page);
        }, 1500);
    }
};
WaitpagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
WaitpagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-waitpage',
        template: _raw_loader_waitpage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_waitpage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WaitpagePage);



/***/ }),

/***/ 6860:
/*!*********************************************!*\
  !*** ./src/app/waitpage/waitpage.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".banner {\n  position: relative;\n  width: 50%;\n  margin: 45% auto 0 auto;\n}\n.banner .logo {\n  display: block;\n  margin: auto;\n}\n.banner .logo img {\n  display: block;\n  margin: 50px auto;\n  width: 100%;\n}\n.social_btns {\n  position: relative;\n  margin: 0 auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRwYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDWjtBQUtFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUZOIiwiZmlsZSI6IndhaXRwYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNDUlIGF1dG8gMCBhdXRvO1xyXG4gICAgXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46NTBweCBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgLnNvY2lhbF9idG5zIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 637:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/waitpage/waitpage.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"bg_color\" >\n    \n  <div class=\"banner animate__animated animate__fadeInUp\">\n      <div class=\"logo ion-text-center\">\n          <img src=\"assets/icon_wel.png\" >\n      </div>\n  </div>\n\n  <div class=\"social_btns animate__animated animate__zoomInUp ion-text-center\">\n    <ion-spinner name=\"crescent\"></ion-spinner>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_waitpage_waitpage_module_ts.js.map