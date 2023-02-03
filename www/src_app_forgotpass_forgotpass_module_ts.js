"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgotpass_forgotpass_module_ts"],{

/***/ 2873:
/*!*********************************************************!*\
  !*** ./src/app/forgotpass/forgotpass-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassPageRoutingModule": () => (/* binding */ ForgotpassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpass.page */ 1996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpassPage
    }
];
class ForgotpassPageRoutingModule {
}
ForgotpassPageRoutingModule.ɵfac = function ForgotpassPageRoutingModule_Factory(t) { return new (t || ForgotpassPageRoutingModule)(); };
ForgotpassPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ForgotpassPageRoutingModule });
ForgotpassPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotpassPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9457:
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassPageModule": () => (/* binding */ ForgotpassPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpass-routing.module */ 2873);
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpass.page */ 1996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ForgotpassPageModule {
}
ForgotpassPageModule.ɵfac = function ForgotpassPageModule_Factory(t) { return new (t || ForgotpassPageModule)(); };
ForgotpassPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ForgotpassPageModule });
ForgotpassPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpassPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotpassPageModule, { declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpassPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _forgotpass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpassPageRoutingModule] }); })();


/***/ }),

/***/ 1996:
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpassPage": () => (/* binding */ ForgotpassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);






class ForgotpassPage {
    constructor(auth, toast) {
        this.auth = auth;
        this.toast = toast;
    }
    ngOnInit() { }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    updatePassword() {
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.sendPasswordResetEmail)(this.auth, '')
            .then((res) => {
            // toasat code copy paste
            this.presentToast('Reset link has been sent successfully.');
        })
            .catch((err) => {
            console.log(err.code);
        });
    }
}
ForgotpassPage.ɵfac = function ForgotpassPage_Factory(t) { return new (t || ForgotpassPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController)); };
ForgotpassPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotpassPage, selectors: [["app-forgotpass"]], decls: 18, vars: 0, consts: [["slot", "start"], [1, "container", "ion-text-center"], ["src", "assets/3.png"], [1, "center"], ["lines", "full"], ["position", "floating"], ["type", "text", "required", ""], ["type", "submit", 1, "changepass", 3, "click"]], template: function ForgotpassPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content")(9, "form", 3)(10, "ion-item", 4)(11, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Type Your Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-row")(15, "ion-col")(16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForgotpassPage_Template_button_click_16_listener() { return ctx.updatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate], styles: [".changepass[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 50%;\n  left: 16%;\n  width: 70%;\n  height: 35px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  background-color: #ffb5a7;\n}\n\n.center[_ngcontent-%COMP%] {\n  top: 15%;\n  left: 10%;\n  width: 80%;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n}\n\n.img[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKIiwiZmlsZSI6ImZvcmdvdHBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZXBhc3N7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDE2JTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNWE3O1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gICAgdG9wOiAxNSU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuLnNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_forgotpass_forgotpass_module_ts.js.map