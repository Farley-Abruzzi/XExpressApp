(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciar-iniciar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/iniciar/iniciar.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title>\r\n            X-Express\r\n        </ion-title>\r\n        <ion-icon style=\"margin-left: 7px;\" slot=\"start\" name=\"person\" (click)=\"profile()\"></ion-icon>\r\n        <ion-icon slot=\"end\" name=\"moon\"></ion-icon>\r\n        <ion-toggle slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"alterarTema()\"></ion-toggle>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content text-center color=\"light\">\r\n\r\n    <!-- Layout da página Iniciar. -->\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-1\" size=\"large\" fill=\"clear\" (click)=\"contribuicao()\">\r\n                        <img src=\"assets/icon/box.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-1\">\r\n                        Contribuições\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-2\" size=\"large\" fill=\"clear\" (click)=\"relatorio()\">\r\n                        <img src=\"assets/icon/analytics.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-2\">\r\n                        Relatórios\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-3\" size=\"large\" fill=\"clear\" (click)=\"envioTotal()\">\r\n                        <!-- <ion-datetime class=\"datetime-text\"\r\n                          cancelText=\"Cancelar\" \r\n                          done-text=\"Ok\"\r\n                          pickerFormat=\"D MMM YYYY\"\r\n                          [ngModel]=\"envioFechado.toISOString()\"\r\n                          min=\"2000-01-01\"\r\n                          max=\"2050-12-31\">\r\n           </ion-datetime> -->\r\n                        <img src=\"assets/icon/send.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-3\">\r\n                        Baixar recibos\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-4\" size=\"large\" fill=\"clear\" (click)=\"beneficio()\">\r\n                        <img src=\"assets/icon/money-bag.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-4\">\r\n                        Benefícios\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-5\" size=\"large\" fill=\"clear\">\r\n                        <img src=\"assets/icon/donation.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-5\">\r\n                        Lançar Doação\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n            <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\r\n                <div>\r\n                    <ion-button class=\"button-6\" size=\"large\" fill=\"clear\" (click)=\"mensagem()\">\r\n                        <img src=\"assets/icon/chat.png\">\r\n                    </ion-button>\r\n                    <ion-label class=\"label-6\">\r\n                        Mensagens\r\n                    </ion-label>\r\n                </div>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-textarea class=\"Developer\" disabled=\"true\" placeholder=\"@GLPV - Developed by Farley Abruzzi.\"></ion-textarea>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _iniciar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iniciar.page */ "./src/app/pages/iniciar/iniciar.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
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



/***/ }),

/***/ "./src/app/pages/iniciar/iniciar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/iniciar/iniciar.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-1 {\n  position: fixed;\n  bottom: 69%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-1 {\n  position: fixed;\n  bottom: 65%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-2 {\n  position: fixed;\n  bottom: 69%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-2 {\n  position: fixed;\n  bottom: 65%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-3 {\n  position: fixed;\n  bottom: 47%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-3 {\n  position: fixed;\n  bottom: 43%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-4 {\n  position: fixed;\n  bottom: 47%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-4 {\n  position: fixed;\n  bottom: 43%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-5 {\n  position: fixed;\n  bottom: 23%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-5 {\n  position: fixed;\n  bottom: 19%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-6 {\n  position: fixed;\n  bottom: 23%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-6 {\n  position: fixed;\n  bottom: 19%;\n  left: 40%;\n  right: 0px;\n}\n\n.Developer {\n  position: fixed;\n  top: 94%;\n  right: 0%;\n  left: 0%;\n  font-size: 11px;\n}\n\n.datetime-text {\n  position: fixed !important;\n  font-size: 0px !important;\n}\n\nion-toggle {\n  --background-checked: #2fdf75;\n  --handle-background: #2fdf75;\n  --handle-background-checked: #2fdf75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lhci9DOlxcdGVtcFxcd3MtaW9uaWNcXFhFeHByZXNzQXBwL3NyY1xcYXBwXFxwYWdlc1xcaW5pY2lhclxcaW5pY2lhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpYXIvaW5pY2lhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREdBO0VBQ0ksNkJBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmljaWFyL2luaWNpYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi0xIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjklO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0xIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjUlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi0yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjklO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0yIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNjUlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi0zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDclO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC0zIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDMlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi00IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDclO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC00IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNDMlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmJ1dHRvbi01IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjMlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC01IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTklO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmJ1dHRvbi02IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjMlO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5sYWJlbC02IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTklO1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLkRldmVsb3BlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDk0JTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG4uZGF0ZXRpbWUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuaW9uLXRvZ2dsZXtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjMmZkZjc1O1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzJmZGY3NTtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzJmZGY3NTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIuYnV0dG9uLTEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjklO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNjUlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG59XG5cbi5idXR0b24tMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2OSU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2NSU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmJ1dHRvbi0zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQ3JTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC0zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDQzJTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xufVxuXG4uYnV0dG9uLTQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDclO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDMlO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5idXR0b24tNSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMyU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtNSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxOSU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbn1cblxuLmJ1dHRvbi02IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIzJTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC02IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE5JTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xufVxuXG4uRGV2ZWxvcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDk0JTtcbiAgcmlnaHQ6IDAlO1xuICBsZWZ0OiAwJTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICMyZmRmNzU7XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICMyZmRmNzU7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzJmZGY3NTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../class/recibos */ "./src/app/class/recibos.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");










let Tab2Page = class Tab2Page {
    constructor(navCtrl, calendar, bluetoothSerial, crudService, contribService, toastCtrl, storage, usuarioService) {
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.bluetoothSerial = bluetoothSerial;
        this.crudService = crudService;
        this.contribService = contribService;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.usuarioService = usuarioService;
        this.listaDeRecibos = new Array();
        this.envioFechado = new Date();
        this.darkMode = true;
        // Ativador automático do tema dark, quando este reconhece que o tema do sistema do usuário também é dark.
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    ngOnInit() {
        //this.connect();
    }
    carregarContribuintes() {
        let localUser = this.storage.getLocalUser();
        if (localUser && localUser.email) {
            this.usuarioService.findByEmail(localUser.email)
                .subscribe(resp => {
                this.usuario = resp;
                this.codMens = this.usuario.codmensageiro;
                this.contribService.getListaRecibos(this.codMens).subscribe(resp => {
                    this.listaDeRecibos.push(...resp);
                    console.log("Recibos:", this.listaDeRecibos);
                    this.setObjRecibos("Recibos baixados!");
                    // if(this.listaDeRecibos.reagendado == "S") {
                    //   this.cardColors = "secondary";
                    // } else {
                    //   this.cardColors = "danger";
                    // }
                }, error => { });
            }, error => {
                if (error.status == 403) {
                    console.log(error.status);
                }
            });
        }
    }
    connect() {
        this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe((data) => {
            console.log('Conectado', data);
        });
    }
    disconnectDevices() {
        this.bluetoothSerial.disconnect().then((error) => {
            console.log('Dispositivo desconectado.', error);
        });
        this.bluetoothSerial.clear().then(() => {
            console.log('Limpo');
        });
    }
    profile() {
        this.navCtrl.navigateForward('profile', { animated: true });
    }
    // Navega para página Benefício.
    beneficio() {
        this.navCtrl.navigateForward('beneficio', { animated: true });
    }
    // Navega para página Contribuições.
    contribuicao() {
        this.navCtrl.navigateForward('contribuicao', { animated: true });
    }
    // Navega para página Relátorio.
    relatorio() {
        this.navCtrl.navigateForward('relatorio', { animated: true });
    }
    // Navega para página Mensagem.
    mensagem() {
        this.navCtrl.navigateForward('mensagem', { animated: true });
    }
    // Baixa a carga de recibos no local storage (app / baixar recibos)
    envioTotal() {
        this.carregarContribuintes();
    }
    setObjRecibos(msg) {
        // lista sera aqui
        this.listaDeRecibos.forEach(recibos => {
            console.log(recibos.nrorecibo);
            this.objRecibos = new _class_recibos__WEBPACK_IMPORTED_MODULE_7__["Recibos"](recibos.nrorecibo, recibos.impresso, recibos.dtoperacao, recibos.entrega, recibos.formulario, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.datadorecebimento, recibos.reagendado, recibos.dtreagendamento, recibos.dtrecebimento, recibos.valorgerado, recibos.valorcheque, recibos.valordinheiro, recibos.doacaoespecial, recibos.parceladoacaoespecial, recibos.aumentodefinitivo, recibos.dtoperacaobaixa, recibos.periodicidade, recibos.valoralterado, recibos.valornaoalterado, recibos.dtvaloralteradobaixa, recibos.valorbakp, recibos.valorhorabkp, recibos.valordatabkp, recibos.dataqld, recibos.naorecebido, recibos.nrosorte, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.valorremarcado, recibos.dtremarc, recibos.codoperador, recibos.codcategoria, recibos.enderecosecundario, recibos.numerosecundario, recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria, recibos.observacoes, recibos.codcontrib, recibos.codusuario, recibos.codmensageiro);
            //inserir recibos   
            this.crudService.insert(this.objRecibos);
        });
        this.presentToast(msg);
    }
    alterarTema() {
        // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark');
    }
    presentToast(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                mode: "ios",
                color: "dark"
            });
            toast.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"] },
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__["BluetoothSerial"] },
    { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] },
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__["ContribuintesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"] }
];
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./iniciar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html"),
        styles: [__webpack_require__(/*! ./iniciar.page.scss */ "./src/app/pages/iniciar/iniciar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"],
        _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__["BluetoothSerial"], src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"],
        _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__["ContribuintesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_9__["UsuarioService"]])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=iniciar-iniciar-module-es2015.js.map