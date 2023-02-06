"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salon_stylist_stylist_module_ts"],{

/***/ 4428:
/*!*********************************************************!*\
  !*** ./src/app/salon/stylist/stylist-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistPageRoutingModule": () => (/* binding */ StylistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _stylist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylist.page */ 5373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _stylist_page__WEBPACK_IMPORTED_MODULE_0__.StylistPage
    }
];
class StylistPageRoutingModule {
}
StylistPageRoutingModule.ɵfac = function StylistPageRoutingModule_Factory(t) { return new (t || StylistPageRoutingModule)(); };
StylistPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StylistPageRoutingModule });
StylistPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StylistPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3473:
/*!*************************************************!*\
  !*** ./src/app/salon/stylist/stylist.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistPageModule": () => (/* binding */ StylistPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stylist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylist-routing.module */ 4428);
/* harmony import */ var _stylist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylist.page */ 5373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class StylistPageModule {
}
StylistPageModule.ɵfac = function StylistPageModule_Factory(t) { return new (t || StylistPageModule)(); };
StylistPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StylistPageModule });
StylistPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _stylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.StylistPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StylistPageModule, { declarations: [_stylist_page__WEBPACK_IMPORTED_MODULE_1__.StylistPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _stylist_routing_module__WEBPACK_IMPORTED_MODULE_0__.StylistPageRoutingModule] }); })();


/***/ }),

/***/ 5373:
/*!***********************************************!*\
  !*** ./src/app/salon/stylist/stylist.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StylistPage": () => (/* binding */ StylistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);








class StylistPage {
    constructor(firestore, firestoreService, toast, router) {
        this.firestore = firestore;
        this.firestoreService = firestoreService;
        this.toast = toast;
        this.router = router;
        this.stylist = '';
        this.salonId = '';
        this.userId = localStorage.getItem('user');
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
    clear() {
        (this.stylist = '');
    }
    ngOnInit() {
        this.getSalonData();
    }
    getSalonData() {
        // returns the salon of a user; depends on user ID
        this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
            console.log(res);
            this.salonId = res[0].id;
            this.getstylist(res[0].id);
        });
    }
    // adding stylist
    addstylist() {
        // validation if fields are empty
        if (this.stylist == '') {
            this.presentToast('Please fill up the fields ');
            this.clear();
            return;
        }
        // validation if no salon
        if (!this.salonId) {
            this.presentToast('Please select a salon ');
            this.clear();
            return;
        }
        // object to be passed on firebase, please see the table and compare
        let data = {
            stylist: this.stylist,
            salonId: this.salonId,
        };
        // firestore database instance
        const servicesInstance = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'stylist');
        // firebase functin for adding data to stylist table
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(servicesInstance, data)
            .then((res) => {
            this.clear();
            this.presentToast('Stylist added');
            this.router.navigate(['/dashboard']);
        })
            .catch((err) => {
            this.clear();
            console.log(err);
        });
    }
    // gettingStylits by salon Id
    getstylist(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.salonId);
            const stylists = yield this.firestoreService.getstylistBySalonId(id);
            console.log(stylists);
        });
    }
}
StylistPage.ɵfac = function StylistPage_Factory(t) { return new (t || StylistPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
StylistPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StylistPage, selectors: [["app-stylist"]], decls: 13, vars: 1, consts: [["slot", "start"], [1, "length"], ["position", "floating", 1, "text-stl2"], ["type", "text", "placeholder", " ", 3, "ngModel", "ngModelChange"], [1, "submit", 3, "click"]], template: function StylistPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Adding Stylist");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "ion-item", 1)(8, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name of Stylist");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StylistPage_Template_ion_input_ngModelChange_10_listener($event) { return ctx.stylist = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StylistPage_Template_button_click_11_listener() { return ctx.addstylist(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stylist);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate], styles: [".length[_ngcontent-%COMP%] {\n  font-family: \"poppins\", sans-serif;\n  width: 100%;\n}\n\n.styl[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 25px;\n  left: 65%;\n  width: 125px;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 30%;\n  left: 25px;\n  width: 85%;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  color: #f4978e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6InN0eWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZW5ndGh7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdHlse1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogNjUlO1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RENDNDtcclxufVxyXG5cclxuLnN1Ym1pdHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlEQ0M0O1xyXG59XHJcblxyXG4uc3VibWl0OmhvdmVye1xyXG4gICAgY29sb3I6ICNmNDk3OGU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1343:
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirestoreService": () => (/* binding */ FirestoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ 3628);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








class FirestoreService {
    constructor(firestore, auth) {
        this.firestore = firestore;
        this.auth = auth;
    }
    getSalonData() {
        const salonDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'salon');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(salonDb).then((res) => {
            return [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
        }));
    }
    getSalonDataByUid(id) {
        const salonDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'salon');
        const salonquery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(salonDb, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', id));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(salonquery).then((res) => {
            return [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
        }));
    }
    getSpecificSalon(id) {
        const salonDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'salon/' + id);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(salonDb).then((res) => {
            return [Object.assign(Object.assign({}, res.data()), { id: res.id })];
        }));
    }
    signUp(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const usersInstance = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'customer');
            const createUser = yield (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(this.auth, data.email, data.password);
            let data2 = Object.assign(Object.assign({}, data), { uid: createUser.user.uid, type: 'customer' });
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)([
                (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.updateProfile)(createUser.user, {
                    displayName: data.firstName,
                })
                    .then((res) => {
                    return [
                        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(usersInstance, data2)
                            .then((res) => {
                            return {
                                status: 'success',
                                message: 'Customer Registered Succesfully',
                            };
                        })
                            .catch((err) => {
                            return {
                                status: 'error',
                                message: err,
                            };
                        }),
                    ];
                })
                    .catch((err) => {
                    return {
                        status: 'error',
                        message: err,
                    };
                }),
            ]);
        });
    }
    // get Appointments
    getAppointments() {
        const appointmentsDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'Appointment');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(appointmentsDb).then((res) => {
            return [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
        }));
    }
    getAppointmentsBySalon(id) {
        const appointmentsDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'Appointment');
        const salonquery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(appointmentsDb, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('salonId', '==', id), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)('date', 'desc'));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(salonquery).then((res) => {
            return [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
        }));
    }
    // get Specific appoints required ID
    getSpecificAppointments(id) {
        const appointmentsDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, 'Appointment/', id);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(appointmentsDb).then((res) => {
            return [res.data()];
        }));
    }
    // get Services per Salon
    getServicesBySalonId(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const services = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'services');
            const servicesQ = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(services, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('salonId', '==', id));
            // return from(
            //   getDocs(servicesQ).then((res) => {
            //     return [
            //       ...res.docs.map((doc: any) => {
            //         return { ...doc.data(), id: doc.id };
            //       }),
            //     ];
            //   })
            // );
            const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(servicesQ);
            return snapshot.docs.map(value => {
                return {
                    subCategory: value.data()['subCategory'],
                    cost: value.data()['cost']
                };
            });
        });
    }
    // get feedback
    getfeedback() {
        const feedback = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'feedback');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(feedback).then((res) => {
            return [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
        }));
    }
    getfeedbacksBySalon(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const feedback = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'feedback');
            const salonquery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(feedback, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('salonId', '==', id));
            // return from(
            //   getDocs(salonquery).then((res) => {
            //     return [
            //       ...res.docs.map((doc: any) => {
            //         return { ...doc.data(), id: doc.id };
            //       }),
            //     ];
            //   })
            // );
            const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(salonquery);
            return snapshot.docs.map(value => {
                return {
                    customerID: value.data()['customerID'],
                    review: value.data()['review'],
                    salonId: value.data()['salonId'],
                    star: value.data()['star'],
                };
            });
        });
    }
    // get stylist per salon
    getstylistBySalonId(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const stylist = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'stylist');
            const stylistQ = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(stylist, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('salonId', '==', id));
            // return from(
            //   getDocs(stylistQ).then((res) => {
            //     return [
            //       ...res.docs.map((doc: any) => {
            //         return { ...doc.data(), id: doc.id };
            //       }),
            //     ];
            //   })
            // );
            const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(stylistQ);
            return snapshot.docs.map(value => value.data()['stylist']);
        });
    }
}
FirestoreService.ɵfac = function FirestoreService_Factory(t) { return new (t || FirestoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth)); };
FirestoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FirestoreService, factory: FirestoreService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_salon_stylist_stylist_module_ts.js.map