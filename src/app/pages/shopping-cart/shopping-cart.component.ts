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
  
  constructor(private storage: AngularFireStorage, private storeProduct: Store<{ shopping_cart: Array<Product[]> }>) { 
    this.shopping_cart = storeProduct.pipe( select('shopping_cart'));
    this.shopping_cart.subscribe( res => {
      console.log(res);
    })
  }

  ngOnInit() {
  }

  getUrl( name: string ){
    const ref = this.storage.ref(`img/${ name }`);
    console.log("url del producto", ref.getDownloadURL());
    return ref.getDownloadURL();
  }

}
