(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro/cadastro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Cadastro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n\r\n    <ion-toolbar class=\"sizeToolbar\" text-center color=\"success\">\r\n        <ion-label color=\"dark\">Dados obrigatórios</ion-label>\r\n    </ion-toolbar>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"nome\" placeholder=\"Nome\" type=\"text\" required=\"true\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"telefone\" placeholder=\"Telefone\" type=\"tel\" required=\"true\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"valor\" placeholder=\"Valor da doação\" type=\"number\" required=\"true\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n    <ion-toolbar class=\"sizeToolbar\" text-center color=\"medium\">\r\n        <ion-label color=\"dark\">Dados não obrigatórios</ion-label>\r\n    </ion-toolbar>\r\n\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"endereco\" placeholder=\"Endereço\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n            <ion-item>\r\n                <ion-input name=\"numero\" placeholder=\"Nº\" type=\"number\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"bairro\" placeholder=\"Bairro\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"cidade\" placeholder=\"Cidade\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-item>\r\n                <ion-input name=\"observacoes\" placeholder=\"Observações\" type=\"text\"></ion-input>\r\n            </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row text-center>\r\n        <ion-col>\r\n            <ion-button color=\"success\">Gerar Doador</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.module.ts ***!
  \***************************************************/
/*! exports provided: CadastroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cadastro.page */ "./src/app/pages/cadastro/cadastro.page.ts");







var routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]
    }
];
var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["CadastroPage"]]
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 100%;\n}\n\nion-content {\n  --background: none;\n  background-color: #29292b !important;\n}\n\n.sizeToolbar {\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FkYXN0cm8vQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxccGFnZXNcXGNhZGFzdHJvXFxjYWRhc3Ryby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhZGFzdHJvL2NhZGFzdHJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZVRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59IiwiLmNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplVG9vbGJhciB7XG4gIGhlaWdodDogNDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/cadastro/cadastro.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/cadastro/cadastro.page.ts ***!
  \*************************************************/
/*! exports provided: CadastroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPage", function() { return CadastroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CadastroPage = /** @class */ (function () {
    function CadastroPage() {
    }
    CadastroPage.prototype.ngOnInit = function () {
    };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/pages/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cadastro-module-es5.js.map