import { Component, OnInit } from '@angular/core';
import { Product } from "./../../../models/product";
import { ProductService } from "./../../../services/product.service";
import { FileItem } from '../../../models/FileItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = {
    id: null,
    name: null,
    price: null,
    discount_price: null,
    image: null,
    stock: null,
    size: null,
    available_color: null,
    description: null,
    sex: null,
    published: true
  }

  files: FileItem[] = [];
  isAboutElement: boolean = false;

  dropdownList = [
    { item_id: 1, item_text: 'Rojo' },
    { item_id: 2, item_text: 'Azul' },
    { item_id: 3, item_text: 'Verde' },
    { item_id: 4, item_text: 'Blanco' },
    { item_id: 5, item_text: 'Amarillo' }
  ];
  dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 5,
    allowSearchFilter: true
  };

  constructor(private productServ: ProductService, private router: Router ) { }

  ngOnInit() {
  }

  saveData(){
    this.productServ.add( this.product ).subscribe( res => {
      //console.log(res.name);
      this.productServ.uploadImagesFirebase( res.name, this.files );
      this.router.navigate(['/products']);
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  uploadImages() {
    //this.productServ.uploadImagesFirebase( this.files );
  }

  cleanFiles() {
    this.files = [];
  }



}
