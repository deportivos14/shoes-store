import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PagesRoutingModule } from './pages-routing.module';
import { ListProductComponent } from './products/list-product/list-product.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { AppProductCardComponent } from './../components/product-card/product-card.component';
import { ProductService } from './../services/product.service';
import { NgDropFilesDirective } from './../directives/ng-drop-files.directive';

import { StoreService } from './../services/store.service';
import { CreateStoreComponent } from "./store/create-store/create-store.component";
import { ListStoreComponent } from './store/list-store/list-store.component';

@NgModule({
  declarations: [
    ListProductComponent, 
    CreateProductComponent,
    CreateStoreComponent,
    ListStoreComponent,
    AppProductCardComponent,
    NgDropFilesDirective
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ProductService, StoreService]
})
export class PagesModule {}
