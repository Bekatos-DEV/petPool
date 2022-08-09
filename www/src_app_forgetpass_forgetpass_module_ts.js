"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgetpass_forgetpass_module_ts"],{

/***/ 8985:
/*!*********************************************************!*\
  !*** ./src/app/forgetpass/forgetpass-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpassPageRoutingModule": () => (/* binding */ ForgetpassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgetpass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpass.page */ 1250);




const routes = [
    {
        path: '',
        component: _forgetpass_page__WEBPACK_IMPORTED_MODULE_0__.ForgetpassPage
    }
];
let ForgetpassPageRoutingModule = class ForgetpassPageRoutingModule {
};
ForgetpassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetpassPageRoutingModule);



/***/ }),

/***/ 8871:
/*!*************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpassPageModule": () => (/* binding */ ForgetpassPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgetpass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpass-routing.module */ 8985);
/* harmony import */ var _forgetpass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpass.page */ 1250);







let ForgetpassPageModule = class ForgetpassPageModule {
};
ForgetpassPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgetpass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetpassPageRoutingModule
        ],
        declarations: [_forgetpass_page__WEBPACK_IMPORTED_MODULE_1__.ForgetpassPage]
    })
], ForgetpassPageModule);



/***/ }),

/***/ 1250:
/*!***********************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetpassPage": () => (/* binding */ ForgetpassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgetpass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpass.page.html?ngResource */ 3327);
/* harmony import */ var _forgetpass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpass.page.scss?ngResource */ 9925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ForgetpassPage = class ForgetpassPage {
    constructor() { }
    ngOnInit() {
    }
};
ForgetpassPage.ctorParameters = () => [];
ForgetpassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-forgetpass',
        template: _forgetpass_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgetpass_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetpassPage);



/***/ }),

/***/ 9925:
/*!************************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXRwYXNzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3327:
/*!************************************************************!*\
  !*** ./src/app/forgetpass/forgetpass.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>forgetpass</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgetpass_forgetpass_module_ts.js.map