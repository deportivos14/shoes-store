import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private db: AngularFirestore) { }

  createUser( store ) {
    return this.db.collection('stores').add( store );
  }
}

