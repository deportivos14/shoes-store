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

  dropdownListSize = [
    { item_id: 37, item_text: 'Talla 37' },
    { item_id: 32, item_text: 'Talla 32' },
  ];

  dropdownListSex = [
    { item_id: 'man', item_text: 'Hombre' },
    { item_id: 'woman', item_text: 'Mujer' },
  ];

  dropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  filters = {
    size: null,
    sex: null,
  }

  constructor(private productService: ProductService, private db: AngularFirestore) {}

  ngOnInit(): void {
    let datos = [];
    this.db.collection('products').get().subscribe( ( res ) => {
      res.forEach( ( doc ) => {
        let product = doc.data();
        product.id = doc.id;
        product.image = doc.id;
        datos.push(product);
      });
    });
    this.products = datos;
  }

  onItemSelect(event) {
    this.products = [];
    let datos = [];
    //let selected = this.filters.size[0].item_id;
    let selected = event.item_id;
    console.log(event.item_id)
    this.db.collection("products", ref => ref.where('size', '==', event.item_id))
                                            .get().subscribe( res => {
      res.forEach( ( doc ) => {
        let product = doc.data();
        product.id = doc.id;
        product.image = doc.id;
        datos.push(product);
      })
    });

    this.products = datos;
  }

  /*
  this.products = [];
    let datos = [];

    this.db.collection("products", ref => ref.where('published', '==', true)
                                            .where('name', '==', "Calzado infantil Zapatillas"))
                                            .get().subscribe( res => {
      res.forEach( ( doc ) => {
        console.log("datos", doc.data());
        let product = doc.data();
        product.id = doc.id;
        product.image = doc.id;
        datos.push(product);
      })
    });

    this.products = datos;
    */


}
