(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~depositos-depositos-module~iniciar-iniciar-module~pages-contribuicao-contribuicao-module~pag~1e43d6e6"],{

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
    function Recibos(nrorecibo, nomenorecibo, entregaweb, dtcobranca, reagendado, dtreagendamento, valorgerado, statusrec, dtbaixa, parcela, via, motivodevol, enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, observacoes, envioservidor, codmensageiro) {
        this.nrorecibo = nrorecibo;
        this.nomenorecibo = nomenorecibo;
        this.entregaweb = entregaweb;
        this.dtcobranca = dtcobranca;
        this.reagendado = reagendado;
        this.dtreagendamento = dtreagendamento;
        this.valorgerado = valorgerado;
        this.statusrec = statusrec;
        this.dtbaixa = dtbaixa;
        this.parcela = parcela;
        this.via = via;
        this.motivodevol = motivodevol;
        this.enderecosecundario = enderecosecundario;
        this.numerosecundario = numerosecundario;
        this.bairrosecundario = bairrosecundario;
        this.cidadesecundario = cidadesecundario;
        this.complementosecundario = complementosecundario;
        this.cepsecundario = cepsecundario;
        this.telefonesecundario = telefonesecundario;
        this.desccategoria = desccategoria;
        this.observacoes = observacoes;
        this.envioservidor = envioservidor;
        this.codmensageiro = codmensageiro;
    }
    Recibos.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String },
        { type: Date },
        { type: undefined },
        { type: Date },
        { type: Number },
        { type: String },
        { type: Date },
        { type: String },
        { type: Number },
        { type: undefined },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: String },
        { type: Number }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
var ContribuintesService = /** @class */ (function () {
    function ContribuintesService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    // Pega as informações de recibos dos contribuintes no WebServices. 
    ContribuintesService.prototype.getListaRecibos = function () {
        // http://192.168.0.243:8081/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31
        return this.http.get(URL + "/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31");
    };
    // Detalhes do recibo.
    ContribuintesService.prototype.getRecibosDetalhe = function (nrorecibo) {
        // http://192.168.0.243:8081/recibos/app/11382872
        return this.http.get(URL + "/recibos/app/" + nrorecibo);
    };
    // Pega as informações de resumo do mensageiro no WebServices.
    ContribuintesService.prototype.getResumo = function (dtStart, dtEnd) {
        this.dtInicio = dtStart;
        this.dtFim = dtEnd;
        // http://192.168.0.243:8081/recibos/resumomensageiro?cod=11&startDate=2017-01-01&endDate=2018-01-01
        return this.http.get(URL + "/recibos/resumomensageiro?cod=315&startDate=" + dtStart + "&endDate=" + dtEnd);
    };
    // Pega as informações de resumo do mensageiro por cidade.
    ContribuintesService.prototype.getResumoPorCidade = function () {
        // http://192.168.0.243:8081/recibos/mensageiroporcidade1?cod=630&startDate=2019-01-01&endDate=2019-03-10
        return this.http.get(URL + "/recibos/mensageiroporcidade1?cod=315&startDate=" + this.dtInicio + "&endDate=" + this.dtFim);
    };
    // Atualiza os recibos no local storage
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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




var CrudService = /** @class */ (function () {
    function CrudService(dbService) {
        this.dbService = dbService;
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
                        sql = 'insert into recibos (nrorecibo, nomenorecibo, entregaweb, dtcobranca, reagendado, dtreagendamento, valorgerado, statusrec, dtbaixa, parcela, via, motivodevol,'
                            + ' enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, '
                            + ' observacoes, envioservidor, codmensageiro) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                        data = [recibos.nrorecibo, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.reagendado, recibos.dtreagendamento, recibos.valorgerado,
                            recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.enderecosecundario, recibos.numerosecundario,
                            recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria,
                            recibos.observacoes, recibos.envioservidor, recibos.codmensageiro];
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
        return this.dbService.getDB().then(function (db) {
            var sql = "select * from recibos where statusrec = 'G'";
            var data;
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var recibos = new Array();
                    for (var i = 0; i < data.rows.length; i++) {
                        var tmp = data.rows.item(i);
                        var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.reagendado, tmp.dtreagendamento, tmp.valorgerado, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.observacoes, tmp.envioservidor, tmp.codmensageiro);
                        recibos.push(recibo);
                    }
                    return recibos;
                }
                else {
                    return new Array();
                }
            }).catch(function (e) {
                console.error(e);
            });
        }).catch(function (e) {
            console.error(e);
        });
    };
    // Para selecionar o recibo por id(nrorecibo)
    CrudService.prototype.getById = function (nrorecibo) {
        return this.dbService.getDB()
            .then(function (db) {
            var sql = 'select * from recibos where nrorecibo = ?';
            var data = [nrorecibo];
            return db.executeSql(sql, data)
                .then(function (data) {
                if (data.rows.length > 0) {
                    var item = data.rows.item(0);
                    var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](item.nrorecibo, item.nomenorecibo, item.entregaweb, item.dtcobranca, item.reagendado, item.dtreagendamento, item.valorgerado, item.statusrec, item.dtbaixa, item.parcela, item.via, item.motivodevol, item.enderecosecundario, item.numerosecundario, item.bairrosecundario, item.cidadesecundario, item.complementosecundario, item.cepsecundario, item.telefonesecundario, item.desccategoria, item.observacoes, item.envioservidor, item.codmensageiro);
                    console.log('Consulta realizada');
                    return recibo;
                }
                else {
                    return null;
                }
            }).catch(function (e) { return console.error(e); });
        }).catch(function (e) { return console.error(e); });
    };
    // Para atualizar o recibo nos casos de (Doação, Reagendamento ou Devolução)
    CrudService.prototype.update = function (recibo, option) {
        return this.dbService.getDB().then(function (db) {
            var sql;
            var data;
            switch (option) {
                case 'doacao': {
                    sql = 'UPDATE recibos SET valorgerado  = ?, statusrec = ?, dtbaixa = ?, motivodevol = ? WHERE nrorecibo = ?';
                    data = [recibo.valorgerado, recibo.statusrec, recibo.dtbaixa, recibo.motivodevol, recibo.nrorecibo];
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
    CrudService.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], CrudService);
    return CrudService;
}());



/***/ })

}]);
//# sourceMappingURL=default~depositos-depositos-module~iniciar-iniciar-module~pages-contribuicao-contribuicao-module~pag~1e43d6e6-es5.js.map