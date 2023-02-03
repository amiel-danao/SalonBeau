import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-stylist',
  templateUrl: './stylist.page.html',
  styleUrls: ['./stylist.page.scss'],
})
export class StylistPage implements OnInit {
  public stylist: string = '';
 
  public salonId: string = '';
  userId: any = localStorage.getItem('user');

  constructor(
    private firestore: Firestore,
    private firestoreService: FirestoreService,
    private toast: ToastController,
    private router: Router
  ) {}
  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });

    toast.present();
  }

  clear() {
    (this.stylist = '');
  }
  ngOnInit() {
    this.getSalonData();
  }
  getSalonData() {
    // returns the salon of a user; depends on user ID
    this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
      console.log(res);

      this.salonId = res[0].id;
      this.getstylist(res[0].id);
    });
  }

  // adding stylist
  addstylist() {
    // validation if fields are empty
    if (this.stylist == '') {
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
      stylist: this.stylist,
     
      salonId: this.salonId,

     
    };
    // firestore database instance

    const servicesInstance = collection(this.firestore, 'stylist');
    // firebase functin for adding data to stylist table
    addDoc(servicesInstance, data)
      .then((res) => {
        this.clear();
        this.presentToast('Stylist added');

        this.router.navigate(['/dashboard']);
      })
      .catch((err) => {
        this.clear();

        console.log(err);
      });
  }

  // gettingStylits by salon Id
  async getstylist(id) {
    console.log(this.salonId);
    const stylists = await this.firestoreService.getstylistBySalonId(id);
    console.log(stylists);
  }
}