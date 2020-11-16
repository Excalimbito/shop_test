import { all, takeLatest } from 'redux-saga/effects';

import { CartTypes } from '../ducks'
import {
  addProductToCart,
  addQuantity,
  removeProduct,
  removeQuantity
} from './cart';

export default function* rootSaga() {
  return yield all([
    yield takeLatest(CartTypes.ADD_PRODUCT, addProductToCart),
    yield takeLatest(CartTypes.REMOVE_PRODUCT, removeProduct),
    yield takeLatest(CartTypes.ADD_QUANTITY, addQuantity),
    yield takeLatest(CartTypes.REMOVE_QUANTITY, removeQuantity)
  ])
}