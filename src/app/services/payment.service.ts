import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  userId: string;
  private COLLECTION = "payments";

  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) => {
      if (auth) this.userId = auth.uid
    });
  }

  processPayment(token: any, amount: any) {
    const payment = { token, amount }
    return this.db.collection(this.COLLECTION).add( payment );
    //return this.db.list(`/payments/${this.userId}`).push(payment)
  }

}
