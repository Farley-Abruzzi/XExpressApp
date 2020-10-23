(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"dark\">\n\n\n  <ion-slides class=\"mainSlide\" #slidePrincipal [options]=\"slidesOpts\">\n\n      <ion-slide>\n\n          <form (ngSubmit)=\"login( fLogin )\" #fLogin=\"ngForm\">\n              <ion-grid fixed>\n\n                  <ion-row>\n                      <ion-col>\n                          <img src=\"/assets/avatars/av-2.png\">\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                      <ion-col>\n\n                          <ion-list no-padding color=\"dark\">\n\n                              <ion-item color=\"dark\">\n                                  <ion-label>Email</ion-label>\n                                  <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"loginUser.email\" required>\n                                  </ion-input>\n                              </ion-item>\n\n                              <ion-item color=\"dark\">\n                                  <ion-label>Senha</ion-label>\n                                  <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"loginUser.password\"\n                                      required></ion-input>\n                              </ion-item>\n\n                          </ion-list>\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                      <ion-col>\n                          <ion-button type=\"submit\" color=\"success\" shape=\"round\" (click)=\"logar()\">\n                              Login\n                          </ion-button>\n                      </ion-col>\n                  </ion-row>\n\n              </ion-grid>\n          </form>\n\n\n\n      </ion-slide>\n\n      <ion-slide>\n\n\n          <ion-grid fixed>\n\n              <!-- Avatar Selector -->\n              <app-avatar-selector (avatarSel)=\"registerUser.avatar = $event\"></app-avatar-selector>\n\n              <form (ngSubmit)=\"registro( fRegistro )\" #fRegistro=\"ngForm\">\n                  <ion-row>\n                      <ion-col>\n\n                          <ion-list>\n\n                              <ion-item>\n                                  <ion-label>Email</ion-label>\n                                  <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"registerUser.email\" required>\n                                  </ion-input>\n                              </ion-item>\n\n                              <ion-item>\n                                  <ion-label>Nome</ion-label>\n                                  <ion-input name=\"nombre\" type=\"text\" [(ngModel)]=\"registerUser.name\" required>\n                                  </ion-input>\n                              </ion-item>\n\n                              <ion-item>\n                                  <ion-label>Senha</ion-label>\n                                  <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"registerUser.password\"\n                                      required></ion-input>\n                              </ion-item>\n\n                          </ion-list>\n                      </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                      <ion-col>\n                          <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                              Criar usuario\n                          </ion-button>\n                      </ion-col>\n                  </ion-row>\n\n              </form>\n          </ion-grid>\n\n\n      </ion-slide>\n\n\n  </ion-slides>\n\n\n\n</ion-content>\n"

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

module.exports = ".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxlbGlzZXVcXERlc2t0b3BcXDEwLWV4cHJlc3Mvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0VBQUEsK0JBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5TbGlkZSwgLm1haW5TbGlkZSBpb24tc2xpZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnBpY2stYXZhdGFyIHtcbiAgd2lkdGg6IDgwcHg7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn0iXX0= */"

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
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui-service.service */ "./src/app/services/ui-service.service.ts");





let LoginPage = class LoginPage {
    constructor(usuarioService, navCtrl, uiService) {
        this.usuarioService = usuarioService;
        this.navCtrl = navCtrl;
        this.uiService = uiService;
        this.loginUser = {
            email: 'test@test.com',
            password: '7654321'
        };
        this.registerUser = {
            email: 'test',
            password: '7654321',
            name: 'Test',
            avatar: 'av-1.png'
        };
        this.slidesOpts = { allowTouchMove: false };
    }
    LockSwipes(lock) {
        if (lock === true) {
            this.slidesOpts = { allowTouchMove: true };
        }
        else {
            this.slidesOpts = { allowTouchMove: false };
        }
    }
    ngOnInit() {
    }
    logar() {
        this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
    }
    login(fLogin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (fLogin.invalid) {
                return;
            }
            const valido = yield this.usuarioService.login(this.loginUser.email, this.loginUser.password);
            if (valido) {
                // Navegar para tabs
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                // Alerta de usuario e contrasenha incorretos.
                this.uiService.alertaInformativo('Usuário e contra/senha não são corretos.');
            }
        });
    }
    registro(fRegistro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (fRegistro.invalid) {
                return;
            }
            const valido = yield this.usuarioService.registro(this.registerUser);
            if (valido) {
                // Navegar para tabs
                this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true });
            }
            else {
                // Alerta de usuario e contrasenha incorretos.
                this.uiService.alertaInformativo('Este email já existe.');
            }
        });
    }
    mostrarRegistro() {
        this.slidesOpts = { allowTouchMove: true };
        this.slides.slideTo(0);
    }
    mostrarLogin() {
        this.slidesOpts = { allowTouchMove: true };
        this.slides.slideTo(1);
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], LoginPage.prototype, "slides", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_ui_service_service__WEBPACK_IMPORTED_MODULE_4__["UiServiceService"]])
], LoginPage);



/***/ }),

/***/ "./src/app/services/ui-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ui-service.service.ts ***!
  \************************************************/
/*! exports provided: UiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiServiceService", function() { return UiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let UiServiceService = class UiServiceService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    alertaInformativo(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                position: 'top',
                duration: 1500
            });
            toast.present();
        });
    }
};
UiServiceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
UiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], UiServiceService);



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
let UsuarioService = class UsuarioService {
    constructor(http, storage, navCtrl) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.token = null;
        this.usuario = {};
    }
    login(email, password) {
        const data = { email, password };
        return new Promise(resolve => {
            this.http.post(`${URL}/user/login`, data)
                .subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(resp);
                if (resp['ok']) {
                    yield this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            }));
        });
    }
    logout() {
        this.token = null;
        this.usuario = null;
        this.storage.clear();
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
    registro(usuario) {
        return new Promise(resolve => {
            this.http.post(`${URL}/user/create`, usuario)
                .subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(resp);
                if (resp['ok']) {
                    yield this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            }));
        });
    }
    getUsuario() {
        if (!this.usuario._id) {
            this.validaToken();
        }
        return Object.assign({}, this.usuario);
    }
    guardarToken(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.token = token;
            yield this.storage.set('token', token);
            yield this.validaToken();
        });
    }
    carregarToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.token = (yield this.storage.get('token')) || null;
        });
    }
    validaToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.carregarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/login');
                return Promise.resolve(false);
            }
            return new Promise(resolve => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'x-token': this.token
                });
                this.http.get(`${URL}/user/`, { headers })
                    .subscribe(resp => {
                    if (resp['ok']) {
                        this.usuario = resp['usuario'];
                        resolve(true);
                    }
                    else {
                        this.navCtrl.navigateRoot('/login');
                        resolve(false);
                    }
                });
            });
        });
    }
    atualizarUsuario(usuario) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'x-token': this.token
        });
        return new Promise(resolve => {
            this.http.post(`${URL}/user/update`, usuario, { headers })
                .subscribe(resp => {
                if (resp['ok']) {
                    this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            });
        });
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], UsuarioService);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map