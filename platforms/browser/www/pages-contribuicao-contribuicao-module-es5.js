(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contribuicao-contribuicao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contribuicao/contribuicao.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contribuicao/contribuicao.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-button color=\"success\" slot=\"end\" fill=\"clear\">\n            <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n        <ion-title>Contribuições</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n    <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"circles\" refreshingText=\"Atualizando...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col>\n                <ion-list *ngFor=\"let lista of listaDeRecibos\" [ngSwitch]=\"lista.reagendado\">\n                    <ion-card (click)=\"verDetalhes( lista.nrorecibo )\" button=\"true\">\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color:#4c8dff\">\n                            <ion-label><b>Nome:</b> {{ lista.nomenorecibo }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\n                            <ion-label><b>Endereço:</b> {{ lista.enderecosecundario +\", \"+ lista.numerosecundario +\", \"+ lista.bairrosecundario +\", \"+ lista.cidadesecundario }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\n                            <ion-label><b>Data da cobrança:</b> {{ lista.dtcobranca }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\n                            <ion-label><b>Categoria:</b> {{ lista.desccategoria }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #d33939\">\n                            <ion-label><b>Reagendado para:</b> {{ lista.dtreagendamento | date: 'dd/MM/yyyy'}}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchDefault>\n                            <ion-label><b>Nome:</b> {{ lista.nomenorecibo }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchDefault>\n                            <ion-label><b>Endereço:</b> {{ lista.enderecosecundario +\", \"+ lista.numerosecundario +\", \"+ lista.bairrosecundario +\", \"+ lista.cidadesecundario }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchDefault>\n                            <ion-label><b>Data da cobrança:</b> {{ lista.dtcobranca }}</ion-label>\n                        </ion-item>\n                        <ion-item *ngSwitchDefault>\n                            <ion-label><b>Categoria:</b> {{ lista.desccategoria }}</ion-label>\n                        </ion-item>\n                    </ion-card>\n                </ion-list>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/contribuicao/contribuicao.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contribuicao/contribuicao.module.ts ***!
  \***********************************************************/
/*! exports provided: ContribuicaoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuicaoPageModule", function() { return ContribuicaoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contribuicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contribuicao.page */ "./src/app/pages/contribuicao/contribuicao.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _contribuicao_page__WEBPACK_IMPORTED_MODULE_6__["ContribuicaoPage"]
    }
];
var ContribuicaoPageModule = /** @class */ (function () {
    function ContribuicaoPageModule() {
    }
    ContribuicaoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contribuicao_page__WEBPACK_IMPORTED_MODULE_6__["ContribuicaoPage"]]
        })
    ], ContribuicaoPageModule);
    return ContribuicaoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contribuicao/contribuicao.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/contribuicao/contribuicao.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list {\n  background: none !important;\n}\n\n.loadingClass {\n  --background: none;\n  --background-color: #192035 !important;\n  --spinner-color: #0ef366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udHJpYnVpY2FvL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjb250cmlidWljYW9cXGNvbnRyaWJ1aWNhby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRyaWJ1aWNhby9jb250cmlidWljYW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udHJpYnVpY2FvL2NvbnRyaWJ1aWNhby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2FkaW5nQ2xhc3Mge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMDM1ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXNwaW5uZXItY29sb3I6ICMwZWYzNjYgIWltcG9ydGFudDtcclxufSIsImlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZ0NsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcbiAgLS1zcGlubmVyLWNvbG9yOiAjMGVmMzY2ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contribuicao/contribuicao.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contribuicao/contribuicao.page.ts ***!
  \*********************************************************/
/*! exports provided: ContribuicaoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuicaoPage", function() { return ContribuicaoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _components_detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/detalhe/detalhe.component */ "./src/app/components/detalhe/detalhe.component.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");






var ContribuicaoPage = /** @class */ (function () {
    function ContribuicaoPage(navCtrl, contribService, modalCtrl, crudService, loadingController) {
        this.navCtrl = navCtrl;
        this.contribService = contribService;
        this.modalCtrl = modalCtrl;
        this.crudService = crudService;
        this.loadingController = loadingController;
        this.listaDeRecibos = new Array();
        this.n = 25;
    }
    ContribuicaoPage.prototype.ngOnInit = function () {
        this.carregarContribuintes();
    };
    // Método que carrega todos os contribuintes do mensageiro.
    ContribuicaoPage.prototype.carregarContribuintes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        loading = _a.sent();
                        // Para rodar no app
                        /*this.crudService.getAll().then((data:Recibos[]) => {
                           this.listaDeRecibos = data;
                        });*/
                        // Para rodar na web
                        this.contribService.getListaRecibos()
                            .subscribe(function (resp) {
                            _this.listaDeRecibos = resp;
                            console.log("Recibos:", _this.listaDeRecibos);
                            loading.dismiss();
                            if (_this.listaDeRecibos.length[4] == "S") {
                                _this.cardColors = "secondary";
                            }
                            else {
                                _this.cardColors = "danger";
                            }
                        }, function (error) { });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Método com promessa para mostrar os detalhes do recibo.
    ContribuicaoPage.prototype.verDetalhes = function (nrorecibo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _components_detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_4__["DetalheComponent"],
                            animated: true,
                            componentProps: {
                                nrorecibo: nrorecibo
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContribuicaoPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'loadingClass',
                            message: 'Carregando...',
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
    ContribuicaoPage.prototype.doRefresh = function (event) {
        this.refreshRecibos();
        setTimeout(function () {
            event.target.complete();
        }, 2000);
    };
    ContribuicaoPage.prototype.refreshRecibos = function () {
        var _this = this;
        this.contribService.getListaRecibos()
            .subscribe(function (resp) {
            _this.listaDeRecibos = resp;
            console.log("Recibos:", _this.listaDeRecibos);
            if (_this.listaDeRecibos.length[4] == "S") {
                _this.cardColors = "secondary";
            }
            else {
                _this.cardColors = "danger";
            }
        }, function (error) { });
    };
    ContribuicaoPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    ContribuicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribuicao',
            template: __webpack_require__(/*! raw-loader!./contribuicao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contribuicao/contribuicao.page.html"),
            styles: [__webpack_require__(/*! ./contribuicao.page.scss */ "./src/app/pages/contribuicao/contribuicao.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], ContribuicaoPage);
    return ContribuicaoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contribuicao-contribuicao-module-es5.js.map