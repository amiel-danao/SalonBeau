import { Component, OnInit } from '@angular/core';
import { Auth} from '@angular/fire/auth';
import { ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';
import emailjs, { EmailJSResponseStatus, init} from '@emailjs/browser';
import {updateDoc} from "@angular/fire/firestore";
import {doc} from "firebase/firestore";


@Component({
  selector: 'app-apptsched',
  templateUrl: './apptsched.page.html',
  styleUrls: ['./apptsched.page.scss'],
})
export class ApptschedPage implements OnInit {
  public appointments: Array<any> = [];

  salonId = '';
  userId: any = localStorage.getItem('user');
  constructor(private firestoreService: FirestoreService,
    private auth: Auth,
    private toast: ToastController,

) {}

  ngOnInit() {
    this.getSalonData();
  }


  getSalonData() {

    // returns the salon of a user; depends on user ID
    this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
      console.log(res);
      this.salonId = res[0].id;
      this.getSalonAppointment(this.salonId);
    });
  }

  getSalonAppointment(id: any) {
    // returns the appointments based on salon
    this.firestoreService.getAppointmentsBySalon(id).subscribe((res) => {
      console.log(res);
      this.appointments = res;
    });
  }
  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });

    await toast.present();
  }

// ACCEPTED EMAIL NOTIF
async sendEmailNotif(name: string, email: string, appointmentId: string) {
  const salonProgressRef = doc(this.firestoreService.firestore, 'Appointment', appointmentId);
  await updateDoc(salonProgressRef, {progress: 'accepted'});

  const data = {
    toEmail: email,
    name,
  };
  const gmailConfig = "service_w6x4ayq";
  const templateId = "template_dctp3kj";
  const publicKey = "dOs8mWHCTDEax3WJg";

  emailjs
    .send(gmailConfig, templateId, data, publicKey)
    .then((res: EmailJSResponseStatus) => {
      console.log(res.text);
      this.presentToast('Email Sent');
    });
}

// DENIED EMAIL NOTIF
async sendEmailNotif2(name: string, email: string, appointmentId: string) {
  const salonProgressRef = doc(this.firestoreService.firestore, 'Appointment', appointmentId);
  await updateDoc(salonProgressRef, {progress: 'rejected'});

  let data = {
    email: email,
    name: name,
  };

  const gmailConfig = "service_w6x4ayq";
  const templateId = "template_mn69e4g";
  const publicKey = "dOs8mWHCTDEax3WJg";

  emailjs
    .send(gmailConfig, templateId, data, publicKey)
    .then((res: EmailJSResponseStatus) => {
      console.log(res.text);
      this.presentToast('Email Sent');
    });
}
}
