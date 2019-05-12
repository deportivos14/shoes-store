import { Component, OnInit } from '@angular/core';
import { Product } from "./../../../models/product";
import { ProductService } from "./../../../services/product.service";
import { FileItem } from '../../../models/FileItem';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product:Product = {
    name: null,
    price: null,
    discount_price: null,
    image: null,
    stock: null,
    size: null,
    available_color: null,
    description: null,
    sex: null,
    published: null
  }

  files: FileItem[] = [];
  isAboutElement: boolean = false;

  constructor(private productServ: ProductService ) { }

  ngOnInit() {
  }

  saveData(dataForm){
    console.log(dataForm.value);
  }

  uploadImages() {
    this.productServ.uploadImagesFirebase( this.files );
  }

  testElement( event ) {
    console.log( event );
  }

}
