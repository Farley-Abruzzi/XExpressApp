(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~depositos-depositos-module~pages-contribuicao-contribuicao-module~pages-login-login-module~p~2c421bef"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/avatar-selector/avatar-selector.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/avatar-selector/avatar-selector.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row>\n  <ion-col text-center>\n    <h3>Selecione Avatar</h3>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n    <ion-slides [options]=\"avatarSlide\">\n      <ion-slide *ngFor=\"let avatar of avatars\">\n        <ion-img class=\"pick-avatar\" src=\"/assets/avatars/{{ avatar.img }}\"\n          [ngClass]=\"{ 'pick-avatar-seleccionado': avatar.seleccionado }\" (click)=\"selecionarAvatar( avatar )\">\n        </ion-img>\n      </ion-slide>\n    </ion-slides>\n  </ion-col>\n</ion-row>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contribuintes/contribuintes.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contribuintes/contribuintes.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-card>\n\n    <!-- <ion-list slot=\"end\" *ngFor=\"let contribuinte of contribuintes\">\n      <ion-item>\n        <ion-label>Nome: {{ contribuinte.nomenorecibo }}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Telefone: {{ contribuinte.telefoneprincipal }}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Cidade: {{ contribuinte.cidadeprincipal }}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Bairro: {{ contribuinte.bairroprincipal }}</ion-label>\n      </ion-item>\n      <br>\n      <br>\n      <br>\n    </ion-list> -->\n\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/detalhe/detalhe.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/detalhe/detalhe.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-button (click)=\"sairDoModal()\" color=\"light\" fill=\"clear\" slot=\"start\">\n        <ion-icon slot=\"start\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"inputDoacao()\">\n        <ion-icon name=\"cash\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <ion-datetime  class=\"dateModel\" cancelText=\"Cancelar\" done-text=\"Ok\" display-format=\"DD/MM/YYYY\" (ionChange)=\"reagendar( $event )\" [ngModel]=\"dtReagendamento.toISOString()\"></ion-datetime>\n      </ion-button>\n      <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"alertDevolucao()\">\n        <ion-icon name=\"swap\"></ion-icon>\n      </ion-button>\n    <ion-title>Detalhes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-text class=\"text-1\">Hospital do Câncer em Uberlândia</ion-text><br>\n              <ion-card style=\"height: 100%;\" *ngIf=\"recibo\"  color=\"warning\">\n                <ion-card-content padding color=\"warning\">\n                    <ion-label color=\"dark\"><b>Nome:</b> {{ recibo.nomenorecibo }}</ion-label><br>\n                    <ion-label color=\"dark\"><b>Agendamento:</b> {{ recibo.dtcobranca  }}</ion-label><br>\n                    <ion-label color=\"dark\"><b>Cidade:</b> {{ recibo.cidadesecundario }}</ion-label><br><br>\n                    <ion-label color=\"dark\"><b>Endereço:</b> <br>{{ recibo.enderecosecundario +\", \"+ recibo.numerosecundario +\", \"+ recibo.bairrosecundario }}</ion-label><br>\n                    <ion-label color=\"dark\" [style.visibility]=\"lbReferencia ? 'visible':'hidden'\"><b>Referência:</b> {{ recibo.complementosecundario }}</ion-label><br><br>\n                    <ion-label color=\"dark\"><b>Valor:</b> R$ {{ recibo.valorgerado }}</ion-label><br>\n                    <ion-label color=\"dark\"><b>Telefone(s):</b> {{ recibo.telefonesecundario }}</ion-label><br>\n                    <ion-label color=\"dark\"><b>Categoria:</b> {{ recibo.desccategoria }}</ion-label><br><br>\n                    <ion-label color=\"dark\"><br><b>Obs. da Parcela:</b> {{ recibo.observacoes }}</ion-label><br>\n                </ion-card-content>\n              </ion-card>\n\n              <ion-button \n                class=\"buttonAction\"\n                color=\"dark\"\n                expand=\"block\"\n                (click)=\"presentActionSheet()\">\n                Mostrar Ações\n              </ion-button>\n              \n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n      \n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popdevolucao/popdevolucao.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popdevolucao/popdevolucao.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  popdevolucao works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popresumo/popinfo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popresumo/popinfo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-card class=\"cardReciboPorCidade\" mode=\"ios\" *ngFor=\"let obj of resumos\">\n    <!-- <ion-popover-controller></ion-popover-controller> -->\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Cidade:</b> {{ obj.cidade }}</ion-label>\n    </ion-item>\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Recebidas:</b> {{ obj.qtdRecebidos }}</ion-label>\n    </ion-item>\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Recebidos:</b> R$ {{ obj.valorRecebidos.toFixed(2) }}</ion-label>\n    </ion-item>\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Total:</b> {{ obj.qtdTotal }}</ion-label>\n    </ion-item>\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Valor total:</b> R$ {{ obj.valorTotal.toFixed(2) }}</ion-label>\n    </ion-item>\n    <ion-item class=\"itemObjResumo\">\n      <ion-label><b>Percentual:</b> {{ obj.percentualRecebido.toFixed(1) }}%</ion-label>\n    </ion-item>\n  \n  </ion-card>"

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
class Devolvidos {
    constructor(nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, motivodevolucao, statendimento, dscatendimento) {
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
}
Devolvidos.ctorParameters = () => [
    { type: Number },
    { type: Date },
    { type: String },
    { type: Date },
    { type: Number },
    { type: Number },
    { type: String },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/components/avatar-selector/avatar-selector.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/avatar-selector/avatar-selector.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdmF0YXItc2VsZWN0b3IvQzpcXFVzZXJzXFxlbGlzZXVcXERlc2t0b3BcXDEwLWV4cHJlc3Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGF2YXRhci1zZWxlY3RvclxcYXZhdGFyLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci1zZWxlY3Rvci9hdmF0YXItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksdUNBQUE7RUFBQSwrQkFBQTtFQUNBLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F2YXRhci1zZWxlY3Rvci9hdmF0YXItc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ucGljay1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufSIsImltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AvatarSelectorComponent = class AvatarSelectorComponent {
    constructor() {
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
    ngOnInit() {
        this.avatars.forEach(avatar => avatar.seleccionado = false);
        for (const avatar of this.avatars) {
            if (avatar.img === this.avatarAtual) {
                avatar.seleccionado = true;
                break;
            }
        }
    }
    selecionarAvatar(avatar) {
        this.avatars.forEach(av => av.seleccionado = false);
        avatar.seleccionado = true;
        console.log(avatar.img);
        this.avatarSel.emit(avatar.img);
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _contribuintes_contribuintes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contribuintes/contribuintes.component */ "./src/app/components/contribuintes/contribuintes.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _avatar_selector_avatar_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./avatar-selector/avatar-selector.component */ "./src/app/components/avatar-selector/avatar-selector.component.ts");
/* harmony import */ var _popresumo_popinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popresumo/popinfo.component */ "./src/app/components/popresumo/popinfo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _detalhe_detalhe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detalhe/detalhe.component */ "./src/app/components/detalhe/detalhe.component.ts");
/* harmony import */ var _popdevolucao_popdevolucao_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popdevolucao/popdevolucao.component */ "./src/app/components/popdevolucao/popdevolucao.component.ts");










let ComponentsModule = class ComponentsModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");



let ContribuintesComponent = class ContribuintesComponent {
    // @Input() contribuintes: Content[] = [];
    constructor(contribServices) {
        this.contribServices = contribServices;
    }
    ngOnInit() { }
};
ContribuintesComponent.ctorParameters = () => [
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] }
];
ContribuintesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contribuintes',
        template: __webpack_require__(/*! raw-loader!./contribuintes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contribuintes/contribuintes.component.html"),
        styles: [__webpack_require__(/*! ./contribuintes.component.scss */ "./src/app/components/contribuintes/contribuintes.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"]])
], ContribuintesComponent);



/***/ }),

/***/ "./src/app/components/detalhe/detalhe.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/detalhe/detalhe.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-1 {\n  position: fixed;\n  right: 0px;\n  left: 30px;\n  font-style: oblique;\n  font-weight: bold;\n}\n\nion-item {\n  --padding-bottom: 1px !important;\n}\n\n.buttonAction {\n  position: fixed;\n  bottom: 5px;\n  width: 95%;\n}\n\n.dateModel {\n  position: fixed;\n  font-size: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhbGhlL0M6XFxVc2Vyc1xcZWxpc2V1XFxEZXNrdG9wXFwxMC1leHByZXNzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxkZXRhbGhlXFxkZXRhbGhlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2RldGFsaGUvZGV0YWxoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFsaGUvZGV0YWxoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LTEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHJpZ2h0OiAwcHg7IFxyXG4gICAgbGVmdDogMzBweDsgXHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uQWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxufVxyXG5cclxuLmRhdGVNb2RlbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBmb250LXNpemU6IDBweDtcclxufSIsIi50ZXh0LTEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IDFweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmRhdGVNb2RlbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZm9udC1zaXplOiAwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _Class_devolvidos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Class/devolvidos */ "./src/app/Class/devolvidos.ts");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");








let DetalheComponent = class DetalheComponent {
    constructor(contribService, modalCtrl, actionSheetCtrl, datePipe, toastCtrl, alertCtrl, navCtrl, bluetoothSerial, crudService) {
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
    ngOnInit() {
        this.carregarRecibosDetalhes();
        console.log('Número do recibo: ', this.nrorecibo);
    }
    // Chama a API de recibos para ser vizualizada no app
    carregarRecibosDetalhes() {
        // Para rodar no app
        // this.crudService.getById(this.nrorecibo)
        //   .then( (data: Recibos) => {
        //     this.recibo = data;
        //     if(this.recibo.complementosecundario == "") {
        //       this.lbReferencia = false;
        //     } else {
        //       this.lbReferencia = true;
        //     }
        // });
        // Para rodar na web
        this.contribService.getRecibosDetalhe(this.nrorecibo)
            .subscribe(resp => {
            this.recibo = resp;
            if (this.recibo.complementosecundario == "") {
                this.lbReferencia = false;
            }
            else {
                this.lbReferencia = true;
            }
        });
    }
    // Atualiza a API de recibos no backend ou no BD do app
    getPutRecibos(msg, opcao) {
        // Para rodar nmo app
        // this.crudService.update(this.recibo, opcao)
        //   .then(() => {
        //     this.presentToast(msg);
        //     // this.sairDoModal();
        // }).catch(
        //   e => console.error(e)
        // );
        // Para rodar na web
        this.contribService.putRecibo(this.recibo)
            .subscribe(() => {
            // Exibir tost de reagendamento
            this.presentToast(msg);
            //this.sairDoModal();
            console.log(this.recibo);
        }, error => {
            console.log(error);
        });
    }
    // Método para efetuar uma doação
    inputDoacao() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const input = yield this.alertCtrl.create({
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
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Confirm Ok', data);
                            this.valorDoacao = data.txtValor;
                            if (this.recibo !== undefined) {
                                // Condição para receber o valor com alteração ou não
                                if (this.valorDoacao !== this.recibo.valorgerado) {
                                    this.recibo.motivodevol = 'Valor alterado';
                                    // Tabela motivo delolução, aqui vou chamar essa api
                                    this.objDevolvido('Recebido com alteração de valor');
                                    this.getPostDevolvidos();
                                    this.insertDevolvidos();
                                }
                                this.recibo.valorgerado = this.valorDoacao;
                                this.recibo.statusrec = 'B';
                                this.recibo.dtbaixa = this.dtBaixa;
                                this.getPutRecibos('Doação realizada!', 'doacao');
                                this.imprimir();
                                // this.atualizarPagina();
                            }
                        }
                    }
                ]
            });
            yield input.present();
        });
    }
    // Método que recebe a data pelo componente "datetime" e imputa para data de "reagendamento".
    reagendar(event) {
        // Evento do click "Ok"
        if (this.recibo !== undefined) {
            this.recibo.dtreagendamento = new Date(event.detail.value);
            this.recibo.reagendado = "S";
            console.log('Data de reagendamento atualizada: ', this.datePipe.transform(this.recibo.dtreagendamento, 'dd/MM/yyyy'));
            this.getPutRecibos("Reagendamento realizado com sucesso!", 'reagendamento');
            this.imprimirReagendamento();
            //this.atualizarPagina();
        }
    }
    // Método para imputar motivos da devolução
    alertDevolucao() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Motivo da devolução:',
                buttons: [{
                        text: 'Não localizado',
                        handler: () => {
                            this.objDevolvido('Não localizado');
                            //this.getPostDevolvidos();
                            this.insertDevolvidos();
                            this.statusRecibo();
                            this.atualizarPagina();
                        }
                    },
                    {
                        text: 'Endereço não encontrado',
                        handler: () => {
                            this.objDevolvido('Endereço não encontrado');
                            // this.getPostDevolvidos();
                            this.insertDevolvidos();
                            this.statusRecibo();
                            this.atualizarPagina();
                        }
                    },
                    {
                        text: 'Mudou-se',
                        handler: () => {
                            this.objDevolvido('Mudou-se');
                            // this.getPostDevolvidos();
                            this.insertDevolvidos();
                            this.statusRecibo();
                            this.atualizarPagina();
                        }
                    },
                    {
                        text: 'Faleceu',
                        handler: () => {
                            this.objDevolvido('Faleceu');
                            // this.getPostDevolvidos();
                            this.insertDevolvidos();
                            this.statusRecibo();
                            this.atualizarPagina();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    insertDevolvidos() {
        this.crudService.insertDevolvidos(this.devolvido).then().catch(e => console.error(e));
    }
    // Setando alterações para o recibo devolvido
    objDevolvido(motivo) {
        this.devolvido = new _Class_devolvidos__WEBPACK_IMPORTED_MODULE_6__["Devolvidos"](this.nrorecibo, this.dtDevAtual, this.datePipe.transform(this.dtDevAtual, 'HH:mm:ss'), this.dtDevAtual, 341, 70014, motivo, 1, 'Descrição do atendimento');
    }
    // Inserindo alterações do recibo devolvido para o backend
    getPostDevolvidos() {
        this.contribService.postDevolvidos(this.devolvido)
            .subscribe(() => {
            console.log('Inserido');
        }, error => {
            console.log(error);
        });
    }
    // Setando o statusrec do recido pra quando ele for devolvido
    statusRecibo() {
        this.recibo.statusrec = "D";
        this.getPutRecibos("Devolvido com sucesso!", 'devolucao');
    }
    // Imprimindo o recibo de doação
    imprimir() {
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
    }
    // Imprimindo recibo de reagendamento
    imprimirReagendamento() {
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
    }
    // Mostrando mensagens de confirmação no Toast
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000
            });
            toast.present();
        });
    }
    // Encerra o modal recibo/detalhes, e atualiza a página que contem a lista de recibos
    sairDoModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.modalCtrl.dismiss({ animated: true });
        });
    }
    // Método para selecionar ações no modal recibo/detalhes
    presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Ações',
                backdropDismiss: true,
                buttons: [{
                        text: 'Enviar para análise',
                        role: 'destructive',
                        icon: 'paper-plane',
                        cssClass: 'rojo',
                        handler: () => {
                            console.log('Enviando');
                        }
                    }, {
                        text: 'Ver análise',
                        icon: 'paper',
                        handler: () => {
                            console.log('Vendo análise');
                        }
                    }, {
                        text: 'Ver Historico',
                        icon: 'filing',
                        handler: () => {
                            console.log('Vendo histórico');
                        }
                    }, {
                        text: 'telefones adicionais',
                        icon: 'call',
                        handler: () => {
                            console.log('Telefones ad.');
                        }
                    }, {
                        text: 'Telefones ad. online',
                        icon: 'power',
                        handler: () => {
                            console.log('Telefones online');
                        }
                    }, {
                        text: 'Gerar parcelas da campanha de natal',
                        icon: 'add',
                        role: 'cancel',
                        handler: () => {
                            console.log('Gerando parcelas');
                        },
                    }]
            });
            yield actionSheet.present();
        });
    }
    // Atualiza a página contribuição apos ações(Doação, Reagendamento e Devolução) no modal recibo/detalhes
    atualizarPagina() {
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
};
DetalheComponent.ctorParameters = () => [
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"] },
    { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_7__["CrudService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopdevolucaoComponent = class PopdevolucaoComponent {
    constructor() { }
    ngOnInit() { }
};
PopdevolucaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popdevolucao',
        template: __webpack_require__(/*! raw-loader!./popdevolucao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popdevolucao/popdevolucao.component.html"),
        styles: [__webpack_require__(/*! ./popdevolucao.component.scss */ "./src/app/components/popdevolucao/popdevolucao.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PopdevolucaoComponent);



/***/ }),

/***/ "./src/app/components/popresumo/popinfo.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/popresumo/popinfo.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".itemObjResumo {\n  --min-height: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3ByZXN1bW8vQzpcXFVzZXJzXFxlbGlzZXVcXERlc2t0b3BcXDEwLWV4cHJlc3Mvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcHJlc3Vtb1xccG9waW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3ByZXN1bW8vcG9waW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcHJlc3Vtby9wb3BpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1PYmpSZXN1bW8ge1xyXG4gICAgLS1taW4taGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbiIsIi5pdGVtT2JqUmVzdW1vIHtcbiAgLS1taW4taGVpZ2h0OiAzMCU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let PopinfoComponent = class PopinfoComponent {
    // dtStart: Date = new Date();
    // dtEnd: Date = new Date(this.dtStart.getFullYear(), this.dtStart.getMonth() + 1, 0);
    // dtInicio: string = " ";
    // dtFim: string = " ";
    constructor(contribService, datePipe) {
        this.contribService = contribService;
        this.datePipe = datePipe;
    }
    ngOnInit() {
        // this.conversorDate();
        this.carregarResumoPorCidade();
    }
    // Carrega o objeto de resumo do mensageiro por cidade.
    carregarResumoPorCidade() {
        this.contribService.getResumoPorCidade()
            .subscribe(resp => {
            this.resumos = resp;
            console.log('Resumo por cidade:', this.resumos);
        });
    }
};
PopinfoComponent.ctorParameters = () => [
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
PopinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popinfo',
        template: __webpack_require__(/*! raw-loader!./popinfo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popresumo/popinfo.component.html"),
        styles: [__webpack_require__(/*! ./popinfo.component.scss */ "./src/app/components/popresumo/popinfo.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
], PopinfoComponent);



/***/ })

}]);
//# sourceMappingURL=default~depositos-depositos-module~pages-contribuicao-contribuicao-module~pages-login-login-module~p~2c421bef-es2015.js.map