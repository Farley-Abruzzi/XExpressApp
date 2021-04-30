(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recibo-recibo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/recibo/recibo.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/recibo/recibo.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title>Recibo</ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"inputDoacao()\">\r\n            <ion-icon name=\"cash\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button color=\"success\" slot=\"end\" fill=\"clear\">\r\n            <ion-icon name=\"calendar\"></ion-icon>\r\n            <ion-datetime class=\"dateModel\" cancelText=\"Cancelar\" done-text=\"Ok\" display-format=\"DD/MM/YYYY\" (ionChange)=\"reagendar( $event )\" [ngModel]=\"dtReagendamento.toISOString()\"></ion-datetime>\r\n        </ion-button>\r\n        <ion-button color=\"success\" slot=\"end\" fill=\"clear\" (click)=\"alertDevolucao()\">\r\n            <ion-icon name=\"swap\"></ion-icon>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <ion-grid>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-text class=\"text-1\">Hospital do Câncer em Uberlândia</ion-text><br>\r\n                <ion-card style=\"height: 100%;\" *ngIf=\"recibo\" color=\"warning\">\r\n                    <ion-card-content padding color=\"warning\">\r\n                        <ion-label color=\"dark\"><b>Nome:</b> {{ recibo.nomenorecibo }}</ion-label><br>\r\n                        <ion-label color=\"dark\"><b>Agendamento:</b> {{ recibo.dtcobranca }}</ion-label><br>\r\n                        <ion-label color=\"dark\"><b>Cidade:</b> {{ recibo.cidadesecundario }}</ion-label><br>\r\n                        <ion-label color=\"dark\"><b>Bairro:</b> {{ recibo.bairrosecundario }}</ion-label><br><br>\r\n                        <ion-label color=\"dark\"><b>Endereço:</b> {{ recibo.enderecosecundario +\", \"+ recibo.numerosecundario }}</ion-label><br>\r\n                        <ion-label color=\"dark\" [style.visibility]=\"lbReferencia ? 'visible':'hidden'\"><b>Referência:</b> {{ recibo.complementosecundario }}</ion-label><br><br>\r\n                        <ion-label color=\"dark\"><b>Telefone(s):</b> {{ recibo.telefonesecundario }}</ion-label><br>\r\n                        <ion-label color=\"dark\"><b>Categoria:</b> {{ recibo.desccategoria }}</ion-label><br>\r\n                        <ion-label color=\"dark\"><b>Valor:</b> {{ recibo.valorgerado | currency: 'BRL':true}}</ion-label><br><br>\r\n                        <ion-label color=\"dark\"><br><b>Obs. da Parcela:</b> {{ recibo.observacoes }}</ion-label><br>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n\r\n                <ion-button class=\"buttonAction\" color=\"dark\" expand=\"block\" (click)=\"presentActionSheet()\">\r\n                    Mostrar Ações\r\n                </ion-button>\r\n\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/class/devolvidos.ts":
/*!*************************************!*\
  !*** ./src/app/class/devolvidos.ts ***!
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

/***/ "./src/app/pages/recibo/recibo.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/recibo/recibo.module.ts ***!
  \***********************************************/
/*! exports provided: ReciboPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciboPageModule", function() { return ReciboPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recibo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recibo.page */ "./src/app/pages/recibo/recibo.page.ts");







var routes = [
    {
        path: '',
        component: _recibo_page__WEBPACK_IMPORTED_MODULE_6__["ReciboPage"]
    }
];
var ReciboPageModule = /** @class */ (function () {
    function ReciboPageModule() {
    }
    ReciboPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recibo_page__WEBPACK_IMPORTED_MODULE_6__["ReciboPage"]],
        })
    ], ReciboPageModule);
    return ReciboPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recibo/recibo.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/recibo/recibo.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-1 {\n  position: fixed;\n  right: 0px;\n  left: 30px;\n  font-style: oblique;\n  font-weight: bold;\n}\n\nion-item {\n  --padding-bottom: 1px !important;\n}\n\n.buttonAction {\n  position: fixed;\n  bottom: 5px;\n  width: 95%;\n}\n\n.dateModel {\n  position: fixed;\n  font-size: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjaWJvL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxyZWNpYm9cXHJlY2liby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlY2liby9yZWNpYm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2liby9yZWNpYm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtMSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgbGVmdDogMzBweDtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25BY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG59XHJcblxyXG4uZGF0ZU1vZGVsIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGZvbnQtc2l6ZTogMHB4O1xyXG59IiwiLnRleHQtMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMzBweDtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25BY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNXB4O1xuICB3aWR0aDogOTUlO1xufVxuXG4uZGF0ZU1vZGVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBmb250LXNpemU6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/recibo/recibo.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/recibo/recibo.page.ts ***!
  \*********************************************/
/*! exports provided: ReciboPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReciboPage", function() { return ReciboPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _class_devolvidos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../class/devolvidos */ "./src/app/class/devolvidos.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");











var ReciboPage = /** @class */ (function () {
    function ReciboPage(contribService, actionSheetCtrl, datePipe, toastCtrl, alertCtrl, bluetoothSerial, crudService, route, navCtrl, usuarioService, storage) {
        this.contribService = contribService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.datePipe = datePipe;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.bluetoothSerial = bluetoothSerial;
        this.crudService = crudService;
        this.route = route;
        this.navCtrl = navCtrl;
        this.usuarioService = usuarioService;
        this.storage = storage;
        //@Input() nrorecibo;
        this.lbReferencia = false;
        this.dtReagendamento = new Date();
        this.dataReag = new Date(this.dtReagendamento.getFullYear(), this.dtReagendamento.getMonth() + 1, 0);
        this.dtBaixa = new Date();
        this.dtDevAtual = new Date();
        this.dtReag = " ";
        this.conectPrint = false;
        this.connection = false;
    }
    ReciboPage.prototype.ngOnInit = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(function (resp) {
                _this.usuario = resp;
                _this.codMens = _this.usuario.codmensageiro;
                _this.codUser = _this.usuario.codusuario;
            });
        }
        this.nrorecibo = this.route.snapshot.paramMap.get('id');
        this.carregarRecibosDetalhes();
    };
    // Chama a API de recibos para ser vizualizada no app
    ReciboPage.prototype.carregarRecibosDetalhes = function () {
        var _this = this;
        // Para rodar no app
        this.crudService.getById(this.nrorecibo)
            .then(function (data) {
            _this.recibo = data;
            console.log('RECIBO: ', _this.recibo);
            if (_this.recibo.complementosecundario == "") {
                _this.lbReferencia = false;
            }
            else {
                _this.lbReferencia = true;
            }
        });
        // Para rodar na web
        // this.contribService.getRecibosDetalhe( this.nrorecibo )
        //   .subscribe( resp => {
        //     this.recibo = resp;
        //     if (this.recibo.complementosecundario == "") {
        //       this.lbReferencia = false;
        //     } else {
        //       this.lbReferencia = true;
        //     }
        // });
    };
    // Atualiza a API de recibos no backend ou no BD do app
    ReciboPage.prototype.getPutRecibosInApp = function (msg, opcao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Para rodar no app
                    return [4 /*yield*/, this.crudService.update(this.recibo, opcao)
                            .then(function () {
                            console.log('PUT IN APP: ', _this.recibo);
                            _this.presentToast(msg);
                            _this.sairDoModal();
                        }).catch(function (e) { return console.error(e); })];
                    case 1:
                        // Para rodar no app
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReciboPage.prototype.getPutRecibosInWeb = function () {
        var _this = this;
        //Para rodar na web
        this.contribService.putRecibo(this.recibo)
            .subscribe(function () {
            console.log('PUT IN WEB: ', _this.recibo);
        }, function (error) { });
    };
    // Método para efetuar uma doação
    ReciboPage.prototype.inputDoacao = function () {
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
                                            _this.recibo.datadorecebimento = _this.datePipe.transform(_this.dtBaixa, 'dd/MM/yyyy');
                                            _this.recibo.dtreagendamento = null;
                                            _this.recibo.reagendado = null;
                                            _this.getPutRecibosInApp('Doação realizada!', 'doacao');
                                            _this.getPutRecibosInWeb();
                                            _this.imprimir();
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
    ReciboPage.prototype.reagendar = function (event) {
        this.dtReag = event.detail.value;
        var newDtReag = this.dtReag;
        this.dataR = new Date(newDtReag);
        console.log('DATA REAG: ', this.dataR);
        // Evento do click "Ok"
        if (this.recibo !== undefined) {
            this.recibo.dtreagendamento = this.dataR;
            this.recibo.reagendado = "S";
            this.imprimirReagendamento();
            this.getPutRecibosInApp("Reagendamento realizado com sucesso!", 'reagendamento');
            this.getPutRecibosInWeb();
        }
    };
    // Método para imputar motivos da devolução
    ReciboPage.prototype.alertDevolucao = function () {
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
                                    }
                                },
                                {
                                    text: 'Endereço não encontrado',
                                    handler: function () {
                                        _this.objDevolvido('Endereço não encontrado');
                                        //this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                    }
                                },
                                {
                                    text: 'Mudou-se',
                                    handler: function () {
                                        _this.objDevolvido('Mudou-se');
                                        // this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
                                    }
                                },
                                {
                                    text: 'Faleceu',
                                    handler: function () {
                                        _this.objDevolvido('Faleceu');
                                        // this.getPostDevolvidos();
                                        _this.insertDevolvidos();
                                        _this.statusRecibo();
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
    ReciboPage.prototype.insertDevolvidos = function () {
        this.crudService.insertDevolvidos(this.devolvido).then().catch(function (e) { return console.error(e); });
    };
    // Setando alterações para o recibo devolvido
    ReciboPage.prototype.objDevolvido = function (motivo) {
        this.devolvido = new _class_devolvidos__WEBPACK_IMPORTED_MODULE_8__["Devolvidos"](this.nrorecibo, this.dtDevAtual, this.datePipe.transform(this.dtDevAtual, 'HH:mm:ss'), this.dtDevAtual, this.codMens, this.codUser, motivo, 1, 'Descrição do atendimento');
    };
    // Inserindo alterações do recibo devolvido para o backend
    ReciboPage.prototype.getPostDevolvidos = function () {
        this.contribService.postDevolvidos(this.devolvido)
            .subscribe(function () {
            console.log('Devolvido Inserido');
        }, function (error) {
            console.log(error);
        });
    };
    // Setando o statusrec do recido pra quando ele for devolvido
    ReciboPage.prototype.statusRecibo = function () {
        this.recibo.statusrec = "D";
        this.recibo.dtbaixa = new Date();
        this.recibo.dtreagendamento = null;
        this.recibo.reagendado = null;
        console.log('DTDEVOL: ', this.recibo.dtbaixa);
        this.getPutRecibosInApp("Devolvido com sucesso!", 'devolucao');
        this.getPutRecibosInWeb();
        //this.getPostDevolvidos();
    };
    // Imprimindo o recibo de doação
    ReciboPage.prototype.imprimir = function () {
        this.bluetoothSerial.write('\n\n\n' + '  *** RECIBO DE DOACAO ***' + '\n\n' +
            'HOSPITAL DO CANCER EM UBERLANDIA' + '\n\n' +
            'AV. AMAZONAS, 1996 - B. UMUARAMA' + '\n' +
            'UBERLANDIA/MG - (34) 3291-6100' + '\n' +
            'GRUPO LUTA PELA VIDA' + '\n' +
            'CNPJ: 01.316.056/0001-12' + '\n' +
            '0800-342062' + '\n\n' +
            'VALOR: R$' + this.recibo.valorgerado + ',00' + '\n\n' +
            '===============================' + '\n\n' +
            'Cod. Contribuinte: ' + this.recibo.codcontrib + '\n' +
            'Doador:\n' +
            this.recibo.nomenorecibo + '\n' +
            'Data: ' + this.datePipe.transform(this.recibo.dtbaixa, 'dd/MM/yyyy') + '\n' +
            'Valor: R$' + this.recibo.valorgerado + ',00' + '\n\n\n\n' +
            '    Codigo de autenticacao   ' + '\n\n' +
            '          ' + this.recibo.nrorecibo + '          ' + '\n\n' +
            'Obrigado! Sua doacao e muito' + '\n' +
            'importante para os nossos' + '\n' +
            'pacientes.' + '\n\n\n');
        console.log('Impressão de doação');
    };
    // Imprimindo recibo de reagendamento
    ReciboPage.prototype.imprimirReagendamento = function () {
        this.bluetoothSerial.write('\n\n\n' + ' *** RECIBO DE REAGENDAMENTO ***' + '\n\n' +
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
    ReciboPage.prototype.presentToast = function (message) {
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
    ReciboPage.prototype.sairDoModal = function () {
        var _this = this;
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
        setTimeout(function () {
            _this.navCtrl.navigateForward('contribuicao', { animated: true });
        }, 1500);
    };
    // Método para selecionar ações no modal recibo/detalhes
    ReciboPage.prototype.presentActionSheet = function () {
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
    ReciboPage.ctorParameters = function () { return [
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
    ]; };
    ReciboPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recibo',
            template: __webpack_require__(/*! raw-loader!./recibo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/recibo/recibo.page.html"),
            styles: [__webpack_require__(/*! ./recibo.page.scss */ "./src/app/pages/recibo/recibo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_2__["ContribuintesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__["BluetoothSerial"],
            _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]])
    ], ReciboPage);
    return ReciboPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recibo-recibo-module-es5.js.map