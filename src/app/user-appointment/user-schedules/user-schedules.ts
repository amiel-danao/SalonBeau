import { Component, OnInit } from '@angular/core';
import { Auth} from '@angular/fire/auth';
import { ModalController, ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-user-schedules',
  templateUrl: './user-schedules.html',
  styleUrls: ['./user-schedules.scss'],
})

export class UserSchedulePage implements OnInit {
  public appointments: Array<any> = [];
  userId: any = localStorage.getItem('user');
  constructor(private firestoreService: FirestoreService,
              private auth: Auth,
              private toast: ToastController,

  ) { }

  ngOnInit() {
    this.getSalonAppointment();
  }
  getSalonAppointment() {
    if (this.firestoreService.auth.currentUser == null){
      return;
    }
    // returns the appointments based on salon
    const email = this.firestoreService.auth.currentUser.email;
    this.firestoreService.getAppointmentsByUser(email).subscribe((res) => {
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
}
