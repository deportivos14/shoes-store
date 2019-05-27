import { Action } from '@ngrx/store';
import { ActionTypes, ProductAction } from './shopping_cart.actions';

export const initialState = [];

export function shoppingReducer(state = initialState, action: ProductAction) {
    const product = action.payload;
    const products = state.slice();
    switch (action.type) {
        case ActionTypes.IncrementProduct:
            products.push(product);

            return products;
        
        case ActionTypes.DecrementProduct:
            return state.filter( (item, index) => {
                console.log(item)
                if (item.id === product.id) {
                    return false
                }
                return true;
            } );

        default:
            return state;
  }
}