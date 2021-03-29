(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~depositos-depositos-module~iniciar-iniciar-module~pages-contribuicao-contribuicao-module~pag~751c7b4e"],{

/***/ "./src/app/class/depositoDTO.ts":
/*!**************************************!*\
  !*** ./src/app/class/depositoDTO.ts ***!
  \**************************************/
/*! exports provided: DepositoDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositoDTO", function() { return DepositoDTO; });
var DepositoDTO = /** @class */ (function () {
    function DepositoDTO() {
    }
    return DepositoDTO;
}());



/***/ }),

/***/ "./src/app/class/recibos.ts":
/*!**********************************!*\
  !*** ./src/app/class/recibos.ts ***!
  \**********************************/
/*! exports provided: Recibos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recibos", function() { return Recibos; });
var Recibos = /** @class */ (function () {
    function Recibos(nrorecibo, impresso, dtoperacao, entrega, formulario, nomenorecibo, entregaweb, dtcobranca, dtrecebimento, valorgerado, valordinheiro, valorcheque, doacaoespecial, parceladoacaoespecial, aumentodefinitivo, dtoperacaobaixa, periodicidade, valoralterado, valornaoalterado, dtvaloralteradobaixa, valorbakp, valorhorabkp, valordatabkp, dataqld, naorecebido, nrosorte, statusrec, dtbaixa, parcela, via, motivodevol, dtremarc, valorremarcado, codoperador, codmensageiro, codcategoria, dtreagendamento, reagendado, codcontrib, codusuario, enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, observacoes, datadorecebimento) {
        this.nrorecibo = nrorecibo;
        this.impresso = impresso;
        this.dtoperacao = dtoperacao;
        this.entrega = entrega;
        this.formulario = formulario;
        this.nomenorecibo = nomenorecibo;
        this.entregaweb = entregaweb;
        this.dtcobranca = dtcobranca;
        this.dtrecebimento = dtrecebimento;
        this.valorgerado = valorgerado;
        this.valordinheiro = valordinheiro;
        this.valorcheque = valorcheque;
        this.doacaoespecial = doacaoespecial;
        this.parceladoacaoespecial = parceladoacaoespecial;
        this.aumentodefinitivo = aumentodefinitivo;
        this.dtoperacaobaixa = dtoperacaobaixa;
        this.periodicidade = periodicidade;
        this.valoralterado = valoralterado;
        this.valornaoalterado = valornaoalterado;
        this.dtvaloralteradobaixa = dtvaloralteradobaixa;
        this.valorbakp = valorbakp;
        this.valorhorabkp = valorhorabkp;
        this.valordatabkp = valordatabkp;
        this.dataqld = dataqld;
        this.naorecebido = naorecebido;
        this.nrosorte = nrosorte;
        this.statusrec = statusrec;
        this.dtbaixa = dtbaixa;
        this.parcela = parcela;
        this.via = via;
        this.motivodevol = motivodevol;
        this.dtremarc = dtremarc;
        this.valorremarcado = valorremarcado;
        this.codoperador = codoperador;
        this.codmensageiro = codmensageiro;
        this.codcategoria = codcategoria;
        this.dtreagendamento = dtreagendamento;
        this.reagendado = reagendado;
        this.codcontrib = codcontrib;
        this.codusuario = codusuario;
        this.enderecosecundario = enderecosecundario;
        this.numerosecundario = numerosecundario;
        this.bairrosecundario = bairrosecundario;
        this.cidadesecundario = cidadesecundario;
        this.complementosecundario = complementosecundario;
        this.cepsecundario = cepsecundario;
        this.telefonesecundario = telefonesecundario;
        this.desccategoria = desccategoria;
        this.observacoes = observacoes;
        this.datadorecebimento = datadorecebimento;
    }
    Recibos.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: Date },
        { type: Date },
        { type: Number },
        { type: String },
        { type: String },
        { type: Date },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: String },
        { type: Number },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: undefined },
        { type: Number },
        { type: String },
        { type: Date },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: String },
        { type: Date },
        { type: String },
        { type: Number },
        { type: String },
        { type: Date },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Date },
        { type: String },
        { type: Number },
        { type: Number },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Recibos;
}());



/***/ }),

/***/ "./src/app/services/contribuintes.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/contribuintes.service.ts ***!
  \***************************************************/
/*! exports provided: ContribuintesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContribuintesService", function() { return ContribuintesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
var ContribuintesService = /** @class */ (function () {
    function ContribuintesService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    // Pega as informações de recibos dos contribuintes no WebServices. 
    ContribuintesService.prototype.getListaRecibos = function (cod, bairro) {
        // http://192.168.0.243:8081/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31
        return this.http.get(URL + "/recibos/listarecibosapp?cod=" + cod + "&startDate=2021-03-01&endDate=2021-03-31&bairro=" + bairro);
    };
    // Detalhes do recibo.
    ContribuintesService.prototype.getRecibosDetalhe = function (nrorecibo) {
        // http://192.168.0.243:8081/recibos/app/11382872
        return this.http.get(URL + "/recibos/app/" + nrorecibo);
    };
    // Pega as informações de resumo do mensageiro no WebServices.
    ContribuintesService.prototype.getResumo = function (cod, dtStart, dtEnd) {
        this.dtInicio = dtStart;
        this.dtFim = dtEnd;
        // http://192.168.0.243:8081/recibos/resumomensageiro?cod=11&startDate=2017-01-01&endDate=2018-01-01
        return this.http.get(URL + "/recibos/resumomensageiro?cod=" + cod + "&startDate=" + dtStart + "&endDate=" + dtEnd);
    };
    // Pega as informações de resumo do mensageiro por cidade.
    ContribuintesService.prototype.getResumoPorCidade = function (cod) {
        // http://192.168.0.243:8081/recibos/mensageiroporcidade1?cod=630&startDate=2019-01-01&endDate=2019-03-10
        return this.http.get(URL + "/recibos/mensageiroporcidade1?cod=" + cod + "&startDate=" + this.dtInicio + "&endDate=" + this.dtFim);
    };
    // Atualiza os recibos no BD
    ContribuintesService.prototype.putRecibo = function (recibo) {
        // http://localhost:8081/recibos/11369854
        return this.http.put(URL + "/recibos/" + recibo.nrorecibo, recibo, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    // Cria recibos devolvidos
    ContribuintesService.prototype.postDevolvidos = function (devolvido) {
        // http://192.168.0.243:8081/devolvido/17044484
        return this.http.post(URL + "/devolvido", devolvido, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    ContribuintesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ContribuintesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContribuintesService);
    return ContribuintesService;
}());



/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/recibos */ "./src/app/class/recibos.ts");
/* harmony import */ var _class_depositoDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class/depositoDTO */ "./src/app/class/depositoDTO.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var CrudService = /** @class */ (function () {
    function CrudService(dbService, datePipe) {
        this.dbService = dbService;
        this.datePipe = datePipe;
    }
    // Método para inserir recibos no banco do app
    CrudService.prototype.insert = function (recibos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, sql, data, e_2, e_1_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.dbService.getDB()];
                    case 1:
                        db = _a.sent();
                        sql = 'insert into recibos (nrorecibo, impresso, dtoperacao, entrega, formulario, nomenorecibo, entregaweb, dtcobranca, dtrecebimento, valorgerado, valordinheiro, '
                            + 'valorcheque, doacaoespecial, parceladoacaoespecial, aumentodefinitivo, dtoperacaobaixa, periodicidade, valoralterado, valornaoalterado, dtvaloralteradobaixa, valorbakp, valorhorabkp, '
                            + 'valordatabkp, dataqld, naorecebido, nrosorte, statusrec, dtbaixa, parcela, via, motivodevol, valorremarcado, dtremarc, codoperador, codmensageiro, codcategoria, dtreagendamento, reagendado, codcontrib, codusuario, enderecosecundario, numerosecundario, '
                            + 'bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, observacoes, datadorecebimento) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                        data = [recibos.nrorecibo, recibos.impresso, recibos.dtoperacao, recibos.entrega, recibos.formulario, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.dtrecebimento, recibos.valorgerado, recibos.valordinheiro,
                            recibos.valorcheque, recibos.doacaoespecial, recibos.parceladoacaoespecial, recibos.aumentodefinitivo, recibos.dtoperacaobaixa, recibos.periodicidade, recibos.valoralterado, recibos.valornaoalterado, recibos.dtvaloralteradobaixa, recibos.valorbakp, recibos.valorhorabkp,
                            recibos.valordatabkp, recibos.dataqld, recibos.naorecebido, recibos.nrosorte, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.valorremarcado, recibos.dtremarc, recibos.codoperador, recibos.codmensageiro, recibos.codcategoria, recibos.dtreagendamento,
                            recibos.reagendado, recibos.codcontrib, recibos.codusuario, recibos.enderecosecundario, recibos.numerosecundario, recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria,
                            recibos.observacoes, recibos.datadorecebimento];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, db.executeSql(sql, data)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        return [2 /*return*/, console.error(e_2)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1_1 = _a.sent();
                        return [2 /*return*/, console.error(e_1_1)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // Método para inserir recibos devolvidos no BD do App
    CrudService.prototype.insertDevolvidos = function (devolvidos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var db, sql, data, e_3, e_1_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.dbService.getDB()];
                    case 1:
                        db = _a.sent();
                        sql = 'insert into recibosDevolvidos (nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, '
                            + 'motivodevolucao, statendimento, dscatendimento) values(?,?,?,?,?,?,?,?,?)';
                        data = [devolvidos.nrorecibo, devolvidos.dtdevol, devolvidos.horaoper, devolvidos.dtoperacao, devolvidos.codoperador, devolvidos.codusuario, devolvidos.motivodevolucao,
                            devolvidos.statendimento, devolvidos.dscatendimento];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, db.executeSql(sql, data)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        return [2 /*return*/, console.error(e_3)];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1_2 = _a.sent();
                        return [2 /*return*/, console.error(e_1_2)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // Para selecionar todos os recibos com status de Gerado no banco do app
    CrudService.prototype.getAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dbService.getDB().then(function (db) {
                            var sql = "select * from recibos where statusrec = 'G' ORDER BY dtcobranca ASC";
                            var data;
                            return db.executeSql(sql, data)
                                .then(function (data) {
                                if (data.rows.length > 0) {
                                    var recibos = new Array();
                                    for (var i = 0; i < data.rows.length; i++) {
                                        var tmp = data.rows.item(i);
                                        var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro, tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp, tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento);
                                        recibos.push(recibo);
                                        console.log('Consulta realizada!');
                                    }
                                    return recibos;
                                }
                                else {
                                    console.log('return new array<Recibos>');
                                    return new Array();
                                }
                            }).catch(function (e) {
                                console.error(e);
                            });
                        }).catch(function (e) {
                            console.error(e);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Consulta DB do app para comparar dados com o DB da aplicação e fazer o comunicado de deposito
    CrudService.prototype.getForDeposito = function (datadorecebimento) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // dtbaixa.toISOString();
                        console.log('DTBAIXA: ', datadorecebimento);
                        return [4 /*yield*/, this.dbService.getDB().then(function (db) {
                                var sql = "SELECT count(*) AS Qtd, sum(valorgerado) AS Total FROM recibos WHERE datadorecebimento = ? AND statusrec = 'B'";
                                var data = [datadorecebimento];
                                return db.executeSql(sql, data)
                                    .then(function (data) {
                                    var depositos = new Array();
                                    if (data.rows.length > 0) {
                                        //let item = data.rows.item(0);
                                        var deposito = new _class_depositoDTO__WEBPACK_IMPORTED_MODULE_4__["DepositoDTO"]();
                                        deposito.qtdRecibos = data.rows.item(0).Qtd;
                                        deposito.totalArrecadado = data.rows.item(0).Total;
                                        console.log('Consulta realizada: ', deposito.qtdRecibos, deposito.totalArrecadado);
                                        depositos.push(deposito);
                                    }
                                    return depositos;
                                }).catch(function (e) {
                                    console.error(e);
                                });
                            }).catch(function (e) {
                                console.error(e);
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Para selecionar o recibo por id(nrorecibo)
    CrudService.prototype.getById = function (nrorecibo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dbService.getDB()
                            .then(function (db) {
                            var sql = 'select * from recibos where nrorecibo = ?';
                            var data = [nrorecibo];
                            return db.executeSql(sql, data)
                                .then(function (data) {
                                if (data.rows.length > 0) {
                                    var tmp = data.rows.item(0);
                                    var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro, tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp, tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento);
                                    console.log('Consulta realizada');
                                    return recibo;
                                }
                                else {
                                    return null;
                                }
                            }).catch(function (e) { return console.error(e); });
                        }).catch(function (e) { return console.error(e); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // Para atualizar o recibo nos casos de (Doação, Reagendamento ou Devolução)
    CrudService.prototype.update = function (recibo, option) {
        return this.dbService.getDB().then(function (db) {
            var sql;
            var data;
            switch (option) {
                case 'doacao': {
                    sql = 'UPDATE recibos SET valorgerado  = ?, statusrec = ?, datadorecebimento = ?, dtbaixa = ?, motivodevol = ? WHERE nrorecibo = ?';
                    data = [recibo.valorgerado, recibo.statusrec, recibo.datadorecebimento, recibo.dtbaixa, recibo.motivodevol, recibo.nrorecibo];
                    break;
                }
                case 'reagendamento': {
                    sql = 'UPDATE recibos SET reagendado = ?, dtreagendamento = ? WHERE nrorecibo = ?';
                    data = [recibo.reagendado, recibo.dtreagendamento, recibo.nrorecibo];
                    break;
                }
                case 'devolucao': {
                    sql = 'UPDATE recibos SET statusrec = ? WHERE nrorecibo = ?';
                    data = [recibo.statusrec, recibo.nrorecibo];
                    break;
                }
            }
            return db.executeSql(sql, data).then(function () { return console.log("Recibo Atualizado"); }).catch(function (e) { return console.error(e); }); //passar parametro e a string;
        }).catch(function (e) { return console.error(e); });
    };
    CrudService.prototype.getByBairro = function (bairro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('BAIRRO NO CRUD: ', bairro);
                        return [4 /*yield*/, this.dbService.getDB().then(function (db) {
                                var sql = "SELECT * FROM recibos WHERE bairrosecundario = ? AND statusrec = 'G' ORDER BY dtcobranca ASC";
                                var data = [bairro];
                                return db.executeSql(sql, data)
                                    .then(function (data) {
                                    if (data.rows.length > 0) {
                                        var recibos = new Array();
                                        for (var i = 0; i < data.rows.length; i++) {
                                            var tmp = data.rows.item(i);
                                            var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.dtrecebimento, tmp.valorgerado, tmp.valordinheiro, tmp.valorcheque, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp, tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codmensageiro, tmp.codcategoria, tmp.dtreagendamento, tmp.reagendado, tmp.codcontrib, tmp.codusuario, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.datadorecebimento);
                                            recibos.push(recibo);
                                            console.log('Consulta realizada!');
                                        }
                                        return recibos;
                                    }
                                    else {
                                        return null;
                                    }
                                }).catch(function (e) { return console.error(e); });
                            }).catch(function (e) { return console.error(e); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudService.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], CrudService);
    return CrudService;
}());



/***/ })

}]);
//# sourceMappingURL=default~depositos-depositos-module~iniciar-iniciar-module~pages-contribuicao-contribuicao-module~pag~751c7b4e-es5.js.map