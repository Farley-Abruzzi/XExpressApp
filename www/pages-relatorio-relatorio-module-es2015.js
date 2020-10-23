(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-relatorio-relatorio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/relatorio/relatorio.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/relatorio/relatorio.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-button class=\"buttonPrint\" slot=\"end\" fill=\"clear\" (click)=\"Imprimir()\">\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-button>\n    <ion-button class=\"buttonPrint\" slot=\"end\" fill=\"clear\" (click)=\"mostrarRecidos()\">\n      <ion-icon name=\"save\"></ion-icon>\n    </ion-button>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Relatórios</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n\n          \n\n        <ion-list *ngIf=\"objetos\">\n          <ion-toolbar class=\"SizeToolbar\" text-center color=\"success\">\n            <ion-label class=\"LabelPeriodo\">Período</ion-label>\n            <ion-button color=\"dark\" class=\"calendarStart\" slot=\"start\" fill=\"clear\">De\n              <ion-icon name=\"calendar\"></ion-icon>\n              <ion-datetime class=\"dateTime-1\" cancelText=\"Cancelar\" done-text=\"Ok\" (ionChange)=\"carregarDtInicio( $event )\" [ngModel]=\"dtStart.toISOString()\"\n                display-format=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-button>\n      \n            <ion-button color=\"dark\" class=\"calendarEnd\" slot=\"start\" fill=\"clear\">Até\n              <ion-icon name=\"calendar\"></ion-icon>\n              <ion-datetime class=\"dateTime-2\" cancelText=\"Cancelar\" done-text=\"Ok\" (ionChange)=\"carregarDtFim( $event )\" [ngModel]=\"dtEnd.toISOString()\"\n                display-format=\"DD/MM/YYYY\"></ion-datetime>\n            </ion-button>\n          </ion-toolbar>\n\n          <ion-button class=\"ButtonPorCidade\" expand=\"block\" fill=\"outline\" (click)=\"mostrarPop( $event )\" color=\"success\">\n            <b>Ver Por Cidade</b>\n          </ion-button>\n          \n            \n\n          \n      \n          <ion-card color=\"light\">\n            <!-- Lista de contabilização por período. -->\n            <ion-item color=\"medium\">\n              <ion-label><b>Recebidos (Hoje):</b> R$ {{ objetos.qtdRecebido.toFixed(2) }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label><b>Total de contribuições:</b> R$ {{ objetos.totalQtd.toFixed(2) }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label><b>A Receber:</b> R$ {{ objetos.valorEmAberto.toFixed(2) }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label color=\"medium\"><b>Em Aberto:</b> {{ objetos.qtdEmAberto }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label color=\"success\"><b>Recebidas:</b> {{ objetos.qtdRecebido }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label color=\"danger\"><b>Devolvidas:</b> {{ objetos.qtdDevolvido }}</ion-label>\n            </ion-item>\n            <ion-item color=\"light\">\n              <ion-label color=\"danger\"><b>Canceladas:</b> {{ objetos.qtdCancelado }}</ion-label>\n            </ion-item>\n            <br>\n          </ion-card>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _relatorio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relatorio.page */ "./src/app/pages/relatorio/relatorio.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");









const routes = [
    {
        path: '',
        component: _relatorio_page__WEBPACK_IMPORTED_MODULE_6__["RelatorioPage"]
    }
];
let RelatorioPageModule = class RelatorioPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/relatorio/relatorio.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/relatorio/relatorio.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttonPrint {\n  --color-activated: #3880ff !important;\n  color: #10dc60;\n}\n\n.calendarStart {\n  position: fixed;\n  top: 25px;\n  right: 50%;\n  --ripple-color: #192035 !important;\n}\n\n.calendarEnd {\n  position: fixed;\n  top: 25px;\n  left: 50%;\n  --ripple-color: #192035 !important;\n}\n\n.itemCalendar {\n  --inner-padding-bottom: 5% !important;\n}\n\n.sizeLabel {\n  font-size: 20px;\n}\n\n.ListPorCidade {\n  --background: none;\n  background-color: #d7d8da !important;\n}\n\n.LabelPeriodo {\n  margin-bottom: 15% !important;\n}\n\n.SizeToolbar {\n  height: 70px;\n}\n\n.ButtonPorCidade {\n  --border-radius: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsYXRvcmlvL0M6XFxVc2Vyc1xcZWxpc2V1XFxEZXNrdG9wXFwxMC1leHByZXNzL3NyY1xcYXBwXFxwYWdlc1xccmVsYXRvcmlvXFxyZWxhdG9yaW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW8vcmVsYXRvcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxxQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxhdG9yaW8vcmVsYXRvcmlvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25QcmludCB7XHJcbiAgICAtLWNvbG9yLWFjdGl2YXRlZDogIzM4ODBmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMxMGRjNjA7XHJcbn1cclxuXHJcbi5jYWxlbmRhclN0YXJ0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMjVweDtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbiAgICAtLXJpcHBsZS1jb2xvcjogIzE5MjAzNSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FsZW5kYXJFbmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLS1yaXBwbGUtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW1DYWxlbmRhciB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiA1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZUxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLkxpc3RQb3JDaWRhZGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZDhkYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uTGFiZWxQZXJpb2RvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uU2l6ZVRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uQnV0dG9uUG9yQ2lkYWRlIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIuYnV0dG9uUHJpbnQge1xuICAtLWNvbG9yLWFjdGl2YXRlZDogIzM4ODBmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogIzEwZGM2MDtcbn1cblxuLmNhbGVuZGFyU3RhcnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjVweDtcbiAgcmlnaHQ6IDUwJTtcbiAgLS1yaXBwbGUtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcbn1cblxuLmNhbGVuZGFyRW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDI1cHg7XG4gIGxlZnQ6IDUwJTtcbiAgLS1yaXBwbGUtY29sb3I6ICMxOTIwMzUgIWltcG9ydGFudDtcbn1cblxuLml0ZW1DYWxlbmRhciB7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDUlICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplTGFiZWwge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5MaXN0UG9yQ2lkYWRlIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkOGRhICFpbXBvcnRhbnQ7XG59XG5cbi5MYWJlbFBlcmlvZG8ge1xuICBtYXJnaW4tYm90dG9tOiAxNSUgIWltcG9ydGFudDtcbn1cblxuLlNpemVUb29sYmFyIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uQnV0dG9uUG9yQ2lkYWRlIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_data_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-local.service */ "./src/app/services/data-local.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");








let RelatorioPage = class RelatorioPage {
    constructor(bluetoothSerial, contribService, datePipe, dataLocal, popoverCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.contribService = contribService;
        this.datePipe = datePipe;
        this.dataLocal = dataLocal;
        this.popoverCtrl = popoverCtrl;
        this.dtStart = new Date();
        this.dtEnd = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
        this.dtInicio = " ";
        this.dtFim = " ";
    }
    ngOnInit() {
        this.conversorDate();
        this.connect();
        this.carregarPeriodo();
        // this.carregarResumo();
    }
    // Método para carregar a contabilização por período após a seleção da data início e fim.
    // Carrega também os recibos por cidade através do mesmo seletor de data.
    carregarPeriodo() {
        this.carregarResumo();
        // this.carregarResumoPorCidade();
    }
    // Carrega o objeto de resumo do mensageiro.
    carregarResumo() {
        this.contribService.getResumo(this.dtInicio, this.dtFim)
            .subscribe(resp => {
            this.objetos = resp;
        });
    }
    // Método para conectar o dispositivo a impressora via bluetooth.
    connect() {
        this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe((data) => {
            console.log('Conectado', data);
        });
    }
    // Desconecta o dispositivo da impressora.
    disconnectDevices() {
        this.bluetoothSerial.disconnect().then((error) => {
            console.log('Dispositivo desconectado.', error);
        });
        this.bluetoothSerial.clear().then(() => {
            console.log('Limpo');
        });
    }
    // Imprime as informações relacionadas na impressora.
    Imprimir() {
        this.conversorDate();
        this.bluetoothSerial.write('Contabilizando o Periodo:\n' + 'DE' + this.dtInicio + ' A ' + this.dtFim + '\n' +
            'Total de contribuicoes: R$' + this.objetos.totalQtd + '\n' +
            'A Receber: R$' + this.objetos.valorEmAberto.toFixed(2) + '\n' +
            'Recebidas: ' + this.objetos.qtdRecebido + '\n' +
            'Devolvidas: ' + this.objetos.qtdDevolvido + '\n' +
            'Canceladas: ' + this.objetos.qtdCancelado + '\n\n\n');
        console.log('Imprimindo');
    }
    // Teste, guarda recibos no local storage
    mostrarRecidos() {
        this.dataLocal.guardarRecibos(this.objetos);
        console.log('Recibos salvos', this.objetos);
    }
    // converte datas
    conversorDate() {
        this.dtInicio = this.datePipe.transform(this.dtStart, "yyyy-MM-dd");
        this.dtFim = this.datePipe.transform(this.dtEnd, "yyyy-MM-dd");
    }
    // Carrega e transforma a data inicio
    carregarDtInicio(event) {
        this.dtInicio = this.datePipe.transform(new Date(event.detail.value), "yyyy-MM-dd");
        console.log('Data Inicio ' + this.dtInicio);
    }
    // Carrega e tranforma a data fim
    carregarDtFim(event) {
        this.dtFim = this.datePipe.transform(new Date(event.detail.value), "yyyy-MM-dd");
        console.log('Data Fim ' + this.dtFim);
        this.carregarPeriodo();
    }
    // Mostra o resumo por cidade da página relatorio
    mostrarPop(evento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_7__["PopinfoComponent"],
                event: evento,
                mode: 'ios',
                translucent: true,
                animated: true
            });
            yield popover.present();
        });
    }
};
RelatorioPage.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _services_data_local_service__WEBPACK_IMPORTED_MODULE_5__["DataLocalService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] }
];
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
        _services_data_local_service__WEBPACK_IMPORTED_MODULE_5__["DataLocalService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]])
], RelatorioPage);



/***/ }),

/***/ "./src/app/services/data-local.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-local.service.ts ***!
  \************************************************/
/*! exports provided: DataLocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLocalService", function() { return DataLocalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



let DataLocalService = class DataLocalService {
    constructor(storage) {
        this.storage = storage;
        this.objetos = [];
    }
    guardarRecibos(objetos) {
        this.objetos.push(objetos);
        this.storage.set('objetos', this.objetos);
    }
};
DataLocalService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
DataLocalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], DataLocalService);



/***/ })

}]);
//# sourceMappingURL=pages-relatorio-relatorio-module-es2015.js.map