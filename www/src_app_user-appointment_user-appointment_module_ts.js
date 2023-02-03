"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-appointment_user-appointment_module_ts"],{

/***/ 9123:
/*!*********************************************************************!*\
  !*** ./src/app/user-appointment/user-appointment-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAppointmentPageRoutingModule": () => (/* binding */ UserAppointmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_appointment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-appointment.page */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _user_appointment_page__WEBPACK_IMPORTED_MODULE_0__.UserAppointmentPage
    }
];
class UserAppointmentPageRoutingModule {
}
UserAppointmentPageRoutingModule.ɵfac = function UserAppointmentPageRoutingModule_Factory(t) { return new (t || UserAppointmentPageRoutingModule)(); };
UserAppointmentPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserAppointmentPageRoutingModule });
UserAppointmentPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserAppointmentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8784:
/*!*************************************************************!*\
  !*** ./src/app/user-appointment/user-appointment.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAppointmentPageModule": () => (/* binding */ UserAppointmentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-appointment-routing.module */ 9123);
/* harmony import */ var _user_appointment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-appointment.page */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class UserAppointmentPageModule {
}
UserAppointmentPageModule.ɵfac = function UserAppointmentPageModule_Factory(t) { return new (t || UserAppointmentPageModule)(); };
UserAppointmentPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserAppointmentPageModule });
UserAppointmentPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _user_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserAppointmentPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserAppointmentPageModule, { declarations: [_user_appointment_page__WEBPACK_IMPORTED_MODULE_1__.UserAppointmentPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _user_appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserAppointmentPageRoutingModule] }); })();


/***/ }),

/***/ 6480:
/*!***********************************************************!*\
  !*** ./src/app/user-appointment/user-appointment.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAppointmentPage": () => (/* binding */ UserAppointmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);









function UserAppointmentPage_ion_select_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const services_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", services_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", services_r2, "");
} }
function UserAppointmentPage_ion_select_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stylist_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("value", "", stylist_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", stylist_r3, "");
} }
class UserAppointmentPage {
    constructor(activatedRoute, firestore, toast, router, firestoreService) {
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.toast = toast;
        this.router = router;
        this.firestoreService = firestoreService;
        this.name = '';
        this.email = '';
        this.services = ''; //bind to ion selection or ion select as [(ngModel)]="services"
        this.stylist = ''; //bind to ion select
        this.time = ''; //same with top
        this.date = ''; //same with top
        this.cost = ''; //same with top
        this.salonId = '';
        this.servicesList = ["footspa", "rebond"];
        this.stylistList = [];
        this.userId = localStorage.getItem('user') || null;
        this.userData = [];
        //salon ID from URL params
        this.salonId = this.activatedRoute.snapshot.params['id'];
        this.salonServiceParams = this.activatedRoute.snapshot.params['service'];
        console.log(this.salonServiceParams);
        this.services = this.salonServiceParams;
        // getting stylist
        this.salonId = this.activatedRoute.snapshot.params['id'];
        this.salonstylistParams = this.activatedRoute.snapshot.params['stylist'];
        console.log(this.salonstylistParams);
        this.services = this.salonstylistParams;
        //getting services
        this.getServices(this.salonId);
        this.getStylists(this.salonId);
        this.getUserData();
    }
    getUserData() {
        if (this.userId) {
            const userData = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'customer');
            const userQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(userData, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('uid', '==', this.userId));
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(userQuery).then((res) => {
                this.userData = [
                    ...res.docs.map((doc) => {
                        this.email = doc.data()['email'];
                        this.name = doc.data()['firstName'] + " " + doc.data()['lastName'];
                        return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                    }),
                ];
                console.log(this.userData);
            });
        }
        else {
            console.log('Please Login');
        }
    }
    clear() {
        this.name = '',
            this.email = '',
            this.services = '';
        this.stylist = '';
        this.time = '';
        this.date = '';
        this.cost = '';
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    ngOnInit() { }
    getServices(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // get all services by salon ID
            // this.firestoreService.getServicesBySalonId(id).subscribe((res) => {
            //   console.log(`Services List: ${res}`);
            //   // bind this to a selection form or a dropdown
            //   this.servicesList = res;
            // });
            const services = yield this.firestoreService.getServicesBySalonId(id);
            this.servicesList = services.map(value => `${value['subCategory']} (P${value['cost']})`);
        });
    }
    getStylists(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.stylistList = yield this.firestoreService.getstylistBySalonId(id);
        });
    }
    addAppointment() {
        // for validation
        if (this.name == '' ||
            this.email == '' ||
            this.services == '' ||
            this.stylist == '' ||
            this.time == '' ||
            // this.cost == '' ||
            this.date == '') {
            this.presentToast('Please fill up all the fields');
            return;
        }
        // for actual data coming from user input
        let data = {
            name: this.name,
            email: this.email,
            date: this.date,
            stylist: this.stylist,
            salonId: this.salonId,
            service: this.services,
            time: this.time,
            cost: this.cost,
        };
        // for testing
        // let data = {
        // date: new Date().toLocaleDateString(),
        //   name: 'Test Customer',
        //   salonId: this.salonId,
        //   service: 'Haircut (Trim)',
        //   time: new Date().toLocaleTimeString(),
        //   cost: '50',
        // };
        const addAppointment = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'Appointment');
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(addAppointment, data)
            .then((res) => {
            console.log(res);
            this.presentToast('Appointment added successfully ');
            // this.router.navigate(['/'])   use this to navigate on something
        })
            .catch((err) => {
            console.log(err);
            this.presentToast('Customer successfully registered');
        });
    }
}
UserAppointmentPage.ɵfac = function UserAppointmentPage_Factory(t) { return new (t || UserAppointmentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService)); };
UserAppointmentPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserAppointmentPage, selectors: [["app-user-appointment"]], decls: 23, vars: 10, consts: [["slot", "start"], [1, "container"], ["name", "name", "type", "name", "placeholder", "Name", 1, "name", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", "placeholder", "Email", 1, "email", 3, "ngModel", "ngModelChange"], ["name", "services", "placeholder", "Select Services", 1, "select-option-text", 3, "ngModel", "value", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "stylist", "placeholder", "Select stylist", 1, "select-option-text", 3, "ngModel", "value", "ngModelChange"], ["name", "date", "type", "date", "placeholder", "Date", 1, "customer-info5", 3, "ngModel", "ngModelChange"], ["name", "time", "type", "time", "placeholder", "Time", 1, "customer-info6", 3, "ngModel", "ngModelChange"], [1, "add-app", 3, "click"], [3, "value"]], template: function UserAppointmentPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Appointment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-content")(7, "ion-card", 1)(8, "form")(9, "ion-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_input_ngModelChange_9_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_input_ngModelChange_11_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_select_ngModelChange_13_listener($event) { return ctx.services = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserAppointmentPage_ion_select_option_14_Template, 2, 2, "ion-select-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_select_ngModelChange_15_listener($event) { return ctx.stylist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UserAppointmentPage_ion_select_option_16_Template, 2, 2, "ion-select-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_input_ngModelChange_17_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function UserAppointmentPage_Template_ion_input_ngModelChange_19_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserAppointmentPage_Template_button_click_21_listener() { return ctx.addAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Add Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.services)("value", ctx.salonServiceParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.servicesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stylist)("value", ctx.salonstylistParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stylistList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.time);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate], styles: [".container[_ngcontent-%COMP%] {\n  box-shadow: none;\n  padding: 10px;\n}\n\n.customer-info1[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 98%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.customer-info2[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 98%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.customer-info3[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 98%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.customer-info4[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 98%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.customer-info5[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 50%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.customer-info6[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  width: 50%;\n  font-size: 20px;\n  border-radius: 10px;\n  border-color: #f4978e;\n}\n\n.add-app[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 20px;\n  height: 40px;\n  background-color: #f4978e;\n}\n\n.select-option-text[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJ1c2VyLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmN1c3RvbWVyLWluZm8xe1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDk3OGU7XHJcbn1cclxuXHJcbi5jdXN0b21lci1pbmZvMiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0OTc4ZTtcclxufVxyXG5cclxuLmN1c3RvbWVyLWluZm8zIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ5NzhlO1xyXG59XHJcblxyXG4uY3VzdG9tZXItaW5mbzQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNDk3OGU7XHJcbn1cclxuXHJcbi5jdXN0b21lci1pbmZvNSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y0OTc4ZTtcclxufVxyXG5cclxuLmN1c3RvbWVyLWluZm82IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ5NzhlO1xyXG59XHJcblxyXG4uYWRkLWFwcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDk3OGU7XHJcbn1cclxuXHJcbi5zZWxlY3Qtb3B0aW9uLXRleHR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_user-appointment_user-appointment_module_ts.js.map