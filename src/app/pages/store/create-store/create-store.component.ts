import { Component, OnInit } from '@angular/core';
import { StoreService } from "./../../../services/store.service";
//import { store } from '@angular/core/src/render3';
@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  store={
    name:null,
    nit:null,
    direccion:null

  }


  constructor(private storeServ:StoreService) { }

  ngOnInit() {
  }


  saveData(){
    console.log(this.store)
    this.storeServ.createUser(this.store).then( res => {
      console.log(res)

    })
  }

}
