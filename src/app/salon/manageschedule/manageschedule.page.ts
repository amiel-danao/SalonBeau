import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent, RangeValue } from '@ionic/core';
import * as moment from 'moment';
import { LoadingController } from '@ionic/angular';
import { collection, doc, Firestore, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firestore.service';

enum DaysOfWeek {Sunday = 'Sunday', Monday = 'Monday', Tuesday = 'Tuesday', Wednesday = 'Wednesday', Thursday = 'Thursday', Friday = 'Friday', Saturday = 'Saturday'};

@Component({
  selector: 'app-manageschedule',
  templateUrl: './manageschedule.page.html',
  styleUrls: ['./manageschedule.page.scss'],
})

export class ManageschedulePage implements OnInit {
  
  defaultTimeRange = { lower: 16, upper: 34 };
  // timeRangeValues: { [id: DaysOfWeek] : RangeValue; } = {};
  timeRangeValues: { [key in DaysOfWeek]? : RangeValue } = {
    [DaysOfWeek.Sunday]: this.defaultTimeRange,
    [DaysOfWeek.Monday]: this.defaultTimeRange,
    [DaysOfWeek.Tuesday]: this.defaultTimeRange,
    [DaysOfWeek.Wednesday]: this.defaultTimeRange,
    [DaysOfWeek.Thursday]: this.defaultTimeRange,
    [DaysOfWeek.Friday]: this.defaultTimeRange,
    [DaysOfWeek.Saturday]: this.defaultTimeRange,
  };
  dayScheduleValues: { [id: string] : string; } = {};
  loading: HTMLIonLoadingElement;
  readonly salonCalendarCollection = "SalonCalendar";
  private salonId : string;
  daysOfWeek = DaysOfWeek
  
  constructor(private loadingCtrl: LoadingController, private firestoreService: FirestoreService, public authService: AuthenticationService) { }

  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Saving Schedule...',
      spinner: 'circles',
    });
    this.salonId = await this.getSalonId();
    await this.getSalonSchedule();
  }

  onIonChange(ev: Event) {
    let rangeElement = (ev as RangeCustomEvent);
    let name = rangeElement.target.attributes.getNamedItem('ng-reflect-name').nodeValue;
    this.dayScheduleValues[name] = this.rangeValueToTimeRange(rangeElement.detail.value);
  }

  rangeValueToTimeRange(rangeValue: RangeValue ){
    let lowerValue = rangeValue['lower'];
    let upperValue = rangeValue['upper'];

    let lowerHour = parseInt(`${lowerValue/2}`);
    let lowerMinute = (lowerValue % 2) * 30;

    let upperHour = parseInt(`${upperValue/2}`);
    let upperMinute = (upperValue % 2) * 30;

    let lowerTime = `${lowerHour}:${lowerMinute}`;
    lowerTime = moment(lowerTime, "HH:mm").format("h:mm A");

    let upperTime = `${upperHour}:${upperMinute}`;
    upperTime = moment(upperTime, "HH:mm").format("h:mm A");

    return `${lowerTime}  - ${upperTime}`;
  }

  timeRangeToRangeValue(timeRange: string ){
    let splittedTime = timeRange.split('-');
    let lowerTime = splittedTime[0];

    let lowerHour = parseInt(moment(lowerTime, "h:mm A").format("HH")) * 2;
    let lowerMinute = parseInt(moment(lowerTime, "h:mm A").format("mm"));

    if (lowerMinute > 0)
      lowerHour += 1;

    let upperTime = splittedTime[1];

    let upperHour = parseInt(moment(upperTime, "h:mm A").format("HH")) * 2;
    let upperMinute = parseInt(moment(upperTime, "h:mm A").format("mm"));

    if (upperMinute > 0)
      upperHour += 1;

    let rangeValue = { lower: lowerHour, upper: upperHour };

    return rangeValue;
  }



  async getSalonId(){
    if (this.authService.auth.currentUser == null)
      return null;

    const q = query(collection(this.firestoreService.firestore, "salon"), where("uid", "==", this.authService.auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty){
      return null;
    }

    return querySnapshot.docs[0].id;
  }

  async saveSchedule() {
    if (this.salonId == null)
      return;

    this.loading.setAttribute('message', 'Saving Schedule...');
    this.loading.present();

    const salonCalendarRef = doc(this.firestoreService.firestore, this.salonCalendarCollection, this.salonId);
    
    await setDoc(salonCalendarRef, {
      dailySchedule: this.dayScheduleValues
    }, { merge: true });

    this.loading.dismiss();
  }

  isPastDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    return date >= today;
  };

  async getSalonSchedule(){
    this.loading.setAttribute('message', 'loading schedule...');
    this.loading.present();
    if (this.salonId == null){
      this.setDefaultSalonSchedule();
      this.loading.dismiss();
      return;
    }
    
    const ref = doc(this.firestoreService.firestore, this.salonCalendarCollection, this.salonId).withConverter(salonCalendarConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {

      const salonCalendar = docSnap.data();

      this.dayScheduleValues = salonCalendar.dailySchedule;
      console.log(salonCalendar.toString());
    } else {
      console.log("No such document!");
    }
    this.loading.dismiss();
    let defaultTimeString = this.rangeValueToTimeRange(this.defaultTimeRange);
    for (let key in this.daysOfWeek) {
        let enumKey = this.daysOfWeek[key];
        if (key in this.dayScheduleValues){
          let value = this.dayScheduleValues[key];
          let rangeValue = this.timeRangeToRangeValue(value);
          this.timeRangeValues[enumKey] = rangeValue;
        }
        else{
          this.dayScheduleValues[key] = defaultTimeString;
          this.timeRangeValues[enumKey] = this.defaultTimeRange;
        }
    }
  }

  setDefaultSalonSchedule() {
    this.dayScheduleValues[this.daysOfWeek.Sunday] = this.rangeValueToTimeRange(this.defaultTimeRange);
  }

  get sunday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Sunday]];
  }

  get monday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Monday]];
  }

  get tuesday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Tuesday]];
  }

  get wednesday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Wednesday]];
  }

  get thursday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Thursday]];
  }

  get friday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Friday]];
  }

  get saturday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.Saturday]];
  }
}


const salonCalendarConverter = {
  toFirestore: (salonCalendar: { dailySchedule: any; }) => {
      return {
          name: salonCalendar.dailySchedule
      };
  },
  fromFirestore: (snapshot: { data: (arg0: any) => any; }, options: any) => {
      const data = snapshot.data(options);
      return new SalonCalendar(data.dailySchedule);
  }
};

class SalonCalendar {
  dailySchedule: Map<string, string>;
  constructor (dailySchedule: Map<string, string>) {
      this.dailySchedule = dailySchedule;
  }
  toString() {
      return this.dailySchedule;
  }
}


