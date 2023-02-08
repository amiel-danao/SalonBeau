import {Component, OnInit, ViewChild} from '@angular/core';
import {addDoc, collection, Firestore, getDocs, query, where} from '@angular/fire/firestore';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {FirestoreService} from '../services/firestore.service';
import * as moment from 'moment';
import {doc, getDoc} from 'firebase/firestore';
import {
  DaysOfWeek,
  rangeValueToTimeRange,
  salonCalendarConverter,
  timeRangeToRangeValue
} from '../salon/manageschedule/manage-schedule-page.component';
import {RangeValue} from '@ionic/core';

@Component({
  selector: 'app-user-appointment',
  templateUrl:'./user-appointment.page.html',
  styleUrls: ['./user-appointment.page.scss'],
})
export class UserAppointmentPage implements OnInit {
  @ViewChild('dateTimePicker') dateTimePicker;
  public name = '';
  public email = '';
  public services = ''; //bind to ion selection or ion select as [(ngModel)]="services"
  public stylist ='';//bind to ion select
  public time = ''; //same with top
  public date = ''; //same with top
  public cost = ''; //same with top
  public salonId = '';
  public servicesList: Array<any> = ['footspa', 'rebond'];
  salonServiceParams: any;
  public stylistList: Array<any> = [];
  salonstylistParams: any;
  userId: any = localStorage.getItem('user') || null;
  public userData: Array<any> = [];
  public datePickerObj: any = {};
  public daysOfWeek = DaysOfWeek;
  public dateFormat = 'YYYY-MM-DD';
  public timeFormat = 'HH:mm A';
  public loading: HTMLIonLoadingElement;
  public readonly salonCalendarCollection = 'SalonCalendar';
  public defaultTimeRange = { lower: 16, upper: 34 };
  public timeRangeValues: { [key in DaysOfWeek]?: RangeValue } = {
    [DaysOfWeek.sunday]: this.defaultTimeRange,
    [DaysOfWeek.monday]: this.defaultTimeRange,
    [DaysOfWeek.tuesday]: this.defaultTimeRange,
    [DaysOfWeek.wednesday]: this.defaultTimeRange,
    [DaysOfWeek.thursday]: this.defaultTimeRange,
    [DaysOfWeek.friday]: this.defaultTimeRange,
    [DaysOfWeek.saturday]: this.defaultTimeRange,
  };
  public dayOfWeekIndex = {
    1:DaysOfWeek.monday,
    2:DaysOfWeek.tuesday,
    3:DaysOfWeek.wednesday,
    4:DaysOfWeek.thursday,
    5:DaysOfWeek.friday,
    6:DaysOfWeek.saturday,
    7:DaysOfWeek.sunday
  };
  public selectedSalonHours: number[] = [];
  dayScheduleValues: { [id: string]: string } = {};
  private disabledDates: { [id: string]: Date } = {};
  private bookDateHours: { [id: string]: number[] } = {};

  constructor(
    private loadingCtrl: LoadingController,
    private activatedRoute: ActivatedRoute,
    private firestore: Firestore,
    private toast: ToastController,
    private router: Router,
    private firestoreService: FirestoreService
  ) {
    //salon ID from URL params
    this.salonId = this.activatedRoute.snapshot.params.id;
    this.salonServiceParams = this.activatedRoute.snapshot.params.service;

    console.log(this.salonServiceParams);
    this.services = this.salonServiceParams;

    // getting stylist
    this.salonId = this.activatedRoute.snapshot.params.id;
    this.salonstylistParams = this.activatedRoute.snapshot.params.stylist;

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
          ...res.docs.map((document: any) => {
            this.email = document.data().email;
            this.name = document.data().firstName + ' ' + document.data().lastName;
            return { ...document.data(), id: document.id };
          }),
        ];

        console.log(this.userData);
      });
    } else {
      console.log('Please Login');
    }
  }

  clear() {
    this.name = '';
    this.email ='';
    this.services = '';
    this.stylist='';
    this.time = '';
    this.date = '';
    this.cost = '';
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });

    toast.present();
  }
  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Saving Schedule...',
      spinner: 'circles',
    });
    await this.getSalonSchedule();
    await this.getBookedDates();
  }

  async getServices(id: any) {
    const services = await this.firestoreService.getServicesBySalonId(id);
    this.servicesList = services.map(value => `${value.subCategory} (P${value.cost})`);
  }

  async getStylists(id: string) {
    this.stylistList = await this.firestoreService.getstylistBySalonId(id);
  }

  addAppointment() {
    // for validation
    if (
      this.name === '' ||
      this.email === '' ||
      this.services === '' ||
      this.stylist === '' ||
      this.time === '' ||
      // this.cost == '' ||
      this.date === ''
    ) {
      this.presentToast('Please fill up all the fields');

      return;
    }

    // for actual data coming from user input
    const data = {
      name: this.name,
      email: this.email,
      date: this.date,
      stylist: this.stylist,
      salonId: this.salonId,
      service: this.services,
      time: this.time,
      cost: this.cost,
    };

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
    const q = query(collection(this.firestore, 'Appointment'), where('salonId', '==', this.salonId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      // doc.data() is never undefined for query doc snapshots
      const date = moment(document.data().date, this.dateFormat);
      const time = moment(document.data().time, this.timeFormat).format('HH');
      const difference = date.diff(moment(), 'hours');
      const dateKey = moment(date).format(this.dateFormat);
      if (!(dateKey in this.bookDateHours)){
        const newArray = [];
        newArray.push(parseInt(time,10));
        this.bookDateHours[dateKey] = newArray;
      }
      else{
        this.bookDateHours[dateKey].push(parseInt(time, 10));
      }
      console.log(`difference=${difference}`);
      if (difference >= 1){
        console.log(document.id, ' => ', document.data());
        this.disabledDates[dateKey] = date.toDate();
      }
    });
  }
  onDateChange(ev: Event) {
    const selectedValue = (ev as CustomEvent).detail.value;
    const splitDateTime = moment(selectedValue).format('YYYY-MM-DD HH:mm').split(' ');
    const selectedDayOfWeek = moment(selectedValue).isoWeekday();
    const selectedDate = splitDateTime[0];
    const selectedTime = splitDateTime[1];
    if (selectedDate !== this.date){
      this.date = selectedDate;
      this.time = '';
      this.selectedSalonHours = [];
      this.dateTimePicker.reset(null);
      this.updateHoursSelection(selectedDayOfWeek, selectedDate);
    }
    else{
      this.time = selectedTime;
    }
  }
  updateHoursSelection(selectedDayOfWeekIndex, dateKey){
    const selectedDayOfWeek = this.dayOfWeekIndex[selectedDayOfWeekIndex];
    const hourRange = this.dayScheduleValues[selectedDayOfWeek];

    const splitHourRange = hourRange.split('-');
    const lowerHour = splitHourRange[0];
    const upperHour = splitHourRange[1];
    const upperHourFormatted = moment(upperHour, 'hh:mm A').format('HH');
    const lowerHourFormatted = moment(lowerHour, 'hh:mm A').format('HH');
    let salonTimeOfThisDay = this.rangeSalonHours(parseInt(lowerHourFormatted, 10), parseInt(upperHourFormatted, 10)+1);
    const bookedDateHours = this.bookDateHours;
    if (dateKey in bookedDateHours){
      salonTimeOfThisDay = salonTimeOfThisDay.filter( ( el ) => !bookedDateHours[dateKey].includes( el ) );
    }
    this.selectedSalonHours = salonTimeOfThisDay;
    if (this.selectedSalonHours.length === 0){
      this.disabledDates[dateKey] = moment(dateKey, this.dateFormat).toDate();
      this.dateTimePicker.reset(null);
    }
  }
  isPastDate = (dateString: string) => {
    const dateMoment = moment(dateString, this.dateFormat);
    const date = dateMoment.toDate();
    const isPast = dateMoment.isSameOrAfter(moment(),'days');
    const isFull = !(dateString in this.disabledDates);
    return isPast && isFull;
  };
  async getSalonSchedule(){
    this.loading.setAttribute('message', 'loading schedule...');
    await this.loading.present();
    if (this.salonId == null){
      this.setDefaultSalonSchedule();
      await this.loading.dismiss();
      return;
    }

    const ref = doc(this.firestoreService.firestore, this.salonCalendarCollection, this.salonId).withConverter(salonCalendarConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {

      const salonCalendar = docSnap.data();

      if (salonCalendar.dailySchedule === undefined){
        this.setDefaultSalonSchedule();
      }
      else{
        this.dayScheduleValues = salonCalendar.dailySchedule;
      }
      console.log(salonCalendar.toString());
    } else {
      console.log('No such document!');
      this.setDefaultSalonSchedule();
    }

    await this.loading.dismiss();
    const defaultTimeString = rangeValueToTimeRange(this.defaultTimeRange);
    Object.entries(this.daysOfWeek).forEach(([key, enumValue]) => {
      if (key in this.dayScheduleValues) {
        const value = this.dayScheduleValues[key];
        this.timeRangeValues[enumValue] = timeRangeToRangeValue(value);
      } else {
        this.dayScheduleValues[key] = defaultTimeString;
        this.timeRangeValues[enumValue] = this.defaultTimeRange;
      }
    });
  }
  setDefaultSalonSchedule() {
    const defaultTimeRange = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.sunday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.monday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.tuesday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.wednesday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.thursday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.friday] = defaultTimeRange;
    this.dayScheduleValues[this.daysOfWeek.saturday] = defaultTimeRange;
  }
  rangeSalonHours = (start, end) => Array.from({length: (end - start)}, (v, k) => k + start);
}
