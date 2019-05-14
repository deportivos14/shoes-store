import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../models/product";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class AppProductCardComponent implements OnInit {

  profileUrl: Observable<string | null>;
  @Input() product: Product;
  @Input() id: number;
  text_dark: boolean = true;
  text_red: boolean = true;

  //@Output() productSelected: EventEmitter<number>;

  constructor(private storage: AngularFireStorage) { }

  async ngOnInit() {
    const ref = this.storage.ref(`img/${ this.product.id }`);
    this.profileUrl = ref.getDownloadURL();
    console.log(this.product.id);
  }

}
