import { put, select } from 'redux-saga/effects';

import { CartTypes } from '../ducks';

function* addProductToCart(payload) {
  const { products } = yield select(store => store.cart);
  const cartProd = {
    quantity: 1,
    product: payload.newProduct
  }

  products.push(cartProd)

  yield put({
    type: CartTypes.ADD_PRODUCT_SAGA,
    products
  })
}

export {
  addProductToCart
}