import { Action } from '@ngrx/store';
import { Product } from '../models/product';
 
export enum ActionTypes {
  MountCartIncrement = '[Mount Cart Component] Increment',
  MountCartDecrement = '[Mount Cart Component] Decrement',
  MountCartReset = '[Mount Cart Component] Reset',
}
 
export class MountIncrement implements Action {
  readonly type = ActionTypes.MountCartIncrement;
  payload?: Product;
  
  constructor(product: Product) {
    this.payload = product;
  }
}

export class MountDecrement implements Action {
  readonly type = ActionTypes.MountCartDecrement;
  payload?: Product;
  
  constructor(product: Product) {
    this.payload = product;
  }
}

export class MountReset implements Action {
  readonly type = ActionTypes.MountCartReset;
  payload?: Product;
      
  constructor(product: Product) {
    this.payload = product;
  }
}

export interface MountAction extends Action {
  type: string;
  payload?: any;
}