import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../models/product";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement } from 'src/app/counter.actions';
import { IncrementProduct, DecrementProduct } from 'src/app/shopping_cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class AppProductCardComponent implements OnInit {

  profileUrl: Observable<string | null>;
  @Input() product: Product;
  @Input() id: number;
  flag_shopping_cart: boolean = false;
  text_red: boolean = true;
  countProducts: Observable<number>;
  shopping_cart: Observable<Object>;

  //@Output() productSelected: EventEmitter<number>;

  constructor(private storage: AngularFireStorage, private store: Store<{ count: number }>, private storeProduct: Store<{ shopping: number }>) { 
    this.countProducts = store.pipe( select('count'));
    this.shopping_cart = storeProduct.pipe( select('shopping_cart'));
  }

  async ngOnInit() {
    const ref = this.storage.ref(`img/${ this.product.id }`);
    this.profileUrl = ref.getDownloadURL();
  }

  addShoppingCart() {
    if (this.flag_shopping_cart) {
      this.flag_shopping_cart = !this.flag_shopping_cart;
      //this.store.dispatch( new Decrement() );
      this.storeProduct.dispatch( new DecrementProduct( this.product ) );
    } else {
      this.flag_shopping_cart = !this.flag_shopping_cart;
      //this.store.dispatch( new Increment() );
      this.storeProduct.dispatch( new IncrementProduct( this.product ) );
    }
  }

}
