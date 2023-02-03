import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {
  public feedback: Array<any> = [];

  userId: any = localStorage.getItem('user');
  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.getSalonData();
  }

getSalonData() {
  // returns the salon of a user; depends on user ID
  this.firestoreService.getSalonDataByUid(this.userId).subscribe((res) => {
    console.log(res);

    this.getSalonfeedback(res[0].id);
  });
}
async getSalonfeedback(id: any) {
  // returns the appointments based on salon
  this.feedback = await this.firestoreService.getfeedbacksBySalon(id);
  console.log(this.feedback);
}
}
