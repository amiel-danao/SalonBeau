"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ratings_ratings_module_ts"],{

/***/ 6348:
/*!***************************************************!*\
  !*** ./src/app/ratings/ratings-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPageRoutingModule": () => (/* binding */ RatingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings.page */ 5764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _ratings_page__WEBPACK_IMPORTED_MODULE_0__.RatingsPage
    }
];
class RatingsPageRoutingModule {
}
RatingsPageRoutingModule.ɵfac = function RatingsPageRoutingModule_Factory(t) { return new (t || RatingsPageRoutingModule)(); };
RatingsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RatingsPageRoutingModule });
RatingsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RatingsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 1136:
/*!*******************************************!*\
  !*** ./src/app/ratings/ratings.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPageModule": () => (/* binding */ RatingsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ratings-routing.module */ 6348);
/* harmony import */ var _ratings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ratings.page */ 5764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class RatingsPageModule {
}
RatingsPageModule.ɵfac = function RatingsPageModule_Factory(t) { return new (t || RatingsPageModule)(); };
RatingsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RatingsPageModule });
RatingsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingsPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RatingsPageModule, { declarations: [_ratings_page__WEBPACK_IMPORTED_MODULE_1__.RatingsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ratings_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingsPageRoutingModule] }); })();


/***/ }),

/***/ 5764:
/*!*****************************************!*\
  !*** ./src/app/ratings/ratings.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingsPage": () => (/* binding */ RatingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);





function RatingsPage_ion_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r1 == null ? null : review_r1.review);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", review_r1 == null ? null : review_r1.star, " ");
} }
class RatingsPage {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.feedback = [];
        this.userId = localStorage.getItem('user');
    }
    ngOnInit() {
        this.getSalonData();
    }
    getSalonData() {
        // returns the salon of a user; depends on user ID
        this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
            console.log(res);
            this.getSalonfeedback(res[0].id);
        });
    }
    getSalonfeedback(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // returns the appointments based on salon
            this.feedback = yield this.firestoreService.getfeedbacksBySalon(id);
            console.log(this.feedback);
        });
    }
}
RatingsPage.ɵfac = function RatingsPage_Factory(t) { return new (t || RatingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService)); };
RatingsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RatingsPage, selectors: [["app-ratings"]], decls: 7, vars: 1, consts: [["slot", "start"], ["lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none"], ["name", "person", "slot", "start", 1, "person-icon"], ["slot", "end"], ["name", "star", 1, "star-icon"]], template: function RatingsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-back-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RatingsPage_ion_item_6_Template, 7, 2, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feedback);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate], styles: [".review[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 25px;\n  left: 65%;\n  width: 125px;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.star[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 45px;\n  left: 65%;\n  width: 125px;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.person-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.star-icon[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoicmF0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogNjUlO1xyXG4gICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RENDNDtcclxufVxyXG4uc3RhcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogNDVweDtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOURDQzQ7XHJcbn1cclxuXHJcbi5wZXJzb24taWNvbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnN0YXItaWNvbntcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIHdpZHRoOiAxMnB4O1xyXG59Il19 */"] });


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
//# sourceMappingURL=src_app_ratings_ratings_module_ts.js.map