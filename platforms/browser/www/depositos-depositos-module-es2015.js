(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["depositos-depositos-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFzRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsMkVBQTJFO1lBQzNFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsOEVBQThFO1lBQzlFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQS9LbkI7RUErSzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJLFxufVxuXG5leHBvcnQgZW51bSBFbmNvZGluZ1R5cGUge1xuICBKUEVHID0gMCxcbiAgUE5HLFxufVxuXG5leHBvcnQgZW51bSBNZWRpYVR5cGUge1xuICBQSUNUVVJFID0gMCxcbiAgVklERU8sXG4gIEFMTE1FRElBLFxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNLFxufVxuXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xuICBBUlJPV19VUCA9IDEsXG4gIEFSUk9XX0RPV04sXG4gIEFSUk9XX0xFRlQsXG4gIEFSUk9XX1JJR0hULFxuICBBUlJPV19BTlksXG59XG5cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gIEJBQ0sgPSAwLFxuICBGUk9OVCxcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBwcmVtaWVyIGNhbWVyYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUYWtlIGEgcGhvdG8gb3IgY2FwdHVyZSB2aWRlby5cbiAqXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBDYW1lcmEgUGx1Z2luIERvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhKS5cbiAqXG4gKiBbV2FybmluZ10gU2luY2UgSU9TIDEwIHRoZSBjYW1lcmEgcmVxdWlyZXMgcGVybWlzc2lvbnMgdG8gYmUgcGxhY2VkIGluIHlvdXIgY29uZmlnLnhtbCBhZGRcbiAqIGBgYHhtbFxuICogPGNvbmZpZy1maWxlIHBhcmVudD1cIk5TQ2FtZXJhVXNhZ2VEZXNjcmlwdGlvblwiIHBsYXRmb3JtPVwiaW9zXCIgdGFyZ2V0PVwiKi1JbmZvLnBsaXN0XCI+XG4gKiAgPHN0cmluZz5Zb3UgY2FuIHRha2UgcGhvdG9zPC9zdHJpbmc+XG4gKiA8L2NvbmZpZy1maWxlPlxuICogYGBgXG4gKiBpbnNpZGUgb2YgdGhlIDxwbGF0Zm9ybSBuYW1lPSdpb3M+IHNlY3Rpb25cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENhbWVyYSwgQ2FtZXJhT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY2FtZXJhL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjYW1lcmE6IENhbWVyYSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XG4gKiAgIHF1YWxpdHk6IDEwMCxcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXG4gKiAgIG1lZGlhVHlwZTogdGhpcy5jYW1lcmEuTWVkaWFUeXBlLlBJQ1RVUkVcbiAqIH1cbiAqXG4gKiB0aGlzLmNhbWVyYS5nZXRQaWN0dXJlKG9wdGlvbnMpLnRoZW4oKGltYWdlRGF0YSkgPT4ge1xuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XG4gKiAgbGV0IGJhc2U2NEltYWdlID0gJ2RhdGE6aW1hZ2UvanBlZztiYXNlNjQsJyArIGltYWdlRGF0YTtcbiAqIH0sIChlcnIpID0+IHtcbiAqICAvLyBIYW5kbGUgZXJyb3JcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQ2FtZXJhT3B0aW9uc1xuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY2FtZXJhJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRW5jb2RpbmdUeXBlID0ge1xuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXG4gICAgSlBFRzogMCxcbiAgICAvKiogUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlICovXG4gICAgUE5HOiAxLFxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgTWVkaWFUeXBlID0ge1xuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXG4gICAgUElDVFVSRTogMCxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cbiAgICBWSURFTzogMSxcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzICovXG4gICAgQUxMTUVESUE6IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XG4gICAgQVJST1dfVVA6IDEsXG4gICAgQVJST1dfRE9XTjogMixcbiAgICBBUlJPV19MRUZUOiA0LFxuICAgIEFSUk9XX1JJR0hUOiA4LFxuICAgIEFSUk9XX0FOWTogMTUsXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBEaXJlY3Rpb24gPSB7XG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXG4gICAgQkFDSzogMCxcbiAgICAvKiogVXNlIHRoZSBmcm9udC1mYWNpbmcgY2FtZXJhICovXG4gICAgRlJPTlQ6IDEsXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaW50ZXJtZWRpYXRlIGltYWdlIGZpbGVzIHRoYXQgYXJlIGtlcHQgaW4gdGVtcG9yYXJ5IHN0b3JhZ2UgYWZ0ZXIgY2FsbGluZyBjYW1lcmEuZ2V0UGljdHVyZS5cbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIGNsZWFudXAoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/depositos/depositos.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/depositos/depositos.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>\n            Depositos\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n    <!-- <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button color=\"success\" expand=\"block\" href=\"http://localhost:4200/comunicar-deposito\">\n          Comunicar depositos\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n    <ion-slides mode=\"ios\" #mySlider>\n        <ion-slide>\n            <ion-card color=\"dark\">\n                <ion-card-header>\n                    <ion-card-title>Comunicado de Depósito</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    <p>Olá (Nome), antes de iniciar observe o seguinte:</p>\n                    <p>-> Você precisa ter impresso o resumo do dia.</p>\n                    <p>-> Ter os comprovantes dos depósitos em mãos.</p>\n                    <p>-> Se tiver despesa, precisa da nota de despesa.</p>\n                    <br>\n                    <br>\n                    <p>1º Passo: Informe a data do recebimento</p>\n                    <br>\n                    <br>\n                    <ion-button shape=\"round\" color=\"success\" class=\"calendarDeposito\" fill=\"outline\">\n                        <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n                        <ion-datetime cancelText=\"Cancelar\" done-text=\"Ok\" (ionChange)=\"selectDtDeposito( $event )\" [ngModel]=\"dtDeposito.toISOString()\" display-format=\"DD/MM/YYYY\"></ion-datetime>\n                    </ion-button>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"dark\">\n                <ion-card-content>\n                    <p>2º Passo: Clique na entidade, e observe se os valores estão estão de acordo com o resumo que você imprimiu.</p>\n                    <br>\n                    <ion-label>Entidade:</ion-label>\n                    <ion-select placeholder=\"Qual entidade?\" (ionChange)=\"selectByEntity( $event )\" [ngModel]=\"entidade\">\n                        <ion-select-option value=\"Hospital do Cancer de Uberlandia\">Hospital do Cancêr de Uberlândia</ion-select-option>\n                    </ion-select>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"dark\">\n                <ion-card-content>\n                    <p>3º Passo: Informe o código de validação que foi impresso no final do resumo.</p>\n                    <br>\n                    <ion-item>\n                        <ion-input placeholder=\"Código\" (ionChange)=\"selectByCodValidacao( $event )\" [ngModel]=\"codvalidacao\"></ion-input>\n                    </ion-item>\n                    <br>\n                    <br>\n                    <p>Caso tenha alguma despesa autorizada, favor informar nos campos abaixo.</p>\n                    <br>\n                    <ion-item>\n                        <ion-input placeholder=\"Valor despesa\" (ionChange)=\"selectByValorDespesa( $event )\" [(ngModel)]=\"valorDespesa\"></ion-input>\n                    </ion-item>\n                    <br>\n                    <ion-item>\n                        <ion-input placeholder=\"Descrição despesa\" (ionChange)=\"selectByValorDespesa( $event )\" [(ngModel)]=\"detalhamentoDespesa\"></ion-input>\n                    </ion-item>\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-card color=\"dark\">\n                <ion-card-header>\n                    Enviar imagem do comprovante\n                </ion-card-header>\n                <ion-item *ngIf=\"picture\">\n                    <img [src]=\"picture\">\n                </ion-item>\n                <ion-item>\n                    <ion-button color=\"success\" ion-button block (click)=\"getCameraPicture()\" [disabled]=\"cameraOn\">Camera</ion-button>\n                </ion-item>\n            </ion-card>\n        </ion-slide>\n\n    </ion-slides>\n\n    <br>\n    <br>\n    <ion-button [style.visibility]=\"isVisible ? 'visible' : 'hidden'\" class=\"buttonNext\" shape=\"round\" color=\"success\" (click)=\"slideNext()\">\n        Continuar\n    </ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/depositos/depositos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/depositos/depositos.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _depositos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./depositos.page */ "./src/app/pages/depositos/depositos.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _depositos_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        providers: [
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"]
        ],
        declarations: [_depositos_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/depositos/depositos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/depositos/depositos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\nion-slides {\n  width: 90%;\n}\n\n.buttonNext {\n  position: fixed;\n  top: 85%;\n  right: 33%;\n}\n\n.calendarDeposito {\n  position: fixed;\n  top: 77%;\n  right: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVwb3NpdG9zL0M6XFx0ZW1wXFx3cy1pb25pY1xcWEV4cHJlc3NBcHAvc3JjXFxhcHBcXHBhZ2VzXFxkZXBvc2l0b3NcXGRlcG9zaXRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RlcG9zaXRvcy9kZXBvc2l0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlcG9zaXRvcy9kZXBvc2l0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmJ1dHRvbk5leHQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDg1JTtcbiAgICByaWdodDogMzMlO1xufVxuXG4uY2FsZW5kYXJEZXBvc2l0byB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNzclO1xuICAgIHJpZ2h0OiAzMCU7XG4gICAgLy8tLXJpcHBsZS1jb2xvcjogIzE5MjAzNSAhaW1wb3J0YW50O1xufSIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLXNsaWRlcyB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b25OZXh0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDg1JTtcbiAgcmlnaHQ6IDMzJTtcbn1cblxuLmNhbGVuZGFyRGVwb3NpdG8ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNzclO1xuICByaWdodDogMzAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/depositos/depositos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/depositos/depositos.page.ts ***!
  \***************************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/contribuintes.service */ "./src/app/services/contribuintes.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");





let Tab1Page = class Tab1Page {
    constructor(contribService, datePipe, camera) {
        this.contribService = contribService;
        this.datePipe = datePipe;
        this.camera = camera;
        this.dtDeposito = new Date();
        this.dataDep = " ";
        this.entity = " ";
        this.cameraOn = false;
        this.isVisible = false;
    }
    ngOnInit() {
        this.conversorDate();
        this.mySlide.lockSwipes(true);
    }
    slideNext() {
        this.mySlide.lockSwipes(false);
        this.mySlide.slideNext();
        this.mySlide.lockSwipes(true);
    }
    selectDtDeposito(event) {
        this.dataDep = this.datePipe.transform(new Date(event.detail.value), "yyyy-MM-dd");
        console.log('Data Inicio ' + this.dataDep);
        this.isVisible = true;
    }
    selectByEntity(event) {
        this.entity = event.detail.value;
        console.log("Entidade: ", this.entity);
    }
    selectByCodValidacao(event) {
        this.codValid = event.detail.value;
        console.log("Código de validação: ", this.codValid);
    }
    selectByValorDespesa(event) {
        this.valorDesp = event.detail.value;
        console.log("Valor desp: ", this.valorDesp);
    }
    selectByDetailDespesa(event) {
        this.detailDesp = event.detail.value;
        console.log("Descrição desp: ", this.detailDesp);
    }
    conversorDate() {
        this.dataDep = this.datePipe.transform(this.dtDeposito, "yyyy-MM-dd");
    }
    getCameraPicture() {
        this.cameraOn = true;
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            this.picture = 'data:image/png;base64,' + imageData;
            this.cameraOn = false;
        }, (err) => {
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('mySlider', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab1Page.prototype, "mySlide", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./depositos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/depositos/depositos.page.html"),
        styles: [__webpack_require__(/*! ./depositos.page.scss */ "./src/app/pages/depositos/depositos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contribuintes_service__WEBPACK_IMPORTED_MODULE_3__["ContribuintesService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=depositos-depositos-module-es2015.js.map