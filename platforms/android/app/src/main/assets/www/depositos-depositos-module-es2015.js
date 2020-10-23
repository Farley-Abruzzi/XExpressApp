(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["depositos-depositos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/depositos/depositos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/depositos/depositos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      DepositosX-Express\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"light\">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button color=\"success\" expand=\"block\" href=\"http://localhost:4200/comunicar-deposito\">\n          Comunicar depositos\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/depositos/depositos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/depositos/depositos.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _depositos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depositos.page */ "./src/app/pages/depositos/depositos.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _depositos_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_depositos_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/depositos/depositos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/depositos/depositos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwb3NpdG9zL0M6XFxVc2Vyc1xcZWxpc2V1XFxEZXNrdG9wXFwxMC1leHByZXNzL3NyY1xcYXBwXFxwYWdlc1xcZGVwb3NpdG9zXFxkZXBvc2l0b3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZXBvc2l0b3MvZGVwb3NpdG9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlcG9zaXRvcy9kZXBvc2l0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/depositos/depositos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/depositos/depositos.page.ts ***!
  \***************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");



let Tab1Page = class Tab1Page {
    constructor(contribService) {
        this.contribService = contribService;
    }
    ngOnInit() {
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./depositos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/depositos/depositos.page.html"),
        styles: [__webpack_require__(/*! ./depositos.page.scss */ "./src/app/pages/depositos/depositos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=depositos-depositos-module-es2015.js.map