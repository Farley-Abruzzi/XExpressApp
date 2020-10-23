(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciar-iniciar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/iniciar/iniciar.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>\n      X-Express\n    </ion-title>\n    <ion-icon slot=\"end\" name=\"moon\"></ion-icon>\n    <ion-toggle slot=\"end\" [ngModel]=\"darkMode\" (ionChange)=\"alterarTema()\"></ion-toggle>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center color=\"light\">\n\n  <!-- Layout da página Iniciar. -->\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-1\" size=\"large\" fill=\"clear\" (click)=\"contribuicao()\">\n            <img src=\"assets/icon/box.png\">\n          </ion-button>\n          <ion-label class=\"label-1\">\n            Contribuições\n          </ion-label>\n        </div>\n      </ion-col>\n      \n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-2\" size=\"large\" fill=\"clear\" (click)=\"relatorio()\">\n            <img src=\"assets/icon/analytics.png\">\n          </ion-button>\n          <ion-label class=\"label-2\">\n            Relatórios\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-3\" size=\"large\" fill=\"clear\" (click)=\"envioTotal()\">\n            <!-- <ion-datetime class=\"datetime-text\"\n                          cancelText=\"Cancelar\" \n                          done-text=\"Ok\"\n                          pickerFormat=\"D MMM YYYY\"\n                          [ngModel]=\"envioFechado.toISOString()\"\n                          min=\"2000-01-01\"\n                          max=\"2050-12-31\">\n           </ion-datetime> -->\n            <img src=\"assets/icon/send.png\">\n          </ion-button>\n          <ion-label class=\"label-3\">\n            Envio Total\n          </ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-4\" size=\"large\" fill=\"clear\" (click)=\"beneficio()\">\n            <img src=\"assets/icon/money-bag.png\">\n          </ion-button>\n          <ion-label class=\"label-4\">\n            Benefícios\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-5\" size=\"large\" fill=\"clear\">\n            <img src=\"assets/icon/donation.png\">\n          </ion-button>\n          <ion-label class=\"label-5\">\n            Lançar Doação\n          </ion-label>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\">\n        <div>\n          <ion-button class=\"button-6\" size=\"large\" fill=\"clear\" (click)=\"mensagem()\">\n            <img src=\"assets/icon/chat.png\">\n          </ion-button>\n          <ion-label class=\"label-6\">\n            Mensagens\n          </ion-label>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-textarea class=\"Developer\" disabled=\"true\" placeholder=\"@GLPV - Developed by Farley Abruzzi.\"></ion-textarea>\n\n</ion-content>"

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

module.exports = ".button-1 {\n  position: fixed;\n  bottom: 69%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-1 {\n  position: fixed;\n  bottom: 65%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-2 {\n  position: fixed;\n  bottom: 69%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-2 {\n  position: fixed;\n  bottom: 65%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-3 {\n  position: fixed;\n  bottom: 47%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-3 {\n  position: fixed;\n  bottom: 43%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-4 {\n  position: fixed;\n  bottom: 47%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-4 {\n  position: fixed;\n  bottom: 43%;\n  left: 40%;\n  right: 0px;\n}\n\n.button-5 {\n  position: fixed;\n  bottom: 23%;\n  left: 0px;\n  right: 40%;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-5 {\n  position: fixed;\n  bottom: 19%;\n  left: 0px;\n  right: 40%;\n}\n\n.button-6 {\n  position: fixed;\n  bottom: 23%;\n  left: 40%;\n  right: 0px;\n  --ripple-color: white !important;\n  --border-radius: 50%;\n}\n\n.label-6 {\n  position: fixed;\n  bottom: 19%;\n  left: 40%;\n  right: 0px;\n}\n\n.Developer {\n  position: fixed;\n  top: 94%;\n  right: 0%;\n  left: 0%;\n  font-size: 11px;\n}\n\n.datetime-text {\n  position: fixed !important;\n  font-size: 0px !important;\n}\n\nion-toggle {\n  --background-checked: #2fdf75;\n  --handle-background: #2fdf75;\n  --handle-background-checked: #2fdf75;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lhci9DOlxcVXNlcnNcXGVsaXNldVxcRGVza3RvcFxcMTAtZXhwcmVzcy9zcmNcXGFwcFxccGFnZXNcXGluaWNpYXJcXGluaWNpYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmljaWFyL2luaWNpYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURHQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lhci9pbmljaWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tMSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNjklO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogNDAlO1xuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtMSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNjUlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogNDAlO1xufVxuXG4uYnV0dG9uLTIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDY5JTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDY1JTtcbiAgICBsZWZ0OiA0MCU7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLmJ1dHRvbi0zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0NyU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiA0MCU7XG4gICAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC0zIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0MyU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiA0MCU7XG59XG5cbi5idXR0b24tNCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDclO1xuICAgIGxlZnQ6IDQwJTtcbiAgICByaWdodDogMHB4O1xuICAgIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtNCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNDMlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICByaWdodDogMHB4O1xufVxuXG4uYnV0dG9uLTUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDIzJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDQwJTtcbiAgICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDE5JTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDQwJTtcbn1cblxuLmJ1dHRvbi02IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMyU7XG4gICAgbGVmdDogNDAlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC02IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxOSU7XG4gICAgbGVmdDogNDAlO1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbi5EZXZlbG9wZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDk0JTtcbiAgICByaWdodDogMCU7XG4gICAgbGVmdDogMCU7XG4gICAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZGF0ZXRpbWUtdGV4dCB7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwcHggIWltcG9ydGFudDtcbiAgICBcbn1cblxuaW9uLXRvZ2dsZXtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJmZGY3NTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjMmZkZjc1O1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzJmZGY3NTtcbn1cblxuXG5cbiIsIi5idXR0b24tMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2OSU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA2NSU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDQwJTtcbn1cblxuLmJ1dHRvbi0yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY5JTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC0yIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDY1JTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogMHB4O1xufVxuXG4uYnV0dG9uLTMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDclO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDMlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiA0MCU7XG59XG5cbi5idXR0b24tNCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0NyU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbiAgLS1yaXBwbGUtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubGFiZWwtNCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0MyU7XG4gIGxlZnQ6IDQwJTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmJ1dHRvbi01IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIzJTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xuICAtLXJpcHBsZS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5sYWJlbC01IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDE5JTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogNDAlO1xufVxuXG4uYnV0dG9uLTYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjMlO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG4gIC0tcmlwcGxlLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxhYmVsLTYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTklO1xuICBsZWZ0OiA0MCU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5EZXZlbG9wZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogOTQlO1xuICByaWdodDogMCU7XG4gIGxlZnQ6IDAlO1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5kYXRldGltZS10ZXh0IHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzJmZGY3NTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzJmZGY3NTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjMmZkZjc1O1xufSJdfQ== */"

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
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "./node_modules/@ionic-native/bluetooth-serial/ngx/index.js");
/* harmony import */ var src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _class_recibos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../class/recibos */ "./src/app/class/recibos.ts");








var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, calendar, bluetoothSerial, crudService, contribService, toastCtrl) {
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.bluetoothSerial = bluetoothSerial;
        this.crudService = crudService;
        this.contribService = contribService;
        this.toastCtrl = toastCtrl;
        this.listaDeRecibos = new Array();
        this.envioFechado = new Date();
        this.darkMode = true;
        // Ativador automático do tema dark, quando este reconhece que o tema do sistema do usuário também é dark.
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.darkMode = prefersDark.matches;
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.connect();
    };
    Tab2Page.prototype.carregarContribuintes = function () {
        var _this = this;
        this.contribService.getListaRecibos()
            .subscribe(function (resp) {
            var _a;
            (_a = _this.listaDeRecibos).push.apply(_a, resp);
            console.log("Recibos:", _this.listaDeRecibos);
            _this.setObjRecibos("Recibos baixados!");
            // if(this.listaDeRecibos.reagendado == "S") {
            //   this.cardColors = "secondary";
            // } else {
            //   this.cardColors = "danger";
            // }
        }, function (error) {
            console.error(error);
        });
    };
    Tab2Page.prototype.connect = function () {
        this.bluetoothSerial.connectInsecure("00:02:5B:B4:13:87").subscribe(function (data) {
            console.log('Conectado', data);
        });
    };
    Tab2Page.prototype.disconnectDevices = function () {
        this.bluetoothSerial.disconnect().then(function (error) {
            console.log('Dispositivo desconectado.', error);
        });
        this.bluetoothSerial.clear().then(function () {
            console.log('Limpo');
        });
    };
    // Navega para página Benefício.
    Tab2Page.prototype.beneficio = function () {
        this.navCtrl.navigateForward('beneficio', { animated: true });
    };
    // Navega para página Contribuições.
    Tab2Page.prototype.contribuicao = function () {
        this.navCtrl.navigateForward('contribuicao', { animated: true });
    };
    // Navega para página Relátorio.
    Tab2Page.prototype.relatorio = function () {
        this.navCtrl.navigateForward('relatorio', { animated: true });
    };
    // Navega para página Mensagem.
    Tab2Page.prototype.mensagem = function () {
        this.navCtrl.navigateForward('mensagem', { animated: true });
    };
    // calendario() {
    //   this.calendar.createCalendar('MyCalendar').then(
    //     (msg) => { console.log(msg); },
    //     (err) => { console.log(err); }
    //   );
    // }
    // Por enquanto abre o componente dateTime para futuro envio de informações.
    Tab2Page.prototype.envioTotal = function () {
        // console.log('ionChange', event);
        // console.log('Date', new Date( event.detail.value ) );
        this.carregarContribuintes();
    };
    Tab2Page.prototype.setObjRecibos = function (msg) {
        var _this = this;
        // lista sera aqui
        // console.log(this.listaDeRecibos.length);
        this.listaDeRecibos.forEach(function (recibos) {
            console.log(recibos.nrorecibo);
            _this.objRecibos = new _class_recibos__WEBPACK_IMPORTED_MODULE_7__["Recibos"](recibos.nrorecibo, recibos.nomenorecibo, recibos.entregaweb, recibos.dtcobranca, recibos.reagendado, recibos.dtreagendamento, recibos.valorgerado, recibos.statusrec, recibos.dtbaixa, recibos.parcela, recibos.via, recibos.motivodevol, recibos.enderecosecundario, recibos.numerosecundario, recibos.bairrosecundario, recibos.cidadesecundario, recibos.complementosecundario, recibos.cepsecundario, recibos.telefonesecundario, recibos.desccategoria, recibos.observacoes, 'N', recibos.codmensageiro);
            //inserir recibos   
            _this.crudService.insert(_this.objRecibos);
        });
        //alert('Recibos baixados');
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
        { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"] },
        { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__["BluetoothSerial"] },
        { type: src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] },
        { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__["ContribuintesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! raw-loader!./iniciar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/iniciar/iniciar.page.html"),
            styles: [__webpack_require__(/*! ./iniciar.page.scss */ "./src/app/pages/iniciar/iniciar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_3__["Calendar"], _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_4__["BluetoothSerial"],
            src_app_services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"], _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_6__["ContribuintesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=iniciar-iniciar-module-es5.js.map