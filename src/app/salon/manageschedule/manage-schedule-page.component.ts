import {Component, OnInit} from '@angular/core';
import {RangeCustomEvent, RangeValue} from '@ionic/core';
import * as moment from 'moment';
import {LoadingController} from '@ionic/angular';
import {collection, doc, getDoc, getDocs, query, setDoc, where} from 'firebase/firestore';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {FirestoreService} from 'src/app/services/firestore.service';

export enum DaysOfWeek {sunday = 'sunday',
                  monday = 'monday',
                  tuesday = 'tuesday',
                  wednesday = 'wednesday',
                  thursday = 'thursday',
                  friday = 'friday',
                  saturday = 'saturday'
                };

@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule-page.component.html',
  styleUrls: ['./manage-schedule-page.component.scss'],
})

export class ManageSchedulePage implements OnInit {

  defaultTimeRange = { lower: 16, upper: 34 };
  // timeRangeValues: { [id: DaysOfWeek] : RangeValue; } = {};
  timeRangeValues: { [key in DaysOfWeek]?: RangeValue } = {
    [DaysOfWeek.sunday]: this.defaultTimeRange,
    [DaysOfWeek.monday]: this.defaultTimeRange,
    [DaysOfWeek.tuesday]: this.defaultTimeRange,
    [DaysOfWeek.wednesday]: this.defaultTimeRange,
    [DaysOfWeek.thursday]: this.defaultTimeRange,
    [DaysOfWeek.friday]: this.defaultTimeRange,
    [DaysOfWeek.saturday]: this.defaultTimeRange,
  };
  dayScheduleValues: { [id: string]: string } = {};
  loading: HTMLIonLoadingElement;
  public daysOfWeek = DaysOfWeek;
  readonly salonCalendarCollection = 'SalonCalendar';
  private salonId: string;
  constructor(private loadingCtrl: LoadingController, private firestoreService: FirestoreService,
              public authService: AuthenticationService) { }
  get sunday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.sunday]];
  }

  get monday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.monday]];
  }

  get tuesday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.tuesday]];
  }

  get wednesday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.wednesday]];
  }

  get thursday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.thursday]];
  }

  get friday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.friday]];
  }

  get saturday(): RangeValue {
    return this.timeRangeValues[this.daysOfWeek[this.daysOfWeek.saturday]];
  }
  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'Saving Schedule...',
      spinner: 'circles',
    });
    this.salonId = await this.getSalonId();
    await this.getSalonSchedule();
  }

  onIonChange(ev: Event) {
    const rangeElement = (ev as RangeCustomEvent);
    const name = rangeElement.target.attributes.getNamedItem('ng-reflect-name').nodeValue;
    this.dayScheduleValues[name] = rangeValueToTimeRange(rangeElement.detail.value);
  }


  async getSalonId(){
    if (this.authService.auth.currentUser == null)
      {return null;}

    const q = query(collection(this.firestoreService.firestore, 'salon'), where('uid', '==', this.authService.auth.currentUser.uid));

    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty){
      return null;
    }

    return querySnapshot.docs[0].id;
  }
  async saveSchedule() {
    if (this.salonId == null)
      {return;}

    this.loading.setAttribute('message', 'Saving Schedule...');
     await this.loading.present();

    const salonCalendarRef = doc(this.firestoreService.firestore, this.salonCalendarCollection, this.salonId);

    await setDoc(salonCalendarRef, {
      dailySchedule: this.dayScheduleValues
    }, { merge: true });

    await this.loading.dismiss();
  }
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
        const rangeValue = timeRangeToRangeValue(value);
        this.timeRangeValues[enumValue] = rangeValue;
      } else {
        this.dayScheduleValues[key] = defaultTimeString;
        this.timeRangeValues[enumValue] = this.defaultTimeRange;
      }
    });
  }
  setDefaultSalonSchedule() {
    this.dayScheduleValues[this.daysOfWeek.sunday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.monday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.tuesday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.wednesday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.thursday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.friday] = rangeValueToTimeRange(this.defaultTimeRange);
    this.dayScheduleValues[this.daysOfWeek.saturday] = rangeValueToTimeRange(this.defaultTimeRange);
  }


}


export const salonCalendarConverter = {
  toFirestore: (salonCalendar: { dailySchedule: any }) => ({
          name: salonCalendar.dailySchedule
      }),
  fromFirestore: (snapshot: { data: (arg0: any) => any }, options: any) => {
      const data = snapshot.data(options);
      return new SalonCalendar(data.dailySchedule);
  }
};

export class SalonCalendar {
  dailySchedule: Map<string, string>;
  constructor(dailySchedule: Map<string, string>) {
      this.dailySchedule = dailySchedule;
  }
  toString() {
      return this.dailySchedule;
  }
}

export const rangeValueToTimeRange = (rangeValue: RangeValue )=>{
  let lowerValue = 16;
  let upperValue = 34;
  if (typeof rangeValue !== 'number') {
    lowerValue = rangeValue.lower;
    upperValue = rangeValue.upper;
  }

  const lowerHour = parseInt(`${lowerValue / 2}`, 10);
  const lowerMinute = (lowerValue % 2) * 30;

  const upperHour = parseInt(`${upperValue / 2}`, 10);
  const upperMinute = (upperValue % 2) * 30;

  let lowerTime = `${lowerHour}:${lowerMinute}`;
  lowerTime = moment(lowerTime, 'HH:mm').format('h:mm A');

  let upperTime = `${upperHour}:${upperMinute}`;
  upperTime = moment(upperTime, 'HH:mm').format('h:mm A');

  return `${lowerTime}  - ${upperTime}`;
};

export const timeRangeToRangeValue = (timeRange: string )=>{
  const splitTime = timeRange.split('-');
  const lowerTime = splitTime[0];

  let lowerHour = parseInt(moment(lowerTime, 'h:mm A').format('HH'), 10) * 2;
  const lowerMinute = parseInt(moment(lowerTime, 'h:mm A').format('mm'), 10);

  if (lowerMinute > 0)
  {lowerHour += 1;}

  const upperTime = splitTime[1];

  let upperHour = parseInt(moment(upperTime, 'h:mm A').format('HH'), 10) * 2;
  const upperMinute = parseInt(moment(upperTime, 'h:mm A').format('mm'), 10);

  if (upperMinute > 0)
  {upperHour += 1;}

  return {lower: lowerHour, upper: upperHour};
};
