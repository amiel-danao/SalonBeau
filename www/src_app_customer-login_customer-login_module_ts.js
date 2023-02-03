"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_customer-login_customer-login_module_ts"],{

/***/ 6110:
/*!*****************************************************************!*\
  !*** ./src/app/customer-login/customer-login-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerLoginPageRoutingModule": () => (/* binding */ CustomerLoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _customer_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-login.page */ 9780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _customer_login_page__WEBPACK_IMPORTED_MODULE_0__.CustomerLoginPage
    }
];
class CustomerLoginPageRoutingModule {
}
CustomerLoginPageRoutingModule.ɵfac = function CustomerLoginPageRoutingModule_Factory(t) { return new (t || CustomerLoginPageRoutingModule)(); };
CustomerLoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomerLoginPageRoutingModule });
CustomerLoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerLoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8443:
/*!*********************************************************!*\
  !*** ./src/app/customer-login/customer-login.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerLoginPageModule": () => (/* binding */ CustomerLoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _customer_login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-login-routing.module */ 6110);
/* harmony import */ var _customer_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-login.page */ 9780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class CustomerLoginPageModule {
}
CustomerLoginPageModule.ɵfac = function CustomerLoginPageModule_Factory(t) { return new (t || CustomerLoginPageModule)(); };
CustomerLoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerLoginPageModule });
CustomerLoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _customer_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerLoginPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerLoginPageModule, { declarations: [_customer_login_page__WEBPACK_IMPORTED_MODULE_1__.CustomerLoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _customer_login_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerLoginPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_customer-login_customer-login_module_ts.js.map