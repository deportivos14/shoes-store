import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase";

import { Product } from '../models/product';
import { FileItem } from '../models/FileItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private IMAGES_FOLDER = "img"

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
  }

  private saveImage( image: { name: string, url: string } ){
    this.db.collection(`/${ this.IMAGES_FOLDER}`).add( image )
  }

  uploadImagesFirebase( images: FileItem[] ) {
    console.log(images);
  }

}
