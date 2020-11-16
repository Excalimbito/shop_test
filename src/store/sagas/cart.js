import { put, select } from 'redux-saga/effects';

import { CartTypes } from '../ducks';

function* addProductToCart(payload) {
  let { products } = yield select(store => store.cart);

  const prodArrayIndx = products.findIndex(prod => prod.product.id === payload.newProduct.id)

  if (prodArrayIndx >= 0) {
    products[prodArrayIndx].quantity++
  }
  else {
    const cartProd = {
      quantity: 1,
      product: payload.newProduct
    }
  
    products.push(cartProd)
  }

  yield put({
    type: CartTypes.ADD_PRODUCT_SAGA,
    products
  })
}

function* removeProduct(payload) {
  let { products } = yield select(store => store.cart);

  products = products.filter(prod => prod.product.id !== payload.productID)

  yield put({
    type: CartTypes.REMOVE_PRODUCT_SAGA,
    products
  })
}

function* addQuantity(payload) {
  const { products } = yield select(store => store.cart);

  products.some(prod => {
    if (prod.product.id === payload.productID) {
      prod.quantity++
      return true
    }

    return null
  })

  yield put({
    type: CartTypes.ADD_QUANTITY_SAGA,
    products
  })
}

function* removeQuantity(payload) {
  const { products } = yield select(store => store.cart);

  products.some(prod => {
    if (prod.product.id === payload.productID) {
      prod.quantity--
      return true
    }

    return null
  })

  yield put({
    type: CartTypes.REMOVE_QUANTITY_SAGA,
    products
  })
}

export {
  addProductToCart,
  addQuantity,
  removeQuantity,
  removeProduct
}