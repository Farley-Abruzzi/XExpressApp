(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bluetooth-bluetooth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bluetooth/bluetooth.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bluetooth/bluetooth.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Bluetooth</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-button full color=\"success\" (click)=\"listPairedDevices()\" (click)=\"presentLoading()\">\r\n        <ion-icon name=\"refresh\"></ion-icon>&nbsp;Atualizar Dispositivos Bluetooth</ion-button>\r\n    <ion-row>\r\n        <ion-col>\r\n            <ion-list ngDefaultControl radio-group [(ngModel)]=\"pairedDeviceID\" *ngIf=\"listToggle\">\r\n                <ion-item *ngFor=\"let i of pairedList;let j=index\">\r\n                    <ion-label>{{i.name}}</ion-label>\r\n                    <ion-radio value=\"{{j}}\"></ion-radio>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-button full color=\"success\" *ngIf=\"listToggle\" (click)=\"selectDevice()\">\r\n        <ion-icon name=\"bluetooth\"></ion-icon>&nbsp;Conectar dispositivo Bluetooth</ion-button>\r\n    <ion-list>\r\n        <ion-item placeholder=\"Digite os dados que deseja enviar\">\r\n            <ion-textarea placeholder=\"Digite os dados que deseja enviar\"></ion-textarea>\r\n            <ion-input type=\"text\" name=\"datasend\" [(ngModel)]=\"dataSend\"></ion-input>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-button color=\"success\" fill=\"outline\" (click)=\"sendData()\">\r\n        <ion-icon name=\"send\"></ion-icon>&nbsp;Enviar dados via Bluetooth\r\n    </ion-button>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.module.ts ***!
  \*****************************************************/
/*! exports provided: BluetoothPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPageModule", function() { return BluetoothPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bluetooth.page */ "./src/app/pages/bluetooth/bluetooth.page.ts");







var routes = [
    {
        path: '',
        component: _bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]
    }
];
var BluetoothPageModule = /** @class */ (function () {
    function BluetoothPageModule() {
    }
    BluetoothPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bluetooth_page__WEBPACK_IMPORTED_MODULE_6__["BluetoothPage"]]
        })
    ], BluetoothPageModule);
    return BluetoothPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-bluetooth .submit-btn {\n  color: #10dc60;\n  background: rgba(0, 0, 0, 0);\n  border-radius: 30px !important;\n  border: 1px solid #FFF;\n}\npage-bluetooth .my-custom-class {\n  --background: #f4f5f8;\n  --spinner-color: #10dc60;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmx1ZXRvb3RoL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxibHVldG9vdGhcXGJsdWV0b290aC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JsdWV0b290aC9ibHVldG9vdGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FERUk7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmx1ZXRvb3RoL2JsdWV0b290aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWJsdWV0b290aCB7XHJcbiAgICAuc3VibWl0LWJ0biB7XHJcbiAgICAgICAgY29sb3I6ICMxMGRjNjA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgIH1cclxuICAgIC5teS1jdXN0b20tY2xhc3Mge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2Y0ZjVmODtcclxuICAgICAgICAtLXNwaW5uZXItY29sb3I6ICMxMGRjNjA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn0iLCJwYWdlLWJsdWV0b290aCAuc3VibWl0LWJ0biB7XG4gIGNvbG9yOiAjMTBkYzYwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG59XG5wYWdlLWJsdWV0b290aCAubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmNWY4O1xuICAtLXNwaW5uZXItY29sb3I6ICMxMGRjNjA7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/bluetooth/bluetooth.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bluetooth/bluetooth.page.ts ***!
  \***************************************************/
/*! exports provided: BluetoothPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluetoothPage", function() { return BluetoothPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");




var BluetoothPage = /** @class */ (function () {
    function BluetoothPage(navCtrl, alertCtrl, loadingController, bluetoothSerial, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.bluetoothSerial = bluetoothSerial;
        this.toastCtrl = toastCtrl;
        this.listToggle = false;
        this.pairedDeviceID = 0;
        this.dataSend = "";
        this.checkBluetoothEnabled();
    }
    BluetoothPage.prototype.ngOnInit = function () {
    };
    BluetoothPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            cssClass: 'my-custom-class',
                            message: 'Por favor aguarde...',
                            spinner: "bubbles",
                            duration: 1500
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothPage.prototype.checkBluetoothEnabled = function () {
        var _this = this;
        this.bluetoothSerial.isEnabled().then(function (success) {
            _this.listPairedDevices();
        }, function (error) {
            _this.showError("Habilite o Bluetooth");
        });
    };
    BluetoothPage.prototype.listPairedDevices = function () {
        var _this = this;
        this.bluetoothSerial.list().then(function (success) {
            _this.pairedList = success;
            _this.listToggle = true;
        }, function (error) {
            _this.showError("Habilite o Bluetooth");
            _this.listToggle = false;
        });
    };
    BluetoothPage.prototype.selectDevice = function () {
        var connectedDevice = this.pairedList[this.pairedDeviceID];
        if (!connectedDevice.address) {
            this.showError('Selecione o dispositivo pareado para conectar');
            return;
        }
        var address = connectedDevice.address;
        var name = connectedDevice.name;
        this.connect(address);
    };
    BluetoothPage.prototype.connect = function (address) {
        var _this = this;
        // Attempt to connect device with specified address, call app.deviceConnected if success
        this.bluetoothSerial.connect(address).subscribe(function (success) {
            _this.deviceConnected();
            _this.showToast("Dispositivo conectado!");
        }, function (error) {
            _this.showError("Erro: Conecte o dispositivo");
        });
    };
    BluetoothPage.prototype.deviceConnected = function () {
        var _this = this;
        // Subscribe to data receiving as soon as the delimiter is read
        this.bluetoothSerial.subscribe('\n').subscribe(function (success) {
            _this.handleData(success);
            _this.showToast("Conexão bem sucedida");
        }, function (error) {
            _this.showError(error);
        });
    };
    BluetoothPage.prototype.deviceDisconnected = function () {
        // Unsubscribe from data receiving
        this.bluetoothSerial.disconnect();
        this.showToast("Dispositivo Desconectado");
    };
    BluetoothPage.prototype.handleData = function (data) {
        this.showToast(data);
    };
    BluetoothPage.prototype.sendData = function () {
        var _this = this;
        this.dataSend += '\n';
        this.showToast(this.dataSend);
        this.bluetoothSerial.write(this.dataSend).then(function (success) {
            _this.showToast(success);
        }, function (error) {
            _this.showError(error);
        });
    };
    BluetoothPage.prototype.showError = function (error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error',
                            subHeader: error,
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothPage.prototype.showToast = function (msj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msj,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BluetoothPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_3__["BluetoothSerial"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    BluetoothPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluetooth',
            template: __webpack_require__(/*! raw-loader!./bluetooth.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bluetooth/bluetooth.page.html"),
            styles: [__webpack_require__(/*! ./bluetooth.page.scss */ "./src/app/pages/bluetooth/bluetooth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_3__["BluetoothSerial"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], BluetoothPage);
    return BluetoothPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bluetooth-bluetooth-module-es5.js.map