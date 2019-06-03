import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Product } from '../../models/product';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shopping_cart: Observable<Object>;
  mount_cart: Observable<Number>;
  
  constructor(private storage: AngularFireStorage, private storeProduct: Store<{ shopping_cart: Array<Product[]> }>, private storeCart: Store<{ mount_cart: Number }>) { 
    this.shopping_cart = storeProduct.pipe( select('shopping_cart'));
    this.mount_cart = storeCart.pipe( select('mount_cart') );
  }

  ngOnInit() {
  }

  getUrl( name: string ){
    const ref = this.storage.ref(`img/${ name }`);
    return ref.getDownloadURL();
  }

}
