import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignUpPage implements OnInit {
  public signUpForm: FormGroup = new FormGroup({});

  public firstName: string = '';
  public lastName: string = '';

  public email: string = '';
  public gender: string= '';
  public password: string = '';
  public cPassword: string = '';
  pwdIcon ="eye-outline";
  showPwd = false;

  togglePwd(){
    this.showPwd = !this.showPwd;
    this.pwdIcon = this.showPwd ? "eye-off-outline" : "eye-outline";
 
  }

  constructor(
    private firestoreService: FirestoreService,
    private toast: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildSignUpForm();
  }

  buildSignUpForm() {
    this.signUpForm = new FormGroup({
      email: new FormControl({ value: '', disabled: false }),
      firstName: new FormControl({
        value: '',
        disabled: false,
      }),
      lastName: new FormControl({
        value: '',
        disabled: false,
      }),
      password: new FormControl({
        value: '',
        disabled: false,
      }),
    });
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
    });

    toast.present();
  }

  onSubmit() {
    if(this.firstName != "" || this.lastName != "" || this.gender != "" || this.email != "" || this.password != "" || this.cPassword != ""){
      if(this.password == this.cPassword){
        let data = {
          firstName: this.firstName,
          lastName: this.lastName,
         gender: this.gender,
          email: this.email,
    
          password: this.password,
        };
        
        this.firestoreService
          .signUp(data)
          .then((res) => {
            console.log(res);
    
            this.presentToast('Customer successfully registered');
            this.router.navigate(['/customer-login'])
    
    
            // this.toast.create()
          })
          .catch((err) => {
            console.log('error', err.code);
            this.presentToast(err.code);
          });
      }
      else{
        this.presentToast("Password does not match");
      }
    }
    else{
      this.presentToast("Fill up the missing fields");
    }
  }

  clear() {
    this.firstName = '';
    this.cPassword = '';
    this.password = '';

    this.gender= '';
    this.email = '';

    this.lastName = '';
  }
  
}

