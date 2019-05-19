import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as firebase from "firebase";

import { Product } from '../models/product';
import { FileItem } from '../models/FileItem';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private IMAGES_FOLDER = "img";
  private COLLECTION = "products";

  constructor(private db: AngularFirestore) { }

  createProduct( product:Product ) {
    return this.db.collection(this.COLLECTION).add( product );
  }

  getProducts() {
    return this.db.collection(this.COLLECTION).get();
  }

  getProductsFiltered(size: string, sex:string) {
    return this.db.collection(this.COLLECTION, ref => this.filter( ref, size, sex ) ).get();
  }

  filter( ref, size?, sex? ) {
    if (size && sex == null) {
      return ref.where('size', '==', size);
    }
    if (sex && size == null) {
      return ref.where('sex', '==', sex);
    }
    if (size && sex) {
      return ref.where('size', '==', size).where('sex', '==', sex);
    }
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
