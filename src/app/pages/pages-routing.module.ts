import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProductComponent } from './products/list-product/list-product.component';
import { CreateProductComponent } from './products/create-product/create-product.component';

import { ListStoreComponent } from "./store/list-store/list-store.component";
import { CreateStoreComponent } from "./store/create-store/create-store.component";

import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { AddressRegisterComponent } from './shopping-cart/address-register/address-register.component';

const routes: Routes = [
  { path: 'products/list', component: ListProductComponent },
  { path: 'products/create', component: CreateProductComponent },
  { path: 'shops/list', component: ListStoreComponent },
  { path: 'shops/create', component: CreateStoreComponent },
  { path: 'shopping_cart', component: ShoppingCartComponent },
  { path: 'shopping_cart/address_register', component: AddressRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
