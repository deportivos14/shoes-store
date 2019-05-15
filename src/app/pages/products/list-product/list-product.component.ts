import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Array<Object> = [];
  items: Observable<any[]>;

  constructor(private productService: ProductService, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      const array = Object.keys(res).map(function(key, index) {
        return {
          id: key,
          name: res[key].name,
          price: res[key].price,
          discount_price: res[key].discount_price,
          available_color: res[key].available_color,
          stock: res[key].stock,
          description: res[key].description,
          size: res[key].size,
          sex: res[key].sex,
          published: res[key].published,
        };
      });
      this.products = array;
      console.log(this.products);
        //console.log("datos", this.products);
    });

    this.items = this.db.collection('products').stateChanges().subscribe( res => {
      console.log("dato uno a uno", res);
    });
    //console.log("data", this.items);
    
    //console.log(this.productService.getProductsFiltered());
  }
}
