import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Address } from "./../models/Address";

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private COLLECTION = "addresses";

  constructor(private db: AngularFirestore) { }

  createAddress( address:Address ) {
    return this.db.collection(this.COLLECTION).add( address );
  }

  getAddressess() {
    return this.db.collection(this.COLLECTION).get();
  }

  getAddress( id:string ) {
    //return this.db.collection(this.COLLECTION).doc(id).get();
    return this.db.collection(this.COLLECTION).doc(id).valueChanges();
  }
}
