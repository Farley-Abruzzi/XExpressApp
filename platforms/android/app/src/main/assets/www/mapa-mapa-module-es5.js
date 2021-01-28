(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapa-mapa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/mapa/mapa.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/mapa/mapa.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-title>\r\n            Mapa\r\n        </ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding color=\"light\">\r\n\r\n    <ion-grid fixed>\r\n        <ion-row>\r\n            <ion-col>\r\n                <ion-item color=\"light\">\r\n                    <ion-label>Origem:</ion-label>\r\n                    <ion-input type=\"text\" placeholder=\"Onde está?\"></ion-input>\r\n                </ion-item>\r\n                <ion-item color=\"light\">\r\n                    <ion-label>Destino:</ion-label>\r\n                    <ion-input type=\"text\" placeholder=\"Para onde vamos?\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n    <ion-col>\r\n        <div no-border id='map'></div>\r\n    </ion-col>\r\n\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.module.ts ***!
  \*******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/pages/mapa/mapa.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _mapa_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  width: 100%;\n  height: 100%;\n  background-color: aquamarine !important;\n}\n\nion-item {\n  --highlight-color-focused: #2fdf75;\n  --highlight-height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwYS9DOlxcdGVtcFxcd3MtaW9uaWNcXFhFeHByZXNzQXBwL3NyY1xcYXBwXFxwYWdlc1xcbWFwYVxcbWFwYS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FDQVI7O0FER0k7RUFDSSxrQ0FBQTtFQUNBLHVCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBhL21hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAjbWFwIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjMmZkZjc1O1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMXB4O1xyXG4gICAgfVxyXG4iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZSAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICMyZmRmNzU7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/mapa/mapa.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.ts ***!
  \*****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
    }
    Tab3Page.prototype.ngOnInit = function () {
    };
    Tab3Page.prototype.ngAfterViewInit = function () {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmFybGV5LWFicnV6emkiLCJhIjoiY2p5ZzFuaDMyMDMwYjNoc2JnNjVieWhlbCJ9.llMKv2uKn_IgkD1MIThCjA';
        var map = new mapboxgl.Map({
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-46.633309, -23.55052],
            zoom: 15,
            pitch: 45,
            bearing: -17.6,
            container: 'map',
            antialias: true
        });
        map.on('load', function () {
            map.resize();
        });
        //   map.on('load', function() {
        //     map.resize();
        //     // Insert the layer beneath any symbol layer.
        //     const layers = map.getStyle().layers;
        //     let labelLayerId;
        //       for (let i = 0; i < layers.length; i++) {
        //       if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
        //       labelLayerId = layers[i].id;
        //       break;
        //     }
        //   }
        //     map.addLayer({
        //       'id': '3d-buildings',
        //       'source': 'composite',
        //       'source-layer': 'building',
        //       'filter': ['==', 'extrude', 'true'],
        //       'type': 'fill-extrusion',
        //       'minzoom': 15,
        //       'paint': {
        //       'fill-extrusion-color': '#aaa',
        //       // use an 'interpolate' expression to add a smooth transition effect to the
        //       // buildings as the user zooms in
        //       'fill-extrusion-height': [
        //       'interpolate', ['linear'], ['zoom'],
        //       15, 0,
        //       15.05, ['get', 'height']
        //       ],
        //       'fill-extrusion-base': [
        //       "interpolate", ['linear'], ['zoom'],
        //       15, 0,
        //       15.05, ['get', 'min_height']
        //       ],
        //       'fill-extrusion-opacity': .6
        //       }
        //       }, labelLayerId);
        // });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./mapa.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/pages/mapa/mapa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=mapa-mapa-module-es5.js.map