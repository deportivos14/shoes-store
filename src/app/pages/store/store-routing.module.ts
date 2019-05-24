import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ListProductComponent } from './list-product/list-product.component';
//import { CreateProductComponent } from './create-product/create-product.component';
import { CreateStoreComponent } from "./create-store/create-store.component";
import { ListStoreComponent } from "./list-store/list-store.component";
const routes: Routes = [
  {
    path: 'list',
    component: ListStoreComponent
  },
  {
    path: 'create',
    component: CreateStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule {}
