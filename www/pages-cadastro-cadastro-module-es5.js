(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cadastro-cadastro-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/cadastro/cadastro.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Cadastro</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n\r\n    <ion-toolbar class=\"sizeToolbar\" text-center color=\"success\">\r\n        <ion-label color=\"dark\">Dados obrigatórios</ion-label>\r\n    </ion-toolbar>\r\n\r\n    <form [formGroup]=\"fContribuinte\">\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"nome\" placeholder=\"Nome\" type=\"text\" formControlName=\"nome\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"telefone\" placeholder=\"Telefone\" type=\"tel\" formControlName=\"telefone\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"valor\" placeholder=\"Valor da doação\" type=\"number\" formControlName=\"valor\" required=\"true\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <ion-toolbar class=\"sizeToolbar\" text-center color=\"medium\">\r\n            <ion-label color=\"dark\">Dados não obrigatórios</ion-label>\r\n        </ion-toolbar>\r\n\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"endereco\" placeholder=\"Endereço\" type=\"text\" formControlName=\"endereco\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n            <ion-col size=\"3\">\r\n                <ion-item>\r\n                    <ion-input name=\"numero\" placeholder=\"Nº\" type=\"number\" formControlName=\"numero\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"bairro\" placeholder=\"Bairro\" type=\"text\" formControlName=\"bairro\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"cidade\" placeholder=\"Cidade\" type=\"text\" formControlName=\"cidade\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item>\r\n                    <ion-input name=\"observacoes\" placeholder=\"Observações\" type=\"text\" formControlName=\"observacoes\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <ion-button (click)=\"submitForm()\" [disabled]=\"fContribuinte.invalid\" color=\"success\">Gerar Doador</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <ion-button [style.visibility]=\"isVisible ? 'visible' : 'hidden'\" color=\"success\" (click)=\"setObjRecibo()\">\r\n                    Gerar Recibo\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n\r\n    </form>\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/class/contribuintes.ts":
/*!****************************************!*\
  !*** ./src/app/class/contribuintes.ts ***!
  \****************************************/
/*! exports provided: Contribuintes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contribuintes", function() { return Contribuintes; });
var Contribuintes = /** @class */ (function () {
    function Contribuintes() {
    }
    return Contribuintes;
}());



/***/ }),

/***/ "./src/app/class/recibo.ts":
/*!*********************************!*\
  !*** ./src/app/class/recibo.ts ***!
  \*********************************/
/*! exports provided: Recibo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recibo", function() { return Recibo; });
var Recibo = /** @class */ (function () {
    function Recibo() {
    }
    return Recibo;
}());



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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../class/recibos */ "./src/app/class/recibos.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _class_contribuintes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../class/contribuintes */ "./src/app/class/contribuintes.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _class_recibo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../class/recibo */ "./src/app/class/recibo.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");













var CadastroPage = /** @class */ (function () {
    function CadastroPage(fBuilder, storage, crudService, loadingController, usuarioService, router, contribService, datePipe, navCtrl) {
        this.fBuilder = fBuilder;
        this.storage = storage;
        this.crudService = crudService;
        this.loadingController = loadingController;
        this.usuarioService = usuarioService;
        this.router = router;
        this.contribService = contribService;
        this.datePipe = datePipe;
        this.navCtrl = navCtrl;
        this.contribuinte = new _class_contribuintes__WEBPACK_IMPORTED_MODULE_4__["Contribuintes"]();
        this.recibo = new _class_recibo__WEBPACK_IMPORTED_MODULE_8__["Recibo"]();
        this.isVisible = false;
        this.datadorecebimento = '';
        this.dataFunc = new Date();
        this.dtOperacao = '';
        this.fContribuinte = this.fBuilder.group({
            'nome': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2)])],
            'telefone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)])],
            'valor': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            'endereco': [null],
            'numero': [null],
            'bairro': [null],
            'cidade': [null],
            'observacoes': [null]
        });
    }
    CadastroPage.prototype.ngOnInit = function () {
        var _this = this;
        //Exemplo de como setar
        // this.fContribuinte.get('nome').setValue(this.contribuinte.nome);
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(function (resp) {
                _this.usuario = resp;
                _this.codMens = resp.codmensageiro;
                _this.codUsuario = resp.codusuario;
                console.log(_this.usuario);
            }, function (error) { });
        }
    };
    CadastroPage.prototype.setObj = function () {
        this.contribuinte = new _class_contribuintes__WEBPACK_IMPORTED_MODULE_4__["Contribuintes"]();
        this.contribuinte.nomenorecibo = this.fContribuinte.value.nome;
        this.contribuinte.telefoneprincipal = this.fContribuinte.value.telefone;
        this.contribuinte.enderecosecundario = this.fContribuinte.value.endereco;
        this.contribuinte.numerosecundario = this.fContribuinte.value.numero;
        this.contribuinte.bairrosecundario = this.fContribuinte.value.bairro;
        this.contribuinte.cidadesecundario = this.fContribuinte.value.cidade;
        this.contribuinte.observacoes = this.fContribuinte.value.observacoes;
        this.contribuinte.codmensageiro = this.codMens;
        this.contribuinte.codstatus = 1;
        this.contribuinte.codcategoria = 5;
        this.contribuinte.codfunc = this.codMens;
        this.contribuinte.stsistema = 2;
        this.postContrib();
    };
    CadastroPage.prototype.postContrib = function () {
        var _this = this;
        this.contribService.postContribuinte(this.contribuinte)
            .subscribe(function (resp) {
            alert('Contribuinte inserido com sucesso!');
            console.log('Teste 1: ', resp);
            _this.getUltContrib();
        });
    };
    CadastroPage.prototype.getUltContrib = function () {
        var _this = this;
        this.contribService.getUltContribuinte()
            .subscribe(function (resp) {
            _this.ultimoContrib = resp;
            console.log('UltContrib: ', _this.ultimoContrib);
            _this.isVisible = true;
        });
    };
    CadastroPage.prototype.submitForm = function () {
        this.setObj();
        console.log(this.contribuinte);
    };
    CadastroPage.prototype.setObjRecibo = function () {
        this.datadorecebimento = this.datePipe.transform(this.dataFunc, 'dd/MM/yyyy');
        this.objRecibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_1__["Recibos"](null, 'N', new Date(), new Date(), null, this.fContribuinte.value.nome, null, new Date(), null, this.fContribuinte.value.valor, this.fContribuinte.value.valor, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'G', null, '01/01', 2, null, null, null, 73, this.codMens, 5, null, null, this.ultimoContrib.codcontrib, this.codUsuario, this.fContribuinte.value.endereco, this.fContribuinte.value.numero, this.fContribuinte.value.bairro, this.fContribuinte.value.cidade, null, null, null, 'EVENTUAL', this.fContribuinte.value.observacoes, this.datadorecebimento);
        this.postReciboGerado();
    };
    CadastroPage.prototype.postReciboGerado = function () {
        var _this = this;
        console.log('OBJRECIBO: ', this.objRecibo);
        this.contribService.postReciboGerado(this.objRecibo)
            .subscribe(function () {
            console.log('Recibo inserido com sucesso!');
            setTimeout(function () {
                _this.carregarUltRecibo();
            }, 1500);
        }, function (error) {
            console.log(error);
        });
    };
    CadastroPage.prototype.carregarUltRecibo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        loading = _a.sent();
                        this.dtOperacao = this.datePipe.transform(this.objRecibo.dtoperacao, 'yyyy-MM-dd');
                        this.contribService.getUltRecibo(this.codMens, this.dtOperacao)
                            .subscribe(function (resp) {
                            _this.objRecibo3 = resp;
                            var nrorecibo = _this.objRecibo3.nrorecibo;
                            console.log('RECIBO: ', _this.objRecibo3);
                            _this.crudService.insert(_this.objRecibo3);
                            loading.dismiss();
                            setTimeout(function () {
                                _this.router.navigate(['/recibo', nrorecibo]);
                            }, 2000);
                        }, function (error) {
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CadastroPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'loadingClass',
                            message: 'Por favor aguarde...',
                            animated: true,
                            spinner: 'circles',
                            translucent: true
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    CadastroPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_9__["CrudService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_7__["ContribuintesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"] }
    ]; };
    CadastroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! raw-loader!./cadastro.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/cadastro/cadastro.page.html"),
            styles: [__webpack_require__(/*! ./cadastro.page.scss */ "./src/app/pages/cadastro/cadastro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _services_crud_service__WEBPACK_IMPORTED_MODULE_9__["CrudService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["LoadingController"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_7__["ContribuintesService"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]])
    ], CadastroPage);
    return CadastroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cadastro-cadastro-module-es5.js.map