(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mensagem-mensagem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mensagem/mensagem.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mensagem/mensagem.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-buttons slot=\"start\">\r\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n    <ion-title>Mensagens</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"light\">\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/mensagem/mensagem.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.module.ts ***!
  \***************************************************/
/*! exports provided: MensagemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemPageModule", function() { return MensagemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mensagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagem.page */ "./src/app/pages/mensagem/mensagem.page.ts");







var routes = [
    {
        path: '',
        component: _mensagem_page__WEBPACK_IMPORTED_MODULE_6__["MensagemPage"]
    }
];
var MensagemPageModule = /** @class */ (function () {
    function MensagemPageModule() {
    }
    MensagemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mensagem_page__WEBPACK_IMPORTED_MODULE_6__["MensagemPage"]]
        })
    ], MensagemPageModule);
    return MensagemPageModule;
}());



/***/ }),

/***/ "./src/app/pages/mensagem/mensagem.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%;\n}\n\nion-content {\n  --background: none;\n  background-color: #29292b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVuc2FnZW0vQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxccGFnZXNcXG1lbnNhZ2VtXFxtZW5zYWdlbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnNhZ2VtL21lbnNhZ2VtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnNhZ2VtL21lbnNhZ2VtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyYiAhaW1wb3J0YW50O1xyXG59IiwiLmNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJiICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/mensagem/mensagem.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.ts ***!
  \*************************************************/
/*! exports provided: MensagemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensagemPage", function() { return MensagemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MensagemPage = /** @class */ (function () {
    function MensagemPage() {
    }
    MensagemPage.prototype.ngOnInit = function () {
    };
    MensagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mensagem',
            template: __webpack_require__(/*! raw-loader!./mensagem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mensagem/mensagem.page.html"),
            styles: [__webpack_require__(/*! ./mensagem.page.scss */ "./src/app/pages/mensagem/mensagem.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MensagemPage);
    return MensagemPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-mensagem-mensagem-module-es5.js.map