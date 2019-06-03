import { Action } from '@ngrx/store';
import { ActionTypes, MountAction } from '../actions/mount_cart.actions';
 
export const initialState = 0;
 
export function mountCartReducer(state = initialState, action: MountAction) {
  const product = action.payload;
  console.log("redux values", product)
  switch (action.type) {
    case ActionTypes.MountCartIncrement:
      return state + parseInt(product.discount_price);
 
    case ActionTypes.MountCartDecrement:
      return state - parseInt(product.discount_price);
 
    case ActionTypes.MountCartReset:
      return 0;
 
    default:
      return state;
  }
}