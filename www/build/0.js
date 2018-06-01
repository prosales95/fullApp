webpackJsonp([0],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]),
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadData();
        this.nats = [
            { title: ' Argentina', cap: 'buenos aires' },
            { title: 'Brazil', cap: 'brazilia' },
            { title: 'Ecuador', cap: 'quito' },
            { title: ' Bolivia', cap: 'sucre' },
            { title: 'Paraguay', cap: 'asuncion' },
            { title: 'Chile ', cap: 'santiago' },
            { title: 'Uruguay', cap: 'montevideo' },
            { title: 'Colombia', cap: 'bogota' },
            { title: 'Venezuela', cap: 'Caracas' },
            { title: 'Mexico', cap: 'DF' }
        ];
        this.objs = [
            { title: 'Pacific Coast' },
            { title: 'Atlantic' },
            { title: 'Islands' },
            { title: 'Andes Mountains' },
            { title: 'Patagonia' },
            { title: 'Amazon Forest' },
            { title: 'Atacama' },
            { title: 'Pampa' }
        ];
    }
    InfoPage.prototype.loadData = function () {
        var _this = this;
        var data;
        data = this.http.get('https://jsonplaceholder.typicode.com/posts');
        data.subscribe(function (res) {
            _this.items = res;
        });
    };
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.natClick = function (natcap) {
        alert('The capital is ' + natcap);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Anwender\Ionic\fullapp\src\pages\info\info.html"*/'<!--\n\n  Generated template for the InfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-navbar color = "primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name ="menu"> </ion-icon> </button>\n\n        <ion-title>Information</ion-title>\n\n      </ion-navbar>\n\n      <ion-title>Info</ion-title>\n\n    </ion-navbar>\n\n\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n   <ion-list>\n\n    <ion-item-group>\n\n      <ion-item-divider color="light">Latin gastronomy by country</ion-item-divider>\n\n      <ion-item *ngFor = "let nat of nats" (click) = "natClick(nat.cap)">\n\n       <h2>{{nat.title}}</h2> </ion-item>\n\n     </ion-item-group>\n\n   </ion-list>\n\n\n\n   <ion-list>\n\n    <ion-item-group>\n\n      <ion-item-divider color="danger">By environment </ion-item-divider>\n\n      <ion-item *ngFor = "let obj of objs">{{obj.title}}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n    <ion-item-group>\n\n      <ion-item-divider color="dark">100 Latin Language labels </ion-item-divider>\n\n      <ion-item *ngFor = "let item of items">\n\n        <h1>\n\n         {{item.id}}\n\n       </h1>\n\n     {{item.title}}</ion-item>\n\n   </ion-item-group>\n\n </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Anwender\Ionic\fullapp\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ })

});
//# sourceMappingURL=0.js.map