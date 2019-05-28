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

  countProducts: number;
  shopping_cart: Observable<Object>;
  
  constructor(private storeProduct: Store<{ shopping_cart: Array<Product[]> }>) {
    this.shopping_cart = storeProduct.pipe( select('shopping_cart'));
    this.shopping_cart.subscribe( (res: Product[]) => this.countProducts = res.length )
  }
}
