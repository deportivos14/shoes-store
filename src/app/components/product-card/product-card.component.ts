import { Component, OnInit, Input } from '@angular/core';
import { Product } from "../../models/product";
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Store, select } from '@ngrx/store';
import { IncrementProduct, DecrementProduct } from 'src/app/actions/shopping_cart.actions';
import { MountIncrement, MountDecrement } from 'src/app/actions/mount_cart.actions';

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
  countProducts: number;
  shopping_cart: Observable<Object>;

  //@Output() productSelected: EventEmitter<number>;

  constructor(private storage: AngularFireStorage, private storeProduct: Store<{ shopping: number }>, private cartProduct: Store<{ mount: number }>) { 
    this.shopping_cart = storeProduct.pipe( select('shopping_cart'));
    this.shopping_cart.subscribe( (res: Product[]) => this.countProducts = res.length )
  }

  async ngOnInit() {
    const ref = this.storage.ref(`img/${ this.product.id }`);
    this.profileUrl = ref.getDownloadURL();
  }

  addShoppingCart() {
    if (this.flag_shopping_cart) {
      this.flag_shopping_cart = !this.flag_shopping_cart;
      this.storeProduct.dispatch( new DecrementProduct( this.product ) );
      this.cartProduct.dispatch( new MountDecrement( this.product ) );
    } else {
      this.flag_shopping_cart = !this.flag_shopping_cart;
      this.storeProduct.dispatch( new IncrementProduct( this.product ) );
      this.cartProduct.dispatch( new MountIncrement( this.product ) );
    }
  }

}
