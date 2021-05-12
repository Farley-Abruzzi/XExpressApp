(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content text-center color=\"dark\">\r\n\r\n    <ion-grid class=\"gridPosition\">\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <img class=\"circle\" src=\"/assets/avatars/avatar-blank.png\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n\r\n                <ion-item>\r\n                    <ion-label>Email</ion-label>\r\n                    <ion-input name=\"email\" type=\"text\" [(ngModel)]=\"creds.email\"></ion-input>\r\n                </ion-item>\r\n                <br>\r\n                <ion-item>\r\n                    <ion-label>Senha</ion-label>\r\n                    <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"creds.password\"></ion-input>\r\n                </ion-item>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n        <br>\r\n        <br>\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <ion-button type=\"submit\" color=\"success\" shape=\"round\" (click)=\"logar()\">\r\n                    Entrar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row class=\"positionLogo\">\r\n            <ion-col>\r\n                <img src=\"/assets/icon/logo-glpv.jpg\">\r\n            </ion-col>\r\n        </ion-row> -->\r\n\r\n    </ion-grid>\r\n\r\n    <ion-textarea class=\"developer\" disabled=\"true\" placeholder=\"@GLPV - Developed by Farley De Souza.\"></ion-textarea>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.gridPosition {\n  position: fixed;\n  bottom: 35%;\n  right: 10%;\n  left: 10%;\n}\n\nion-item {\n  --color: #10dc60;\n  --background: none;\n  --highlight-height: 1px;\n}\n\n.developer {\n  position: fixed;\n  top: 94%;\n  font-size: 11px;\n}\n\n.positionLogo {\n  position: fixed;\n  top: 89%;\n  right: 35%;\n  left: 35%;\n}\n\n.circle {\n  width: 40%;\n  border-radius: 100%;\n  margin: 25px auto 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0VBQUEsK0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLFxyXG4ubWFpblNsaWRlIGlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnBpY2stYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ncmlkUG9zaXRpb24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzNSU7XHJcbiAgICByaWdodDogMTAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWNvbG9yOiAjMTBkYzYwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5kZXZlbG9wZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5NCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvbkxvZ28ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA4OSU7XHJcbiAgICByaWdodDogMzUlO1xyXG4gICAgbGVmdDogMzUlO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMCBhdXRvICFpbXBvcnRhbnQ7XHJcbn0iLCIubWFpblNsaWRlLFxuLm1haW5TbGlkZSBpb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5waWNrLWF2YXRhciB7XG4gIHdpZHRoOiA4MHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkUG9zaXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzUlO1xuICByaWdodDogMTAlO1xuICBsZWZ0OiAxMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1jb2xvcjogIzEwZGM2MDtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDFweDtcbn1cblxuLmRldmVsb3BlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA5NCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnBvc2l0aW9uTG9nbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA4OSU7XG4gIHJpZ2h0OiAzNSU7XG4gIGxlZnQ6IDM1JTtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMjVweCBhdXRvIDAgYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.services */ "./src/app/services/auth.services.ts");




let LoginPage = class LoginPage {
    constructor(navCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.creds = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
        this.auth.refreshToken()
            .subscribe(resp => {
            this.auth.successfullLogin(resp.headers.get("Authorization"));
            this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
        }, error => { });
    }
    logar() {
        this.creds.email = this.creds.email.trim();
        console.log('CREDS: ', this.creds);
        this.auth.authenticate(this.creds)
            .subscribe(resp => {
            this.auth.successfullLogin(resp.headers.get("Authorization"));
            this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
        }, error => {
            console.log(error);
            this.presentToast('Erro ' + error.status + ': Login ou senha incorretos');
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 3000,
                mode: "ios",
                color: "light"
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], LoginPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const URL = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
let ContribuintesService = class ContribuintesService {
    constructor(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
    }
    // Pega as informações de recibos dos contribuintes no WebServices. 
    getListaRecibos(cod, bairro) {
        // http://192.168.0.243:8081/recibos/listarecibosapp?cod=315&startDate=2019-07-01&endDate=2019-07-31
        return this.http.get(`${URL}/recibos/listarecibosapp?cod=${cod}&startDate=2021-04-01&endDate=2021-04-30&bairro=${bairro}`);
    }
    // Detalhes do recibo.
    getRecibosDetalhe(nrorecibo) {
        // http://192.168.0.243:8081/recibos/app/11382872
        return this.http.get(`${URL}/recibos/app/${nrorecibo}`);
    }
    // Pega as informações de resumo do mensageiro no WebServices.
    getResumo(cod, dtStart, dtEnd) {
        this.dtInicio = dtStart;
        this.dtFim = dtEnd;
        // http://192.168.0.243:8081/recibos/resumomensageiro?cod=11&startDate=2017-01-01&endDate=2018-01-01
        return this.http.get(`${URL}/recibos/resumomensageiro?cod=${cod}&startDate=${dtStart}&endDate=${dtEnd}`);
    }
    getResumoBaixados(cod, dtStart, dtEnd) {
        return this.http.get(`${URL}/recibos/resumorecibosbaixadosapp?cod=${cod}&startDate=${dtStart}&endDate=${dtEnd}`);
    }
    // Pega as informações de resumo do mensageiro por cidade.
    getResumoPorCidade(cod) {
        // http://192.168.0.243:8081/recibos/mensageiroporcidade1?cod=630&startDate=2019-01-01&endDate=2019-03-10
        return this.http.get(`${URL}/recibos/mensageiroporcidade1?cod=${cod}&startDate=${this.dtInicio}&endDate=${this.dtFim}`);
    }
    // Atualiza os recibos no BD
    putRecibo(recibo) {
        // http://localhost:8081/recibos/11369854
        return this.http.put(`${URL}/recibos/${recibo.nrorecibo}`, recibo, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    // Cria recibos devolvidos
    postDevolvidos(devolvido) {
        // http://192.168.0.243:8081/devolvido/17044484
        return this.http.post(`${URL}/devolvido`, devolvido, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    //Inserir novo contribuinte
    postContribuinte(contribuinte) {
        return this.http.post(`${URL}/contribuintes`, contribuinte, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    // Inserir novo recibo
    postReciboGerado(recibo) {
        return this.http.post(`${URL}/recibos`, recibo, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    }
    //buscar pelo ultimo id
    getUltRecibo(cod, dtOp) {
        return this.http.get(`${URL}/recibos/ultrecibo?cod=${cod}&dtOp=${dtOp}`);
    }
    //busca pelo ultimo id
    getUltContribuinte() {
        //console.log(id);
        return this.http.get(`${URL}/contribuintes/ultcontrib`);
    }
};
ContribuintesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ContribuintesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ContribuintesService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map