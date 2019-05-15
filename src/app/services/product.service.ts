import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import * as firebase from "firebase";

import { Product } from '../models/product';
import { FileItem } from '../models/FileItem';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private IMAGES_FOLDER = "img"
  productURL:string = `${ environment.firebase.databaseURL }/products.json`;
  database = firebase.database();

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  add( product:Product ) {
    let body = JSON.stringify( product );
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.productURL, body, { headers });
  }

  createUser( product:Product ) {
    return this.db.collection('products').add( product );
  }

  getProducts( ){
    return this.http.get<Product[]>( this.productURL );
  }

  getProductsFiltered() {
    return firebase.database().ref('products').orderByChild('starCount');
  }

  uploadImagesFirebase( name_product:String, images: FileItem[] ) {
    const storageRef = firebase.storage().ref();

    for (const item of images) {
      item.uploading = true;
      if (item.progress >= 100) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.IMAGES_FOLDER }/${ name_product }`).put( item.file );

      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, 
        ( snapshot: firebase.storage.UploadTaskSnapshot ) => 
                    item.progress = ( snapshot.bytesTransferred / snapshot.totalBytes )*100,
        ( error ) => console.error("error al subir"),
        () => {
          console.log( "Imagen cargada correctamente " );

          item.uploading = false;

        }   
      )
    }
  }

}
