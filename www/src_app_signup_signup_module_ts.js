"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 6661:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
class SignupPageRoutingModule {
}
SignupPageRoutingModule.ɵfac = function SignupPageRoutingModule_Factory(t) { return new (t || SignupPageRoutingModule)(); };
SignupPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SignupPageRoutingModule });
SignupPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignupPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7648:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 6661);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class SignupPageModule {
}
SignupPageModule.ɵfac = function SignupPageModule_Factory(t) { return new (t || SignupPageModule)(); };
SignupPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SignupPageModule });
SignupPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignupPageModule, { declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignUpPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule] }); })();


/***/ }),

/***/ 771:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": () => (/* binding */ SignUpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







class SignUpPage {
    constructor(firestoreService, toast, router) {
        this.firestoreService = firestoreService;
        this.toast = toast;
        this.router = router;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.gender = '';
        this.password = '';
        this.cPassword = '';
        this.pwdIcon = "eye-outline";
        this.showPwd = false;
    }
    togglePwd() {
        this.showPwd = !this.showPwd;
        this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
    }
    ngOnInit() {
        this.buildSignUpForm();
    }
    buildSignUpForm() {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({ value: '', disabled: false }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
                value: '',
                disabled: false,
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
                value: '',
                disabled: false,
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl({
                value: '',
                disabled: false,
            }),
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    onSubmit() {
        if (this.firstName != "" || this.lastName != "" || this.gender != "" || this.email != "" || this.password != "" || this.cPassword != "") {
            if (this.password == this.cPassword) {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    gender: this.gender,
                    email: this.email,
                    password: this.password,
                };
                this.firestoreService
                    .signUp(data)
                    .then((res) => {
                    console.log(res);
                    this.presentToast('Customer successfully registered');
                    this.router.navigate(['/customer-login']);
                    // this.toast.create()
                })
                    .catch((err) => {
                    console.log('error', err.code);
                    this.presentToast(err.code);
                });
            }
            else {
                this.presentToast("Password does not match");
            }
        }
        else {
            this.presentToast("Fill up the missing fields");
        }
    }
    clear() {
        this.firstName = '';
        this.cPassword = '';
        this.password = '';
        this.gender = '';
        this.email = '';
        this.lastName = '';
    }
}
SignUpPage.ɵfac = function SignUpPage_Factory(t) { return new (t || SignUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SignUpPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SignUpPage, selectors: [["signup"]], decls: 50, vars: 10, consts: [["slot", "start"], [1, "container", "ion-text-center"], ["src", "assets/3.png"], [1, "card-flex"], ["lines", "full"], ["position", "floating", 1, "text-stl2"], ["type", "text", "placeholder", "First Name", "required", "", "name", "firstName", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "required", "", "name", "lastName", 3, "ngModel", "ngModelChange"], ["type", "gender", "placeholder", "", "required", "", "name", "gender", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter Email", "required", "", "name", "email", 3, "ngModel", "ngModelChange"], ["cPassword", "password", "type", "password", "placeholder", "Enter Password", "required", "", "name", "password", 3, "type", "ngModel", "ngModelChange"], ["slot", "end", 3, "name", "click"], ["cPassword", "password", "type", "password", "placeholder", "Confirm Password", "required", "", "name", "cPassword", 3, "type", "ngModel", "ngModelChange"], ["expand", "block", "fill", "solid", "color", "medium", "type", "submit", 1, "text-stl2", 3, "click"], [1, "ion-text-center", "text-stl2"], [1, "spacer-h-xs"], [1, "ion-text-center", "text-stl"], ["routerLink", "../login"]], template: function SignUpPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 3)(10, "ion-card")(11, "ion-card-content")(12, "form")(13, "ion-item", 4)(14, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_16_listener($event) { return ctx.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-item", 4)(18, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_20_listener($event) { return ctx.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-item", 4)(22, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_24_listener($event) { return ctx.gender = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-item", 4)(26, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_28_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-item", 4)(30, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_32_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpPage_Template_ion_icon_click_33_listener() { return ctx.togglePwd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ion-item", 4)(35, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "ion-input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SignUpPage_Template_ion_input_ngModelChange_37_listener($event) { return ctx.cPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpPage_Template_ion_icon_click_38_listener() { return ctx.togglePwd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SignUpPage_Template_ion_button_click_40_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 14)(44, "ion-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16)(48, "ion-text", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.gender);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.showPwd ? "text" : "password")("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.pwdIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.showPwd ? "text" : "password")("ngModel", ctx.cPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx.pwdIcon);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: [".container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 150px;\n}\n\n.card-flex[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.text-stl[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bold;\n  color: #F5C6AA;\n}\n\n.text-stl2[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: normal;\n  color: #000;\n}\n\n.image[_ngcontent-%COMP%] {\n  top: 15%;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  vertical-align: center;\n  padding-top: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7O0FBSUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBR0E7RUFDSSxRQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLmNhcmQtZmxleHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4udGV4dC1zdGx7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0Y1QzZBQTtcclxufVxyXG5cclxuLnRleHQtc3RsMntcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmltYWdle1xyXG4gICAgdG9wOiAxNSU7XHJcbn1cclxuaW9uLWljb257XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gIH0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map