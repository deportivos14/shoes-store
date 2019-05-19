import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    //this.products$ = this.productsService.getProducts();
  }
}
