webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reg_reg_component__ = __webpack_require__("../../../../../src/app/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_2__reg_reg_component__["a" /* RegComponent */]
    },
    {
        path: 'browse',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'listings',
        pathMatch: 'full',
        component: __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__["a" /* ListingComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n    <a [routerLink]=\"['']\">Reg</a>\n    <a [routerLink]=\"['listings']\">Listings</a>\n    <a [routerLink]=\"['browse']\">Browser</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_userService) {
        this._userService = _userService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._userService.getUserStored();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reg_reg_component__ = __webpack_require__("../../../../../src/app/reg/reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bike_of_day_bike_of_day_component__ = __webpack_require__("../../../../../src/app/bike-of-day/bike-of-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_create_component__ = __webpack_require__("../../../../../src/app/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__reg_reg_component__["a" /* RegComponent */],
                __WEBPACK_IMPORTED_MODULE_8__bike_of_day_bike_of_day_component__["a" /* BikeOfDayComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__listing_listing_component__["a" /* ListingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__bike_service__["a" /* BikeService */], __WEBPACK_IMPORTED_MODULE_14__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bike-of-day/bike-of-day.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bike-of-day/bike-of-day.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bike-of-day works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bike-of-day/bike-of-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeOfDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BikeOfDayComponent = (function () {
    function BikeOfDayComponent() {
    }
    BikeOfDayComponent.prototype.ngOnInit = function () {
    };
    BikeOfDayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bike-of-day',
            template: __webpack_require__("../../../../../src/app/bike-of-day/bike-of-day.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bike-of-day/bike-of-day.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BikeOfDayComponent);
    return BikeOfDayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bike.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BikeService = (function () {
    function BikeService(_http) {
        this._http = _http;
        this.bikesObserver = new __WEBPACK_IMPORTED_MODULE_2_Rxjs__["BehaviorSubject"]([]);
    }
    BikeService.prototype.create_bike = function (bike) {
        return this._http.post('/bikes', bike)
            .map(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error); });
    };
    BikeService.prototype.getAllBikes = function () {
        return this._http.get('/bikes')
            .map(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error); });
    };
    BikeService.prototype.deleteBike = function (bike) {
        return this._http.delete("/bikes/" + bike._id)
            .map(function (response) {
            console.log(response);
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error); });
    };
    BikeService.prototype.editBike = function (bike) {
        return this._http.put("/bikes/" + bike._id, bike)
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_Rxjs__["Observable"].throw(error); });
    };
    BikeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BikeService);
    return BikeService;
}());



/***/ }),

/***/ "../../../../../src/app/bike.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bike; });
var Bike = (function () {
    function Bike() {
    }
    return Bike;
}());



/***/ }),

/***/ "../../../../../src/app/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color:red;\n}\n\n.form_half {\n    display: inline-block;\n    width:300px;\n    vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add a Bike!</h2>\n<form (submit)='newBike($event)' #bikeForm='ngForm'>\n    <div class='form_half'>\n        <p>Title</p>\n        <div *ngIf='title.errors' class='error'>\n            <p *ngIf='title.errors.required'>Required</p>\n            <p *ngIf='title.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text'  name='bike.title' [(ngModel)]='bike.title' #title='ngModel' required minlength='3'/>\n        <p>Price</p>\n        <div *ngIf='price.errors' class='error'>\n            <p *ngIf='price.errors.pattern'>Numbers only.</p>\n        </div>\n        <input type='number' pattern=\"^[0-9]+$\" name='bike.price' [(ngModel)]='bike.price' #price='ngModel' required />\n        <p>Image URL</p>\n        <input type='text'  name='bike.image_url' [(ngModel)]='bike.image_url' #image_url='ngModel' />\n    </div>\n    <div class='form_half'>\n        <p>Description</p>\n        <div *ngIf='description.errors' class='error'>\n            <p *ngIf='description.errors.required'>Required</p>\n            <p *ngIf='description.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text'  name='bike.description' [(ngModel)]='bike.description' #description='ngModel' required minlength='3'/>\n        <p>Location</p>\n        <div *ngIf='location.errors' class='error'>\n            <p *ngIf='location.errors.required'>Required</p>\n            <p *ngIf='location.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text' name='bike.location' [(ngModel)]='bike.location' #location='ngModel' required minlength='3'/>\n        <br />\n        <input type=\"submit\" [disabled]='!bikeForm.valid'>\n    </div>   \n</form>\n"

/***/ }),

/***/ "../../../../../src/app/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike__ = __webpack_require__("../../../../../src/app/bike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = (function () {
    function CreateComponent(_bikeService, _userService) {
        this._bikeService = _bikeService;
        this._userService = _userService;
        this.addBike = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.bike = new __WEBPACK_IMPORTED_MODULE_1__bike__["a" /* Bike */]();
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.newBike = function (event) {
        var _this = this;
        event.preventDefault();
        this.bike.user = this._userService.logged_in_user;
        this._bikeService.create_bike(this.bike)
            .subscribe(function (bike) {
            console.log('bout to emit', bike);
            _this.addBike.emit(bike);
        }, function (error) { return console.log(error); });
        this.bike = new __WEBPACK_IMPORTED_MODULE_1__bike__["a" /* Bike */]();
        console.log('new bike');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateComponent.prototype, "addBike", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error{\n    color:red;\n}\n.form_half {\n    display: inline-block;\n    width:45%;\n    vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)='edit($event)' #editForm='ngForm' >\n    <div class='form_half'>\n        <p>Title</p>\n        <div *ngIf='title.errors' class='error'>\n            <p *ngIf='title.errors.required'>Required</p>\n            <p *ngIf='title.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text'  name='bike_to_edit.title' [(ngModel)]='bike_to_edit.title' #title='ngModel' required minlength='3'/>\n        <p>Price</p>\n        <div *ngIf='price.errors' class='error'>\n            <p *ngIf='price.errors.pattern'>Numbers only.</p>\n        </div>\n        <input type='number' pattern=\"^[0-9]+$\" name='bike_to_edit.price' [(ngModel)]='bike_to_edit.price' #price='ngModel' required />\n        <p>Image URL</p>\n        <input type='text'  name='bike_to_edit.image_url' [(ngModel)]='bike_to_edit.image_url' #image_url='ngModel' />\n    </div>\n    <div class='form_half'>\n        <p>Description</p>\n        <div *ngIf='description.errors' class='error'>\n            <p *ngIf='description.errors.required'>Required</p>\n            <p *ngIf='description.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text'  name='bike_to_edit.description' [(ngModel)]='bike_to_edit.description' #description='ngModel' required minlength='3'/>\n        <p>Location</p>\n        <div *ngIf='location.errors' class='error'>\n            <p *ngIf='location.errors.required'>Required</p>\n            <p *ngIf='location.errors.minlength'>Must be 3 characters.</p>\n        </div>\n        <input type='text' name='bike_to_edit.location' [(ngModel)]='bike_to_edit.location' #location='ngModel' required minlength='3'/>\n        <br />\n        <input type=\"submit\" [disabled]='!editForm.valid'>\n    </div>    \n</form>\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike__ = __webpack_require__("../../../../../src/app/bike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = (function () {
    function EditComponent(_bikeService) {
        this._bikeService = _bikeService;
        this.hide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent.prototype.edit = function (event) {
        event.preventDefault();
        console.log('editing bike');
        this._bikeService.editBike(this.bike_to_edit)
            .subscribe(function (bike) { return console.log(bike); }, function (error) { return console.log(error); });
        this.hide.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__bike__["a" /* Bike */])
    ], EditComponent.prototype, "bike_to_edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], EditComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], EditComponent.prototype, "hide", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bike_pic {\n    width:200px;\n    margin-right:10px\n}\n\n.info{\n    width: 100px;\n    display:inline-block;\n    vertical-align: top;\n}\n\n.bike{\n    padding: 10px;\n    border: 1px solid black;\n    width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf='_userService.logged_in_user._id'>\n    <app-create (addBike)='addBike($event)'></app-create>\n    <h2>Your Bikes!</h2>\n    <div *ngIf='user_bikes'>\n        <div *ngFor='let bike of user_bikes; let idx = index' class='bike'>\n            <h3>{{ bike.title }}</h3>\n            <img *ngIf='bike.image_url' src=\"{{ bike.image_url }}\" alt=\"No Picture\" class='bike_pic'>\n            <div class='info'>\n                <h4>Price</h4>\n                <p>{{ bike.price }}</p>\n            </div>\n            <div class='info'>\n                <h4>Location</h4>\n                <p>{{ bike.location }}</p>\n            </div>\n            <div class='info'>\n                <h4>Description</h4>\n                <p>{{ bike.description }}</p>\n            </div>\n            <button (click)='deleteBike(bike)'>Delete</button>\n            <button (click)='showForm[idx] = !showForm[idx]'>Edit</button>\n            <app-edit [bike_to_edit]='bike' [index]='idx' *ngIf='showForm[idx]' (hide)='showForm[idx] = !showForm[idx]'></app-edit>\n        </div>\n    </div>\n</div>\n\n<div *ngIf='!_userService.logged_in_user._id'>\n    <p>Log in to see your listings!</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingComponent = (function () {
    function ListingComponent(_userService, _bikeService) {
        this._userService = _userService;
        this._bikeService = _bikeService;
        this.user_bikes = [];
        this.showForm = [];
    }
    ListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserStored()
            .subscribe(function (user) {
            _this.user_bikes = user.bikes;
            for (var i = 0; i < _this.user_bikes.length; i++) {
                _this.showForm[i] = false;
            }
        });
    };
    ListingComponent.prototype.deleteBike = function (bike_to_delete) {
        console.log('delete bike', bike_to_delete);
        this._bikeService.deleteBike(bike_to_delete)
            .subscribe(function (bike) {
            console.log('bike deleted');
        });
        this.user_bikes.splice(this.user_bikes.indexOf(bike_to_delete), 1);
    };
    ListingComponent.prototype.addBike = function (bike) {
        console.log('adding bike', bike);
        this.user_bikes.push(bike);
    };
    ListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listing',
            template: __webpack_require__("../../../../../src/app/listing/listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__bike_service__["a" /* BikeService */]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login_form{\n    width: 30%;\n    display: inline-block;\n    vertical-align: top;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='login_form'>\n    <h2>Login</h2>\n    <div *ngIf='_userService.logged_in_user._id'>\n        <p>{{ _userService.logged_in_user.first_name }} {{ _userService.logged_in_user.last_name }} is already logged in, want to log out?</p>\n        <button (click)='logout($event)'>Log Out</button>\n    </div>\n    <form *ngIf='!_userService.logged_in_user._id' (submit)='login_attempt($event)' #loginForm='ngForm'>\n        <p *ngIf='error' class='error'>{{ error.error }}</p>\n        <p>Email</p>\n        <input type=\"text\" name=\"user.email\" [(ngModel)]='user.email' required>\n        <p>Password</p>\n        <input type=\"password\" name=\"user.password\" [(ngModel)]='user.password' required>\n        <br />\n        <input type=\"submit\" [disabled]='!loginForm.valid'>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_userService) {
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login_attempt = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('login attempt');
        this._userService.login_attempt(this.user)
            .subscribe(function (user) { return _this._userService.login(user); }, function (errorResponse) { return _this.error = errorResponse.json(); });
    };
    LoginComponent.prototype.logout = function (event) {
        event.preventDefault();
        console.log('log out');
        this._userService.logout();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reg/reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color:red;\n}\n\n#reg_form{\n    width:30%;\n    display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reg/reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='reg_form'>\n    <h2>Register</h2>\n    <form (submit)='register($event)' #regForm='ngForm' >\n        <p>First Name</p>\n        <div class='error' *ngIf='first_name.errors'>\n            <p *ngIf='first_name.errors.required'>Required</p>\n            <p *ngIf='first_name.errors.minlength'>Needs to be at least 3 Characters.</p>\n        </div>\n        <input type=\"text\" name=\"user.first_name\" [(ngModel)]=\"user.first_name\" #first_name='ngModel' required minlength='3' />\n        <p>Last Name</p>\n        <div class='error' *ngIf='last_name.errors'>\n            <p *ngIf='last_name.errors.required'>Required</p>\n            <p *ngIf='last_name.errors.minlength'>Needs to be at least 3 Characters.</p>\n        </div>\n        <input type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\" #last_name='ngModel' required minlength='3' />\n        <p>Email</p>\n        <div class='error' *ngIf='email.errors'>\n            <p *ngIf='email.errors.required'>Required</p>\n            <p *ngIf='email.errors.minlength'>Needs to be at least 3 Characters.</p>\n            <p *ngIf='email.errors.pattern'>Please enter valid email.</p>\n        </div>\n        <p class='error' *ngIf='emailError'>{{ emailError.error }}</p>\n        <input type=\"text\" name=\"email\" [(ngModel)]=\"user.email\" #email='ngModel' required minlength='3' pattern='^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'/>\n        <p>Password</p>\n        <div class='error' *ngIf='pw.errors'>\n            <p *ngIf='pw.errors.required'>Required</p>\n            <p *ngIf='pw.errors.minlength'>Needs to be at least 8 Characters.</p>\n            <p *ngIf='pw.errors.pattern'>Please include a capital letter, number and symbol.</p>\n        </div>\n        <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" #pw='ngModel' required minlength='8' pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,32}'/>\n        <p>Confirm Password</p>\n        <div class='error' *ngIf='confirm.errors || confirm_password != password'>\n            <p *ngIf='confirm.errors && confirm.errors.required'>Required</p>\n            <p *ngIf='confirm.errors && confirm.errors.minlength'>Needs to be at least 3 Characters.</p>\n            <p *ngIf='confirm_password != password'>Needs to match.</p>\n        </div>\n        <input type=\"password\" name=\"confirm_password\" [(ngModel)]=\"confirm_password\" #confirm='ngModel' required />\n        <br />\n        <input type='submit' [disabled]='!regForm.form.valid || confirm_password != password'/>\n    </form>\n</div>\n<app-login></app-login>\n"

/***/ }),

/***/ "../../../../../src/app/reg/reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegComponent = (function () {
    function RegComponent(_userService) {
        this._userService = _userService;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.users = [];
        this.emailError = {};
    }
    RegComponent.prototype.ngOnInit = function () {
        //this._userService.getAllUsers();
    };
    RegComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('register', this.user);
        this.user.password = this.password;
        this._userService.register(this.user).subscribe(function (user) {
            console.log('in subscribe user');
            _this._userService.login(user);
        }, function (errorResponse) {
            console.log('in subscribe email');
            _this.emailError = errorResponse.json();
        });
    };
    RegComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reg',
            template: __webpack_require__("../../../../../src/app/reg/reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info{\n    width: 200px;\n    display:inline-block;\n    vertical-align: top;\n    padding: 10px;\n    border: 1px solid black;\n    margin-right: 10px;\n}\n.bike_pic{\n    width:200px;\n}\n.bike{\n    padding: 10px;\n    border: 1px solid black;\n    width: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Search Here!</h2>\n<form (submit)='search($event)'>\n    <input type=\"text\" name='searchTerm' [(ngModel)]='searchTerm'>\n    <br />\n    <input type=\"submit\" >\n</form>\n<br />\n<button (click)='reset()'>New Search</button>\n\n<h2>Bikes!</h2>\n<div *ngIf='all_bikes'>\n    <div *ngFor='let bike of all_bikes' class='bike'>\n        <h2>{{ bike.title }}</h2>\n        <img *ngIf='bike.image_url' src=\"{{ bike.image_url }}\" alt=\"No Picture\" class='bike_pic'>\n        <div class='info'>\n            <h4>Price</h4>\n            <p>{{ bike.price }}</p>\n        </div>\n        <div class='info'>\n            <h4>Location</h4>\n            <p>{{ bike.location }}</p>\n        </div>\n        <div class='info'>\n            <h4>Description</h4>\n            <p>{{ bike.description }}</p>\n        </div>\n        <div class='info'>\n            <h4>User</h4>\n            <p>{{ bike.user.first_name }} {{ bike.user.last_name }}</p>\n            <p>{{ bike.user.email }}</p>\n        </div>\n    </div>\n</div>\n<div *ngIf='!all_bikes'>\n    <p>Hmm...Sorry nothing here</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bike_service__ = __webpack_require__("../../../../../src/app/bike.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(_bikeService) {
        this._bikeService = _bikeService;
        this.all_bikes = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getBikes();
    };
    SearchComponent.prototype.search = function (event) {
        var _this = this;
        event.preventDefault();
        console.log('Search!', this.searchTerm);
        this.all_bikes = this.all_bikes.filter(function (bike) { return bike.title.toLowerCase().includes(_this.searchTerm.toLowerCase()); });
        if (this.all_bikes.length === 0) {
            this.all_bikes = null;
        }
    };
    SearchComponent.prototype.reset = function () {
        this.searchTerm = '';
        this.getBikes();
    };
    SearchComponent.prototype.getBikes = function () {
        var _this = this;
        this._bikeService.getAllBikes()
            .subscribe(function (bikes) { return _this.all_bikes = bikes; });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__bike_service__["a" /* BikeService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs__ = __webpack_require__("../../../../Rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_Rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.userObserver = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]([]);
        this.emailError = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]({});
        this.loginObserver = new __WEBPACK_IMPORTED_MODULE_3_Rxjs__["BehaviorSubject"]({});
        this.logged_in_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        this.logged_in = false;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        console.log('in reg func');
        return this._http.post('/users', user)
            .map(function (response) {
            console.log('Reg Response', response);
            return response.json();
        })
            .catch(function (error) {
            if (error.json().error.code === 11000) {
                console.log('User with email already exists!');
                _this.emailError.next({ error: 'User with email already exists!' });
            }
            return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        this._http.get('/users').toPromise()
            .then(function (users) { return _this.userObserver.next(users.json()); })
            .catch(function (error) { return console.log(error); });
    };
    UserService.prototype.login_attempt = function (user) {
        console.log('sending login request');
        return this._http.post('/login', user)
            .map(function (response) {
            console.log('logged in!');
            return response.json();
        })
            .catch(function (error) {
            console.log('log in error', error);
            return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
        });
    };
    UserService.prototype.getUserStored = function () {
        var _this = this;
        console.log('getUserStored');
        if (localStorage.id) {
            console.log('id found', localStorage.id);
            return this._http.post('/user', { _id: localStorage.id })
                .map(function (response) {
                console.log('set user', _this.logged_in_user);
                _this.logged_in_user = response.json();
                return response.json();
            })
                .catch(function (error) {
                console.log('stored user error', error);
                return __WEBPACK_IMPORTED_MODULE_3_Rxjs__["Observable"].throw(error);
            });
        }
        else {
            return null;
        }
    };
    UserService.prototype.logout = function () {
        console.log('in log out func');
        this.logged_in_user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
        localStorage.setItem('id', undefined);
    };
    UserService.prototype.login = function (user) {
        console.log('in login func');
        this.logged_in_user = user;
        this._router.navigateByUrl('/listings');
        localStorage.setItem('id', this.logged_in_user._id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map