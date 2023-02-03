"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salon_dashboard_dashboard_module_ts"],{

/***/ 3581:
/*!*************************************************************!*\
  !*** ./src/app/salon/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 3750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
class DashboardPageRoutingModule {
}
DashboardPageRoutingModule.ɵfac = function DashboardPageRoutingModule_Factory(t) { return new (t || DashboardPageRoutingModule)(); };
DashboardPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardPageRoutingModule });
DashboardPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4601:
/*!*****************************************************!*\
  !*** ./src/app/salon/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 3581);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 3750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class DashboardPageModule {
}
DashboardPageModule.ɵfac = function DashboardPageModule_Factory(t) { return new (t || DashboardPageModule)(); };
DashboardPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardPageModule });
DashboardPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardPageModule, { declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule] }); })();


/***/ }),

/***/ 3750:
/*!***************************************************!*\
  !*** ./src/app/salon/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/firestore.service */ 1343);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







const _c0 = function () { return ["/tabs/tab1"]; };
const _c1 = function () { return ["/apptsched"]; };
const _c2 = function () { return ["/addservice"]; };
const _c3 = function () { return ["/stylist"]; };
const _c4 = function () { return ["/ratings"]; };
class DashboardPage {
    constructor(firestoreService, firestore, router) {
        this.firestoreService = firestoreService;
        this.firestore = firestore;
        this.router = router;
        this.userDataArray = [];
        this.salonData = [];
        this.uid = localStorage.getItem('user');
        console.log(this.uid);
    }
    ngOnInit() {
        this.getUserData();
    }
    getUserData() {
        const userData = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'customer');
        const userSpecific = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(userData, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)('uid', '==', this.uid));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(userSpecific).then((res) => {
            this.userDataArray = [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
            this.getSpecificSalon(this.userDataArray[0].email);
            console.log(this.userDataArray);
        });
    }
    getSpecificSalon(email) {
        const userData = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'salon');
        const userSpecific = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(userData, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_0__.where)('email', '==', email));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(userSpecific).then((res) => {
            this.salonData = [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
            console.log(this.salonData);
        });
    }
    logout() {
        localStorage.removeItem('user');
        this.router.navigateByUrl('/tabs/tab3');
        window.location.href = '/tabs/tab3';
    }
}
DashboardPage.ɵfac = function DashboardPage_Factory(t) { return new (t || DashboardPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DashboardPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardPage, selectors: [["app-dashboard"]], decls: 17, vars: 10, consts: [["type", "Button", "expanded", "block", "slot", "start", "fill", "clear", 3, "routerLink"], ["name", "arrow-back", 1, "home-icon"], [1, "appt-sched", 3, "routerLink"], [1, "services", 3, "routerLink"], [1, "stylist", 3, "routerLink"], [1, "ratings", 3, "routerLink"], ["type", "button", "expand", "block", 3, "click"]], template: function DashboardPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Salon Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " View Appointments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Manage Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Add Stylist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Ratings/Feedbacks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ion-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardPage_Template_ion_button_click_15_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c4));
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: [".appt-sched[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 25px;\n  left: 10px;\n  width: 93%;\n  height: 50px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  position: relative;\n  background-color: #f4978e;\n}\n\n.services[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 85px;\n  left: 10px;\n  width: 93%;\n  height: 50px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  position: absolute;\n  background-color: #f4978e;\n}\n\n.ratings[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 205px;\n  left: 10px;\n  width: 93%;\n  height: 50px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  position: absolute;\n  background-color: #f4978e;\n}\n\n.stylist[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 145px;\n  left: 10px;\n  width: 93%;\n  height: 50px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  position: absolute;\n  background-color: #f4978e;\n}\n\n.home-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtBQUVKIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwdC1zY2hlZHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0OTc4ZTtcclxufVxyXG5cclxuLnNlcnZpY2Vze1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdG9wOiA4NXB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ5NzhlO1xyXG59XHJcblxyXG4ucmF0aW5nc3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMjA1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDk3OGU7XHJcbn1cclxuLnN0eWxpc3R7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDE0NXB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ5NzhlO1xyXG59XHJcblxyXG4uaG9tZS1pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_salon_dashboard_dashboard_module_ts.js.map