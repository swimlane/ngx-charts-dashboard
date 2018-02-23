webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>ngx-chart dashboard builder\n  <small class=\"pull-right\">\n    <button class=\"btn btn-primary\" (click)=\"onResetClicked()\">Reset</button>\n    <a href=\"https://github.com/swimlane/ngx-charts-builder\" class=\"btn btn-default\">Github</a>\n  </small>\n</h1>\n\n<div class=\"main\">\n\n  <ngx-tabs #tabs>\n    <ngx-tab title=\"Data\" #dataTab>\n      <div *ngxIfTabActive>\n\n        <span>\n          Copy and paste your tabular (TSV, CSV) data here.\n          <button class=\"btn btn-link\" (click)=\"useExample()\">(Use example data)</button>\n        </span>\n        <ngx-codemirror\n          [(ngModel)]=\"dataText\"\n          [config]=\"editorConfig\">\n        </ngx-codemirror>\n        <p *ngIf=\"dataText.length > 1\">\n          <span *ngFor=\"let error of errors\" class=\"text-red\">\n            <span *ngIf=\"error.row\">Row {{error.row + 2}}: </span>{{error.message}} <br />\n          </span>\n          <span *ngIf=\"!errors.length\" class=\"text-green\">\n            {{rawData.length}} records have been successfully parsed!\n          </span>\n        </p>\n\n      </div>\n    </ngx-tab>\n    <ngx-tab title=\"Chart Builder\" [disabled]=\"!hasValidData\" #builderTab>\n      <app-chart-builder (addChart)=\"addChartToDashboard($event)\"></app-chart-builder>\n    </ngx-tab>\n    <ngx-tab title=\"Dashboard\" [disabled]=\"charts.length < 1\" #dashboardTab>\n      <app-chart-dashboard [charts]=\"charts\" [filters]=\"filters\"></app-chart-dashboard>\n    </ngx-tab>\n  </ngx-tabs>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n  * Backgrounds\n  */\n/**\n  * Text\n  */\nhtml, body {\n  margin: 10px;\n  padding: 0;\n  height: 100%;\n  background: #1b1e27;\n  color: #a8b2c7; }\nbody {\n  font-family: 'RobotoDraft', 'Roboto', 'Helvetica Neue, Helvetica, Arial', sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  min-height: 100vh;\n  color: #a8b2c7; }\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.main {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.main .CodeMirror {\n    min-height: 800px; }\n.light {\n  background: #fff; }\n.dark {\n  background: #1b1e27; }\n.dark .ngx-charts text {\n    fill: #a8b2c7; }\n.dark .ngx-charts .tooltip-anchor {\n    fill: white; }\n.dark .ngx-charts .gridline-path {\n    stroke: #2f3646; }\n.dark .ngx-charts .grid-panel.odd rect {\n    fill: rgba(255, 255, 255, 0.05); }\n.dark .ngx-charts .force-directed-graph .edge {\n    stroke: #455066; }\n.dark .ngx-charts .number-card p {\n    color: #f0f1f6; }\n.dark .ngx-charts .gauge .background-arc path {\n    fill: #2f3646; }\n.dark .ngx-charts .gauge .gauge-tick path {\n    stroke: #a8b2c7; }\n.dark .ngx-charts .gauge .gauge-tick text {\n    fill: #a8b2c7; }\n.dark .ngx-charts .linear-gauge .background-bar path {\n    fill: #2f3646; }\n.dark .ngx-charts .linear-gauge .units {\n    fill: #72809b; }\n.dark .ngx-charts .timeline .brush-background {\n    fill: rgba(255, 255, 255, 0.05); }\n.dark .ngx-charts .timeline .brush .selection {\n    fill: rgba(255, 255, 255, 0.1);\n    stroke: #aaa; }\n.dark .ngx-charts .polar-chart .polar-chart-background {\n    fill: #1e222e; }\n.dark .chart-legend .legend-labels {\n    background: rgba(255, 255, 255, 0.05) !important; }\n.dark .chart-legend .legend-item:hover {\n    color: #fff; }\n.dark .chart-legend .legend-label:hover {\n    color: #fff !important; }\n.dark .chart-legend .legend-label .active .legend-label-text {\n    color: #fff !important; }\n.dark .chart-legend .scale-legend-label {\n    color: #a8b2c7; }\n.dark .advanced-pie-legend {\n    color: #a8b2c7; }\n.dark .advanced-pie-legend .legend-item:hover {\n      color: #fff !important; }\n.dark .number-card .number-card-label {\n    font-size: 0.8em;\n    color: #a8b2c7; }\n/**\n * Header\n */\n.style-header {\n  text-transform: uppercase;\n  color: #72809b;\n  font-size: 1rem;\n  position: relative;\n  padding-bottom: 5px;\n  margin: 20px 0;\n  font-weight: 600; }\n.style-header:after {\n    content: \"\";\n    width: 25px;\n    height: 1px;\n    background: #72809b;\n    position: absolute;\n    bottom: 0;\n    left: 0; }\nsvg.ngx-charts {\n  float: left;\n  overflow: visible; }\n.ngx-charts-outer {\n  display: flow-root;\n  position: relative; }\n.pull-right {\n  float: right; }\napp-chart {\n  display: block;\n  width: 100%;\n  height: 400px;\n  margin-bottom: 60px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui__ = __webpack_require__("./node_modules/@swimlane/ngx-ui/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__("./src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__("./src/app/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(ngZone, dataService) {
        this.ngZone = ngZone;
        this.dataService = dataService;
        this.charts = [];
        this.filters = [];
        this._dataText = ' ';
        this.errors = [];
        this.rawData = [];
        this.editorConfig = {
            lineNumbers: true,
            theme: 'dracula',
            mode: {
                name: 'json'
            }
        };
    }
    Object.defineProperty(AppComponent.prototype, "dataText", {
        get: function () {
            return this._dataText || ' ';
        },
        set: function (value) {
            this.updateData(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "hasValidData", {
        get: function () {
            return this._dataText.length > 0 && this.errors.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.clearAll();
    };
    AppComponent.prototype.useExample = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._dataText = __WEBPACK_IMPORTED_MODULE_3__data__["a" /* gapminder */];
                        return [4 /*yield*/, this.updateData()];
                    case 1:
                        _a.sent();
                        // this.dataDims = [5, 0, 3, 3].map(i => this.headerValues[i].name);
                        this.ngZone.run(function () { });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.onResetClicked = function () {
        this.clearAll();
        this.tabs.tabClicked(this.dataTab);
    };
    AppComponent.prototype.clearAll = function () {
        this.dataText = '';
        this.charts = [];
    };
    AppComponent.prototype.addChartToDashboard = function (chart) {
        return __awaiter(this, void 0, void 0, function () {
            var x, y, qs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.charts.push(chart);
                        x = this.dataService.createQuery(chart.dataDims[0], chart.dataDims[2], chart.dataDims[4]);
                        y = this.dataService.createQuery(chart.dataDims[2], 'count');
                        return [4 /*yield*/, Promise.all([x, y])];
                    case 1:
                        qs = _a.sent();
                        chart.xQuery = qs[0];
                        chart.yQuery = qs[1];
                        chart.xFilter = this.addFilter(chart.xQuery);
                        chart.yFilter = this.addFilter(chart.yQuery);
                        this.tabs.tabClicked(this.dashboardTab);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.updateData = function (value) {
        if (value === void 0) { value = this._dataText; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService.updateData(value)];
                    case 1:
                        data = _a.sent();
                        if (data.length < 1 || this.errors.length) {
                            this._dataText = '';
                            this.errors = [];
                            return [2 /*return*/];
                        }
                        this.rawData = data;
                        this._dataText = value;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.addFilter = function (query) {
        var key = query.column.key;
        var filter = this.filters.find(function (c) { return c.key === key; });
        if (!filter) {
            var values = query.column.values;
            var minValue = Math.min.apply(Math, values);
            var maxValue = Math.max.apply(Math, values);
            var type = (values.length < 6 || isNaN(minValue) || isNaN(maxValue)) ? 'cat' : 'value';
            var range = type === 'value' ? [minValue, maxValue] : [];
            filter = {
                type: type,
                label: Object(__WEBPACK_IMPORTED_MODULE_4__utils__["a" /* toCapitalizedWords */])(key),
                key: key,
                minValue: minValue,
                maxValue: maxValue,
                query: query,
                step: 1,
                values: values,
                rangeIndex: {},
                range: range
            };
            this.filters.push(filter);
        }
        return filter;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui__["TabsComponent"])
    ], AppComponent.prototype, "tabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dashboardTab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui__["TabComponent"])
    ], AppComponent.prototype, "dashboardTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataTab'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_ui__["TabComponent"])
    ], AppComponent.prototype, "dataTab", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__ = __webpack_require__("./node_modules/@swimlane/ngx-ui/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_chart_component__ = __webpack_require__("./src/app/chart/chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chart_builder_chart_builder_component__ = __webpack_require__("./src/app/chart-builder/chart-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chart_dashboard_chart_dashboard_component__ = __webpack_require__("./src/app/chart-dashboard/chart-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { NgxDnDModule } from '@swimlane/ngx-dnd/src/';






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chart_chart_component__["a" /* ChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chart_builder_chart_builder_component__["a" /* ChartBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__chart_dashboard_chart_dashboard_component__["a" /* ChartDashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_ui__["NgxUIModule"],
                // NgxDnDModule,
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart-builder/chart-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <ngx-section class=\"shadow dark\" sectionTitle=\"Select your Chart\">\n      <ngx-select [filterable]=\"false\" label=\"Chart Type\" [ngModel]=\"[chartType]\" (change)=\"chartType = $event[0]\">\n        <ngx-select-option *ngFor=\"let chart of chartTypes\" [name]=\"chart.title\" [value]=\"chart\">\n        </ngx-select-option>\n      </ngx-select>\n    </ngx-section>\n  \n    <ngx-section class=\"shadow dark\" sectionTitle=\"Map your Dimensions\"\n      [sectionCollapsible]=\"hasChartSelected\"\n      [sectionCollapsed]=\"!hasChartSelected\">\n      <div *ngIf=\"hasChartSelected\">\n        <ngx-select\n          *ngIf=\"chartType.dimLabels[0] && chartType\"\n          [filterable]=\"false\"\n          [label]=\"chartType.dimLabels[0]\"\n          [ngModel]=\"[dataDims[0]]\"\n          (change)=\"dataDims[0] = $event[0]; processData()\">\n          <ngx-select-option *ngFor=\"let field of headerValues\"\n            [name]=\"field\"\n            [value]=\"field.name\">\n            <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n              {{option.name.name}} <small>{{option.name.type}}</small>\n            </ng-template>\n          </ngx-select-option>\n        </ngx-select>\n  \n        <ngx-select\n          *ngIf=\"chartType.dimLabels[1]\"\n          [filterable]=\"false\"\n          [label]=\"chartType.dimLabels[1]\"\n          [ngModel]=\"[dataDims[1]]\"\n          (change)=\"dataDims[1] = $event[0]; processData()\">\n          <ngx-select-option *ngFor=\"let field of headerValues\"\n            [name]=\"field\"\n            [value]=\"field.name\">\n            <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n              {{option.name.name}} <small>{{option.name.type}}</small>\n            </ng-template>\n          </ngx-select-option>\n        </ngx-select>\n  \n        <ngx-select\n          *ngIf=\"chartType.dimLabels[2]\"\n          [filterable]=\"false\"\n          [label]=\"chartType.dimLabels[2]\"\n          [ngModel]=\"[dataDims[2]]\"\n          (change)=\"dataDims[2] = $event[0]; processData()\">\n          <ngx-select-option *ngFor=\"let field of headerValues\"\n            [name]=\"field\"\n            [value]=\"field.name\">\n            <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n              {{option.name.name}} <small>{{option.name.type}}</small>\n            </ng-template>\n          </ngx-select-option>\n        </ngx-select>\n  \n        <ngx-select\n          *ngIf=\"chartType.dimLabels[3]\"\n          [filterable]=\"false\"\n          [label]=\"chartType.dimLabels[3]\"\n          [ngModel]=\"[dataDims[3]]\"\n          (change)=\"dataDims[3] = $event[0]; processData()\">\n          <ngx-select-option *ngFor=\"let field of headerValues\"\n            [name]=\"field\"\n            [value]=\"field.name\">\n            <ng-template ngx-select-option-input-template ngx-select-option-template let-option=\"option\">\n              {{option.name.name}} <small>{{option.name.type}}</small>\n            </ng-template>\n          </ngx-select-option>\n        </ngx-select>\n\n        <ngx-select\n          *ngIf=\"chartType.dimLabels[4]\"\n          [filterable]=\"false\"\n          [label]=\"chartType.dimLabels[4]\"\n          [ngModel]=\"[dataDims[4]]\"\n          (change)=\"dataDims[4] = $event[0]; processData()\">\n          <ngx-select-option *ngFor=\"let agg of aggragates\"\n            [name]=\"agg\"\n            [value]=\"agg\">\n          </ngx-select-option>\n        </ngx-select>\n      </div>\n    </ngx-section>\n  \n    <ngx-section class=\"shadow\" [ngClass]=\"theme\" sectionTitle=\"Your Visualization\"\n      [sectionCollapsible]=\"hasValidDimensions\"\n      [sectionCollapsed]=\"!hasValidDimensions\">\n      <ngx-button (click)=\"onAddToDashboard()\">Add to dashboard</ngx-button>\n      <div *ngIf=\"hasValidDimensions\" class=\"viz-container\">\n\n        <app-chart\n          [chart]=\"chartOptions\"\n          [data]=\"data\"\n          [chartType]=\"chartType\">\n        </app-chart>\n\n      </div>\n      <!-- Download: \n      <ngx-button (click)=\"svgSaver.asSvg()\">SVG</ngx-button>\n      <ngx-button (click)=\"svgSaver.asPng()\">PNG</ngx-button -->\n    </ngx-section>\n  \n    <ngx-section class=\"shadow dark\" sectionTitle=\"Customize your Visualization\"\n      [sectionCollapsible]=\"hasValidDimensions\"\n      [sectionCollapsed]=\"!hasValidDimensions\">\n      <div *ngIf=\"hasValidDimensions\">\n        <ngx-select\n          [filterable]=\"false\"\n          label=\"Theme\"\n          [allowClear]=\"false\"\n          [ngModel]=\"[theme]\"\n          (change)=\"theme = $event[0]\">\n          <ngx-select-option *ngFor=\"let theme of ['light', 'dark']\"\n            [name]=\"theme\"\n            [value]=\"theme\">\n          </ngx-select-option>\n        </ngx-select>\n    \n        <ngx-toggle type=\"checkbox\" [(ngModel)]=\"chartOptions.showLegend\" label=\"Show Legend\">\n        </ngx-toggle>\n        <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.legendTitle\" label=\"Legend Title\"></ngx-input>\n        <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.xAxisLabel\" label=\"X Axis Label\"></ngx-input>\n        <ngx-input type=\"text\" [(ngModel)]=\"chartOptions.yAxisLabel\" label=\"Y Axis Label\"></ngx-input>\n      </div>\n    </ngx-section>\n  \n    <ngx-section class=\"shadow dark\" sectionTitle=\"Customize Color Scale\"\n      [sectionCollapsible]=\"hasValidDimensions\"\n      [sectionCollapsed]=\"!hasValidDimensions\">\n  \n      <ng-container *ngIf=\"hasValidDimensions\">\n        <ngx-toggle\n          [(ngModel)]=\"diverging\"\n          label=\"Diverging\"\n          (change)=\"updateColorScheme()\">\n        </ngx-toggle>\n        <ngx-input\n          type=\"number\"\n          min=\"2\"\n          label=\"Step count\"\n          [(ngModel)]=\"steps\"\n          (change)=\"updateColorScheme()\"></ngx-input>\n  \n        <div fxLayout=\"row nowrap\" fxLayoutGap=\"20px\">\n          <div  fxFlex=\"1 1 100%\">\n            <ngx-input\n              class=\"colors\"\n              type=\"text\"\n              [(ngModel)]=\"colors\"\n              (change)=\"updateColorScheme()\"\n              label=\"Color Scale\"\n              hint=\"Enter named colors or hex codes\"></ngx-input>\n            <ngx-checkbox\n              [(ngModel)]=\"bezier\"\n              (change)=\"updateColorScheme()\">\n              Bezier interpollation\n            </ngx-checkbox>\n            <ngx-checkbox\n              [(ngModel)]=\"lightness\"\n              (change)=\"updateColorScheme()\">\n              Lightness correction\n            </ngx-checkbox>\n          </div>\n          <div fxFlex=\"1 1 100%\" *ngIf=\"diverging\">\n            <ngx-input\n              class=\"colors\"\n              type=\"text\"\n              [(ngModel)]=\"colorsRight\"\n              (change)=\"updateColorScheme()\"\n              label=\"Color Scale Right\"\n              hint=\"Enter named colors or hex codes\"></ngx-input>\n            <ngx-checkbox\n              [(ngModel)]=\"bezierRight\"\n              (change)=\"updateColorScheme()\">\n              Bezier interpollation\n            </ngx-checkbox>\n            <ngx-checkbox\n              [(ngModel)]=\"lightnessRight\"\n              (change)=\"updateColorScheme()\">\n              Lightness correction\n            </ngx-checkbox>\n          </div>\n          <div fxFlex=\"0 0 200px\">\n            <ul class=\"color-scale pull-right\">\n              <li *ngFor=\"let hex of chartOptions.colorScheme.domain\" [ngStyle]=\"{'background-color': hex}\">{{hex}}</li>\n            </ul>\n          </div>\n        </div>\n      </ng-container>\n  \n    </ngx-section>\n\n  </div>"

/***/ }),

/***/ "./src/app/chart-builder/chart-builder.component.scss":
/***/ (function(module, exports) {

module.exports = ".viz-container {\n  position: relative;\n  display: block;\n  width: 100%; }\n  .viz-container .chart {\n    max-height: 600px; }\n  .color-scale {\n  text-align: center;\n  width: 100%;\n  list-style-type: none;\n  padding-left: 0;\n  margin: 0; }\n  .color-scale li {\n    margin: 3px;\n    border-radius: 3px; }\n"

/***/ }),

/***/ "./src/app/chart-builder/chart-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts_release_utils_color_sets__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/utils/color-sets.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("./node_modules/d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js__ = __webpack_require__("./node_modules/chroma-js/chroma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chroma_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chroma_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chartTypes__ = __webpack_require__("./src/app/chartTypes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__("./src/app/utils.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var defaultOptions = {
    view: undefined,
    colorScheme: __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts_release_utils_color_sets__["a" /* colorSets */].find(function (s) { return s.name === 'cool'; }),
    schemeType: 'ordinal',
    showLegend: true,
    legendTitle: 'Legend',
    gradient: false,
    showXAxis: true,
    showYAxis: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    yAxisLabel: '',
    xAxisLabel: '',
    autoScale: true,
    showGridLines: true,
    rangeFillOpacity: 0.5,
    roundDomains: false,
    tooltipDisabled: false,
    showSeriesOnHover: true,
    curve: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"],
    curveClosed: __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveCardinalClosed"]
};
var ChartBuilderComponent = /** @class */ (function () {
    function ChartBuilderComponent(ngZone, dataService) {
        var _this = this;
        this.ngZone = ngZone;
        this.dataService = dataService;
        this.chartTypes = __WEBPACK_IMPORTED_MODULE_5__chartTypes__["a" /* chartTypes */];
        this.dataDims = [null, null, null, null, 'count'];
        this.chartType = __WEBPACK_IMPORTED_MODULE_5__chartTypes__["a" /* chartTypes */][0];
        this.data = [];
        this.headerValues = [];
        this.aggragates = ['count', 'sum', 'avg', 'max', 'min'];
        this.addChart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        dataService.universeUpdated.subscribe(function () {
            _this.clearAll();
            var headerValues = _this.dataService.headerValues;
            if (JSON.stringify(headerValues) !== JSON.stringify(_this.headerValues)) {
                _this.headerValues = headerValues.slice();
                _this.dataDims = [null, null, null, null, 'count'];
                _this.data = [];
            }
            else {
                _this.processData();
            }
        });
    }
    Object.defineProperty(ChartBuilderComponent.prototype, "hasChartSelected", {
        get: function () {
            return this.chartType && this.chartType.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartBuilderComponent.prototype, "hasValidDimensions", {
        get: function () {
            var _this = this;
            return this.hasChartSelected &&
                !this.chartType.dimLabels.some(function (l, i) { return l ? !_this.dataDims[i] : false; });
        },
        enumerable: true,
        configurable: true
    });
    ChartBuilderComponent.prototype.processData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var xKey, yKey, agg, x, y, a, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hasValidDimensions) {
                            return [2 /*return*/];
                        }
                        xKey = this.dataDims[0];
                        yKey = this.dataDims[2];
                        agg = this.dataDims[4];
                        x = this.chartOptions.xAxisLabel = this.chartOptions.legendTitle = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* toCapitalizedWords */])(xKey);
                        y = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* toCapitalizedWords */])(yKey);
                        a = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* toCapitalizedWords */])(agg);
                        this.chartOptions.yAxisLabel = a + " of " + y;
                        this.chartOptions.title = a + " of " + y + " vs " + x;
                        return [4 /*yield*/, this.dataService.createQuery(xKey, yKey, agg)];
                    case 1:
                        query = _a.sent();
                        this.data = this.dataService.getChartSeriesFromQuery(query, yKey, agg);
                        this.ngZone.run(function () { });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChartBuilderComponent.prototype.ngOnInit = function () {
        this.dataDims = [null, null, null, null, 'count'];
        this.clearAll();
    };
    ChartBuilderComponent.prototype.clearAll = function () {
        this.chartType = __WEBPACK_IMPORTED_MODULE_5__chartTypes__["a" /* chartTypes */][0];
        this.theme = 'dark';
        this.colors = '#a8385d,#7aa3e5,#a27ea8,#aae3f5,#adcded,#a95963,#8796c0,#7ed3ed,#50abcc,#ad6886';
        this.colorsRight = 'darkred, deeppink, orange, lightyellow';
        this.steps = 10;
        this.bezier = false;
        this.lightness = false;
        this.bezierRight = false;
        this.lightnessRight = false;
        this.bezier = false;
        this.lightness = false;
        this.chartOptions = __assign({}, defaultOptions);
        return this.updateColorScheme();
    };
    ChartBuilderComponent.prototype.updateColorScheme = function () {
        var domain = this.diverging ? this.updateColorSchemeDiv() : this.updateColorSchemeSeq();
        this.chartOptions.colorScheme = __assign({}, this.chartOptions.colorScheme, { domain: domain });
    };
    ChartBuilderComponent.prototype.onAddToDashboard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var chart;
            return __generator(this, function (_a) {
                chart = __assign({}, this.chartOptions);
                chart.data = this.data.slice();
                chart.chartType = __assign({}, this.chartType);
                chart.dataDims = this.dataDims.slice();
                chart.theme = this.theme;
                this.addChart.emit(chart);
                return [2 /*return*/];
            });
        });
    };
    ChartBuilderComponent.prototype.updateColorSchemeSeq = function () {
        return getColorScale(this.colors, this.bezier, this.lightness).colors(this.steps);
    };
    ChartBuilderComponent.prototype.updateColorSchemeDiv = function () {
        var domainL = getColorScale(this.colors, this.bezier, this.lightness).colors(this.steps);
        var domainR = getColorScale(this.colorsRight, this.bezierRight, this.lightnessRight).colors(this.steps);
        if (domainL[domainL.length - 1] === domainR[0]) {
            domainL.pop();
        }
        return __WEBPACK_IMPORTED_MODULE_3_chroma_js___default.a.scale(domainL.concat(domainR)).colors(this.steps);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChartBuilderComponent.prototype, "addChart", void 0);
    ChartBuilderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-builder',
            template: __webpack_require__("./src/app/chart-builder/chart-builder.component.html"),
            styles: [__webpack_require__("./src/app/chart-builder/chart-builder.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]])
    ], ChartBuilderComponent);
    return ChartBuilderComponent;
}());

function getColorScale(colors, bezier, lightness) {
    var cleanColors = clean(colors);
    var scale = bezier ? __WEBPACK_IMPORTED_MODULE_3_chroma_js___default.a.bezier(cleanColors.slice(0, 5)).scale() : __WEBPACK_IMPORTED_MODULE_3_chroma_js___default.a.scale(cleanColors);
    return scale.mode('lab').correctLightness(lightness);
    function clean(s) {
        return s.trim().replace(/(, *| +)/g, ',').replace(/['"]/g, '').split(',');
    }
}


/***/ }),

/***/ "./src/app/chart-dashboard/chart-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"charts\">\n    <div class=\"viz-container\" [ngClass]=\"chart.theme\" *ngFor=\"let chart of charts\">\n        <h1></h1>\n        <app-chart\n          class=\"chart\"\n          [chart]=\"chart\"\n          [data]=\"chart.data\"\n          [chartType]=\"chart.chartType\"\n          (select)=\"onSelect()\">\n        </app-chart>\n      </div>\n  </div>\n  <div class=\"filters\">\n    <div class=\"filter\" *ngFor=\"let filter of filters\">\n      <button class=\"pull-right\" (click)=\"onClear(filter)\">(clear)</button>\n      <div *ngIf=\"filter.type === 'value'\">\n        {{filter.label}}\n        <ngx-slider\n          [(ngModel)]=\"filter.range[0]\"\n          [step]=\"filter.step\"\n          [filled]=\"true\"\n          [min]=\"filter.minValue\"\n          [max]=\"filter.maxValue\"\n          (change)=\"updateFilters()\">\n        </ngx-slider>\n        {{filter.range[0]}}\n      </div>\n      <div *ngIf=\"filter.type === 'cat'\">\n        <label>{{filter.label}}</label>\n        <ul class=\"vertical-list\">\n          <li *ngFor=\"let item of filter.query.data\">\n            <ngx-checkbox\n              [(ngModel)]=\"filter.rangeIndex[item.key]\"\n              (change)=\"updateFilters()\">\n              {{item.key}} ({{item.value.count}})\n            </ngx-checkbox>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chart-dashboard/chart-dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .container > div.charts {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    text-align: center;\n    margin-right: 10px; }\n  .container > div.charts .viz-container {\n      margin: 30px 0 10px 0; }\n  .container > div.charts .chart {\n      max-height: 600px;\n      margin-top: 60px; }\n  .container > div.filters {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 250px;\n            flex: 0 0 250px;\n    margin-left: 10px; }\n  .container > div.filters .filter {\n      margin-top: 20px;\n      width: 100%;\n      clear: both;\n      border-left: 1px solid lightgrey;\n      padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/chart-dashboard/chart-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ChartDashboardComponent = /** @class */ (function () {
    function ChartDashboardComponent(ngZone, dataService) {
        this.ngZone = ngZone;
        this.dataService = dataService;
        this.charts = [];
        this.filters = [];
    }
    ChartDashboardComponent.prototype.ngOnInit = function () {
    };
    ChartDashboardComponent.prototype.onClear = function (_filter) {
        var filters = _filter ? [_filter] : this.filters;
        filters.forEach(function (filter) {
            switch (filter.type) {
                case 'value':
                    filter.range = [filter.minValue, filter.maxValue];
                    break;
                default:
                    filter.rangeIndex = {};
            }
        });
        return this.updateFilters();
    };
    ChartDashboardComponent.prototype.onSelect = function () {
        return this.updateFilters();
    };
    /** Updates universe/crossfilter filters based on UI filters */
    ChartDashboardComponent.prototype.updateFilters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = this.filters.map(function (filter) {
                            switch (filter.type) {
                                case 'value':
                                    var value = {
                                        $gte: filter.range[0],
                                        $lte: filter.range[1],
                                    };
                                    return _this.dataService.dataUniverse.filter(filter.key, value, true, true);
                                default:
                                    var range = Object.keys(filter.rangeIndex).reduce(function (acc, key) {
                                        if (filter.rangeIndex[key]) {
                                            acc.push(parseInt(key, 10) || key);
                                        }
                                        return acc;
                                    }, []);
                                    return _this.dataService.dataUniverse.filter(filter.key, range.length > 0 ? range : undefined, false, true);
                            }
                        });
                        return [4 /*yield*/, Promise.all(p)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.updateData()];
                }
            });
        });
    };
    /** Converts universe aggragate data into ngx-charts data */
    ChartDashboardComponent.prototype.updateData = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            _this.charts.forEach(function (chart) {
                chart.data = _this.dataService.getChartSeriesFromQuery(chart.xQuery, chart.dataDims[2], chart.dataDims[4]);
            });
        });
        this.ngZone.run(function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartDashboardComponent.prototype, "charts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartDashboardComponent.prototype, "filters", void 0);
    ChartDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-dashboard',
            template: __webpack_require__("./src/app/chart-dashboard/chart-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/chart-dashboard/chart-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ChartDashboardComponent);
    return ChartDashboardComponent;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>{{chart.title}}</h1>\n\n<ngx-charts-bar-vertical\n  *ngIf=\"chartType.name === 'bar-vertical'\"\n  class=\"chart-container\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-bar-vertical>\n\n<ngx-charts-pie-chart\n  *ngIf=\"chartType.name === 'pie'\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [explodeSlices]=\"false\"\n  [labels]=\"chart.showXAxisLabel\"\n  [doughnut]=\"false\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-chart>\n\n<ngx-charts-pie-grid\n  *ngIf=\"chartType.name === 'pie-grid'\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-pie-grid>\n\n<ngx-charts-tree-map\n  *ngIf=\"chartType.name === 'tree-map'\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  (select)=\"onSelect($event)\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\">\n</ngx-charts-tree-map>\n\n<ngx-charts-number-card\n  *ngIf=\"chartType.name === 'number-cards'\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-number-card>\n\n<ngx-charts-gauge\n  *ngIf=\"chartType.name === 'guage'\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  [units]=\"chart.yAxisLabel\"\n  (select)=\"onSelect($event)\">\n</ngx-charts-gauge>\n\n<!-- ngx-charts-bar-vertical-2d\n  *ngIf=\"chartType.name === 'bar-vertical-2d'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  xxxbarPadding=\"chart.barPadding\"\n  xxxgroupPadding=\"chart.groupPadding\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-vertical-2d>\n<ngx-charts-bar-horizontal-2d\n  *ngIf=\"chartType.name === 'bar-horizontal-2d'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-horizontal-2d>\n<ngx-charts-bar-vertical-stacked\n  *ngIf=\"chartType.name === 'bar-vertical-stacked'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-vertical-stacked>\n<ngx-charts-bar-horizontal-stacked\n  *ngIf=\"chartType.name === 'bar-horizontal-stacked'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-horizontal-stacked>\n<ngx-charts-bar-vertical-normalized\n  *ngIf=\"chartType.name === 'bar-vertical-normalized'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-vertical-normalized>\n<ngx-charts-bar-horizontal-normalized\n  *ngIf=\"chartType.name === 'bar-horizontal-normalized'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [gradient]=\"chart.gradient\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [showGridLines]=\"chart.showGridLines\"\n  [roundDomains]=\"chart.roundDomains\">\n</ngx-charts-bar-horizontal-normalized>\n<ngx-charts-polar-chart\n  *ngIf=\"chartType.name === 'polar-chart'\"\n  [view]=\"chart.view\"\n  class=\"chart-container\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [autoScale]=\"chart.autoScale\"\n  [showGridLines]=\"chart.showGridLines\"\n  [rangeFillOpacity]=\"chart.rangeFillOpacity\"\n  [roundDomains]=\"chart.roundDomains\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [curve]=\"chart.curveClosed\"\n  [showSeriesOnHover]=\"chart.showSeriesOnHover\">\n</ngx-charts-polar-chart>\n<ngx-charts-line-chart\n  *ngIf=\"chartType.name === 'line-chart'\"\n  [view]=\"chart.view\"\n  class=\"chart-container\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [results]=\"data\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [autoScale]=\"chart.autoScale\"\n  [showGridLines]=\"chart.showGridLines\"\n  [curve]=\"chart.curve\"\n  [rangeFillOpacity]=\"chart.rangeFillOpacity\"\n  [roundDomains]=\"chart.roundDomains\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [showSeriesOnHover]=\"chart.showSeriesOnHover\">\n</ngx-charts-line-chart>\n<ngx-charts-heat-map\n  *ngIf=\"chartType.name === 'heat-map'\"\n  class=\"chart-container\"\n  [view]=\"chart.view\"\n  [scheme]=\"chart.colorScheme\"\n  [results]=\"data\"\n  [legend]=\"chart.showLegend\"\n  [gradient]=\"chart.gradient\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  xxxinnerPadding=\"chart.innerPadding\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\">\n</ngx-charts-heat-map>\n<ngx-charts-bubble-chart\n  *ngIf=\"chartType.name === 'bubble-chart'\"\n  [view]=\"chart.view\"\n  class=\"chart-container\"\n  [results]=\"data\"\n  [showGridLines]=\"chart.showGridLines\"\n  [legend]=\"chart.showLegend\"\n  [legendTitle]=\"chart.legendTitle\"\n  [xAxis]=\"chart.showXAxis\"\n  [yAxis]=\"chart.showYAxis\"\n  [showXAxisLabel]=\"chart.showXAxisLabel\"\n  [showYAxisLabel]=\"chart.showYAxisLabel\"\n  [xAxisLabel]=\"chart.xAxisLabel\"\n  [yAxisLabel]=\"chart.yAxisLabel\"\n  [autoScale]=\"chart.autoScale\"\n  [scheme]=\"chart.colorScheme\"\n  [schemeType]=\"chart.schemeType\"\n  [roundDomains]=\"chart.roundDomains\"\n  [tooltipDisabled]=\"chart.tooltipDisabled\"\n  [minRadius]=\"3\"\n  [maxRadius]=\"20\">\n</ngx-charts-bubble-chart -->\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.onSelect = function (data) {
        var value = typeof data === 'object' ? data.name : data;
        if (this.chart.xFilter) {
            var filter = this.chart.xFilter;
            switch (filter.type) {
                case 'value':
                    filter.range[0] = value;
                    break;
                default:
                    filter.rangeIndex[value] = !filter.rangeIndex[value];
            }
        }
        this.select.emit({ chart: this.chart, value: value });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChartComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "chart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ChartComponent.prototype, "data", void 0);
    ChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__("./src/app/chart/chart.component.html"),
            styles: [__webpack_require__("./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/chartTypes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chartTypes; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function createChartType(_a) {
    var title = _a.title, obj = __rest(_a, ["title"]);
    return __assign({ title: title, name: titleToName(title), dimLabels: ['Group by', 'Name', 'Value', null] }, obj);
    function titleToName(s) {
        return s.toLowerCase().replace(/\ /g, '-');
    }
}
var chartTypes = [
    createChartType({ title: 'Bar Vertical', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
    createChartType({ title: 'Pie', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
    createChartType({ title: 'Tree Map', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
    createChartType({ title: 'Number Cards', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
    createChartType({ title: 'Guage', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
    createChartType({ title: 'Pie Grid', dimLabels: ['Group by', null, 'Value', null, 'Aggregation'] }),
];


/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universe__ = __webpack_require__("./node_modules/universe/src/universe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babyparse__ = __webpack_require__("./node_modules/babyparse/babyparse.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babyparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babyparse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataService = /** @class */ (function () {
    function DataService() {
        this.universeUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dataDims = [];
    }
    Object.defineProperty(DataService.prototype, "rawData", {
        get: function () {
            return this._parsed.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "errors", {
        get: function () {
            return this._parsed.errors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "dataText", {
        get: function () {
            return this._dataText || ' ';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "headerValues", {
        get: function () {
            var _this = this;
            return this._parsed.meta.fields.map(function (d) { return ({
                name: d,
                type: typeof _this._parsed.data[0][d]
            }); });
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.updateData = function (dataText) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._parsed = __WEBPACK_IMPORTED_MODULE_2_babyparse__["parse"](dataText, {
                            header: true,
                            dynamicTyping: true
                        });
                        if (this._parsed.errors.length) {
                            this._dataText = '';
                            return [2 /*return*/, this.rawData];
                        }
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_universe__(this._parsed.data)];
                    case 1:
                        _a.dataUniverse = _b.sent();
                        this.universeUpdated.emit(this.dataUniverse);
                        return [2 /*return*/, this.rawData];
                }
            });
        });
    };
    DataService.prototype.createQuery = function (groupBy, valueKey, aggragate) {
        if (aggragate === void 0) { aggragate = 'sum'; }
        return __awaiter(this, void 0, void 0, function () {
            var select, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        select = { $count: true };
                        aggragate = '$' + aggragate;
                        if (valueKey && valueKey !== 'count') {
                            select = (_a = {
                                    $count: true
                                },
                                _a[valueKey] = (_b = {},
                                    _b[aggragate] = valueKey,
                                    _b),
                                _a);
                        }
                        return [4 /*yield*/, this.dataUniverse.query({
                                groupBy: groupBy,
                                select: select
                            })];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    DataService.prototype.getChartSeriesFromQuery = function (query, yKey, aggragate) {
        if (yKey === void 0) { yKey = 'count'; }
        if (aggragate === void 0) { aggragate = 'sum'; }
        return query.data.map(function (d) {
            var value = d.value[yKey];
            if (typeof value === 'object') {
                value = value[aggragate];
            }
            return {
                name: d.key,
                value: value
            };
        }).filter(function (d) { return d.value !== 0; });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gapminder; });
var gapminder = "\ncountry\tyear\tgdpPercap\tlifeExp\tpop\tcontinent\nAustralia\t1952\t10039.59564\t69.12\t8691212\tOceania\nAustralia\t1957\t10949.64959\t70.33\t9712569\tOceania\nAustralia\t1962\t12217.22686\t70.93\t10794968\tOceania\nAustralia\t1967\t14526.12465\t71.1\t11872264\tOceania\nAustralia\t1972\t16788.62948\t71.93\t13177000\tOceania\nAustralia\t1977\t18334.19751\t73.49\t14074100\tOceania\nAustralia\t1982\t19477.00928\t74.74\t15184200\tOceania\nAustralia\t1987\t21888.88903\t76.32\t16257249\tOceania\nAustralia\t1992\t23424.76683\t77.56\t17481977\tOceania\nAustralia\t1997\t26997.93657\t78.83\t18565243\tOceania\nAustralia\t2002\t30687.75473\t80.37\t19546792\tOceania\nAustralia\t2007\t34435.36744\t81.235\t20434176\tOceania\nCanada\t1952\t11367.16112\t68.75\t14785584\tAmericas\nCanada\t1957\t12489.95006\t69.96\t17010154\tAmericas\nCanada\t1962\t13462.48555\t71.3\t18985849\tAmericas\nCanada\t1967\t16076.58803\t72.13\t20819767\tAmericas\nCanada\t1972\t18970.57086\t72.88\t22284500\tAmericas\nCanada\t1977\t22090.88306\t74.21\t23796400\tAmericas\nCanada\t1982\t22898.79214\t75.76\t25201900\tAmericas\nCanada\t1987\t26626.51503\t76.86\t26549700\tAmericas\nCanada\t1992\t26342.88426\t77.95\t28523502\tAmericas\nCanada\t1997\t28954.92589\t78.61\t30305843\tAmericas\nCanada\t2002\t33328.96507\t79.77\t31902268\tAmericas\nCanada\t2007\t36319.23501\t80.653\t33390141\tAmericas\nChina\t1952\t400.4486107\t44\t556263528\tAsia\nChina\t1957\t575.9870009\t50.54896\t637408000\tAsia\nChina\t1962\t487.6740183\t44.50136\t665770000\tAsia\nChina\t1967\t612.7056934\t58.38112\t754550000\tAsia\nChina\t1972\t676.9000921\t63.11888\t862030000\tAsia\nChina\t1977\t741.2374699\t63.96736\t943455000\tAsia\nChina\t1982\t962.4213805\t65.525\t1000281000\tAsia\nChina\t1987\t1378.904018\t67.274\t1084035000\tAsia\nChina\t1992\t1655.784158\t68.69\t1164970000\tAsia\nChina\t1997\t2289.234136\t70.426\t1230075000\tAsia\nChina\t2002\t3119.280896\t72.028\t1280400000\tAsia\nChina\t2007\t4959.114854\t72.961\t1318683096\tAsia\nFrance\t1952\t7029.809327\t67.41\t42459667\tEurope\nFrance\t1957\t8662.834898\t68.93\t44310863\tEurope\nFrance\t1962\t10560.48553\t70.51\t47124000\tEurope\nFrance\t1967\t12999.91766\t71.55\t49569000\tEurope\nFrance\t1972\t16107.19171\t72.38\t51732000\tEurope\nFrance\t1977\t18292.63514\t73.83\t53165019\tEurope\nFrance\t1982\t20293.89746\t74.89\t54433565\tEurope\nFrance\t1987\t22066.44214\t76.34\t55630100\tEurope\nFrance\t1992\t24703.79615\t77.46\t57374179\tEurope\nFrance\t1997\t25889.78487\t78.64\t58623428\tEurope\nFrance\t2002\t28926.03234\t79.59\t59925035\tEurope\nFrance\t2007\t30470.0167\t80.657\t61083916\tEurope\nGermany\t1952\t7144.114393\t67.5\t69145952\tEurope\nGermany\t1957\t10187.82665\t69.1\t71019069\tEurope\nGermany\t1962\t12902.46291\t70.3\t73739117\tEurope\nGermany\t1967\t14745.62561\t70.8\t76368453\tEurope\nGermany\t1972\t18016.18027\t71\t78717088\tEurope\nGermany\t1977\t20512.92123\t72.5\t78160773\tEurope\nGermany\t1982\t22031.53274\t73.8\t78335266\tEurope\nGermany\t1987\t24639.18566\t74.847\t77718298\tEurope\nGermany\t1992\t26505.30317\t76.07\t80597764\tEurope\nGermany\t1997\t27788.88416\t77.34\t82011073\tEurope\nGermany\t2002\t30035.80198\t78.67\t82350671\tEurope\nGermany\t2007\t32170.37442\t79.406\t82400996\tEurope\nJapan\t1952\t3216.956347\t63.03\t86459025\tAsia\nJapan\t1957\t4317.694365\t65.5\t91563009\tAsia\nJapan\t1962\t6576.649461\t68.73\t95831757\tAsia\nJapan\t1967\t9847.788607\t71.43\t100825279\tAsia\nJapan\t1972\t14778.78636\t73.42\t107188273\tAsia\nJapan\t1977\t16610.37701\t75.38\t113872473\tAsia\nJapan\t1982\t19384.10571\t77.11\t118454974\tAsia\nJapan\t1987\t22375.94189\t78.67\t122091325\tAsia\nJapan\t1992\t26824.89511\t79.36\t124329269\tAsia\nJapan\t1997\t28816.58499\t80.69\t125956499\tAsia\nJapan\t2002\t28604.5919\t82\t127065841\tAsia\nJapan\t2007\t31656.06806\t82.603\t127467972\tAsia\nMexico\t1952\t3478.125529\t50.789\t30144317\tAmericas\nMexico\t1957\t4131.546641\t55.19\t35015548\tAmericas\nMexico\t1962\t4581.609385\t58.299\t41121485\tAmericas\nMexico\t1967\t5754.733883\t60.11\t47995559\tAmericas\nMexico\t1972\t6809.40669\t62.361\t55984294\tAmericas\nMexico\t1977\t7674.929108\t65.032\t63759976\tAmericas\nMexico\t1982\t9611.147541\t67.405\t71640904\tAmericas\nMexico\t1987\t8688.156003\t69.498\t80122492\tAmericas\nMexico\t1992\t9472.384295\t71.455\t88111030\tAmericas\nMexico\t1997\t9767.29753\t73.67\t95895146\tAmericas\nMexico\t2002\t10742.44053\t74.902\t102479927\tAmericas\nMexico\t2007\t11977.57496\t76.195\t108700891\tAmericas\nSpain\t1952\t3834.034742\t64.94\t28549870\tEurope\nSpain\t1957\t4564.80241\t66.66\t29841614\tEurope\nSpain\t1962\t5693.843879\t69.69\t31158061\tEurope\nSpain\t1967\t7993.512294\t71.44\t32850275\tEurope\nSpain\t1972\t10638.75131\t73.06\t34513161\tEurope\nSpain\t1977\t13236.92117\t74.39\t36439000\tEurope\nSpain\t1982\t13926.16997\t76.3\t37983310\tEurope\nSpain\t1987\t15764.98313\t76.9\t38880702\tEurope\nSpain\t1992\t18603.06452\t77.57\t39549438\tEurope\nSpain\t1997\t20445.29896\t78.77\t39855442\tEurope\nSpain\t2002\t24835.47166\t79.78\t40152517\tEurope\nSpain\t2007\t28821.0637\t80.941\t40448191\tEurope\nUnited Kingdom\t1952\t9979.508487\t69.18\t50430000\tEurope\nUnited Kingdom\t1957\t11283.17795\t70.42\t51430000\tEurope\nUnited Kingdom\t1962\t12477.17707\t70.76\t53292000\tEurope\nUnited Kingdom\t1967\t14142.85089\t71.36\t54959000\tEurope\nUnited Kingdom\t1972\t15895.11641\t72.01\t56079000\tEurope\nUnited Kingdom\t1977\t17428.74846\t72.76\t56179000\tEurope\nUnited Kingdom\t1982\t18232.42452\t74.04\t56339704\tEurope\nUnited Kingdom\t1987\t21664.78767\t75.007\t56981620\tEurope\nUnited Kingdom\t1992\t22705.09254\t76.42\t57866349\tEurope\nUnited Kingdom\t1997\t26074.53136\t77.218\t58808266\tEurope\nUnited Kingdom\t2002\t29478.99919\t78.471\t59912431\tEurope\nUnited Kingdom\t2007\t33203.26128\t79.425\t60776238\tEurope\nUnited States\t1952\t13990.48208\t68.44\t157553000\tAmericas\nUnited States\t1957\t14847.12712\t69.49\t171984000\tAmericas\nUnited States\t1962\t16173.14586\t70.21\t186538000\tAmericas\nUnited States\t1967\t19530.36557\t70.76\t198712000\tAmericas\nUnited States\t1972\t21806.03594\t71.34\t209896000\tAmericas\nUnited States\t1977\t24072.63213\t73.38\t220239000\tAmericas\nUnited States\t1982\t25009.55914\t74.65\t232187835\tAmericas\nUnited States\t1987\t29884.35041\t75.02\t242803533\tAmericas\nUnited States\t1992\t32003.93224\t76.09\t256894189\tAmericas\nUnited States\t1997\t35767.43303\t76.81\t272911760\tAmericas\nUnited States\t2002\t39097.09955\t77.31\t287675526\tAmericas\nUnited States\t2007\t42951.65309\t78.242\t301139947\tAmericas".trim();


/***/ }),

/***/ "./src/app/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toCapitalizedWords;
function toCapitalizedWords(name) {
    var words = name.match(/[A-Za-z][a-z]*/g);
    return words.map(capitalize).join(' ');
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map