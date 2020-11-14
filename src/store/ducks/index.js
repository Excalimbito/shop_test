import { combineReducers } from 'redux';

import cart, {
  Actions as CartActions,
  Types as CartTypes
} from './cart';

import products, {
  Actions as ProductsActions,
  Types as ProductsTypes
} from './products';

export default combineReducers({
  cart,
  products
})

export {
  CartActions,
  ProductsActions
}

export {
  CartTypes,
  ProductsTypes
}