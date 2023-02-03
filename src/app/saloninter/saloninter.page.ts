import { Component, OnInit } from '@angular/core';
import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { addDoc } from 'firebase/firestore';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-saloninter',
  templateUrl: './saloninter.page.html',
  styleUrls: ['./saloninter.page.scss'],
})
export class SaloninterPage implements OnInit {
  public salonData: Array<any> = [];
  public servicesSalonData: Array<any> = [];
  public feedback: string= '';
  rating: any;
  idParams: any;
  uid: any;
  userDataArray: Array<any> = [];

  constructor(
    private firestoreService: FirestoreService,
    private activatedRoute: ActivatedRoute,
    private firestore: Firestore,
    private toast: ToastController
  
    
  ) {
    this.idParams = this.activatedRoute.snapshot.params['id'];
    this.uid = localStorage.getItem('user');
    console.log(this.idParams);
  }
  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: false,
  };
  ngOnInit() {
    this.firestoreService.getSpecificSalon(this.idParams).subscribe((res) => {
      this.salonData = res;
     

      console.log(this.salonData);
    });

    this.getServicesSalon();
    this.getUserData();
   
  }

  getUserData(){
    const userData = collection(this.firestore, 'customer');
    const userSpecific = query(userData, where('uid', "==",this.uid));
 

getDocs(userSpecific).then((res) => {
  this.userDataArray = [
    ...res.docs.map((doc: any) => {
      return { ...doc.data(), id: doc.id };
    }),
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
        ...res.docs.map((doc: any) => {
          return { ...doc.data(), id: doc.id };
        }),
      ];

      console.log(this.servicesSalonData);
    });
  }
  onSubmit(){
   
let data ={
  review: this.feedback,
  salonId: this.idParams,
  customerID: this.uid,
  star: this.rating,
} ;
console.log(data)
const addFeedback = collection(this.firestore, 'feedback');

addDoc(addFeedback, data)
.then((res)=>{
  console.log(res);
  //this.presenttoast( 'Feedback submitted successfully, Thank you!);
})
.catch((err)=>{
console.log(err, err.code);
});

  }

// export interface SalonData{

// }
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

