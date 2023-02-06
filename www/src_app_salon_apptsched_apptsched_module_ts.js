"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salon_apptsched_apptsched_module_ts"],{

/***/ 9091:
/*!*************************************************************!*\
  !*** ./src/app/salon/apptsched/apptsched-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptschedPageRoutingModule": () => (/* binding */ ApptschedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _apptsched_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apptsched.page */ 4668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _apptsched_page__WEBPACK_IMPORTED_MODULE_0__.ApptschedPage
    }
];
class ApptschedPageRoutingModule {
}
ApptschedPageRoutingModule.ɵfac = function ApptschedPageRoutingModule_Factory(t) { return new (t || ApptschedPageRoutingModule)(); };
ApptschedPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ApptschedPageRoutingModule });
ApptschedPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ApptschedPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2808:
/*!*****************************************************!*\
  !*** ./src/app/salon/apptsched/apptsched.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptschedPageModule": () => (/* binding */ ApptschedPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _apptsched_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apptsched-routing.module */ 9091);
/* harmony import */ var _apptsched_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apptsched.page */ 4668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ApptschedPageModule {
}
ApptschedPageModule.ɵfac = function ApptschedPageModule_Factory(t) { return new (t || ApptschedPageModule)(); };
ApptschedPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ApptschedPageModule });
ApptschedPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _apptsched_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApptschedPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ApptschedPageModule, { declarations: [_apptsched_page__WEBPACK_IMPORTED_MODULE_1__.ApptschedPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _apptsched_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApptschedPageRoutingModule] }); })();


/***/ }),

/***/ 4668:
/*!***************************************************!*\
  !*** ./src/app/salon/apptsched/apptsched.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApptschedPage": () => (/* binding */ ApptschedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ 7624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/firestore.service */ 1343);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function ApptschedPage_ion_row_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-row")(1, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col")(12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApptschedPage_ion_row_24_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const appointment_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendEmailNotif(appointment_r1 == null ? null : appointment_r1.name, appointment_r1 == null ? null : appointment_r1.email)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Accept ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br")(15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ApptschedPage_ion_row_24_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const appointment_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.sendEmailNotif2(appointment_r1 == null ? null : appointment_r1.name, appointment_r1 == null ? null : appointment_r1.email)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Reject");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const appointment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](appointment_r1 == null ? null : appointment_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](appointment_r1 == null ? null : appointment_r1.service);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](appointment_r1 == null ? null : appointment_r1.stylist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](appointment_r1 == null ? null : appointment_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](appointment_r1 == null ? null : appointment_r1.time);
} }
class ApptschedPage {
    constructor(firestoreService, auth, toast) {
        this.firestoreService = firestoreService;
        this.auth = auth;
        this.toast = toast;
        this.appointments = [];
        this.salonId = "";
        this.userId = localStorage.getItem('user');
        this.salonId = "test";
    }
    ngOnInit() {
        this.getSalonData();
    }
    getSalonData() {
        // returns the salon of a user; depends on user ID
        this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
            console.log(res);
            this.getSalonAppointment(res[0].id);
        });
    }
    getSalonAppointment(id) {
        // returns the appointments based on salon
        this.firestoreService.getAppointmentsBySalon(id).subscribe((res) => {
            console.log(res);
            this.appointments = res;
        });
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
    // ACCEPTED EMAIL NOTIF
    sendEmailNotif(name, email) {
        let data = {
            toEmail: email,
            name: name,
        };
        const gmailConfig = "service_w6x4ayq";
        const templateId = "template_dctp3kj";
        const publicKey = "dOs8mWHCTDEax3WJg";
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(gmailConfig, templateId, data, publicKey)
            .then((res) => {
            console.log(res.text);
            this.presentToast('Email Sent');
        });
    }
    // DENIED EMAIL NOTIF
    sendEmailNotif2(name, email) {
        let data = {
            email: email,
            name: name,
        };
        const gmailConfig = "service_w6x4ayq";
        const templateId = "template_mn69e4g";
        const publicKey = "dOs8mWHCTDEax3WJg";
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].send(gmailConfig, templateId, data, publicKey)
            .then((res) => {
            console.log(res.text);
            this.presentToast('Email Sent');
        });
    }
}
ApptschedPage.ɵfac = function ApptschedPage_Factory(t) { return new (t || ApptschedPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_firestore_service__WEBPACK_IMPORTED_MODULE_1__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController)); };
ApptschedPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ApptschedPage, selectors: [["app-apptsched"]], decls: 25, vars: 2, consts: [["slot", "start"], [1, "list-cust"], [1, "table-container"], [3, "fixed"], [1, "font-title"], [4, "ngFor", "ngForOf"], [1, "button", 3, "click"]], template: function ApptschedPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Appointment Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-content")(7, "ion-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "List of Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-card", 2)(10, "ion-grid", 3)(11, "ion-row", 4)(12, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Name of Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Stylist");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ApptschedPage_ion_row_24_Template, 18, 5, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.appointments);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate], styles: [".list-cust[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 20px;\n  padding-top: 20px;\n  margin: auto;\n  position: absolute;\n  padding-left: 110px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n  margin-top: 70px;\n  box-shadow: 5px;\n}\n\n.font-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: rgb(49, 49, 49);\n  font-size: 14px;\n  text-align: center;\n}\n\nion-alert.custom-alert[_ngcontent-%COMP%] {\n  --backdrop-opacity: 0.7;\n}\n\n.custom-alert[_ngcontent-%COMP%]   .alert-button-group[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n\nbutton.alert-button.alert-button-confirm[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-success);\n  color: var(--ion-color-success-contrast);\n}\n\n.md[_ngcontent-%COMP%]   button.alert-button.alert-button-confirm[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n\n.ios[_ngcontent-%COMP%]   .custom-alert[_ngcontent-%COMP%]   button.alert-button[_ngcontent-%COMP%] {\n  border: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);\n}\n\n.ios[_ngcontent-%COMP%]   button.alert-button.alert-button-cancel[_ngcontent-%COMP%] {\n  border-right: 0;\n  border-bottom-left-radius: 13px;\n  border-top-left-radius: 13px;\n}\n\n.ios[_ngcontent-%COMP%]   button.alert-button.alert-button-confirm[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 13px;\n  border-top-right-radius: 13px;\n}\n\n.button[_ngcontent-%COMP%] {\n  size: 5%;\n  font-family: \"poppins\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHRzY2hlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSwwQ0FBQTtFQUNBLHdDQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0Usa0VBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQ0FBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxRQUFBO0VBQ0Esa0NBQUE7QUFFSiIsImZpbGUiOiJhcHB0c2NoZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY3VzdHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgYm94LXNoYWRvdzogNXB4O1xyXG5cclxufVxyXG5cclxuLmZvbnQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoNDksIDQ5LCA0OSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLWFsZXJ0LmN1c3RvbS1hbGVydCB7XHJcbiAgICAtLWJhY2tkcm9wLW9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1hbGVydCAuYWxlcnQtYnV0dG9uLWdyb3VwIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QpO1xyXG4gIH1cclxuICBcclxuICAubWQgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pb3MgLmN1c3RvbS1hbGVydCBidXR0b24uYWxlcnQtYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKVxyXG4gIH1cclxuICBcclxuICAuaW9zIGJ1dHRvbi5hbGVydC1idXR0b24uYWxlcnQtYnV0dG9uLWNhbmNlbCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmlvcyBidXR0b24uYWxlcnQtYnV0dG9uLmFsZXJ0LWJ1dHRvbi1jb25maXJtIHtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxM3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEzcHg7XHJcbiAgfVxyXG4gIC5idXR0b257XHJcbiAgICBzaXplOiA1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAncG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"] });


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


/***/ }),

/***/ 921:
/*!**********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/api/sendPost.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendPost": () => (/* binding */ sendPost)
/* harmony export */ });
/* harmony import */ var _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/EmailJSResponseStatus */ 8030);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ 1367);


const sendPost = (url, data, headers = {}) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', ({
      target
    }) => {
      const responseStatus = new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target);

      if (responseStatus.status === 200 || responseStatus.text === 'OK') {
        resolve(responseStatus);
      } else {
        reject(responseStatus);
      }
    });
    xhr.addEventListener('error', ({
      target
    }) => {
      reject(new _models_EmailJSResponseStatus__WEBPACK_IMPORTED_MODULE_0__.EmailJSResponseStatus(target));
    });
    xhr.open('POST', _store_store__WEBPACK_IMPORTED_MODULE_1__.store._origin + url, true);
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key]);
    });
    xhr.send(data);
  });
};

/***/ }),

/***/ 7624:
/*!***************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "init": () => (/* reexport safe */ _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   "send": () => (/* reexport safe */ _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send),
/* harmony export */   "sendForm": () => (/* reexport safe */ _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm)
/* harmony export */ });
/* harmony import */ var _methods_init_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/init/init */ 4919);
/* harmony import */ var _methods_send_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/send/send */ 1306);
/* harmony import */ var _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/sendForm/sendForm */ 7449);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: _methods_init_init__WEBPACK_IMPORTED_MODULE_0__.init,
  send: _methods_send_send__WEBPACK_IMPORTED_MODULE_1__.send,
  sendForm: _methods_sendForm_sendForm__WEBPACK_IMPORTED_MODULE_2__.sendForm
});

/***/ }),

/***/ 4919:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/init/init.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 1367);

/**
 * Initiation
 * @param {string} publicKey - set the EmailJS public key
 * @param {string} origin - set the EmailJS origin
 */

const init = (publicKey, origin = 'https://api.emailjs.com') => {
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID = publicKey;
  _store_store__WEBPACK_IMPORTED_MODULE_0__.store._origin = origin;
};

/***/ }),

/***/ 7449:
/*!***********************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendForm": () => (/* binding */ sendForm)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 1367);
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ 6976);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 921);




const findHTMLForm = form => {
  let currentForm;

  if (typeof form === 'string') {
    currentForm = document.querySelector(form);
  } else {
    currentForm = form;
  }

  if (!currentForm || currentForm.nodeName !== 'FORM') {
    throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
  }

  return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */


const sendForm = (serviceID, templateID, form, publicKey) => {
  const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
  const currentForm = findHTMLForm(form);
  (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
  const formData = new FormData(currentForm);
  formData.append('lib_version', '3.10.0');
  formData.append('service_id', serviceID);
  formData.append('template_id', templateID);
  formData.append('user_id', uID);
  return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send-form', formData);
};

/***/ }),

/***/ 1306:
/*!***************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/methods/send/send.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "send": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/store */ 1367);
/* harmony import */ var _utils_validateParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/validateParams */ 6976);
/* harmony import */ var _api_sendPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/sendPost */ 921);



/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} publicKey - the EmailJS public key
 * @returns {Promise<EmailJSResponseStatus>}
 */

const send = (serviceID, templateID, templatePrams, publicKey) => {
  const uID = publicKey || _store_store__WEBPACK_IMPORTED_MODULE_0__.store._userID;
  (0,_utils_validateParams__WEBPACK_IMPORTED_MODULE_1__.validateParams)(uID, serviceID, templateID);
  const params = {
    lib_version: '3.10.0',
    user_id: uID,
    service_id: serviceID,
    template_id: templateID,
    template_params: templatePrams
  };
  return (0,_api_sendPost__WEBPACK_IMPORTED_MODULE_2__.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
    'Content-type': 'application/json'
  });
};

/***/ }),

/***/ 8030:
/*!**************************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailJSResponseStatus": () => (/* binding */ EmailJSResponseStatus)
/* harmony export */ });
class EmailJSResponseStatus {
  constructor(httpResponse) {
    this.status = httpResponse ? httpResponse.status : 0;
    this.text = httpResponse ? httpResponse.responseText : 'Network Error';
  }

}

/***/ }),

/***/ 1367:
/*!*********************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/store/store.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
const store = {
  _origin: 'https://api.emailjs.com'
};

/***/ }),

/***/ 6976:
/*!******************************************************************!*\
  !*** ./node_modules/@emailjs/browser/es/utils/validateParams.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateParams": () => (/* binding */ validateParams)
/* harmony export */ });
const validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey) {
    throw 'The public key is required. Visit https://dashboard.emailjs.com/admin/account';
  }

  if (!serviceID) {
    throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
  }

  if (!templateID) {
    throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
  }

  return true;
};

/***/ })

}]);
//# sourceMappingURL=src_app_salon_apptsched_apptsched_module_ts.js.map