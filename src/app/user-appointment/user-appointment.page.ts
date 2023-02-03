import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';

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

  public salonId: string = '';

  public servicesList: Array<any> = ["footspa", "rebond"];
  salonServiceParams: any;

  public stylistList: Array<any> = [];
  salonstylistParams: any;

  userId: any = localStorage.getItem('user') || null;
  public userData: Array<any> = [];

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
  ngOnInit() {}

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
}
