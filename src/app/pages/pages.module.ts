import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PagesRoutingModule } from './pages-routing.module';
import { AppProductCardComponent } from './../components/product-card/product-card.component';
import { ShoppingCartComponentItem } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ProductService } from './../services/product.service';
import { NgDropFilesDirective } from './../directives/ng-drop-files.directive';

//products
import { ListProductComponent } from './products/list-product/list-product.component';
import { CreateProductComponent } from './products/create-product/create-product.component';

import { StoreService } from './../services/store.service';
import { AddressService } from './../services/address.service';
import { PaymentService } from './../services/payment.service';

//shops
import { CreateStoreComponent } from "./store/create-store/create-store.component";
import { ListStoreComponent } from './store/list-store/list-store.component';

//cart
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AddressRegisterComponent } from './shopping-cart/address-register/address-register.component';
import { PaymentsComponent } from './payments/payments.component';
import { MakePaymentComponent } from './payments/make-payment/make-payment.component';

@NgModule({
  declarations: [
    ListProductComponent, 
    CreateProductComponent,
    CreateStoreComponent,
    ListStoreComponent,
    AppProductCardComponent,
    ShoppingCartComponentItem,
    NgDropFilesDirective,
    ShoppingCartComponent,
    AddressRegisterComponent,
    PaymentsComponent,
    MakePaymentComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ProductService, StoreService, AddressService, PaymentService]
})
export class PagesModule {}
