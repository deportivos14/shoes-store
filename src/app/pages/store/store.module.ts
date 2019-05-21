import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { StoreRoutingModule } from './store-routing.module';
import { AppProductCardComponent } from './../../components/product-card/product-card.component';
import { StoreService } from './../../services/store.service';
import { NgDropFilesDirective } from './../../directives/ng-drop-files.directive';
import { CreateStoreComponent } from "./create-store/create-store.component";
import { ListStoreComponent } from './list-store/list-store.component';

@NgModule({
  declarations: [
     CreateStoreComponent,
    AppProductCardComponent,
    NgDropFilesDirective,
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
