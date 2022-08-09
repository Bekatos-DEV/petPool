"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_adoption_adoption_module_ts"],{

/***/ 7494:
/*!*****************************************************!*\
  !*** ./src/app/adoption/adoption-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdoptionPageRoutingModule": () => (/* binding */ AdoptionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _adoption_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adoption.page */ 4990);




const routes = [
    {
        path: '',
        component: _adoption_page__WEBPACK_IMPORTED_MODULE_0__.AdoptionPage
    }
];
let AdoptionPageRoutingModule = class AdoptionPageRoutingModule {
};
AdoptionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdoptionPageRoutingModule);



/***/ }),

/***/ 5207:
/*!*********************************************!*\
  !*** ./src/app/adoption/adoption.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdoptionPageModule": () => (/* binding */ AdoptionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _adoption_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adoption-routing.module */ 7494);
/* harmony import */ var _adoption_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adoption.page */ 4990);







let AdoptionPageModule = class AdoptionPageModule {
};
AdoptionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adoption_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdoptionPageRoutingModule
        ],
        declarations: [_adoption_page__WEBPACK_IMPORTED_MODULE_1__.AdoptionPage]
    })
], AdoptionPageModule);



/***/ }),

/***/ 4990:
/*!*******************************************!*\
  !*** ./src/app/adoption/adoption.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdoptionPage": () => (/* binding */ AdoptionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _adoption_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adoption.page.html?ngResource */ 5291);
/* harmony import */ var _adoption_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adoption.page.scss?ngResource */ 3170);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AdoptionPage = class AdoptionPage {
    constructor() { }
    ngOnInit() {
    }
};
AdoptionPage.ctorParameters = () => [];
AdoptionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-adoption',
        template: _adoption_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_adoption_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdoptionPage);



/***/ }),

/***/ 3170:
/*!********************************************************!*\
  !*** ./src/app/adoption/adoption.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG9wdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5291:
/*!********************************************************!*\
  !*** ./src/app/adoption/adoption.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>adoption</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_adoption_adoption_module_ts.js.map