(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mensagem-mensagem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mensagem/mensagem.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mensagem/mensagem.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Mensagens</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"light\">\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mensagem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mensagem.page */ "./src/app/pages/mensagem/mensagem.page.ts");







const routes = [
    {
        path: '',
        component: _mensagem_page__WEBPACK_IMPORTED_MODULE_6__["MensagemPage"]
    }
];
let MensagemPageModule = class MensagemPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/mensagem/mensagem.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/mensagem/mensagem.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%;\n}\n\nion-content {\n  --background: none;\n  background-color: #29292b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVuc2FnZW0vQzpcXFVzZXJzXFxlbGlzZXVcXERlc2t0b3BcXDEwLWV4cHJlc3Mvc3JjXFxhcHBcXHBhZ2VzXFxtZW5zYWdlbVxcbWVuc2FnZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW5zYWdlbS9tZW5zYWdlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW5zYWdlbS9tZW5zYWdlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmIgIWltcG9ydGFudDtcclxufSIsIi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyYiAhaW1wb3J0YW50O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MensagemPage = class MensagemPage {
    constructor() { }
    ngOnInit() {
    }
};
MensagemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mensagem',
        template: __webpack_require__(/*! raw-loader!./mensagem.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mensagem/mensagem.page.html"),
        styles: [__webpack_require__(/*! ./mensagem.page.scss */ "./src/app/pages/mensagem/mensagem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MensagemPage);



/***/ })

}]);
//# sourceMappingURL=pages-mensagem-mensagem-module-es2015.js.map