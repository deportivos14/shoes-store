import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductsService } from './products.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'iso-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }
}
