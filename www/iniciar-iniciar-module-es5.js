(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciar-iniciar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/iniciar/iniciar.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title>\r\n            X-Express\r\n        </ion-title>\r\n        <ion-icon style=\"margin-left: 7px;\" slot=\"start\" name=\"person\" (click)=\"profile()\"></ion-icon>\r\n        <ion-icon slot=\"end\" name=\"moon\"></ion-icon>\r\n        <ion-toggle slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"alterarTema()\"></ion-toggle>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content text-center color=\"light\">\r\n\r\n    <!-- Layout da página Iniciar. -->\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-1\" size=\"large\" fill=\"clear\" (click)=\"contribuicao()\">\r\n                        <img src=\"assets/icon/box.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-1\">\r\n                        Contribuições\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-2\" size=\"large\" fill=\"clear\" (click)=\"relatorio()\">\r\n                        <img src=\"assets/icon/analytics.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-2\">\r\n                        Relatórios\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-3\" size=\"large\" fill=\"clear\" (click)=\"cargaRecibos()\">\r\n                        <img src=\"assets/icon/download.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-3\">\r\n                        Baixar recibos\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-4\" size=\"large\" fill=\"clear\" (click)=\"beneficio()\">\r\n                        <img src=\"assets/icon/money-bag.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-4\">\r\n                        Benefícios\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-5\" size=\"large\" fill=\"clear\" (click)=\"bluetooth()\">\r\n                        <img src=\"assets/icon/bluetooth.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-5\">\r\n                        Bluetooth\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-6\" size=\"large\" fill=\"clear\" (click)=\"mensagem()\">\r\n                        <img src=\"assets/icon/chat.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-6\">\r\n                        Mensagens\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-textarea class=\"Developer\" disabled=\"true\" placeholder=\"@GLPV - Developed by Farley De Souza.\"></ion-textarea>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/iniciar/iniciar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/iniciar/iniciar.module.ts ***!
  \*************************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _iniciar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iniciar.page */ "./src/app/pages/iniciar/iniciar.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _iniciar_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_iniciar_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/iniciar/iniciar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/iniciar/iniciar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-1 {\n  position: fixed;\n  bottom: 69%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-1 {\n  position: fixed;\n  bottom: 65%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-2 {\n  position: fixed;\n  bottom: 69%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-2 {\n  position: fixed;\n  bottom: 65%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-3 {\n  position: fixed;\n  bottom: 47%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-3 {\n  position: fixed;\n  bottom: 43%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-4 {\n  position: fixed;\n  bottom: 47%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-4 {\n  position: fixed;\n  bottom: 43%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-5 {\n  position: fixed;\n  bottom: 23%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-5 {\n  position: fixed;\n  bottom: 19%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-6 {\n  position: fixed;\n  bottom: 23%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-6 {\n  position: fixed;\n  bottom: 19%;\n  left: 40%;\n  right: 0px;\n}\n\n.Developer {\n  position: fixed;\n  top: 94%;\n  right: 0%;\n  left: 0%;\n  font-size: 11px;\n}\n\n.datetime-text {\n  position: fixed !important;\n  font-size: 0px !important;\n}\n\nion-toggle {\n  --background-checked: #2fdf75;\n  --handle-background: #2fdf75;\n  --handle-background-checked: #2fdf75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lhci9DOlxcdGVtcFxcd3MtaW9uaWNcXFhFeHByZXNzQXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lhclxcaW5pY2lhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpYXIvaW5pY2lhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaWFyL2luaWNpYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi0xIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjklO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0xIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjUlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi0yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjklO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjUlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi0zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDclO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDMlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi00IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDclO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC00IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDMlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi01IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjMlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC01IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTklO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi02IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjMlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC02IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTklO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLkRldmVsb3BlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDk0JTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10b2dnbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyZmRmNzU7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjMmZkZjc1O1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjMmZkZjc1O1xyXG59IiwiLmJ1dHRvbi0xIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY5JTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC0xIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY1JTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xufVxuXG4uYnV0dG9uLTIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjklO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjUlO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5idXR0b24tMyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0NyU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtMyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MyU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbn1cblxuLmJ1dHRvbi00IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQ3JTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC00IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQzJTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xufVxuXG4uYnV0dG9uLTUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjMlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTklO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG59XG5cbi5idXR0b24tNiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMyU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtNiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxOSU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLkRldmVsb3BlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA5NCU7XG4gIHJpZ2h0OiAwJTtcbiAgbGVmdDogMCU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRhdGV0aW1lLXRleHQge1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMmZkZjc1O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjMmZkZjc1O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyZmRmNzU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/iniciar/iniciar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/iniciar/iniciar.page.ts ***!
  \***********************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../class/recibos */ "./src/app/class/recibos.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, crudService, contribService, toastCtrl, storage, usuarioService) {
        this.navCtrl = navCtrl;
        this.crudService = crudService;
        this.contribService = contribService;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.listaDeRecibos = new Array();
        this.envioFechado = new Date();
        this.darkMode = true;
        // Ativador automático do tema dark, quando este reconhece que o tema do sistema do usuário também é dark.
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    Tab2Page.prototype.ngOnInit = function () {
        // this.connect();
    };
    Tab2Page.prototype.carregarContribuintes = function () {
        var _this = this;
        var localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(function (resp) {
                _this.usuario = resp;
                _this.codMens = _this.usuario.codmensageiro;
                if (_this.codMens == 330) {
                    _this.bairro = "AMORIM";
                }
                else if (_this.codMens = 795) {
                    _this.bairro = "CUSTODIO PEREIRA";
                }
                _this.contribService.getListaRecibos(_this.codMens, _this.bairro).subscribe(function (resp) {
                    _this.listaDeRecibos = resp;
                    console.log("Recibos:", _this.listaDeRecibos);
                    _this.setObjRecibos("Recibos baixados!");
                    // if(this.listaDeRecibos.reagendado == "S") {
                    //   this.cardColors = "secondary";
                    // } else {
                    //   this.cardColors = "danger";
                    // }
                }, function (error) { });
            }, function (error) {
                if (error.status == 403) {
                    console.log(error.status);
                }
            });
        }
    };
    Tab2Page.prototype.profile = function () {
        this.navCtrl.navigateForward('profile', { animated: true });
    };
    // Navega para página Benefício.
    Tab2Page.prototype.beneficio = function () {
        this.navCtrl.navigateForward('beneficio', { animated: true });
    };
    // Navega para página Contribuições.
    Tab2Page.prototype.contribuicao = function () {
        this.navCtrl.navigateRoot('contribuicao', { animated: true });
    };
    // Navega para página Relátorio.
    Tab2Page.prototype.relatorio = function () {
        this.navCtrl.navigateForward('relatorio', { animated: true });
    };
    // Navega para página Mensagem.
    Tab2Page.prototype.mensagem = function () {
        this.navCtrl.navigateForward('mensagem', { animated: true });
    };
    // Navega para página bluetooth.
    Tab2Page.prototype.bluetooth = function () {
        this.navCtrl.navigateForward('bluetooth', { animated: true });
    };
    // Baixa a carga de recibos no local storage (app / baixar recibos)
    Tab2Page.prototype.cargaRecibos = function () {
        this.carregarContribuintes();
    };
    Tab2Page.prototype.setObjRecibos = function (msg) {
        var _this = this;
        // lista sera aqui
        this.listaDeRecibos.forEach(function (recibos) {
            console.log(recibos.nrorecibo);
            _this.objRecibos = new _class_recibos__WEBPACK_IMPORTED_MODULE_5__["Recibos"](recibos.nrorecibo, recibos.impresso, recibos.dtoperacao, recibos.entrega, recibos.formulario, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.dtrecebimento, recibos.valorgerado, recibos.valordinheiro, recibos.valorcheque, recibos.doacaoespecial, recibos.parceladoacaoespecial, recibos.aumentodefinitivo, recibos.dtoperacaobaixa, recibos.periodicidade, recibos.valoralterado, recibos.valornaoalterado, recibos.dtvaloralteradobaixa, recibos.valorbakp, recibos.valorhorabkp, recibos.valordatabkp, recibos.dataqld, recibos.naorecebido, recibos.nrosorte, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.dtremarc, recibos.valorremarcado, recibos.codoperador, recibos.codmensageiro, recibos.codcategoria, recibos.dtreagendamento, recibos.reagendado, recibos.codcontrib, recibos.codusuario, recibos.enderecosecundario, recibos.numerosecundario, recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria, recibos.observacoes, recibos.datadorecebimento);
            //inserir recibos   
            _this.crudService.insert(_this.objRecibos);
        });
        this.presentToast(msg);
    };
    Tab2Page.prototype.alterarTema = function () {
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    };
    Tab2Page.prototype.presentToast = function (message) {
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
    Tab2Page.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_4__["ContribuintesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./iniciar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html"),
            styles: [__webpack_require__(/*! ./iniciar.page.scss */ "./src/app/pages/iniciar/iniciar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
            _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_4__["ContribuintesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=iniciar-iniciar-module-es5.js.map