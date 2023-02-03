"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_saloninter_saloninter_module_ts"],{

/***/ 253:
/*!*********************************************************!*\
  !*** ./src/app/saloninter/saloninter-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaloninterPageRoutingModule": () => (/* binding */ SaloninterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _saloninter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saloninter.page */ 9025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _saloninter_page__WEBPACK_IMPORTED_MODULE_0__.SaloninterPage
    }
];
class SaloninterPageRoutingModule {
}
SaloninterPageRoutingModule.ɵfac = function SaloninterPageRoutingModule_Factory(t) { return new (t || SaloninterPageRoutingModule)(); };
SaloninterPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SaloninterPageRoutingModule });
SaloninterPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SaloninterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 976:
/*!*************************************************!*\
  !*** ./src/app/saloninter/saloninter.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaloninterPageModule": () => (/* binding */ SaloninterPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _saloninter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saloninter-routing.module */ 253);
/* harmony import */ var _saloninter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saloninter.page */ 9025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class SaloninterPageModule {
}
SaloninterPageModule.ɵfac = function SaloninterPageModule_Factory(t) { return new (t || SaloninterPageModule)(); };
SaloninterPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SaloninterPageModule });
SaloninterPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _saloninter_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaloninterPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SaloninterPageModule, { declarations: [_saloninter_page__WEBPACK_IMPORTED_MODULE_1__.SaloninterPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _saloninter_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaloninterPageRoutingModule] }); })();


/***/ }),

/***/ 9025:
/*!***********************************************!*\
  !*** ./src/app/saloninter/saloninter.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaloninterPage": () => (/* binding */ SaloninterPage)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);









const _c0 = function (a1) { return ["/user-appointment", a1]; };
function SaloninterPage_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "ion-item", 14)(3, "ion-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Make Appointment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add Ratings and FeedBack");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-item", 17)(9, "ion-label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SaloninterPage_div_18_Template_ion_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.rating = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-select-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-select-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-select-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-select-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-select-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-item", 24)(23, "ion-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " FeedBack ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SaloninterPage_div_18_Template_ion_input_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.feedback = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 27)(28, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SaloninterPage_div_18_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r0.salonData[0] == null ? null : ctx_r0.salonData[0].id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.feedback);
} }
class SaloninterPage {
    constructor(firestoreService, activatedRoute, firestore, toast) {
        this.firestoreService = firestoreService;
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.toast = toast;
        this.salonData = [];
        this.servicesSalonData = [];
        this.feedback = '';
        this.userDataArray = [];
        this.option = {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 10,
            autoplay: false,
        };
        this.idParams = this.activatedRoute.snapshot.params['id'];
        this.uid = localStorage.getItem('user');
        console.log(this.idParams);
    }
    ngOnInit() {
        this.firestoreService.getSpecificSalon(this.idParams).subscribe((res) => {
            this.salonData = res;
            console.log(this.salonData);
        });
        this.getServicesSalon();
        this.getUserData();
    }
    getUserData() {
        const userData = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, 'customer');
        const userSpecific = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(userData, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('uid', "==", this.uid));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(userSpecific).then((res) => {
            this.userDataArray = [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
            console.log(this.userDataArray);
        });
    }
    getServicesSalon() {
        const servicesInstance = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, 'services');
        const servicesQ = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.query)(servicesInstance, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('salonId', '==', this.idParams));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)(servicesQ).then((res) => {
            this.servicesSalonData = [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
            console.log(this.servicesSalonData);
        });
    }
    onSubmit() {
        let data = {
            review: this.feedback,
            salonId: this.idParams,
            customerID: this.uid,
            star: this.rating,
        };
        console.log(data);
        const addFeedback = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.firestore, 'feedback');
        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(addFeedback, data)
            .then((res) => {
            console.log(res);
            //this.presenttoast( 'Feedback submitted successfully, Thank you!);
        })
            .catch((err) => {
            console.log(err, err.code);
        });
    }
}
SaloninterPage.ɵfac = function SaloninterPage_Factory(t) { return new (t || SaloninterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController)); };
SaloninterPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SaloninterPage, selectors: [["app-saloninter"]], decls: 19, vars: 4, consts: [["rel", "preconnect", "href", "https://fonts.googleapis.com"], ["rel", "preconnect", "href", "https://fonts.gstatic.com", "crossorigin", ""], ["href", "https://fonts.googleapis.com/css2?family=Poppins&display=swap", "rel", "stylesheet"], ["href", "https://rawgit.com/fraserxu/ionic-rating/master/ionic-rating.css", "rel", "stylesheet"], ["slot", "start"], ["text", "", "icon", "arrow-back", 1, "back-btn"], [1, "salon-inter-content"], [1, "container"], [1, "ion-margin-top", 3, "options"], ["id", "img", "button", ""], ["id", "size", 3, "src"], ["class", "appointment, ratings", 4, "ngIf"], [1, "appointment,", "ratings"], [1, "salon-inter-content-center"], [1, "appointment-button", 3, "routerLink"], [1, "appointment-label"], [1, "rating-header"], ["lines", "none", 1, "salon-inter-rating"], ["interface", "action-sheet", "name", "rating", "Placeholder", "0", "slot", "end", 3, "ngModel", "ngModelChange"], ["Value", "1"], ["Value", "2"], ["Value", "3"], ["Value", "4"], ["Value", "5"], [1, "salon-inter-feedback"], ["position", "floating", 1, "text-stl2"], ["name", "feedback", "type", "text", "placeholder", "", 1, "float", 3, "ngModel", "ngModelChange"], [1, "submit-button-container"], [1, "salon-inter-submit-button", 3, "click"], [1, "spacer-h-s"]], template: function SaloninterPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0)(1, "link", 1)(2, "link", 2)(3, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-header")(5, "ion-toolbar")(6, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-back-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content", 6)(9, "div", 7)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-slides", 8)(13, "ion-slide")(14, "ion-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SaloninterPage_div_18_Template, 31, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.salonData[0] == null ? null : ctx.salonData[0].salonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.salonData[0] == null ? null : ctx.salonData[0].logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.userDataArray[0] == null ? null : ctx.userDataArray[0].type) != "salon");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  font-family: \"Poppins\", sans-serif;\n}\n\np[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n  font-size: 24px;\n  font-weight: bold;\n}\n\nion-card-content[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: bold;\n  font-size: 16px;\n}\n\n#card-1[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  border-radius: 0;\n  border-width: 5px;\n  border-color: #FFB5A7;\n  box-shadow: none;\n}\n\n#card-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 98px;\n  width: 200px;\n}\n\n#card-2[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  border-radius: 0;\n  border: 5px;\n  border-color: #FFB5A7;\n  box-shadow: none;\n}\n\n#card-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 131px;\n  width: 200px;\n}\n\n.services[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 5%;\n  padding-bottom: 10%;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.ion-button[_ngcontent-%COMP%] {\n  width: 350px;\n  background-color: #FFB5A7;\n}\n\n.rfs[_ngcontent-%COMP%] {\n  width: 350px;\n  background-color: #FFB5A7;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.rating-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  margin-left: 20%;\n  width: 85%;\n  height: 35px;\n  border-radius: 20px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  background-color: #F9DCC4;\n}\n\n.salon-inter-content-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 95%;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.salon-inter-content[_ngcontent-%COMP%] {\n  --background: #FFDDD2;\n}\n\n.appointment-button[_ngcontent-%COMP%] {\n  width: 100%;\n  --background: #FF8DC7;\n  border-radius: 10px;\n}\n\n.appointment-label[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n\n.rating-header[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  margin-left: 15px;\n}\n\n.salon-inter-rating[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.salon-inter-feedback[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.submit-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.salon-inter-submit-button[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 50px;\n  background-color: #FF8DC7;\n  border-radius: 30px;\n  margin-top: 50px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbG9uaW50ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLHFCQUFBO0FBR0o7O0FBQUE7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFHSiIsImZpbGUiOiJzYWxvbmludGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5we1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4jY2FyZC0xe1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkI1QTc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jY2FyZC0xIGltZ3tcclxuICAgIGhlaWdodDo5OHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jY2FyZC0ye1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNGRkI1QTc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4jY2FyZC0yIGltZ3tcclxuICAgIGhlaWdodDoxMzFweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNlcnZpY2Vze1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjVBNztcclxufVxyXG4ucmZze1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQjVBNztcclxufVxyXG5cclxuLmJhY2stYnRue1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnJhdGluZy1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5zdWJtaXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOURDQzQ7XHJcbn1cclxuXHJcbi5zYWxvbi1pbnRlci1jb250ZW50LWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnNhbG9uLWludGVyLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNGRkRERDI7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0ZGOERDNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHBvaW50bWVudC1sYWJlbHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmF0aW5nLWhlYWRlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zYWxvbi1pbnRlci1yYXRpbmd7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2Fsb24taW50ZXItZmVlZGJhY2t7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvbi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zYWxvbi1pbnRlci1zdWJtaXQtYnV0dG9ue1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjhEQzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_saloninter_saloninter_module_ts.js.map