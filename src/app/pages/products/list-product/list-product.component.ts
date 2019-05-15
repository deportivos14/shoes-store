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
  items2: Observable<any[]>;
  //let datos = [];

  constructor(private productService: ProductService, private db: AngularFirestore) {}

  ngOnInit(): void {
    let datos = [];
    this.db.collection('products').get().subscribe( async ( res ) => {
      res.forEach( async ( doc ) => {
        let product = doc.data();
        product.id = doc.id;
        product.image = doc.id;
        datos.push(product);
      });
    });
    this.products = datos;
  }
}
