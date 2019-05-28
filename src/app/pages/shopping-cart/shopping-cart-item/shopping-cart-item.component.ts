import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../../models/product';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartComponentItem implements OnInit {
  
    @Input() product: Product;
    profileUrl: Observable<string | null>;
    
    constructor(private storage: AngularFireStorage) { }

    ngOnInit() {
        const ref = this.storage.ref(`img/${ this.product.id }`);
        this.profileUrl = ref.getDownloadURL();
    }

}
