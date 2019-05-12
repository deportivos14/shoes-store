import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AppProductCardComponent } from './../../components/product-card/product-card.component';
import { ProductService } from './../../services/product.service';
import { NgDropFilesDirective } from './../../directives/ng-drop-files.directive';

@NgModule({
  declarations: [
    ListProductComponent, 
    CreateProductComponent, 
    AppProductCardComponent,
    NgDropFilesDirective
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class ProductModule {}
