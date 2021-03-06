(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contribuicao-contribuicao-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contribuicao/contribuicao.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contribuicao/contribuicao.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title>Contribuições</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-button color=\"success\" slot=\"end\" fill=\"clear\">\r\n            <ion-icon name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"success\" slot=\"end\" (click)=\"filtrarRecibos()\">\r\n            <ion-icon name=\"funnel\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n    <ion-refresher slot=\"fixed\" pullFactor=\"0.3\" pullMin=\"70\" pullMax=\"130\" (ionRefresh)=\"doRefresh()\">\r\n        <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" refreshingSpinner=\"circles\" refreshingText=\"Atualizando...\">\r\n        </ion-refresher-content>\r\n    </ion-refresher>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-list *ngFor=\"let lista of listaDeRecibos\" [ngSwitch]=\"lista.reagendado\">\r\n                    <ion-card [routerLink]=\"['/recibo', lista.nrorecibo]\" button=\"true\">\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color:#4c8dff\">\r\n                            <ion-label><b>Nome:</b> {{ lista.nomenorecibo }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\r\n                            <ion-label><b>Endereço:</b> {{ lista.enderecosecundario +\", \"+ lista.numerosecundario }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\r\n                            <ion-label><b>Cidade/Bairro:</b> {{ lista.cidadesecundario +\", \"+ lista.bairrosecundario}}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\r\n                            <ion-label><b>Data da cobrança:</b> {{ lista.dtcobranca }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #4c8dff\">\r\n                            <ion-label><b>Categoria:</b> {{ lista.desccategoria }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchCase=\"'S'\" style=\"color: #d33939\">\r\n                            <ion-label><b>Reagendado para:</b> {{ lista.dtreagendamento | date: 'dd/MM/yyyy'}}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchDefault>\r\n                            <ion-label><b>Nome:</b> {{ lista.nomenorecibo }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchDefault>\r\n                            <ion-label><b>Endereço:</b> {{ lista.enderecosecundario +\", \"+ lista.numerosecundario }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchDefault>\r\n                            <ion-label><b>Cidade/Bairro:</b> {{ lista.cidadesecundario +\", \"+ lista.bairrosecundario}}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchDefault>\r\n                            <ion-label><b>Data da cobrança:</b> {{ lista.dtcobranca }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item *ngSwitchDefault>\r\n                            <ion-label><b>Categoria:</b> {{ lista.desccategoria }}</ion-label>\r\n                        </ion-item>\r\n                    </ion-card>\r\n                </ion-list>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contribuicao_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contribuicao.page */ "./src/app/pages/contribuicao/contribuicao.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _contribuicao_page__WEBPACK_IMPORTED_MODULE_6__["ContribuicaoPage"]
    }
];
let ContribuicaoPageModule = class ContribuicaoPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");







let ContribuicaoPage = class ContribuicaoPage {
    constructor(contribService, crudService, loadingController, storage, usuarioService, alertCtrl) {
        this.contribService = contribService;
        this.crudService = crudService;
        this.loadingController = loadingController;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.alertCtrl = alertCtrl;
        this.listaDeRecibos = new Array();
        this.listaRecibosFiltrados = new Array();
        this.n = 25;
        this.comFiltro = false;
    }
    ngOnInit() {
        this.carregarContribuintesApp();
        // this.listaContribuintesWeb();
    }
    // Método que carrega todos os contribuintes do mensageiro.
    carregarContribuintesApp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.presentLoading();
            // Para rodar no app
            this.crudService.getAll().then((data) => {
                this.listaDeRecibos = data;
                console.log("Recibos: ", this.listaDeRecibos);
                if (this.listaDeRecibos.length[37] == "S") {
                    this.cardColors = "secondary";
                }
                else {
                    this.cardColors = "danger";
                }
                loading.dismiss();
                if (this.listaDeRecibos.length == 0) {
                    alert('Não há recibos baixados');
                }
            }, error => {
                console.log('ERROR: ', error);
                loading.dismiss();
            });
        });
    }
    // async listaContribuintesWeb() {
    //   let loading = await this.presentLoading();
    //   let localUser = this.storage.getLocalUser();
    //   if (localUser && localUser.email) {
    //     this.usuarioService.findByEmail(localUser.email)
    //       .subscribe(resp => {
    //         this.usuario = resp;
    //         this.codMens = this.usuario.codmensageiro;
    //         if (this.codMens == 330) {
    //           this.bairro = "AMORIM"
    //         } else if (this.codMens = 876) {
    //           this.bairro = "MORUMBI"
    //         }
    //         // Para rodar na web
    //         this.contribService.getListaRecibos(this.codMens, this.bairro)
    //           .subscribe(resp => {
    //             this.listaDeRecibos = resp;
    //             console.log("Recibos:", this.listaDeRecibos);
    //             loading.dismiss();
    //             if (this.listaDeRecibos == null) {
    //               this.carregarContribuintesApp();
    //             }
    //             if (this.listaDeRecibos.length[4] == "S") {
    //               this.cardColors = "secondary";
    //             } else {
    //               this.cardColors = "danger";
    //             }
    //           }, error => { });
    //       }, error => {
    //         if (error.status == 403) {
    //           console.log(error.status);
    //         }
    //       });
    //   } 
    // }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'loadingClass',
                message: 'Carregando...',
                animated: true,
                spinner: 'circles',
                translucent: true
            });
            loading.present();
            return loading;
            //const { role, data } = await loading.onDidDismiss();
        });
    }
    doRefresh() {
        if (this.comFiltro == false) {
            this.refreshRecibos();
        }
        else {
            this.refreshFilter();
        }
    }
    refreshRecibos() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(resp => {
                this.usuario = resp;
                this.codMens = this.usuario.codmensageiro;
                this.crudService.getAll()
                    .then((data) => {
                    this.listaDeRecibos = data;
                    console.log("Recibos:", this.listaDeRecibos);
                    if (this.listaDeRecibos.length[4] == "S") {
                        this.cardColors = "secondary";
                    }
                    else {
                        this.cardColors = "danger";
                    }
                }, error => {
                    console.log(error);
                });
            }, error => { });
        }
    }
    refreshFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // let loading = await this.presentLoading();
            yield this.crudService.getByBairro(this.bairro_1.toUpperCase().trim())
                .then((data) => {
                this.listaDeRecibos = data;
                // loading.dismiss();
                if (this.listaDeRecibos.length[4] == "S") {
                    this.cardColors = "secondary";
                }
                else {
                    this.cardColors = "danger";
                }
            }, error => {
                console.log('Erro: ', error);
                // loading.dismiss();
            });
        });
    }
    filtrarRecibos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const input = yield this.alertCtrl.create({
                header: 'Filtro',
                subHeader: 'Pelo bairro: ',
                inputs: [
                    {
                        name: 'txtValor',
                        type: 'text',
                        value: ''
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            this.bairro = data.txtValor;
                            console.log('BAIRRO: ', this.bairro);
                            this.bairro_1 = this.bairro;
                            this.filtroPorBairro(this.bairro.toUpperCase().trim());
                        },
                    }
                ]
            });
            yield input.present();
            return this.bairro_1;
        });
    }
    filtroPorBairro(bairro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.presentLoading();
            yield this.crudService.getByBairro(bairro)
                .then((data) => {
                this.listaDeRecibos = data;
                if (this.listaDeRecibos == null) {
                    alert('Bairro não encontrado');
                }
                loading.dismiss();
                this.comFiltro = true;
                if (this.listaDeRecibos.length[4] == "S") {
                    this.cardColors = "secondary";
                }
                else {
                    this.cardColors = "danger";
                }
            }, error => { });
        });
    }
};
ContribuicaoPage.ctorParameters = () => [
    { type: src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
ContribuicaoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contribuicao',
        template: __webpack_require__(/*! raw-loader!./contribuicao.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contribuicao/contribuicao.page.html"),
        styles: [__webpack_require__(/*! ./contribuicao.page.scss */ "./src/app/pages/contribuicao/contribuicao.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"], _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ContribuicaoPage);



/***/ })

}]);
//# sourceMappingURL=pages-contribuicao-contribuicao-module-es2015.js.map