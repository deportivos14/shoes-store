import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  products: Observable<number>;
  countProducts: Observable<number>;
  
  constructor(private store: Store<{ shopping_cart: Array<Product[]> }>) {
    this.products = store.pipe( select('shopping_cart'));
    this.products.subscribe( res => this.countProducts = res.length );
  }
}
