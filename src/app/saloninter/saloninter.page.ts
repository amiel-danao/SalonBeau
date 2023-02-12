import { Component, OnInit } from '@angular/core';
import {
  arrayUnion,
  collection,
  Firestore,
  getDocs,
  query, updateDoc,
  where,
} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {addDoc, doc} from 'firebase/firestore';
import { FirestoreService } from '../services/firestore.service';
import {
  DaysOfWeek,
  getSalonSchedule,
  rangeValueToTimeRange, setDefaultSalonSchedule,
  timeRangeToRangeValue
} from '../salon/manageschedule/manage-schedule-page.component';

@Component({
  selector: 'app-saloninter',
  templateUrl: './saloninter.page.html',
  styleUrls: ['./saloninter.page.scss'],
})
export class SaloninterPage implements OnInit {
  public salonData: Array<any> = [];
  public servicesSalonData: Array<any> = [];
  public feedback= '';
  public loading: HTMLIonLoadingElement;
  public daysOfWeek = DaysOfWeek;
  dayScheduleValues: { [id: string]: string } = {};
  salonSchedule: Array<{ [id: string]: string }> = [];
  defaultTimeRange = { lower: 16, upper: 34 };
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: false,
  };
  rating: any;
  idParams: any;
  uid: any;
  userDataArray: Array<any> = [];

  constructor(
    private firestoreService: FirestoreService,
    private activatedRoute: ActivatedRoute,
    private firestore: Firestore,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
  ) {
    this.idParams = this.activatedRoute.snapshot.params.id;
    this.uid = localStorage.getItem('user');
    console.log(this.idParams);
  }
  async ngOnInit() {
    this.loading = await this.loadingCtrl.create({
      message: 'loading schedule...',
      spinner: 'circles',
    });

    await this.firestoreService.getSpecificSalon(this.idParams).subscribe((res) => {
      this.salonData = res;
      console.log(this.salonData);
    });

    if (this.idParams === ''){
      setDefaultSalonSchedule(this.dayScheduleValues, this.defaultTimeRange);
    }
    else {
      await this.fetchSalonSchedule();
    }

    Object.entries(this.daysOfWeek).forEach(([key, enumValue]) => {
      this.salonSchedule.push({key, value: this.dayScheduleValues[key]});
    });

    this.getServicesSalon();
    this.getUserData();
  }

  async fetchSalonSchedule() {
    await this.loading.present();

    await getSalonSchedule(this.idParams, this.firestoreService.firestore,
      ()=> setDefaultSalonSchedule(this.dayScheduleValues, this.defaultTimeRange),
      (salonCalendar) => this.dayScheduleValues = salonCalendar.dailySchedule);
    await this.loading.dismiss();
    const defaultTimeString = rangeValueToTimeRange(this.defaultTimeRange);
    Object.entries(this.daysOfWeek).forEach(([key, enumValue]) => {
      if (!(key in this.dayScheduleValues)) {
        this.dayScheduleValues[key] = defaultTimeString;
      }
    });
  }

  getUserData(){
    const userData = collection(this.firestore, 'customer');
    const userSpecific = query(userData, where('uid', '==',this.uid));

    getDocs(userSpecific).then((res) => {
      this.userDataArray = [
        ...res.docs.map((document: any) => ({ ...document.data(), id: document.id })),
      ];
      console.log(this.userDataArray);
    });

  }
  getServicesSalon() {
    const servicesInstance = collection(this.firestore, 'services');

    const servicesQ = query(
      servicesInstance,
      where('salonId', '==', this.idParams)
    );

    getDocs(servicesQ).then((res) => {
      this.servicesSalonData = [
        ...res.docs.map((document: any) => ({ ...document.data(), id: document.id })),
      ];

      console.log(this.servicesSalonData);
    });
  }
  async onSubmit() {

    const data = {
      review: this.feedback,
      salonId: this.idParams,
      customerID: this.uid,
      star: this.rating,
    };

    if (data.star === undefined){
      await this.presentToast('no rating selected!');
      return;
    }
    console.log(data);

    try{
      const salonRatingRef = doc(this.firestore, 'salon', this.idParams);
      await updateDoc(salonRatingRef, {
        ratings: arrayUnion(this.rating)
      });
      const addFeedback = collection(this.firestore, 'feedback');
      await addDoc(addFeedback, data);
      await this.presentToast('Feedback submitted successfully, Thank you!');
    } catch (e) {
      await this.presentToast(e);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position:'bottom'
    });

    await toast.present();
  }
}
export interface SalonData {
  ratings: string[];
  logoUrl: string;
  email: string;
  salonLocation: string;
  salonName: string;
  contactNumber: string;
  id: string;
}

