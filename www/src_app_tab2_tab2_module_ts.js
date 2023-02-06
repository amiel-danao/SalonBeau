"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab2_tab2_module_ts"],{

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

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
class Tab2PageRoutingModule {
}
Tab2PageRoutingModule.ɵfac = function Tab2PageRoutingModule_Factory(t) { return new (t || Tab2PageRoutingModule)(); };
Tab2PageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Tab2PageRoutingModule });
Tab2PageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab2PageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4608:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class Tab2PageModule {
}
Tab2PageModule.ɵfac = function Tab2PageModule_Factory(t) { return new (t || Tab2PageModule)(); };
Tab2PageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Tab2PageModule });
Tab2PageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab2PageModule, { declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
        _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule] }); })();


/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/firestore.service */ 1343);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function Tab2Page_ion_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const salon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", salon_r1 == null ? null : salon_r1.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](salon_r1.salonName);
} }
class Tab2Page {
    constructor(firestoreService) {
        this.firestoreService = firestoreService;
        this.salonData = [];
    }
    ngOnInit() {
        this.firestoreService.getSalonData().subscribe((res) => {
            this.salonData = res;
        });
    }
}
Tab2Page.ɵfac = function Tab2Page_Factory(t) { return new (t || Tab2Page)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService)); };
Tab2Page.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Tab2Page, selectors: [["app-tab2"]], decls: 8, vars: 1, consts: [[1, "tab2-content-center"], ["class", "salons", "button", "", 4, "ngFor", "ngForOf"], ["button", "", 1, "salons"], [1, "tab2-card-content"], [1, "spacer-w-xs"], [3, "src"], [1, "each-salon"]], template: function Tab2Page_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Salons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content")(5, "ion-list")(6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, Tab2Page_ion_card_7_Template, 8, 2, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.salonData);
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".tab2-content-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.salons[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 80px;\n  background-color: #FF8DC7;\n  border-radius: 10px;\n}\n\n.salon-style[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 15px;\n  margin: 10px;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.tab2-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n}\n\n.each-salon[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYjItY29udGVudC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zYWxvbnN7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGOERDNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zYWxvbi1zdHlsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGFiMi1jYXJkLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmVhY2gtc2Fsb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map