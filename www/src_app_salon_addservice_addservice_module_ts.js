"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salon_addservice_addservice_module_ts"],{

/***/ 5391:
/*!***************************************************************!*\
  !*** ./src/app/salon/addservice/addservice-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicePageRoutingModule": () => (/* binding */ AddservicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _addservice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservice.page */ 7656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _addservice_page__WEBPACK_IMPORTED_MODULE_0__.AddservicePage
    }
];
class AddservicePageRoutingModule {
}
AddservicePageRoutingModule.ɵfac = function AddservicePageRoutingModule_Factory(t) { return new (t || AddservicePageRoutingModule)(); };
AddservicePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AddservicePageRoutingModule });
AddservicePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AddservicePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8033:
/*!*******************************************************!*\
  !*** ./src/app/salon/addservice/addservice.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicePageModule": () => (/* binding */ AddservicePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addservice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addservice-routing.module */ 5391);
/* harmony import */ var _addservice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addservice.page */ 7656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class AddservicePageModule {
}
AddservicePageModule.ɵfac = function AddservicePageModule_Factory(t) { return new (t || AddservicePageModule)(); };
AddservicePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AddservicePageModule });
AddservicePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _addservice_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddservicePageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AddservicePageModule, { declarations: [_addservice_page__WEBPACK_IMPORTED_MODULE_1__.AddservicePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _addservice_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddservicePageRoutingModule] }); })();


/***/ }),

/***/ 7656:
/*!*****************************************************!*\
  !*** ./src/app/salon/addservice/addservice.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddservicePage": () => (/* binding */ AddservicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);








class AddservicePage {
    constructor(firestore, firestoreService, toast, router) {
        this.firestore = firestore;
        this.firestoreService = firestoreService;
        this.toast = toast;
        this.router = router;
        this.cost = '';
        this.category = '';
        this.subCategory = '';
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
        (this.category = ''), (this.cost = ''), (this.subCategory = '');
    }
    ngOnInit() {
        this.getSalonData();
    }
    getSalonData() {
        // returns the salon of a user; depends on user ID
        this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
            console.log(res);
            this.salonId = res[0].id;
            this.getServices(res[0].id);
        });
    }
    // adding services
    addServices() {
        // validation if fields are empty
        if (this.cost == '' && this.subCategory == '') {
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
            cost: this.cost,
            salonId: this.salonId,
            subCategory: this.subCategory,
        };
        // firestore database instance
        const servicesInstance = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(this.firestore, 'services');
        // firebase functin for adding data to services table
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(servicesInstance, data)
            .then((res) => {
            this.clear();
            this.presentToast('Service added');
            this.router.navigate(['/dashboard']);
        })
            .catch((err) => {
            this.clear();
            console.log(err);
        });
    }
    // gettingServices by salon Id
    getServices(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.salonId);
            // this.firestoreService.getServicesBySalonId(id).subscribe((res) => {
            //   console.log(res);
            // });
            const services = yield this.firestoreService.getServicesBySalonId(id);
            console.log(services);
        });
    }
}
AddservicePage.ɵfac = function AddservicePage_Factory(t) { return new (t || AddservicePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_0__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AddservicePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddservicePage, selectors: [["app-addservice"]], decls: 17, vars: 2, consts: [["slot", "start"], [1, "length"], ["position", "floating", 1, "text-stl2"], ["type", "text", "placeholder", " ", 1, "blank", 3, "ngModel", "ngModelChange"], ["type", "number", "placeholder", " ", 1, "blank", 3, "ngModel", "ngModelChange"], [1, "submit", 3, "click"]], template: function AddservicePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Adding Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "ion-item", 1)(8, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddservicePage_Template_ion_input_ngModelChange_10_listener($event) { return ctx.subCategory = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-item", 1)(12, "ion-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddservicePage_Template_ion_input_ngModelChange_14_listener($event) { return ctx.cost = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddservicePage_Template_button_click_15_listener() { return ctx.addServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.subCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.cost);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate], styles: [".length[_ngcontent-%COMP%] {\n  font-family: \"poppins\", sans-serif;\n  width: 100%;\n}\n\n.categ[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 25px;\n  left: 65%;\n  width: 125px;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 30%;\n  left: 25px;\n  width: 85%;\n  height: 40px;\n  border-radius: 10px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  position: absolute;\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  color: #f4978e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHNlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKIiwiZmlsZSI6ImFkZHNlcnZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZW5ndGh7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOURDQzQ7XHJcbn1cclxuXHJcbi5zdWJtaXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RENDNDtcclxufVxyXG5cclxuLnN1Ym1pdDpob3ZlcntcclxuICAgIGNvbG9yOiAjZjQ5NzhlO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_salon_addservice_addservice_module_ts.js.map