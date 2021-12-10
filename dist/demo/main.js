(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Temp\ngTemplateOutlets-master\src\main.ts */"zUnb");


/***/ }),

/***/ "7brl":
/*!************************************************!*\
  !*** ./src/app/client-1/client-1.component.ts ***!
  \************************************************/
/*! exports provided: Client1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client1Component", function() { return Client1Component; });
/* harmony import */ var _raw_loader_client_1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./client-1.component.html */ "jqVy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Client1Component = /** @class */ (function () {
    function Client1Component() {
        var _this = this;
        this.sharks = [
            {
                name: "Great White",
                latinName: "Carcharodon carcharias",
                status: "Vunerable",
            },
            {
                name: "Great hammerhead",
                latinName: "Sphyrna mokarran",
                status: "Endangered",
            },
            {
                name: "Angular roughshark",
                latinName: "Oxynotus centrina",
                status: "Vunerable",
            },
            {
                name: "Pyjama",
                latinName: "Poroderma africanum",
                status: "Near Threatend",
            },
        ];
        this.safeSharks = ["Angular roughshark", "Pyjama"];
        this.selectedShark = {};
        this.sharkDisplay = function (shark) {
            return shark.name + " (" + shark.latinName + ")";
        };
        this.getSwimIcon = function (shark) {
            var icon = _this.safeSharks.indexOf(shark.name) >= 0 ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSwimmer"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSkullCrossbones"];
            return icon;
        };
    }
    Client1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-client-1",
            template: _raw_loader_client_1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        })
    ], Client1Component);
    return Client1Component;
}());



/***/ }),

/***/ "7diX":
/*!************************************************!*\
  !*** ./src/app/client-2/client-2.component.ts ***!
  \************************************************/
/*! exports provided: Client2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client2Component", function() { return Client2Component; });
/* harmony import */ var _raw_loader_client_2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./client-2.component.html */ "JZSe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Client2Component = /** @class */ (function () {
    function Client2Component() {
        this.tractors = [
            {
                name: "New Holland T7",
                stars: 3,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg/320px-New_Holland_T7_Series_Tractors_-_R.P._Motors_Pty_Ltd.jpg",
            },
            {
                name: "Doe Dual Drive",
                stars: 5,
                img: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Doe_Dual_Drive_tractor_-_geograph.org.uk_-_572913.jpg",
            },
            {
                name: "Massey Ferguson",
                stars: 1,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Massey_Ferguson_6716S.jpg/310px-Massey_Ferguson_6716S.jpg",
            },
        ];
    }
    Client2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-client-2",
            template: _raw_loader_client_2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        })
    ], Client2Component);
    return Client2Component;
}());



/***/ }),

/***/ "8rzD":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-selector/my-selector.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-selector btn-group\" dropdown>\n  <button dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n    <ng-container *ngIf=\"!selectedTemplateRef\">\n      {{ picked?.name || label }}\n    </ng-container>\n\n    <ng-container\n      *ngIf=\"selectedTemplateRef\"\n      [ngTemplateOutlet]=\"selectedTemplateRef\"\n      [ngTemplateOutletContext]=\"{ $implicit: picked }\"\n    >\n    </ng-container>\n    <span class=\"caret\"></span>\n  </button>\n\n  <ul *dropdownMenu class=\"dropdown-menu\">\n    <li *ngFor=\"let option of options; index as i\" (click)=\"selectOption(option)\">\n      <ng-container *ngIf=\"!optionTemplateRef\">\n        <a class=\"dropdown-item\">\n          {{ option?.name || option }}\n        </a>\n      </ng-container>\n\n      <ng-container *ngIf=\"optionTemplateRef\"\n        [ngTemplateOutlet]=\"optionTemplateRef\"\n        [ngTemplateOutletContext]=\"{ $implicit: option, index: i }\"\n      >\n      </ng-container>\n    </li>\n  </ul>\n</div>\n");

/***/ }),

/***/ "JZSe":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client-2/client-2.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>\n  Client 2 - Tractors\n</h4>\n\n<app-my-selector [options]=\"tractors\">\n  <ng-template #selectedTemplate let-tractor>\n    {{ tractor?.name || \"Tractor\" }}\n  </ng-template>\n\n  <ng-template #optionTemplate let-tractor let-id=\"index\">\n    <div>\n      <div>\n        <b>{{ tractor.name }}</b>\n      </div>\n      <img height=\"100\" width=\"150\" src=\"{{ tractor.img }}\" />\n      <span *ngFor=\"let i of [].constructor(tractor.stars)\"> &#x2B50;</span>\n      <button class=\"btn btn-danger\" style=\"width:100%\">Buy Now!</button>\n    </div>\n  </ng-template>\n</app-my-selector>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "my-app",
            template: "\n    <app-client-1></app-client-1>\n    <app-client-2></app-client-2>\n  ",
            styles: ["\n      :host {\n        display: grid;\n        grid-template-columns: auto auto;\n      }\n\n      app-client-1,\n      app-client-2 {\n        margin: 1rem;\n      }\n    "]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _client_1_client_1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-1/client-1.component */ "7brl");
/* harmony import */ var _client_2_client_2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-2/client-2.component */ "7diX");
/* harmony import */ var _my_selector_my_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-selector/my-selector.component */ "i+Io");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _my_selector_my_selector_component__WEBPACK_IMPORTED_MODULE_7__["MySelectorComponent"],
                _client_1_client_1_component__WEBPACK_IMPORTED_MODULE_5__["Client1Component"],
                _client_2_client_2_component__WEBPACK_IMPORTED_MODULE_6__["Client2Component"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "hN/g":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "0TWp");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
//import "core-js/es6/reflect";
//import "core-js/es7/reflect";
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "i+Io":
/*!******************************************************!*\
  !*** ./src/app/my-selector/my-selector.component.ts ***!
  \******************************************************/
/*! exports provided: MySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySelectorComponent", function() { return MySelectorComponent; });
/* harmony import */ var _raw_loader_my_selector_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./my-selector.component.html */ "8rzD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MySelectorComponent = /** @class */ (function () {
    function MySelectorComponent() {
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MySelectorComponent.prototype.selectOption = function (option) {
        this.picked = option;
        this.selectionChanged.emit(option);
    };
    MySelectorComponent.propDecorators = {
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        selectedTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["selectedTemplate", { static: false },] }],
        optionTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: ["optionTemplate", { static: false },] }],
        selectionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    MySelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-my-selector",
            template: _raw_loader_my_selector_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        })
    ], MySelectorComponent);
    return MySelectorComponent;
}());



/***/ }),

/***/ "jqVy":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client-1/client-1.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>\n  Client 1 - Sharks\n</h4>\n\n<app-my-selector\n  [label]=\"'Sharks'\"\n  [options]=\"sharks\"\n  (selectionChanged)=\"selectedShark = $event\"\n>\n  <!-- <ng-template #selectedTemplate let-shark>\n    <fa-icon *ngIf=\"shark\" [icon]=\"getSwimIcon(shark)\"></fa-icon>\n    {{ shark?.name || \"Shark\" }}\n  </ng-template> -->\n\n  <ng-template #optionTemplate let-shark let-id=\"index\">\n    <a class=\"dropdown-item\" [style.color]=\"id % 2 == 0 ? 'black' : 'blue'\">\n      <fa-icon *ngIf=\"shark\" [icon]=\"getSwimIcon(shark)\"></fa-icon>\n      {{ sharkDisplay(shark) }}\n    </a>\n  </ng-template>\n</app-my-selector>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "hN/g");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");



Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
        window["ngRef"].destroy();
    }
    window["ngRef"] = ref;
    // Otherwise, log the boot error
})
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map