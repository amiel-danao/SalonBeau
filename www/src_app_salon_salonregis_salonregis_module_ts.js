"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salon_salonregis_salonregis_module_ts"],{

/***/ 1131:
/*!***************************************************************!*\
  !*** ./src/app/salon/salonregis/salonregis-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonregisPageRoutingModule": () => (/* binding */ SalonregisPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _salonregis_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salonregis.page */ 4780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _salonregis_page__WEBPACK_IMPORTED_MODULE_0__.SalonregisPage
    }
];
class SalonregisPageRoutingModule {
}
SalonregisPageRoutingModule.ɵfac = function SalonregisPageRoutingModule_Factory(t) { return new (t || SalonregisPageRoutingModule)(); };
SalonregisPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SalonregisPageRoutingModule });
SalonregisPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SalonregisPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5658:
/*!*******************************************************!*\
  !*** ./src/app/salon/salonregis/salonregis.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonregisPageModule": () => (/* binding */ SalonregisPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _salonregis_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salonregis-routing.module */ 1131);
/* harmony import */ var _salonregis_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salonregis.page */ 4780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class SalonregisPageModule {
}
SalonregisPageModule.ɵfac = function SalonregisPageModule_Factory(t) { return new (t || SalonregisPageModule)(); };
SalonregisPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalonregisPageModule });
SalonregisPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _salonregis_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalonregisPageRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalonregisPageModule, { declarations: [_salonregis_page__WEBPACK_IMPORTED_MODULE_1__.SalonregisPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _salonregis_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalonregisPageRoutingModule] }); })();


/***/ }),

/***/ 4780:
/*!*****************************************************!*\
  !*** ./src/app/salon/salonregis/salonregis.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalonregisPage": () => (/* binding */ SalonregisPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);









class SalonregisPage {
    constructor(firestore, storage, toast, router, activatedRoute) {
        this.firestore = firestore;
        this.storage = storage;
        this.toast = toast;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contactNumber = '';
        this.email = '';
        this.logoUrl = '';
        this.salonLocation = '';
        this.salonName = '';
        this.businessRegistration = '';
        this.fileRestriction = ['image/jpeg', 'image/png'];
        this.isFileValid = true;
        this.userData = [];
        this.uid = this.activatedRoute.snapshot.params['id'];
        console.log(this.uid);
    }
    ngOnInit() {
        if (this.uid) {
            this.getUserData();
        }
    }
    getUserData() {
        const usersDb = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'customer');
        const customerSingle = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.query)(usersDb, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.where)('uid', '==', this.uid));
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.getDocs)(customerSingle).then((res) => {
            this.userData = [
                ...res.docs.map((doc) => {
                    return Object.assign(Object.assign({}, doc.data()), { id: doc.id });
                }),
            ];
            this.email = this.userData[0].email;
            console.log(this.userData);
        });
    }
    fileChange(event) {
        console.log(event.target.files[0]);
        if (this.fileRestriction.includes(event.target.files[0].type)) {
            this.file = event.target.files[0];
            this.isFileValid = true;
            this.presentToast('Logo added');
        }
        else {
            this.presentToast('Please put a valid logo ');
            this.file = null;
            this.isFileValid = false;
        }
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
    uploadFile(event) {
        if (this.contactNumber == '' &&
            this.businessRegistration == '' &&
            this.email == '' &&
            this.salonName == '' &&
            this.email == '') {
            this.presentToast('Please fill up the fields ');
            return;
        }
        const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(this.storage, `images/${this.file.name}`);
        const upload = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.uploadBytesResumable)(storageRef, this.file);
        upload.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
            if (progress === 100) {
                setTimeout(() => {
                    (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(upload.snapshot.ref).then((url) => {
                        this.addSalon(url, upload.snapshot.metadata);
                    });
                }, 2000);
            }
        }, () => {
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(upload.snapshot.ref).then((url) => {
                console.log('dlurl', url);
            });
        });
    }
    addSalon(url, meta) {
        let data = {
            businessRegistration: this.businessRegistration,
            contactNumber: this.contactNumber,
            email: this.email,
            logoUrl: url,
            salonLocation: this.salonLocation,
            salonName: this.salonName,
            uid: this.uid,
            ratings: [],
        };
        const addSalon = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.collection)(this.firestore, 'salon');
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.addDoc)(addSalon, data)
            .then((res) => {
            const key = res['_key'].path.segments[1];
            console.log(res['_key'].path.segments[1]);
            const updateCustomerType = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.doc)(this.firestore, 'customer', this.userData[0].id);
            let typeData = {
                type: 'salon',
            };
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.updateDoc)(updateCustomerType, typeData).then((res) => {
                this.presentToast('Salon Registered');
                this.router.navigate(['/saloninter/' + key]);
            });
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
SalonregisPage.ɵfac = function SalonregisPage_Factory(t) { return new (t || SalonregisPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
SalonregisPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SalonregisPage, selectors: [["app-salonregis"]], decls: 46, vars: 5, consts: [["slot", "start"], ["src", "assets/3.png"], [1, "salon-register-content-center"], [1, "item"], ["position", "floating", 1, "text-stl2"], ["name", "salonName", "type", "text", "placeholder", " ", 3, "ngModel", "ngModelChange"], ["name", "salonLocation", "type", "text", "placeholder", " ", 3, "ngModel", "ngModelChange"], ["name", "contactNumber", "type", "number", "placeholder", "", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", "placeholder", "", 3, "ngModel", "ngModelChange"], ["name", "businessRegistration", "type", "text", "placeholder", "", 3, "ngModel", "ngModelChange"], [1, "text-stl2"], ["type", "file", "placeholder", "", "hidden", "", 3, "change"], ["upload", ""], [3, "click"], ["lines", "none"], ["name", "check"], [1, "text"], [1, "spacer-h-s"], [1, "submit", 3, "click"]], template: function SalonregisPage_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sign up as Salon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-content")(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 2)(10, "ion-item", 3)(11, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Salon Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ion-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalonregisPage_Template_ion_input_ngModelChange_13_listener($event) { return ctx.salonName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-item", 3)(15, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalonregisPage_Template_ion_input_ngModelChange_17_listener($event) { return ctx.salonLocation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-item", 3)(19, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalonregisPage_Template_ion_input_ngModelChange_21_listener($event) { return ctx.contactNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-item", 3)(23, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "ion-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalonregisPage_Template_ion_input_ngModelChange_25_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-item", 3)(27, "ion-label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Business Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ion-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function SalonregisPage_Template_ion_input_ngModelChange_29_listener($event) { return ctx.businessRegistration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-item", 3)(31, "ion-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Salon Logo (1 x 1 size only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SalonregisPage_Template_input_change_33_listener($event) { return ctx.fileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "ion-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalonregisPage_Template_ion_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](34); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Upload Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "br")(38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ion-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "ion-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "ion-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "I agree in all terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalonregisPage_Template_button_click_44_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Start Your Journey! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.salonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.salonLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.businessRegistration);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate], styles: ["img[_ngcontent-%COMP%] {\n  padding-top: 20%;\n}\n\n.item[_ngcontent-%COMP%] {\n  font-family: \"poppins\", sans-serif;\n  width: 90%;\n  font-size: 18px;\n}\n\n.float[_ngcontent-%COMP%] {\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%] {\n  margin: auto;\n  top: 85%;\n  left: 25px;\n  width: 85%;\n  height: 35px;\n  border-radius: 20px;\n  font-family: \"poppins\", sans-serif;\n  font-weight: 600;\n  background-color: #F9DCC4;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n  color: #f4978e;\n}\n\n.my-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 8%;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10%;\n}\n\n.salon-register-content-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbG9ucmVnaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUFKIiwiZmlsZSI6InNhbG9ucmVnaXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5mbG9hdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOURDQzQ7XHJcbn1cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuLnN1Ym1pdHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogODUlO1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlEQ0M0O1xyXG59XHJcblxyXG4uc3VibWl0OmhvdmVye1xyXG4gICAgY29sb3I6ICNmNDk3OGU7XHJcbn1cclxuXHJcbi5teS1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4JVxyXG59XHJcblxyXG4udGV4dHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4uc2Fsb24tcmVnaXN0ZXItY29udGVudC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_salon_salonregis_salonregis_module_ts.js.map