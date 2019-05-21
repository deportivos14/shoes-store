import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'stores',
    loadChildren: './pages/store/store.module#StoreModule'
  },
  {
    path: 'products',
    loadChildren: './pages/products/product.module#ProductModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
