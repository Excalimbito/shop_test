import { combineReducers } from 'redux';

import cart, {
  Actions as CartActions,
  Types as CartTypes
} from './cart';

export default combineReducers({
  cart
})

export {
  CartActions
}

export {
  CartTypes
}