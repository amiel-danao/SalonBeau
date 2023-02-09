import { Component, OnInit } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  public email = '';
  constructor(private auth: Auth,private toast: ToastController) { }

  ngOnInit() { }
  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 2000,
    });

    await toast.present();
  }
  async updatePassword() {
    if (this.email.trim().length === 0) {
      await this.presentToast('Please input your email!');
      return;
    }

    sendPasswordResetEmail(this.auth, this.email)
      .then((res: any) => {
        this.presentToast('Reset link has been sent successfully.');
      })
      .catch((err: any) => {
        this.presentToast(err);
      });
  }
}
