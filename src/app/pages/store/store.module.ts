import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { StoreRoutingModule } from './store-routing.module';
import { StoreService } from './../../services/store.service';
import { CreateStoreComponent } from "./create-store/create-store.component";
import { ListStoreComponent } from './list-store/list-store.component';

@NgModule({
  declarations: [
    CreateStoreComponent,
    ListStoreComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule, 
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [StoreService]
})
export class StoreModule {}
