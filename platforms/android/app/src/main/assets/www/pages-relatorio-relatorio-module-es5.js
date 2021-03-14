(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorio-relatorio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/relatorio/relatorio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/relatorio/relatorio.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-button class=\"buttonPrint\" slot=\"end\" fill=\"clear\" (click)=\"Imprimir()\">\r\n            <ion-icon name=\"print\"></ion-icon>\r\n        </ion-button>\r\n        <ion-toggle color=\"success\" slot=\"end\" [ngModel]=\"conectPrint\" (ionChange)=\"connectOrDisconnectPrint()\"></ion-toggle>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Relatórios</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"light\">\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n\r\n                <ion-list *ngIf=\"objetos\">\r\n                    <ion-toolbar class=\"SizeToolbar\" text-center color=\"success\">\r\n                        <ion-label class=\"LabelPeriodo\">Período</ion-label>\r\n                        <ion-button color=\"dark\" class=\"calendarStart\" slot=\"start\" fill=\"clear\">De\r\n                            <ion-icon name=\"calendar\"></ion-icon>\r\n                            <ion-datetime class=\"dateTime-1\" cancelText=\"Cancelar\" done-text=\"Ok\" (ionChange)=\"carregarDtInicio( $event )\" [ngModel]=\"dtStart.toISOString()\" display-format=\"DD/MM/YYYY\"></ion-datetime>\r\n                        </ion-button>\r\n\r\n                        <ion-button color=\"dark\" class=\"calendarEnd\" slot=\"start\" fill=\"clear\">Até\r\n                            <ion-icon name=\"calendar\"></ion-icon>\r\n                            <ion-datetime class=\"dateTime-2\" cancelText=\"Cancelar\" done-text=\"Ok\" (ionChange)=\"carregarDtFim( $event )\" [ngModel]=\"dtEnd.toISOString()\" display-format=\"DD/MM/YYYY\"></ion-datetime>\r\n                        </ion-button>\r\n                    </ion-toolbar>\r\n\r\n                    <ion-button class=\"ButtonPorCidade\" expand=\"block\" fill=\"outline\" (click)=\"mostrarPop( $event )\" color=\"success\">\r\n                        <b>Ver Por Cidade</b>\r\n                    </ion-button>\r\n\r\n\r\n\r\n\r\n\r\n                    <ion-card color=\"light\">\r\n                        <!-- Lista de contabilização por período. -->\r\n                        <ion-item color=\"medium\">\r\n                            <ion-label><b>Recebidos (Hoje):</b> {{ objetos.qtdRecebido | currency: 'BRL':true }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label><b>Total de contribuições:</b> {{ objetos.totalQtd | currency: 'BRL':true }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label><b>A Receber:</b> {{ objetos.valorEmAberto | currency: 'BRL':true }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label color=\"medium\"><b>Em Aberto:</b> {{ objetos.qtdEmAberto }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label color=\"success\"><b>Recebidas:</b> {{ objetos.qtdRecebido }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label color=\"danger\"><b>Devolvidas:</b> {{ objetos.qtdDevolvido }}</ion-label>\r\n                        </ion-item>\r\n                        <ion-item color=\"light\">\r\n                            <ion-label color=\"danger\"><b>Canceladas:</b> {{ objetos.qtdCancelado }}</ion-label>\r\n                        </ion-item>\r\n                        <br>\r\n                    </ion-card>\r\n                </ion-list>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/relatorio/relatorio.module.ts ***!
  \*****************************************************/
/*! exports provided: RelatorioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioPageModule", function() { return RelatorioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio.page */ "./src/app/pages/relatorio/relatorio.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");









var routes = [
    {
        path: '',
        component: _relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"]
    }
];
var RelatorioPageModule = /** @class */ (function () {
    function RelatorioPageModule() {
    }
    RelatorioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__["PopinfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"]]
        })
    ], RelatorioPageModule);
    return RelatorioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/relatorio/relatorio.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonPrint {\n  --color-activated: #3880ff !important;\n  color: #10dc60;\n}\n\n.calendarStart {\n  position: fixed;\n  top: 25px;\n  right: 50%;\n  --ripple-color: #192035 !important;\n}\n\n.calendarEnd {\n  position: fixed;\n  top: 25px;\n  left: 50%;\n  --ripple-color: #192035 !important;\n}\n\n.itemCalendar {\n  --inner-padding-bottom: 5% !important;\n}\n\n.sizeLabel {\n  font-size: 20px;\n}\n\n.ListPorCidade {\n  --background: none;\n  background-color: #d7d8da !important;\n}\n\n.LabelPeriodo {\n  margin-bottom: 15% !important;\n}\n\n.SizeToolbar {\n  height: 70px;\n}\n\n.ButtonPorCidade {\n  --border-radius: 10px !important;\n}\n\n.loadingClass {\n  --background: none;\n  --background-color: #192035 !important;\n  --spinner-color: #0ef366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWxhdG9yaW9cXHJlbGF0b3Jpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlbGF0b3Jpby9yZWxhdG9yaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvL3JlbGF0b3Jpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uUHJpbnQge1xyXG4gICAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODgwZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMTBkYzYwO1xyXG59XHJcblxyXG4uY2FsZW5kYXJTdGFydCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhbGVuZGFyRW5kIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiAjMTkyMDM1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtQ2FsZW5kYXIge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNpemVMYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5MaXN0UG9yQ2lkYWRlIHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2Q4ZGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLkxhYmVsUGVyaW9kbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLlNpemVUb29sYmFyIHtcclxuICAgIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLkJ1dHRvblBvckNpZGFkZSB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvYWRpbmdDbGFzcyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcclxuICAgIC0tc3Bpbm5lci1jb2xvcjogIzBlZjM2NiAhaW1wb3J0YW50O1xyXG59IiwiLmJ1dHRvblByaW50IHtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICMzODgwZmYgIWltcG9ydGFudDtcbiAgY29sb3I6ICMxMGRjNjA7XG59XG5cbi5jYWxlbmRhclN0YXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiA1MCU7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMTkyMDM1ICFpbXBvcnRhbnQ7XG59XG5cbi5jYWxlbmRhckVuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAyNXB4O1xuICBsZWZ0OiA1MCU7XG4gIC0tcmlwcGxlLWNvbG9yOiAjMTkyMDM1ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtQ2FsZW5kYXIge1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1JSAhaW1wb3J0YW50O1xufVxuXG4uc2l6ZUxhYmVsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uTGlzdFBvckNpZGFkZSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDhkYSAhaW1wb3J0YW50O1xufVxuXG4uTGFiZWxQZXJpb2RvIHtcbiAgbWFyZ2luLWJvdHRvbTogMTUlICFpbXBvcnRhbnQ7XG59XG5cbi5TaXplVG9vbGJhciB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLkJ1dHRvblBvckNpZGFkZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4ubG9hZGluZ0NsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcbiAgLS1zcGlubmVyLWNvbG9yOiAjMGVmMzY2ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/relatorio/relatorio.page.ts ***!
  \***************************************************/
/*! exports provided: RelatorioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioPage", function() { return RelatorioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");








var RelatorioPage = /** @class */ (function () {
    function RelatorioPage(bluetoothSerial, contribService, datePipe, storage, popoverCtrl, loadingController, toastCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.contribService = contribService;
        this.datePipe = datePipe;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.loadingController = loadingController;
        this.toastCtrl = toastCtrl;
        this.dtStart = new Date();
        this.dtEnd = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
        this.dtInicio = " ";
        this.dtFim = " ";
        this.conectPrint = false;
    }
    RelatorioPage.prototype.ngOnInit = function () {
        this.conversorDate();
        this.carregarPeriodo();
        // this.carregarResumo();
    };
    // Método para carregar a contabilização por período após a seleção da data início e fim.
    // Carrega também os recibos por cidade através do mesmo seletor de data.
    RelatorioPage.prototype.carregarPeriodo = function () {
        this.carregarResumo();
        this.conectPrint = true;
        // this.carregarResumoPorCidade();
    };
    // Carrega o objeto de resumo do mensageiro.
    RelatorioPage.prototype.carregarResumo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentLoading()];
                    case 1:
                        loading = _a.sent();
                        this.contribService.getResumo(this.dtInicio, this.dtFim)
                            .subscribe(function (resp) {
                            _this.objetos = resp;
                            loading.dismiss();
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Mostrando mensagens de confirmação no Toast
    RelatorioPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            mode: "ios",
                            color: "dark"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Imprime as informações relacionadas na impressora.
    RelatorioPage.prototype.Imprimir = function () {
        this.conversorDate();
        this.bluetoothSerial.write('Contabilizando o Periodo:\n' + 'DE' + this.dtInicio + ' A ' + this.dtFim + '\n' +
            'Total de contribuicoes: R$' + this.objetos.totalQtd + '\n' +
            'A Receber: R$' + this.objetos.valorEmAberto.toFixed(2) + '\n' +
            'Recebidas: ' + this.objetos.qtdRecebido + '\n' +
            'Devolvidas: ' + this.objetos.qtdDevolvido + '\n' +
            'Canceladas: ' + this.objetos.qtdCancelado + '\n\n\n');
        console.log('Imprimindo');
    };
    // Teste, guarda recibos no local storage
    // mostrarRecidos() {
    //   this.storage.setRecibos( this.objetos );
    //   console.log('Recibos salvos', this.objetos );
    // }
    // converte datas
    RelatorioPage.prototype.conversorDate = function () {
        this.dtInicio = this.datePipe.transform(this.dtStart, "yyyy-MM-dd");
        this.dtFim = this.datePipe.transform(this.dtEnd, "yyyy-MM-dd");
    };
    // Carrega e transforma a data inicio
    RelatorioPage.prototype.carregarDtInicio = function (event) {
        this.dtInicio = this.datePipe.transform(new Date(event.detail.value), "yyyy-MM-dd");
        console.log('Data Inicio ' + this.dtInicio);
    };
    // Carrega e tranforma a data fim
    RelatorioPage.prototype.carregarDtFim = function (event) {
        this.dtFim = this.datePipe.transform(new Date(event.detail.value), "yyyy-MM-dd");
        console.log('Data Fim ' + this.dtFim);
        this.carregarPeriodo();
    };
    RelatorioPage.prototype.presentLoading = function () {
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
    // Método para conectar e desconectar o dispositivo a impressora via bluetooth.
    RelatorioPage.prototype.connectOrDisconnectPrint = function () {
        if (this.conectPrint = !this.conectPrint) {
            this.bluetoothSerial.connectInsecure("02:36:0D:6B:4D:F3" || false || false || false).subscribe(function (data) {
                console.log('Conectado', data);
            });
            this.presentToast('IMPRESSORA CONECTADA!');
        }
        else {
            this.bluetoothSerial.disconnect().then(function (error) {
                console.log('Desconectado.', error);
            });
            this.bluetoothSerial.clear().then(function () {
                console.log('Limpo');
            });
            this.presentToast('IMPRESSORA DESCONECTADA!');
        }
    };
    // Mostra o resumo por cidade da página relatorio
    RelatorioPage.prototype.mostrarPop = function (evento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"],
                            event: evento,
                            mode: 'ios',
                            translucent: true,
                            animated: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RelatorioPage.ctorParameters = function () { return [
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RelatorioPage.prototype, "objetos", void 0);
    RelatorioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relatorio',
            template: __webpack_require__(/*! raw-loader!./relatorio.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/relatorio/relatorio.page.html"),
            styles: [__webpack_require__(/*! ./relatorio.page.scss */ "./src/app/pages/relatorio/relatorio.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"],
            _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], RelatorioPage);
    return RelatorioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-relatorio-module-es5.js.map