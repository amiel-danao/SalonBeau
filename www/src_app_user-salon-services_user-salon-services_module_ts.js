"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user-salon-services_user-salon-services_module_ts"],{

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


/***/ }),

/***/ 3348:
/*!***************************************************************************!*\
  !*** ./src/app/user-salon-services/user-salon-services-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSalonServicesPageRoutingModule": () => (/* binding */ UserSalonServicesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _user_salon_services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-salon-services.page */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _user_salon_services_page__WEBPACK_IMPORTED_MODULE_0__.UserSalonServicesPage
    }
];
class UserSalonServicesPageRoutingModule {
}
UserSalonServicesPageRoutingModule.ɵfac = function UserSalonServicesPageRoutingModule_Factory(t) { return new (t || UserSalonServicesPageRoutingModule)(); };
UserSalonServicesPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserSalonServicesPageRoutingModule });
UserSalonServicesPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserSalonServicesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3038:
/*!*******************************************************************!*\
  !*** ./src/app/user-salon-services/user-salon-services.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSalonServicesPageModule": () => (/* binding */ UserSalonServicesPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _user_salon_services_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-salon-services-routing.module */ 3348);
/* harmony import */ var _user_salon_services_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-salon-services.page */ 6515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class UserSalonServicesPageModule {
}
UserSalonServicesPageModule.ɵfac = function UserSalonServicesPageModule_Factory(t) { return new (t || UserSalonServicesPageModule)(); };
UserSalonServicesPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserSalonServicesPageModule });
UserSalonServicesPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _user_salon_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserSalonServicesPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserSalonServicesPageModule, { declarations: [_user_salon_services_page__WEBPACK_IMPORTED_MODULE_1__.UserSalonServicesPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _user_salon_services_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserSalonServicesPageRoutingModule] }); })();


/***/ }),

/***/ 6515:
/*!*****************************************************************!*\
  !*** ./src/app/user-salon-services/user-salon-services.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSalonServicesPage": () => (/* binding */ UserSalonServicesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firestore.service */ 1343);






class UserSalonServicesPage {
    constructor(activatedRoute, firestore, toast, router, firestoreService) {
        this.activatedRoute = activatedRoute;
        this.firestore = firestore;
        this.toast = toast;
        this.router = router;
        this.firestoreService = firestoreService;
        this.salonId = '';
        this.servicesList = [];
        this.salonId = this.activatedRoute.snapshot.params['id'];
        this.getServices(this.salonId);
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
    ngOnInit() { }
    getServices(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            // get all services by salon ID
            // this.firestoreService.getServicesBySalonId(id).subscribe((res) => {
            //   console.log(res);
            //   // bind this to a selection form or a dropdown
            //   this.servicesList = res;
            // });
            this.servicesList = yield this.firestoreService.getServicesBySalonId(id);
        });
    }
}
UserSalonServicesPage.ɵfac = function UserSalonServicesPage_Factory(t) { return new (t || UserSalonServicesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService)); };
UserSalonServicesPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserSalonServicesPage, selectors: [["app-user-salon-services"]], decls: 5, vars: 0, template: function UserSalonServicesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "user-salon-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-content");
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNhbG9uLXNlcnZpY2VzLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_user-salon-services_user-salon-services_module_ts.js.map