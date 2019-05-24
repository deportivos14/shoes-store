import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { ProductService } from './../services/product.service';

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, HttpClientModule, StoreRoutingModule],
  providers: [ProductService]
})
export class StoreModule {}
