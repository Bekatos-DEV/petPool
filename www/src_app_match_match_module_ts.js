"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_match_match_module_ts"],{

/***/ 8465:
/*!***********************************************!*\
  !*** ./src/app/match/match-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchPageRoutingModule": () => (/* binding */ MatchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.page */ 3058);




const routes = [
    {
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_0__.MatchPage
    }
];
let MatchPageRoutingModule = class MatchPageRoutingModule {
};
MatchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MatchPageRoutingModule);



/***/ }),

/***/ 8686:
/*!***************************************!*\
  !*** ./src/app/match/match.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchPageModule": () => (/* binding */ MatchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _match_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match-routing.module */ 8465);
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.page */ 3058);







let MatchPageModule = class MatchPageModule {
};
MatchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _match_routing_module__WEBPACK_IMPORTED_MODULE_0__.MatchPageRoutingModule
        ],
        declarations: [_match_page__WEBPACK_IMPORTED_MODULE_1__.MatchPage]
    })
], MatchPageModule);



/***/ }),

/***/ 3058:
/*!*************************************!*\
  !*** ./src/app/match/match.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatchPage": () => (/* binding */ MatchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _match_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./match.page.html?ngResource */ 264);
/* harmony import */ var _match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.page.scss?ngResource */ 4796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



/* eslint-disable @typescript-eslint/prefer-for-of */


let MatchPage = class MatchPage {
    constructor(gestureCtrl, zone, platform) {
        this.gestureCtrl = gestureCtrl;
        this.zone = zone;
        this.platform = platform;
        this.animals = [
            {
                name: 'Dog 1',
                img: '../../assets/imgs/1.jpg',
                age: 0,
                gender: 'Golden',
                power: 0,
            },
            {
                name: 'Dog 2',
                img: '../../assets/imgs/2.jpg',
                age: 0,
                gender: 'Boo',
                power: 0,
            },
            {
                name: 'Dog 3',
                img: '../../assets/imgs/3.jpg',
                age: 0,
                gender: 'Morkie',
                power: 0,
            },
            {
                name: 'Dog 4',
                img: '../../assets/imgs/4.jpg',
                age: 0,
                gender: 'Cane Corso',
                power: 0,
            },
        ];
        this.longPressActive = false;
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit() { }
    ngAfterViewInit() {
        const cardArray = this.cards.toArray();
        this.useLongPress(cardArray);
        this.tinderSwipe(cardArray);
    }
    useLongPress(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'long-press',
                onStart: (ev) => {
                    this.longPressActive = true;
                    this.increasePower(i);
                },
                onEnd: (ev) => {
                    this.longPressActive = false;
                },
            });
            gesture.enable(true);
        }
    }
    increasePower(i) {
        console.log();
        setTimeout(() => {
            if (this.longPressActive) {
                this.zone.run(() => {
                    this.animals[i].power++;
                    this.increasePower(i);
                });
            }
        }, 200);
    }
    tinderSwipe(cardArray) {
        for (let i = 0; i < cardArray.length; i++) {
            const card = cardArray[i];
            const gesture = this.gestureCtrl.create({
                el: card.nativeElement,
                gestureName: 'swipe',
                onStart: (ev) => { },
                onMove: (ev) => {
                    card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
                },
                onEnd: (ev) => {
                    card.nativeElement.style.transition = '1s ease-out';
                    if (ev.deltaX > 150) {
                        card.nativeElement.style.transform = `translateX(${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                    }
                    else if (ev.deltaX < -150) {
                        card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 2}deg)`;
                    }
                    else {
                        card.nativeElement.style.transform = '';
                    }
                },
            });
            gesture.enable(true);
        }
    }
};
MatchPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.GestureController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform }
];
MatchPage.propDecorators = {
    cards: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChildren, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef },] }]
};
MatchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-match',
        template: _match_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_match_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MatchPage);



/***/ }),

/***/ 4796:
/*!**************************************************!*\
  !*** ./src/app/match/match.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRjaC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 264:
/*!**************************************************!*\
  !*** ./src/app/match/match.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"text-center\">Eşleştir</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngFor=\"let a of animals\" style=\"position: absolute\">\n    <ion-card-header>\n      <img [src]=\"a.img\" style=\"width: 100%\" />\n      <ion-card-subtitle\n        ><div class=\"row\">\n          <div class=\"col-6\">Yaş :{{ a.age }}</div>\n          <div class=\"col-6 text-right\">Cins : {{ a.gender }}</div>\n        </div>\n      </ion-card-subtitle>\n      <ion-card-title class=\"text-center\">{{ a.name }}</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_match_match_module_ts.js.map