import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductService } from './../../../services/product.service';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Array<Object> = [];

  constructor(private productService: ProductService) {}

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
    })
    //this.products = this.productService.getProducts();
  }
}
