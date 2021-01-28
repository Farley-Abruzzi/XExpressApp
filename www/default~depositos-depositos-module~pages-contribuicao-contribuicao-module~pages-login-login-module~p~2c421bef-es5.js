(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~depositos-depositos-module~pages-contribuicao-contribuicao-module~pages-login-login-module~p~2c421bef"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/avatar-selector/avatar-selector.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/avatar-selector/avatar-selector.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\r\n  <ion-col text-center>\r\n    <h3>Selecione Avatar</h3>\r\n  </ion-col>\r\n</ion-row>\r\n\r\n<ion-row>\r\n  <ion-col>\r\n    <ion-slides [options]=\"avatarSlide\">\r\n      <ion-slide *ngFor=\"let avatar of avatars\">\r\n        <ion-img class=\"pick-avatar\" src=\"/assets/avatars/{{ avatar.img }}\"\r\n          [ngClass]=\"{ 'pick-avatar-seleccionado': avatar.seleccionado }\" (click)=\"selecionarAvatar( avatar )\">\r\n        </ion-img>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-col>\r\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contribuintes/contribuintes.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contribuintes/contribuintes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <ion-card>\r\n\r\n    <!-- <ion-list slot=\"end\" *ngFor=\"let contribuinte of contribuintes\">\r\n      <ion-item>\r\n        <ion-label>Nome: {{ contribuinte.nomenorecibo }}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Telefone: {{ contribuinte.telefoneprincipal }}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Cidade: {{ contribuinte.cidadeprincipal }}</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Bairro: {{ contribuinte.bairroprincipal }}</ion-label>\r\n      </ion-item>\r\n      <br>\r\n      <br>\r\n      <br>\r\n    </ion-list> -->\r\n\r\n  </ion-card>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/detalhe/detalhe.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/detalhe/detalhe.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n      <ion-button (click)=\"sairDoModal()\" color=\"light\" fill=\"clear\" slot=\"start\">\r\n        <ion-icon slot=\"start\" name=\"arrow-round-back\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"inputDoacao()\">\r\n        <ion-icon name=\"cash\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\">\r\n        <ion-icon name=\"calendar\"></ion-icon>\r\n        <ion-datetime  class=\"dateModel\" cancelText=\"Cancelar\" done-text=\"Ok\" display-format=\"DD/MM/YYYY\" (ionChange)=\"reagendar( $event )\" [ngModel]=\"dtReagendamento.toISOString()\"></ion-datetime>\r\n      </ion-button>\r\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"alertDevolucao()\">\r\n        <ion-icon name=\"swap\"></ion-icon>\r\n      </ion-button>\r\n    <ion-title>Detalhes</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-text class=\"text-1\">Hospital do Câncer em Uberlândia</ion-text><br>\r\n              <ion-card style=\"height: 100%;\" *ngIf=\"recibo\"  color=\"warning\">\r\n                <ion-card-content padding color=\"warning\">\r\n                    <ion-label color=\"dark\"><b>Nome:</b> {{ recibo.nomenorecibo }}</ion-label><br>\r\n                    <ion-label color=\"dark\"><b>Agendamento:</b> {{ recibo.dtcobranca  }}</ion-label><br>\r\n                    <ion-label color=\"dark\"><b>Cidade:</b> {{ recibo.cidadesecundario }}</ion-label><br><br>\r\n                    <ion-label color=\"dark\"><b>Endereço:</b> <br>{{ recibo.enderecosecundario +\", \"+ recibo.numerosecundario +\", \"+ recibo.bairrosecundario }}</ion-label><br>\r\n                    <ion-label color=\"dark\" [style.visibility]=\"lbReferencia ? 'visible':'hidden'\"><b>Referência:</b> {{ recibo.complementosecundario }}</ion-label><br><br>\r\n                    <ion-label color=\"dark\"><b>Valor:</b> R$ {{ recibo.valorgerado }}</ion-label><br>\r\n                    <ion-label color=\"dark\"><b>Telefone(s):</b> {{ recibo.telefonesecundario }}</ion-label><br>\r\n                    <ion-label color=\"dark\"><b>Categoria:</b> {{ recibo.desccategoria }}</ion-label><br><br>\r\n                    <ion-label color=\"dark\"><br><b>Obs. da Parcela:</b> {{ recibo.observacoes }}</ion-label><br>\r\n                </ion-card-content>\r\n              </ion-card>\r\n\r\n              <ion-button \r\n                class=\"buttonAction\"\r\n                color=\"dark\"\r\n                expand=\"block\"\r\n                (click)=\"presentActionSheet()\">\r\n                Mostrar Ações\r\n              </ion-button>\r\n              \r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n      \r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popdevolucao/popdevolucao.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popdevolucao/popdevolucao.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  popdevolucao works!\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popresumo/popinfo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popresumo/popinfo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <ion-card class=\"cardReciboPorCidade\" mode=\"ios\" *ngFor=\"let obj of resumos\">\r\n    <!-- <ion-popover-controller></ion-popover-controller> -->\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Cidade:</b> {{ obj.cidade }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Recebidas:</b> {{ obj.qtdRecebidos }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Recebidos:</b> R$ {{ obj.valorRecebidos.toFixed(2) }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Total:</b> {{ obj.qtdTotal }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Valor total:</b> R$ {{ obj.valorTotal.toFixed(2) }}</ion-label>\r\n    </ion-item>\r\n    <ion-item class=\"itemObjResumo\">\r\n      <ion-label><b>Percentual:</b> {{ obj.percentualRecebido.toFixed(1) }}%</ion-label>\r\n    </ion-item>\r\n  \r\n  </ion-card>"

/***/ }),

/***/ "./src/app/Class/devolvidos.ts":
/*!*************************************!*\
  !*** ./src/app/Class/devolvidos.ts ***!
  \*************************************/
/*! exports provided: Devolvidos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Devolvidos", function() { return Devolvidos; });
var Devolvidos = /** @class */ (function () {
    function Devolvidos(nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, motivodevolucao, statendimento, dscatendimento) {
        this.nrorecibo = nrorecibo;
        this.dtdevol = dtdevol;
        this.horaoper = horaoper;
        this.dtoperacao = dtoperacao;
        this.codoperador = codoperador;
        this.codusuario = codusuario;
        this.motivodevolucao = motivodevolucao;
        this.statendimento = statendimento;
        this.dscatendimento = dscatendimento;
    }
    Devolvidos.ctorParameters = function () { return [
        { type: Number },
        { type: Date },
        { type: String },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: String },
        { type: Number },
        { type: String }
    ]; };
    return Devolvidos;
}());



/***/ }),

/***/ "./src/app/components/avatar-selector/avatar-selector.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/avatar-selector/avatar-selector.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0b3IvQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYXZhdGFyLXNlbGVjdG9yXFxhdmF0YXItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdG9yL2F2YXRhci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSx1Q0FBQTtFQUFBLCtCQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhdGFyLXNlbGVjdG9yL2F2YXRhci1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4ucGljay1hdmF0YXIge1xuICB3aWR0aDogODBweDtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/avatar-selector/avatar-selector.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/avatar-selector/avatar-selector.component.ts ***!
  \*************************************************************************/
/*! exports provided: AvatarSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarSelectorComponent", function() { return AvatarSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvatarSelectorComponent = /** @class */ (function () {
    function AvatarSelectorComponent() {
        this.avatarSel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.avatarAtual = 'av-1.png';
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
        this.avatarSlide = {
            slidesPerView: 3.5
        };
    }
    AvatarSelectorComponent.prototype.ngOnInit = function () {
        this.avatars.forEach(function (avatar) { return avatar.seleccionado = false; });
        for (var _i = 0, _a = this.avatars; _i < _a.length; _i++) {
            var avatar = _a[_i];
            if (avatar.img === this.avatarAtual) {
                avatar.seleccionado = true;
                break;
            }
        }
    };
    AvatarSelectorComponent.prototype.selecionarAvatar = function (avatar) {
        this.avatars.forEach(function (av) { return av.seleccionado = false; });
        avatar.seleccionado = true;
        console.log(avatar.img);
        this.avatarSel.emit(avatar.img);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AvatarSelectorComponent.prototype, "avatarSel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AvatarSelectorComponent.prototype, "avatarAtual", void 0);
    AvatarSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avatar-selector',
            template: __webpack_require__(/*! raw-loader!./avatar-selector.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/avatar-selector/avatar-selector.component.html"),
            styles: [__webpack_require__(/*! ./avatar-selector.component.scss */ "./src/app/components/avatar-selector/avatar-selector.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvatarSelectorComponent);
    return AvatarSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contribuintes_contribuintes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribuintes/contribuintes.component */ "./src/app/components/contribuintes/contribuintes.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar-selector/avatar-selector.component */ "./src/app/components/avatar-selector/avatar-selector.component.ts");
/* harmony import */ var _popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detalhe/detalhe.component */ "./src/app/components/detalhe/detalhe.component.ts");
/* harmony import */ var _popdevolucao_popdevolucao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popdevolucao/popdevolucao.component */ "./src/app/components/popdevolucao/popdevolucao.component.ts");










var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["DetalheComponent"],
                _popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__["PopinfoComponent"],
                _popdevolucao_popdevolucao_component__WEBPACK_IMPORTED_MODULE_9__["PopdevolucaoComponent"]
            ],
            declarations: [
                _contribuintes_contribuintes_component__WEBPACK_IMPORTED_MODULE_3__["ContribuintesComponent"],
                _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_5__["AvatarSelectorComponent"],
                _popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__["PopinfoComponent"],
                _detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["DetalheComponent"],
                _popdevolucao_popdevolucao_component__WEBPACK_IMPORTED_MODULE_9__["PopdevolucaoComponent"]
            ],
            exports: [
                _contribuintes_contribuintes_component__WEBPACK_IMPORTED_MODULE_3__["ContribuintesComponent"],
                _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_5__["AvatarSelectorComponent"],
                _popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__["PopinfoComponent"],
                _detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_8__["DetalheComponent"],
                _popdevolucao_popdevolucao_component__WEBPACK_IMPORTED_MODULE_9__["PopdevolucaoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/contribuintes/contribuintes.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/contribuintes/contribuintes.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udHJpYnVpbnRlcy9jb250cmlidWludGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/contribuintes/contribuintes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/contribuintes/contribuintes.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContribuintesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuintesComponent", function() { return ContribuintesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");



var ContribuintesComponent = /** @class */ (function () {
    // @Input() contribuintes: Content[] = [];
    function ContribuintesComponent(contribServices) {
        this.contribServices = contribServices;
    }
    ContribuintesComponent.prototype.ngOnInit = function () { };
    ContribuintesComponent.ctorParameters = function () { return [
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] }
    ]; };
    ContribuintesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribuintes',
            template: __webpack_require__(/*! raw-loader!./contribuintes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contribuintes/contribuintes.component.html"),
            styles: [__webpack_require__(/*! ./contribuintes.component.scss */ "./src/app/components/contribuintes/contribuintes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"]])
    ], ContribuintesComponent);
    return ContribuintesComponent;
}());



/***/ }),

/***/ "./src/app/components/detalhe/detalhe.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/detalhe/detalhe.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-1 {\n  position: fixed;\n  right: 0px;\n  left: 30px;\n  font-style: oblique;\n  font-weight: bold;\n}\n\nion-item {\n  --padding-bottom: 1px !important;\n}\n\n.buttonAction {\n  position: fixed;\n  bottom: 5px;\n  width: 95%;\n}\n\n.dateModel {\n  position: fixed;\n  font-size: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGhlL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGRldGFsaGVcXGRldGFsaGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxoZS9kZXRhbGhlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWxoZS9kZXRhbGhlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxyXG4gICAgcmlnaHQ6IDBweDsgXHJcbiAgICBsZWZ0OiAzMHB4OyBcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25BY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uZGF0ZU1vZGVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG59IiwiLnRleHQtMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMzBweDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25BY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogOTUlO1xufVxuXG4uZGF0ZU1vZGVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXNpemU6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/detalhe/detalhe.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/detalhe/detalhe.component.ts ***!
  \*********************************************************/
/*! exports provided: DetalheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheComponent", function() { return DetalheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _Class_devolvidos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Class/devolvidos */ "./src/app/Class/devolvidos.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");








var DetalheComponent = /** @class */ (function () {
    function DetalheComponent(contribService, modalCtrl, actionSheetCtrl, datePipe, toastCtrl, alertCtrl, navCtrl, bluetoothSerial, crudService) {
        this.contribService = contribService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.bluetoothSerial = bluetoothSerial;
        this.crudService = crudService;
        this.lbReferencia = false;
        this.dtReagendamento = new Date();
        this.dtBaixa = new Date();
        this.dtDevAtual = new Date();
    }
    DetalheComponent.prototype.ngOnInit = function () {
        this.carregarRecibosDetalhes();
        console.log('Número do recibo: ', this.nrorecibo);
    };
    // Chama a API de recibos para ser vizualizada no app
    DetalheComponent.prototype.carregarRecibosDetalhes = function () {
        // Para rodar no app
        // this.crudService.getById(this.nrorecibo)
        //   .then( (data: Recibos) => {
        //     this.recibo = data;
        var _this = this;
        //     if(this.recibo.complementosecundario == "") {
        //       this.lbReferencia = false;
        //     } else {
        //       this.lbReferencia = true;
        //     }
        // });
        // Para rodar na web
        this.contribService.getRecibosDetalhe(this.nrorecibo)
            .subscribe(function (resp) {
            _this.recibo = resp;
            if (_this.recibo.complementosecundario == "") {
                _this.lbReferencia = false;
            }
            else {
                _this.lbReferencia = true;
            }
        });
    };
    // Atualiza a API de recibos no backend ou no BD do app
    DetalheComponent.prototype.getPutRecibos = function (msg, opcao) {
        // Para rodar no app
        // this.crudService.update(this.recibo, opcao)
        //   .then(() => {
        //     this.presentToast(msg);
        //     // this.sairDoModal();
        // }).catch(
        //   e => console.error(e)
        // );
        var _this = this;
        // Para rodar na web
        this.contribService.putRecibo(this.recibo)
            .subscribe(function () {
            // Exibir tost de reagendamento
            _this.presentToast(msg);
            _this.sairDoModal();
            console.log(_this.recibo);
        }, function (error) {
            console.log(error);
        });
    };
    // Método para efetuar uma doação
    DetalheComponent.prototype.inputDoacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var input;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Doação',
                            subHeader: 'Digite o valor da doação: ',
                            inputs: [
                                {
                                    name: 'txtValor',
                                    type: 'number',
                                    value: this.recibo.valorgerado
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data);
                                        _this.valorDoacao = data.txtValor;
                                        if (_this.recibo !== undefined) {
                                            // Condição para receber o valor com alteração ou não
                                            if (_this.valorDoacao !== _this.recibo.valorgerado) {
                                                _this.recibo.motivodevol = 'Valor alterado';
                                                // Tabela motivo devolução, aqui vou chamar essa api
                                                _this.objDevolvido('Recebido com alteração de valor');
                                                _this.getPostDevolvidos();
                                                _this.insertDevolvidos();
                                            }
                                            _this.recibo.valorgerado = _this.valorDoacao;
                                            _this.recibo.statusrec = 'B';
                                            _this.recibo.dtbaixa = _this.dtBaixa;
                                            _this.getPutRecibos('Doação realizada!', 'doacao');
                                            _this.imprimir();
                                            // this.atualizarPagina();
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        input = _a.sent();
                        return [4 /*yield*/, input.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Método que recebe a data pelo componente "datetime" e imputa para data de "reagendamento".
    DetalheComponent.prototype.reagendar = function (event) {
        // Evento do click "Ok"
        if (this.recibo !== undefined) {
            this.recibo.dtreagendamento = new Date(event.detail.value);
            this.recibo.reagendado = "S";
            console.log('Data de reagendamento atualizada: ', this.datePipe.transform(this.recibo.dtreagendamento, 'dd/MM/yyyy'));
            this.getPutRecibos("Reagendamento realizado com sucesso!", 'reagendamento');
            this.imprimirReagendamento();
            //this.atualizarPagina();
        }
    };
    // Método para imputar motivos da devolução
    DetalheComponent.prototype.alertDevolucao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Motivo da devolução:',
                            buttons: [{
                                    text: 'Não localizado',
                                    handler: function () {
                                        _this.objDevolvido('Não localizado');
                                        //this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                        _this.atualizarPagina();
                                    }
                                },
                                {
                                    text: 'Endereço não encontrado',
                                    handler: function () {
                                        _this.objDevolvido('Endereço não encontrado');
                                        // this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                        _this.atualizarPagina();
                                    }
                                },
                                {
                                    text: 'Mudou-se',
                                    handler: function () {
                                        _this.objDevolvido('Mudou-se');
                                        // this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                        _this.atualizarPagina();
                                    }
                                },
                                {
                                    text: 'Faleceu',
                                    handler: function () {
                                        _this.objDevolvido('Faleceu');
                                        // this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                        _this.atualizarPagina();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetalheComponent.prototype.insertDevolvidos = function () {
        this.crudService.insertDevolvidos(this.devolvido).then().catch(function (e) { return console.error(e); });
    };
    // Setando alterações para o recibo devolvido
    DetalheComponent.prototype.objDevolvido = function (motivo) {
        this.devolvido = new _Class_devolvidos__WEBPACK_IMPORTED_MODULE_6__["Devolvidos"](this.nrorecibo, this.dtDevAtual, this.datePipe.transform(this.dtDevAtual, 'HH:mm:ss'), this.dtDevAtual, 341, 70014, motivo, 1, 'Descrição do atendimento');
    };
    // Inserindo alterações do recibo devolvido para o backend
    DetalheComponent.prototype.getPostDevolvidos = function () {
        this.contribService.postDevolvidos(this.devolvido)
            .subscribe(function () {
            console.log('Inserido');
        }, function (error) {
            console.log(error);
        });
    };
    // Setando o statusrec do recido pra quando ele for devolvido
    DetalheComponent.prototype.statusRecibo = function () {
        this.recibo.statusrec = "D";
        this.getPutRecibos("Devolvido com sucesso!", 'devolucao');
    };
    // Imprimindo o recibo de doação
    DetalheComponent.prototype.imprimir = function () {
        this.bluetoothSerial.write('\n\n\n' + '   *** RECIBO DE DOACAO ***' + '\n\n' +
            'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
            'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
            'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
            'GRUPO LUTA PELA VIDA' + '\n' +
            'CNPJ: 01.316.056/0001-12' + '\n' +
            '0800-342062' + '\n\n' +
            'VALOR: R$' + this.recibo.valorgerado + ',00' + '\n\n' +
            '===============================' + '\n\n' +
            'Cod. Contribuinte: ' + this.recibo.nrorecibo + '\n' +
            'Doador: ' + '\n' +
            this.recibo.nomenorecibo + '\n' +
            'Data: ' + this.datePipe.transform(this.recibo.dtbaixa, 'dd/MM/yyyy') + '\n' +
            'Valor: R$' + this.recibo.valorgerado + ',00' + '\n\n\n\n' +
            '    Codigo de autenticacao   ' + '\n\n' +
            '           xxxxxxx           ' + '\n\n' +
            'Obrigado! Sua doacao e muito' + '\n' +
            'importante para os nossos pacientes.' + '\n\n\n');
        console.log('Impressão de doação');
    };
    // Imprimindo recibo de reagendamento
    DetalheComponent.prototype.imprimirReagendamento = function () {
        this.bluetoothSerial.write('\n\n\n' + '   *** RECIBO DE REAGENDAMENTO ***' + '\n\n' +
            'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
            'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
            'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
            'GRUPO LUTA PELA VIDA' + '\n' +
            'CNPJ: 01.316.056/0001-12' + '\n' +
            '0800-342062' + '\n\n' +
            'VALOR: R$' + this.recibo.valorgerado + ',00' + '\n\n' +
            '===============================' + '\n\n\n' +
            'Ola estive aqui para recolher' + '\n' +
            'sua doacao que e muito ' + '\n' +
            'importante para nos.' + '\n\n' +
            'Retornaremos no dia: ' + this.datePipe.transform(this.recibo.dtreagendamento, 'dd/MM/yyyy') + '\n\n\n');
        console.log('Impressão de reagendamento');
    };
    // Mostrando mensagens de confirmação no Toast
    DetalheComponent.prototype.presentToast = function (message) {
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
    // Encerra o modal recibo/detalhes, e atualiza a página que contem a lista de recibos
    DetalheComponent.prototype.sairDoModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.dismiss({ animated: true })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Método para selecionar ações no modal recibo/detalhes
    DetalheComponent.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: 'Ações',
                            backdropDismiss: true,
                            buttons: [{
                                    text: 'Enviar para análise',
                                    role: 'destructive',
                                    icon: 'paper-plane',
                                    cssClass: 'rojo',
                                    handler: function () {
                                        console.log('Enviando');
                                    }
                                }, {
                                    text: 'Ver análise',
                                    icon: 'paper',
                                    handler: function () {
                                        console.log('Vendo análise');
                                    }
                                }, {
                                    text: 'Ver Historico',
                                    icon: 'filing',
                                    handler: function () {
                                        console.log('Vendo histórico');
                                    }
                                }, {
                                    text: 'telefones adicionais',
                                    icon: 'call',
                                    handler: function () {
                                        console.log('Telefones ad.');
                                    }
                                }, {
                                    text: 'Telefones ad. online',
                                    icon: 'power',
                                    handler: function () {
                                        console.log('Telefones online');
                                    }
                                }, {
                                    text: 'Gerar parcelas da campanha de natal',
                                    icon: 'add',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Gerando parcelas');
                                    },
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Atualiza a página contribuição apos ações(Doação, Reagendamento e Devolução) no modal recibo/detalhes
    DetalheComponent.prototype.atualizarPagina = function () {
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    };
    DetalheComponent.ctorParameters = function () { return [
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"] },
        { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetalheComponent.prototype, "nrorecibo", void 0);
    DetalheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalhe',
            template: __webpack_require__(/*! raw-loader!./detalhe.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/detalhe/detalhe.component.html"),
            styles: [__webpack_require__(/*! ./detalhe.component.scss */ "./src/app/components/detalhe/detalhe.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"],
            src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"]])
    ], DetalheComponent);
    return DetalheComponent;
}());



/***/ }),

/***/ "./src/app/components/popdevolucao/popdevolucao.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/popdevolucao/popdevolucao.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wZGV2b2x1Y2FvL3BvcGRldm9sdWNhby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/popdevolucao/popdevolucao.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/popdevolucao/popdevolucao.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopdevolucaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopdevolucaoComponent", function() { return PopdevolucaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PopdevolucaoComponent = /** @class */ (function () {
    function PopdevolucaoComponent() {
    }
    PopdevolucaoComponent.prototype.ngOnInit = function () { };
    PopdevolucaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popdevolucao',
            template: __webpack_require__(/*! raw-loader!./popdevolucao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popdevolucao/popdevolucao.component.html"),
            styles: [__webpack_require__(/*! ./popdevolucao.component.scss */ "./src/app/components/popdevolucao/popdevolucao.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopdevolucaoComponent);
    return PopdevolucaoComponent;
}());



/***/ }),

/***/ "./src/app/components/popresumo/popinfo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/popresumo/popinfo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemObjResumo {\n  --min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3ByZXN1bW8vQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9wcmVzdW1vXFxwb3BpbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BvcHJlc3Vtby9wb3BpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wcmVzdW1vL3BvcGluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbU9ialJlc3VtbyB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuIiwiLml0ZW1PYmpSZXN1bW8ge1xuICAtLW1pbi1oZWlnaHQ6IDMwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/popresumo/popinfo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/popresumo/popinfo.component.ts ***!
  \***********************************************************/
/*! exports provided: PopinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopinfoComponent", function() { return PopinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var PopinfoComponent = /** @class */ (function () {
    // dtStart: Date = new Date();
    // dtEnd: Date = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
    // dtInicio: string = " ";
    // dtFim: string = " ";
    function PopinfoComponent(contribService, datePipe) {
        this.contribService = contribService;
        this.datePipe = datePipe;
    }
    PopinfoComponent.prototype.ngOnInit = function () {
        // this.conversorDate();
        this.carregarResumoPorCidade();
    };
    // Carrega o objeto de resumo do mensageiro por cidade.
    PopinfoComponent.prototype.carregarResumoPorCidade = function () {
        var _this = this;
        this.contribService.getResumoPorCidade()
            .subscribe(function (resp) {
            _this.resumos = resp;
            console.log('Resumo por cidade:', _this.resumos);
        });
    };
    PopinfoComponent.ctorParameters = function () { return [
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
    ]; };
    PopinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popinfo',
            template: __webpack_require__(/*! raw-loader!./popinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popresumo/popinfo.component.html"),
            styles: [__webpack_require__(/*! ./popinfo.component.scss */ "./src/app/components/popresumo/popinfo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], PopinfoComponent);
    return PopinfoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~depositos-depositos-module~pages-contribuicao-contribuicao-module~pages-login-login-module~p~2c421bef-es5.js.map