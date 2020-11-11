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

module.exports = ".custom-icon {\n  font-size: 58px;\n}\n\n.position {\n  position: fixed;\n  height: 20%;\n  right: 0%;\n  left: 0px;\n  --ripple-color: white !important;\n}\n\n.position-label {\n  position: fixed;\n  margin-top: 27%;\n  right: 0%;\n  left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmVuZWZpY2lvL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxiZW5lZmljaW9cXGJlbmVmaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JlbmVmaWNpby9iZW5lZmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iZW5lZmljaW8vYmVuZWZpY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3VzdG9tLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1OHB4O1xyXG59XHJcblxyXG4ucG9zaXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4ucG9zaXRpb24tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMjclO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG59IiwiLmN1c3RvbS1pY29uIHtcbiAgZm9udC1zaXplOiA1OHB4O1xufVxuXG4ucG9zaXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGhlaWdodDogMjAlO1xuICByaWdodDogMCU7XG4gIGxlZnQ6IDBweDtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5wb3NpdGlvbi1sYWJlbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbWFyZ2luLXRvcDogMjclO1xuICByaWdodDogMCU7XG4gIGxlZnQ6IDBweDtcbn0iXX0= */"

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