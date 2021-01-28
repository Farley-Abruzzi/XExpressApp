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
class Recibos {
    constructor(nrorecibo, impresso, dtoperacao, entrega, formulario, nomenorecibo, entregaweb, dtcobranca, reagendado, dtreagendamento, dtrecebimento, valorgerado, valordinheiro, valorcheque, doacaoespecial, parceladoacaoespecial, aumentodefinitivo, dtoperacaobaixa, periodicidade, valoralterado, valornaoalterado, dtvaloralteradobaixa, valorbakp, valorhorabkp, valordatabkp, dataqld, naorecebido, nrosorte, statusrec, dtbaixa, parcela, via, motivodevol, valorremarcado, dtremarc, codoperador, codcategoria, enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, observacoes, codmensageiro, codcontrib, codusuario) {
        this.nrorecibo = nrorecibo;
        this.impresso = impresso;
        this.dtoperacao = dtoperacao;
        this.entrega = entrega;
        this.formulario = formulario;
        this.nomenorecibo = nomenorecibo;
        this.entregaweb = entregaweb;
        this.dtcobranca = dtcobranca;
        this.reagendado = reagendado;
        this.dtreagendamento = dtreagendamento;
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
        this.valorremarcado = valorremarcado;
        this.dtremarc = dtremarc;
        this.codoperador = codoperador;
        this.codcategoria = codcategoria;
        this.enderecosecundario = enderecosecundario;
        this.numerosecundario = numerosecundario;
        this.bairrosecundario = bairrosecundario;
        this.cidadesecundario = cidadesecundario;
        this.complementosecundario = complementosecundario;
        this.cepsecundario = cepsecundario;
        this.telefonesecundario = telefonesecundario;
        this.desccategoria = desccategoria;
        this.observacoes = observacoes;
        this.codmensageiro = codmensageiro;
        this.codcontrib = codcontrib;
        this.codusuario = codusuario;
    }
}
Recibos.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Date },
    { type: Date },
    { type: Number },
    { type: String },
    { type: String },
    { type: Date },
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
    { type: Number },
    { type: Date },
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
    { type: Number },
    { type: Number },
    { type: Number }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let ContribuintesService = class ContribuintesService {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    // Pega as informações de recibos dos contribuintes no WebServices. 
    getListaRecibos() {
        // http://192.168.0.243:8081/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31
        return this.http.get(`${URL}/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31`);
    }
    // Detalhes do recibo.
    getRecibosDetalhe(nrorecibo) {
        // http://192.168.0.243:8081/recibos/app/11382872
        return this.http.get(`${URL}/recibos/app/${nrorecibo}`);
    }
    // Pega as informações de resumo do mensageiro no WebServices.
    getResumo(dtStart, dtEnd) {
        this.dtInicio = dtStart;
        this.dtFim = dtEnd;
        // http://192.168.0.243:8081/recibos/resumomensageiro?cod=11&startDate=2017-01-01&endDate=2018-01-01
        return this.http.get(`${URL}/recibos/resumomensageiro?cod=315&startDate=${dtStart}&endDate=${dtEnd}`);
    }
    // Pega as informações de resumo do mensageiro por cidade.
    getResumoPorCidade() {
        // http://192.168.0.243:8081/recibos/mensageiroporcidade1?cod=630&startDate=2019-01-01&endDate=2019-03-10
        return this.http.get(`${URL}/recibos/mensageiroporcidade1?cod=315&startDate=${this.dtInicio}&endDate=${this.dtFim}`);
    }
    // Atualiza os recibos no BD
    putRecibo(recibo) {
        // http://localhost:8081/recibos/11369854
        return this.http.put(`${URL}/recibos/${recibo.nrorecibo}`, recibo, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    // Cria recibos devolvidos
    postDevolvidos(devolvido) {
        // http://192.168.0.243:8081/devolvido/17044484
        return this.http.post(`${URL}/devolvido`, devolvido, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
};
ContribuintesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ContribuintesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ContribuintesService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/recibos */ "./src/app/class/recibos.ts");




let CrudService = class CrudService {
    constructor(dbService) {
        this.dbService = dbService;
    }
    // Método para inserir recibos no banco do app
    insert(recibos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const db = yield this.dbService.getDB();
                let sql = 'insert into recibos (nrorecibo, nomenorecibo, entregaweb, dtcobranca, reagendado, dtreagendamento, valorgerado, statusrec, dtbaixa, parcela, via, motivodevol,'
                    + ' enderecosecundario, numerosecundario, bairrosecundario, cidadesecundario, complementosecundario, cepsecundario, telefonesecundario, desccategoria, '
                    + ' observacoes, codmensageiro) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
                let data = [recibos.nrorecibo, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.reagendado, recibos.dtreagendamento, recibos.valorgerado,
                    recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.enderecosecundario, recibos.numerosecundario,
                    recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria,
                    recibos.observacoes, recibos.codmensageiro];
                try {
                    yield db.executeSql(sql, data);
                    // console.log('Recibos inseridos');
                }
                catch (e) {
                    return console.error(e);
                }
            }
            catch (e_1) {
                return console.error(e_1);
            }
        });
    }
    // Método para inserir recibos devolvidos no BD do App
    insertDevolvidos(devolvidos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const db = yield this.dbService.getDB();
                let sql = 'insert into recibosDevolvidos (nrorecibo, dtdevol, horaoper, dtoperacao, codoperador, codusuario, '
                    + 'motivodevolucao, statendimento, dscatendimento) values(?,?,?,?,?,?,?,?,?)';
                let data = [devolvidos.nrorecibo, devolvidos.dtdevol, devolvidos.horaoper, devolvidos.dtoperacao, devolvidos.codoperador, devolvidos.codusuario, devolvidos.motivodevolucao,
                    devolvidos.statendimento, devolvidos.dscatendimento];
                try {
                    yield db.executeSql(sql, data);
                    // console.log('Recibos inseridos');
                }
                catch (e) {
                    return console.error(e);
                }
            }
            catch (e_1) {
                return console.error(e_1);
            }
        });
    }
    // Para selecionar todos os recibos com status de Gerado no banco do app
    getAll() {
        return this.dbService.getDB().then((db) => {
            let sql = "select * from recibos where statusrec = 'G'";
            let data;
            return db.executeSql(sql, data)
                .then((data) => {
                if (data.rows.length > 0) {
                    var recibos = new Array();
                    for (let i = 0; i < data.rows.length; i++) {
                        let tmp = data.rows.item(i);
                        var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.reagendado, tmp.dtreagendamento, tmp.dtrecebimento, tmp.valorgerado, tmp.valorcheque, tmp.valordinheiro, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp, tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codcategoria, tmp.codcontrib, tmp.codusuario, tmp.observacoes, tmp.codmensageiro);
                        recibos.push(recibo);
                    }
                    return recibos;
                }
                else {
                    return new Array();
                }
            }).catch(e => {
                console.error(e);
            });
        }).catch(e => {
            console.error(e);
        });
    }
    // Consulta DB do app para comparar dados com o DB da aplicação e fazer o comunicado de deposito
    getByCodmensageiro(codmensageiro, dtbaixa) {
        return this.dbService.getDB()
            .then((db) => {
            let sql = 'SELECT count(obj.codmensageiro), sum(obj.valorgerado) FROM trecibos obj '
                + 'WHERE obj.codmensageiro = ? '
                + 'AND obj.statusrec = "B" '
                + 'AND obj.impresso = "S" '
                + 'AND obj.dtbaixa = ?';
            let data = [codmensageiro, dtbaixa];
            return db.executeSql(sql, data)
                .then((data) => {
                if (data.rows.length > 0) {
                    var recibos = new Array();
                    for (let i = 0; i < data.rows.length; i++) {
                        let tmp = data.rows.item(i);
                        var recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](tmp.nrorecibo, tmp.impresso, tmp.dtoperacao, tmp.entrega, tmp.formulario, tmp.nomenorecibo, tmp.entregaweb, tmp.dtcobranca, tmp.reagendado, tmp.dtreagendamento, tmp.dtrecebimento, tmp.valorgerado, tmp.valorcheque, tmp.valordinheiro, tmp.doacaoespecial, tmp.parceladoacaoespecial, tmp.aumentodefinitivo, tmp.dtoperacaobaixa, tmp.periodicidade, tmp.valoralterado, tmp.valornaoalterado, tmp.dtvaloralteradobaixa, tmp.valorbakp, tmp.valorhorabkp, tmp.valordatabkp, tmp.dataqld, tmp.naorecebido, tmp.nrosorte, tmp.statusrec, tmp.dtbaixa, tmp.parcela, tmp.via, tmp.motivodevol, tmp.enderecosecundario, tmp.numerosecundario, tmp.bairrosecundario, tmp.cidadesecundario, tmp.complementosecundario, tmp.cepsecundario, tmp.telefonesecundario, tmp.desccategoria, tmp.valorremarcado, tmp.dtremarc, tmp.codoperador, tmp.codcategoria, tmp.codcontrib, tmp.codusuario, tmp.observacoes, tmp.codmensageiro);
                        recibos.push(recibo);
                    }
                    return recibos;
                }
                else {
                    return new Array();
                }
            }).catch(e => {
                console.error(e);
            });
        }).catch(e => {
            console.error(e);
        });
    }
    // Para selecionar o recibo por id(nrorecibo)
    getById(nrorecibo) {
        return this.dbService.getDB()
            .then((db) => {
            let sql = 'select * from recibos where nrorecibo = ?';
            let data = [nrorecibo];
            return db.executeSql(sql, data)
                .then((data) => {
                if (data.rows.length > 0) {
                    let item = data.rows.item(0);
                    let recibo = new _class_recibos__WEBPACK_IMPORTED_MODULE_3__["Recibos"](item.nrorecibo, item.impresso, item.dtoperacao, item.entrega, item.formulario, item.nomenorecibo, item.entregaweb, item.dtcobranca, item.reagendado, item.dtreagendamento, item.valorgerado, item.dtrecebimento, item.valorcheque, item.valordinheiro, item.doacaoespecial, item.parceladoacaoespecial, item.aumentodefinitivo, item.dtoperacaobaixa, item.periodicidade, item.valoralterado, item.valornaoalterado, item.dtvaloralteradobaixa, item.valorbakp, item.valorhorabkp, item.valordatabkp, item.dataqld, item.naorecebido, item.nrosorte, item.statusrec, item.dtbaixa, item.parcela, item.via, item.motivodevol, item.enderecosecundario, item.numerosecundario, item.bairrosecundario, item.cidadesecundario, item.complementosecundario, item.cepsecundario, item.telefonesecundario, item.desccategoria, item.valorremarcado, item.dtremarc, item.codoperador, item.codcategoria, item.codcontrib, item.codusuario, item.observacoes, item.codmensageiro);
                    console.log('Consulta realizada');
                    return recibo;
                }
                else {
                    return null;
                }
            }).catch(e => console.error(e));
        }).catch(e => console.error(e));
    }
    // Para atualizar o recibo nos casos de (Doação, Reagendamento ou Devolução)
    update(recibo, option) {
        return this.dbService.getDB().then((db) => {
            let sql;
            let data;
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
            return db.executeSql(sql, data).then(() => console.log("Recibo Atualizado")).catch(e => console.error(e)); //passar parametro e a string;
        }).catch(e => console.error(e));
    }
};
CrudService.ctorParameters = () => [
    { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
CrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
], CrudService);



/***/ })

}]);
//# sourceMappingURL=default~depositos-depositos-module~iniciar-iniciar-module~pages-contribuicao-contribuicao-module~pag~1e43d6e6-es2015.js.map