import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { shoppingReducer } from './shopping_cart.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    StoreModule.forRoot( { shopping_cart: shoppingReducer } ),
    StoreDevtoolsModule.instrument( {
      maxAge: 25,
      logOnly: environment.production
    } )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
