(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _customer_login_customer_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-login/customer-login.page */ 9780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then((m) => m.TabsPageModule),
    },
    {
        path: '',
        redirectTo: 'slashscreen',
        pathMatch: 'full',
    },
    {
        path: 'slashcreen',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_slashcreen_slashcreen_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./slashcreen/slashcreen.module */ 6414)).then((m) => m.SlashcreenPageModule),
    },
    {
        path: 'login',
        component: _customer_login_customer_login_page__WEBPACK_IMPORTED_MODULE_0__.CustomerLoginPage,
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 7648)).then((m) => m.SignupPageModule),
    },
    {
        path: 'user-appointment/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user-appointment_user-appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-appointment/user-appointment.module */ 8784)).then((m) => m.UserAppointmentPageModule),
    },
    {
        path: 'user-appointment/:id/:service',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user-appointment_user-appointment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-appointment/user-appointment.module */ 8784)).then((m) => m.UserAppointmentPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_salon_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salon/dashboard/dashboard.module */ 4601)).then((m) => m.DashboardPageModule),
    },
    {
        path: 'user-salon-services',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user-salon-services_user-salon-services_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-salon-services/user-salon-services.module */ 3038)).then((m) => m.UserSalonServicesPageModule),
    },
    {
        path: 'saloninter/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_saloninter_saloninter_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./saloninter/saloninter.module */ 976)).then((m) => m.SaloninterPageModule),
    },
    {
        path: 'addservice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_salon_addservice_addservice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salon/addservice/addservice.module */ 8033)).then((m) => m.AddservicePageModule),
    },
    {
        path: 'apptsched',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_salon_apptsched_apptsched_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salon/apptsched/apptsched.module */ 2808)).then((m) => m.ApptschedPageModule),
    },
    {
        path: 'ratings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_ratings_ratings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ratings/ratings.module */ 1136)).then((m) => m.RatingsPageModule),
    },
    {
        path: 'salonregis',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salon_salonregis_salonregis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./salon/salonregis/salonregis.module */ 5658)).then((m) => m.SalonregisPageModule),
    },
    {
        path: 'salonregis/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_salon_salonregis_salonregis_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./salon/salonregis/salonregis.module */ 5658)).then((m) => m.SalonregisPageModule),
    },
    {
        path: 'forgotpass',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_forgotpass_forgotpass_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgotpass/forgotpass.module */ 9457)).then((m) => m.ForgotpassPageModule),
    },
    {
        path: 'customer-login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_customer-login_customer-login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./customer-login/customer-login.module */ 8443)).then((m) => m.CustomerLoginPageModule),
    },
    {
        path: 'stylist',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_salon_stylist_stylist_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./salon/stylist/stylist.module */ 3473)).then(m => m.StylistPageModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicRouteStrategy }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.getAuth)()),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.getFirestore)()),
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.getStorage)())] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_8__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__.StorageModule] }); })();


/***/ }),

/***/ 9780:
/*!*******************************************************!*\
  !*** ./src/app/customer-login/customer-login.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerLoginPage": () => (/* binding */ CustomerLoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






class CustomerLoginPage {
    constructor(router, authService, toastController) {
        this.router = router;
        this.authService = authService;
        this.toastController = toastController;
        this.emailLogin = '';
        this.passwordLogin = '';
        this.pwdIcon = "eye-outline";
        this.showPwd = false;
    }
    togglePwd() {
        this.showPwd = !this.showPwd;
        this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
    }
    // setEmail(e: any){
    //   this.emailLogin = e.target.value;
    // }
    // setPassword(e: any){
    //   this.passwordLogin = e.target.value;
    // }
    ngOnInit() { }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 1500,
                position: "bottom"
            });
            yield toast.present();
        });
    }
    login() {
        if (this.emailLogin != "" || this.passwordLogin != "") {
            this.authService.loginUser(this.emailLogin, this.passwordLogin);
        }
        else {
            this.presentToast("Missing Fields");
        }
    }
    toSignUp(path) {
        this.router.navigate([`/${path}`]);
    }
}
CustomerLoginPage.ɵfac = function CustomerLoginPage_Factory(t) { return new (t || CustomerLoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController)); };
CustomerLoginPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomerLoginPage, selectors: [["app-customer-login"]], decls: 32, vars: 4, consts: [["slot", "start"], ["src", "assets/3.png"], [1, "card-flex"], [1, "shadow"], ["lines", "full"], ["position", "floating"], ["name", "emailLogin", "id", "emailLogin", "type", "text", "placeholder", "Email", 1, "float", 3, "ngModel", "ngModelChange"], ["passwordLogin", "password", "name", "password2", "id", "password2", "type", "password", "placeholder", "Password", 3, "type", "ngModel", "ngModelChange"], ["slot", "end", 3, "name", "click"], ["color", "#FFB5A7", "type", "submit", 1, "login-btn", 3, "click"], ["fill", "clear", 1, "forgot", 3, "click"], [1, "signup"], [1, "signup-no-account-text"], ["fill", "clear", 1, "create", 3, "click"]], template: function CustomerLoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2)(9, "ion-card", 3)(10, "ion-card-content")(11, "ion-item", 4)(12, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerLoginPage_Template_ion_input_ngModelChange_14_listener($event) { return ctx.emailLogin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item", 4)(16, "ion-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomerLoginPage_Template_ion_input_ngModelChange_18_listener($event) { return ctx.passwordLogin = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerLoginPage_Template_ion_icon_click_19_listener() { return ctx.togglePwd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerLoginPage_Template_ion_button_click_20_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerLoginPage_Template_ion_button_click_25_listener() { return ctx.toSignUp("forgotpass"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Doesn't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CustomerLoginPage_Template_ion_button_click_30_listener() { return ctx.toSignUp("signup"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.emailLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.showPwd ? "text" : "password")("ngModel", ctx.passwordLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx.pwdIcon);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate], styles: ["img[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.login-btn[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-left: 15%;\n  width: 70%;\n  height: 35px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  background-color: #ffb5a7;\n}\n\n.email[_ngcontent-%COMP%] {\n  width: 90%;\n  height: auto;\n  font-family: \"poppins\", sans-serif;\n}\n\n.password[_ngcontent-%COMP%] {\n  width: 90%;\n  height: auto;\n  font-family: \"poppins\", sans-serif;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n.forgot[_ngcontent-%COMP%] {\n  font-family: \"poppins\", sans-serif;\n  margin-left: 20px;\n}\n\n.signup[_ngcontent-%COMP%] {\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: auto;\n  margin-top: 15px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  vertical-align: center;\n  padding-top: 5%;\n}\n\n.signup-no-account-text[_ngcontent-%COMP%] {\n  line-height: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQURGOztBQUtBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtBQUZGIiwiZmlsZSI6ImN1c3RvbWVyLWxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgcGFkZGluZy10b3A6IDE1JTtcclxufVxyXG5cclxuLmxvZ2luLWJ0biB7XHJcbiAgXHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNWE3O1xyXG4gIFxyXG59XHJcblxyXG4uZW1haWwge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LWZhbWlseTogXCJwb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgXHJcbn1cclxuXHJcbi5zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3Jnb3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBcInBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNpZ251cCB7XHJcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcblxyXG4uc2lnbnVwLW5vLWFjY291bnQtdGV4dHtcclxuICBsaW5lLWhlaWdodDogMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);

// eslint-disable-next-line @typescript-eslint/naming-convention







class AuthenticationService {
    constructor(firestore, auth, router, toast) {
        this.firestore = firestore;
        this.auth = auth;
        this.router = router;
        this.toast = toast;
        // this.loadToken();
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    loginUser(email, password) {
        const loginQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'customer');
        const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(loginQuery, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('email', '==', email));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q).then((res) => {
            const userData = [
                ...res.docs.map((doc) => {
                    return Object.assign({ id: doc.id }, doc.data());
                }),
            ];
            if (userData[0].type === 'customer') {
                (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, email, password)
                    .then((res) => {
                    if (res) {
                        localStorage.setItem('token', res.user.accessToken);
                        localStorage.setItem('user', res.user.uid);
                        window.location.href = '/';
                        this.router.navigate(['/']);
                    }
                })
                    .catch((err) => {
                    if (err.code == 'auth/invalid-email') {
                        this.presentToast('Invalid email ');
                    }
                    if (err.code == 'auth/missing-email') {
                        this.presentToast('Missing email');
                    }
                    if (err.code == 'auth/internal-error') {
                        this.presentToast('Missing password');
                    }
                    if (err.code == 'auth/wrong-password') {
                        this.presentToast('Wrong password');
                    }
                    if (err.code == 'auth/user-not-found') {
                        this.presentToast('User not found');
                    }
                });
            }
            else if (userData[0].type === 'salon') {
                (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, email, password)
                    .then((res) => {
                    if (res) {
                        localStorage.setItem('token', res.user.accessToken);
                        localStorage.setItem('user', res.user.uid);
                        window.location.href = '/dashboard';
                        // this.router.navigate(['/dashboard']);
                    }
                })
                    .catch((err) => {
                    if (err.code == 'auth/invalid-email') {
                        this.presentToast('Invalid email ');
                    }
                    if (err.code == 'auth/missing-email') {
                        this.presentToast('Missing email');
                    }
                    if (err.code == 'auth/internal-error') {
                        this.presentToast('Missing password');
                    }
                    if (err.code == 'auth/wrong-password') {
                        this.presentToast('Wrong password');
                    }
                    if (err.code == 'auth/user-not-found') {
                        this.presentToast('User not found');
                    }
                });
            }
            else {
                this.presentToast('User not found');
            }
        });
    }
    salonLogin(email, password) {
        const loginQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'customer');
        const q = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(loginQuery, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('email', '==', email));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(q).then((res) => {
            const userData = [
                ...res.docs.map((doc) => {
                    return Object.assign({ id: doc.id }, doc.data());
                }),
            ];
            if (userData[0].type === 'salon') {
                (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, email, password)
                    .then((res) => {
                    if (res) {
                        localStorage.setItem('token', res.user.accessToken);
                        localStorage.setItem('user', res.user.uid);
                        this.router.navigate(['dashboard']);
                    }
                })
                    .catch((err) => {
                    if (err.code == 'auth/invalid-email') {
                        this.presentToast('Invalid email ');
                    }
                    if (err.code == 'auth/missing-email') {
                        this.presentToast('Missing email');
                    }
                    if (err.code == 'auth/internal-error') {
                        this.presentToast('Missing password');
                    }
                    if (err.code == 'auth/wrong-password') {
                        this.presentToast('Wrong password');
                    }
                    if (err.code == 'auth/user-not-found') {
                        this.presentToast('User not found');
                    }
                });
            }
            else {
                (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(this.auth, email, password)
                    .then((res) => {
                    if (res) {
                        localStorage.setItem('token', res.user.accessToken);
                        localStorage.setItem('user', res.user.uid);
                        this.router.navigate(['/']);
                    }
                })
                    .catch((err) => {
                    if (err.code == 'auth/invalid-email') {
                        this.presentToast('Invalid email ');
                    }
                    if (err.code == 'auth/missing-email') {
                        this.presentToast('Missing email');
                    }
                    if (err.code == 'auth/internal-error') {
                        this.presentToast('Missing password');
                    }
                    if (err.code == 'auth/wrong-password') {
                        this.presentToast('Wrong password');
                    }
                    if (err.code == 'auth/user-not-found') {
                        this.presentToast('User not found');
                    }
                });
            }
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'salon-nearby-e724b',
        appId: '1:855489207760:web:fd79a32c32086ada1aedd5',
        databaseURL: 'https://salon-nearby-e724b-default-rtdb.asia-southeast1.firebasedatabase.app',
        storageBucket: 'salon-nearby-e724b.appspot.com',
        locationId: 'australia-southeast1',
        apiKey: 'AIzaSyDIGroI_08csPAXEXNrvVNEOmRyOafyEiE',
        authDomain: 'salon-nearby-e724b.firebaseapp.com',
        messagingSenderId: '855489207760',
        measurementId: 'G-Q4VKMXWLPV',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-64bc531e_js-node_modules_ionic_core_dist_esm_th-f0213e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map