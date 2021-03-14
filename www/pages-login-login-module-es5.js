(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content color=\"dark\">\r\n\r\n    <!-- <form (ngSubmit)=\"login( fLogin )\" #fLogin=\"ngForm\"></form> -->\r\n    <ion-grid class=\"gridPosition\">\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <img src=\"/assets/avatars/av-6.png\">\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col>\r\n\r\n                <ion-item>\r\n                    <ion-label>Email</ion-label>\r\n                    <ion-input name=\"email\" type=\"text\" [(ngModel)]=\"creds.email\"></ion-input>\r\n                </ion-item>\r\n                <br>\r\n                <ion-item>\r\n                    <ion-label>Senha</ion-label>\r\n                    <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"creds.password\"></ion-input>\r\n                </ion-item>\r\n\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row text-center>\r\n            <ion-col>\r\n                <ion-button type=\"submit\" color=\"success\" shape=\"round\" (click)=\"logar()\">\r\n                    Entrar\r\n                </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n    </ion-grid>\r\n    <ion-textarea class=\"Developer\" disabled=\"true\" placeholder=\"@GLPV - Developed by Farley De Souza.\"></ion-textarea>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  -webkit-transition: opacity 0.5s linear;\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n\n.gridPosition {\n  position: fixed;\n  bottom: 35%;\n  right: 10%;\n  left: 10%;\n}\n\nion-item {\n  color: #10dc60;\n  --background: none;\n  --highlight-height: 1px;\n}\n\n.Developer {\n  position: fixed;\n  top: 94%;\n  left: 20%;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXHRlbXBcXHdzLWlvbmljXFxYRXhwcmVzc0FwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHVDQUFBO0VBQUEsK0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2xpZGUsXHJcbi5tYWluU2xpZGUgaW9uLXNsaWRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4ucGljay1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmdyaWRQb3NpdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDM1JTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGNvbG9yOiAjMTBkYzYwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5EZXZlbG9wZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5NCU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iLCIubWFpblNsaWRlLFxuLm1haW5TbGlkZSBpb24tc2xpZGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5waWNrLWF2YXRhciB7XG4gIHdpZHRoOiA4MHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5waWNrLWF2YXRhci1zZWxlY2Npb25hZG8ge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkUG9zaXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzUlO1xuICByaWdodDogMTAlO1xuICBsZWZ0OiAxMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgY29sb3I6ICMxMGRjNjA7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAxcHg7XG59XG5cbi5EZXZlbG9wZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOTQlO1xuICBsZWZ0OiAyMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.services */ "./src/app/services/auth.services.ts");




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.creds = {
            email: "",
            password: ""
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.refreshToken()
            .subscribe(function (resp) {
            _this.auth.successfullLogin(resp.headers.get("Authorization"));
            _this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
        }, function (error) { });
    };
    LoginPage.prototype.logar = function () {
        var _this = this;
        this.creds.email = this.creds.email.trim();
        console.log('CREDS: ', this.creds);
        this.auth.authenticate(this.creds)
            .subscribe(function (resp) {
            console.log('OBJ CREDS: ', _this.creds);
            _this.auth.successfullLogin(resp.headers.get("Authorization"));
            _this.navCtrl.navigateRoot('main/tabs/tab2', { animated: true });
        }, function (error) {
            console.log(error);
            _this.presentToast('Erro: ' + error);
        });
    };
    LoginPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 3000,
                            mode: "ios",
                            color: "light"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_auth_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map