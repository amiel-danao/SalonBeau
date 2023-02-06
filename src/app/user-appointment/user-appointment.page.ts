import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-appointment',
  templateUrl:'./user-appointment.page.html',
  styleUrls: ['./user-appointment.page.scss'],
})
export class UserAppointmentPage implements OnInit {
  public name: string = '';
  public email: string = '';
  public services: string = ''; //bind to ion selection or ion select as [(ngModel)]="services"
  public stylist: string ='';//bind to ion select
  public time: string = ''; //same with top
  public date: string = ''; //same with top
  public cost: string = ''; //same with top
  private dateFormat: string = 'YYYY-MM-DD'

  public salonId: string = '';

  public servicesList: Array<any> = ["footspa", "rebond"];
  salonServiceParams: any;

  public stylistList: Array<any> = [];
  salonstylistParams: any;

  userId: any = localStorage.getItem('user') || null;
  public userData: Array<any> = [];

  mydate1 = moment().format(this.dateFormat);
  disabledDates: Date[] = [];
  datePickerObj: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private firestore: Firestore,
    private toast: ToastController,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
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
      const userData = collection(this.firestore, 'customer');

      const userQuery = query(userData, where('uid', '==', this.userId));

      getDocs(userQuery).then((res) => {
        this.userData = [
          ...res.docs.map((doc: any) => {
            this.email = doc.data()['email'];
            this.name = doc.data()['firstName'] + " " + doc.data()['lastName'];
            return { ...doc.data(), id: doc.id };
          }),
        ];

        console.log(this.userData);
      });
    } else {
      console.log('Please Login');
    }
  }

  clear() {
    this.name = '',
    this.email ='',
    this.services = '';
    this.stylist='';
    this.time = '';
    this.date = '';
    this.cost = '';
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });

    toast.present();
  }
  async ngOnInit() {
    

    await this.getBookedDates();

    // EXAMPLE OBJECT
    this.datePickerObj = {
      inputDate: new Date(),
      fromDate: new Date(),
      // inputDate: new Date('12'), // If you want to set month in date-picker
      // inputDate: new Date('2018'), // If you want to set year in date-picker
      // inputDate: new Date('2018-12'), // If you want to set year & month in date-picker
      // inputDate: new Date('2018-12-01'), // If you want to set date in date-picker

      // fromDate: new Date('2015-12-20'), // need this in order to have toDate
      // toDate: new Date('2019-12-25'),
      // showTodayButton: false,
      // closeOnSelect: true,
      // disableWeekDays: [],
      // mondayFirst: true,
      setLabel: 'Select appointment Date',
      // todayLabel: 'Today',
      // closeLabel: 'Close',
      disabledDates: this.disabledDates,
      titleLabel: "Select a Date",
      // monthsList: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      // weeksList: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
      // dateFormat: 'MMMM D, YYYY',
      // clearButton: false,
      // momentLocale: 'pt-BR',
      // yearInAscending: true,
      // btnCloseSetInReverse: false,

      btnProperties: {
        expand: "block", // "block" | "full"
        fill: "", // "clear" | "default" | "outline" | "solid"
        size: "", // "default" | "large" | "small"
        disabled: "", // boolean (default false)
        strong: "", // boolean (default false)
        color: ""
        // "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", "dark" , and give color in string
      }
    };
  }

  async getServices(id: any) {
    // get all services by salon ID
    // this.firestoreService.getServicesBySalonId(id).subscribe((res) => {
    //   console.log(`Services List: ${res}`);
    //   // bind this to a selection form or a dropdown

    //   this.servicesList = res;
    // });
    const services = await this.firestoreService.getServicesBySalonId(id);
    this.servicesList = services.map(value => `${value['subCategory']} (P${value['cost']})`);
  }

  async getStylists(id: string) {
    this.stylistList = await this.firestoreService.getstylistBySalonId(id);
  }

  addAppointment() {
    // for validation
    if (
      this.name == '' ||
      this.email == '' ||
      this.services == '' ||
      this.stylist == '' ||
      this.time == '' ||
      // this.cost == '' ||
      this.date == ''
    ) {
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
    const addAppointment = collection(this.firestore, 'Appointment');

    addDoc(addAppointment, data)
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

  async getBookedDates() {
    const q = query(collection(this.firestore, "Appointment"), where("salonId", "==", this.salonId));
  
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      let date = moment(doc.data()['date'], this.dateFormat);
      let difference = date.diff(moment(), 'hours');
      console.log(`difference=${difference}`);
      if (difference >= 1){
        console.log(doc.id, " => ", doc.data());
        this.disabledDates.push(date.toDate());
      }
    });
  }
}


