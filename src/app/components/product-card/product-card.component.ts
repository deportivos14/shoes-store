import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class AppProductCardComponent implements OnInit {

  @Input() product: Product;
  @Input() id: number;

  //@Output() productSelected: EventEmitter<number>;

  constructor() { }

  ngOnInit() {
  }

}
