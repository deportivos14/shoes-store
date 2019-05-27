import { Action } from '@ngrx/store';
import { Product } from './models/product';

export enum ActionTypes {
  IncrementProduct = '[Shopping Component] IncrementProduct',
  DecrementProduct = '[Shopping Component] DecrementProduct',
  ResetProduct = '[Shopping Component] ResetProduct',
}

export class IncrementProduct implements Action {
  type = ActionTypes.IncrementProduct;
  payload?: Product;

  constructor(product: Product) {
    this.payload = product;
  }
}

export class DecrementProduct implements Action {
  readonly type = ActionTypes.DecrementProduct;
  payload?: Product;

  constructor(product: Product) {
    this.payload = product;
  }
}

export class ResetProduct implements Action {
  readonly type = ActionTypes.ResetProduct;
  payload?: Product;
  
  constructor(product: Product) {
    this.payload = product;
  }
}

export interface ProductAction extends Action {
  type: string;
  payload?: any;
}