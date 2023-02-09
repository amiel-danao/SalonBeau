import { Injectable } from '@angular/core';
import { Auth, updateProfile } from '@angular/fire/auth';
import {
  addDoc,
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { from, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(public firestore: Firestore, public auth: Auth,) {}

  getSalonData(): Observable<any> {
    const salonDb = collection(this.firestore, 'salon');

    return from(
      getDocs(salonDb).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }
  getSalonDataByUid(id): Observable<any> {
    const salonDb = collection(this.firestore, 'salon');
    const salonquery = query(salonDb, where('uid', '==', id));

    return from(
      getDocs(salonquery).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }
  getSpecificSalon(id: any): Observable<any> {
    const salonDb = doc(this.firestore, 'salon/' + id);

    return from(
      getDoc(salonDb).then((res) => {
        return [{ ...res.data(), id: res.id }];
      })
    );
  }

  async signUp(data: any) {
    const usersInstance = collection(this.firestore, 'customer');
    try {
      const createUser = await createUserWithEmailAndPassword(
        this.auth,
        data.email,
        data.password
      );

      const data2 = {
        ...data,
        uid: createUser.user.uid,
        type: 'customer',
      };
      return from([
        updateProfile(createUser.user, {
          displayName: data.firstName,
        })
          .then((res) => [
              addDoc(usersInstance, data2)
                .then((result) => ({
                    status: 'success',
                    message: 'Customer Registered Successfully',
                  }))
                .catch((err) => ({
                    status: 'error',
                    message: err,
                  })),
            ])
          .catch((err) => ({
              status: 'error',
              message: err,
            })),
      ]);
    }
    catch (err) {
      return {
        status: 'error',
        message: err,
      };
    }
  }

  // get Appointments

  getAppointments() {
    const appointmentsDb = collection(this.firestore, 'Appointment');

    return from(
      getDocs(appointmentsDb).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }
  getAppointmentsBySalon(id: any) {
    const appointmentsDb = collection(this.firestore, 'Appointment');

    const salonquery = query(appointmentsDb, where('salonId', '==', id),orderBy('date','desc'));

    return from(
      getDocs(salonquery).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }

  getAppointmentsByUser(email: any) {
    const appointmentsDb = collection(this.firestore, 'Appointment');

    const salonquery = query(appointmentsDb, where('email', '==', email),orderBy('date','desc'));

    return from(
      getDocs(salonquery).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }
  // get Specific appoints required ID

  getSpecificAppointments(id: any) {
    const appointmentsDb = doc(this.firestore, 'Appointment/', id);

    return from(
      getDoc(appointmentsDb).then((res) => {
        return [res.data()];
      })
    );
  }

  // get Services per Salon
  async getServicesBySalonId(id: any) {
    const services = collection(this.firestore, 'services');

    const servicesQ = query(services, where('salonId', '==', id));

    // return from(
    //   getDocs(servicesQ).then((res) => {
    //     return [
    //       ...res.docs.map((doc: any) => {
    //         return { ...doc.data(), id: doc.id };
    //       }),
    //     ];
    //   })
    // );

    const snapshot = await getDocs(servicesQ);

    return snapshot.docs.map(value => {
      return {
        subCategory: value.data()['subCategory'],
        cost: value.data()['cost']
      };
    });
  }

  // get feedback

  getfeedback() {
    const feedback = collection(this.firestore, 'feedback');

    return from(
      getDocs(feedback).then((res) => {
        return [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      })
    );
  }
  async getfeedbacksBySalon(id: any) {
    const feedback = collection(this.firestore, 'feedback');

    const salonquery = query(feedback, where('salonId', '==', id));

    // return from(
    //   getDocs(salonquery).then((res) => {
    //     return [
    //       ...res.docs.map((doc: any) => {
    //         return { ...doc.data(), id: doc.id };
    //       }),
    //     ];
    //   })
    // );

    const snapshot = await getDocs(salonquery);

    return snapshot.docs.map(value => {
      return {
        customerID: value.data()['customerID'],
        review: value.data()['review'],
        salonId: value.data()['salonId'],
        star: value.data()['star'],
      };
    });
  }

  // get stylist per salon
  async getstylistBySalonId(id: any) {
    const stylist = collection(this.firestore, 'stylist');

    const stylistQ = query(stylist, where('salonId', '==', id));

    // return from(
    //   getDocs(stylistQ).then((res) => {
    //     return [
    //       ...res.docs.map((doc: any) => {
    //         return { ...doc.data(), id: doc.id };
    //       }),
    //     ];
    //   })
    // );
    const snapshot = await getDocs(stylistQ);

    return snapshot.docs.map(value => value.data()['stylist'] as string[]);
  }

  }




