"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_slashcreen_slashcreen_module_ts"],{

/***/ 1810:
/*!*********************************************************!*\
  !*** ./src/app/slashcreen/slashcreen-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlashcreenPageRoutingModule": () => (/* binding */ SlashcreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _slashcreen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slashcreen.page */ 7164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _slashcreen_page__WEBPACK_IMPORTED_MODULE_0__.SlashcreenPage
    }
];
class SlashcreenPageRoutingModule {
}
SlashcreenPageRoutingModule.ɵfac = function SlashcreenPageRoutingModule_Factory(t) { return new (t || SlashcreenPageRoutingModule)(); };
SlashcreenPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SlashcreenPageRoutingModule });
SlashcreenPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SlashcreenPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6414:
/*!*************************************************!*\
  !*** ./src/app/slashcreen/slashcreen.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlashcreenPageModule": () => (/* binding */ SlashcreenPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _slashcreen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slashcreen-routing.module */ 1810);
/* harmony import */ var _slashcreen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slashcreen.page */ 7164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class SlashcreenPageModule {
}
SlashcreenPageModule.ɵfac = function SlashcreenPageModule_Factory(t) { return new (t || SlashcreenPageModule)(); };
SlashcreenPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SlashcreenPageModule });
SlashcreenPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _slashcreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlashcreenPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SlashcreenPageModule, { declarations: [_slashcreen_page__WEBPACK_IMPORTED_MODULE_1__.SlashcreenPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _slashcreen_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlashcreenPageRoutingModule] }); })();


/***/ }),

/***/ 7164:
/*!***********************************************!*\
  !*** ./src/app/slashcreen/slashcreen.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlashcreenPage": () => (/* binding */ SlashcreenPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const _c0 = function () { return ["/tabs/tab1"]; };
class SlashcreenPage {
    constructor() { }
    ngOnInit() {
    }
}
SlashcreenPage.ɵfac = function SlashcreenPage_Factory(t) { return new (t || SlashcreenPage)(); };
SlashcreenPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlashcreenPage, selectors: [["app-slashcreen"]], decls: 6, vars: 2, consts: [["href", "https://fonts.googleapis.com/css?family=Poppins", "rel", "stylesheet"], [1, "container", "ion-text-center"], ["src", "assets/SaloNearby-1.png"], ["fill", "solid", "color", "medium", "type", "submit", 1, "flex-center", 3, "routerLink"]], template: function SlashcreenPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Get Started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["img[_ngcontent-%COMP%] {\n  padding-top: 45px;\n  height: 85%;\n}\n\n.text-stl[_ngcontent-%COMP%] {\n  top: 50%;\n  padding-left: 12%;\n  text-align: left;\n  font-size: 200%;\n  font-weight: 1000;\n  font-family: \"poppins\";\n  color: #F5C6AA;\n}\n\n.text-stl2[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-top: 3%;\n  padding-left: 12%;\n  padding-right: 12%;\n  margin-bottom: 10%;\n  font-size: 80%;\n  font-weight: normal;\n  color: #63666A;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: medium;\n  align-items: center;\n  justify-content: center;\n  padding-left: 25%;\n  padding-right: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsYXNoY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJzbGFzaGNyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuXHJcbi50ZXh0LXN0bHtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDA7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnO1xyXG4gICAgY29sb3I6ICNGNUM2QUE7XHJcbn1cclxuXHJcbi50ZXh0LXN0bDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNjM2NjZBO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_slashcreen_slashcreen_module_ts.js.map