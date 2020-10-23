(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-beneficio-beneficio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/beneficio/beneficio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/beneficio/beneficio.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Benefícios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center color=\"light\">\n\n  <ion-row>\n    <ion-col>\n      <ion-button class=\"position\" shape=\"round\" fill=\"clear\">\n        <ion-icon class=\"custom-icon\" src=\"assets/icon/fuel.svg\"></ion-icon>\n      </ion-button>\n      <ion-label class=\"position-label\">Combustível</ion-label>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/beneficio/beneficio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/beneficio/beneficio.module.ts ***!
  \*****************************************************/
/*! exports provided: BeneficioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficioPageModule", function() { return BeneficioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _beneficio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./beneficio.page */ "./src/app/pages/beneficio/beneficio.page.ts");







const routes = [
    {
        path: '',
        component: _beneficio_page__WEBPACK_IMPORTED_MODULE_6__["BeneficioPage"]
    }
];
let BeneficioPageModule = class BeneficioPageModule {
};
BeneficioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_beneficio_page__WEBPACK_IMPORTED_MODULE_6__["BeneficioPage"]]
    })
], BeneficioPageModule);



/***/ }),

/***/ "./src/app/pages/beneficio/beneficio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/beneficio/beneficio.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-icon {\n  font-size: 58px;\n}\n\n.position {\n  position: fixed;\n  height: 20%;\n  right: 0%;\n  left: 0px;\n  --ripple-color: white !important;\n}\n\n.position-label {\n  position: fixed;\n  margin-top: 27%;\n  right: 0%;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuZWZpY2lvL0M6XFxVc2Vyc1xcZWxpc2V1XFxEZXNrdG9wXFwxMC1leHByZXNzL3NyY1xcYXBwXFxwYWdlc1xcYmVuZWZpY2lvXFxiZW5lZmljaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9iZW5lZmljaW8vYmVuZWZpY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmVuZWZpY2lvL2JlbmVmaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNThweDtcclxufVxyXG5cclxuLnBvc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBvc2l0aW9uLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDI3JTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxufSIsIi5jdXN0b20taWNvbiB7XG4gIGZvbnQtc2l6ZTogNThweDtcbn1cblxuLnBvc2l0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDIwJTtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiAwcHg7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ucG9zaXRpb24tbGFiZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IDI3JTtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/beneficio/beneficio.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/beneficio/beneficio.page.ts ***!
  \***************************************************/
/*! exports provided: BeneficioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficioPage", function() { return BeneficioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let BeneficioPage = class BeneficioPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
};
BeneficioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
BeneficioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beneficio',
        template: __webpack_require__(/*! raw-loader!./beneficio.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/beneficio/beneficio.page.html"),
        styles: [__webpack_require__(/*! ./beneficio.page.scss */ "./src/app/pages/beneficio/beneficio.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], BeneficioPage);



/***/ })

}]);
//# sourceMappingURL=pages-beneficio-beneficio-module-es2015.js.map