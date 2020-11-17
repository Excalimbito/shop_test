import { put, call } from 'redux-saga/effects';

import { ProductsTypes } from '../ducks';
import { api } from '../../services'

const productsAPI = api("products");

function* searchProducts(payload) {
  const {data} = yield call(productsAPI.get)
  const filtredProducts = data.filter(prod => {
    if(prod.title.toLowerCase().includes(payload.searchString.toLowerCase())
      || prod.id === parseInt(payload.searchString))
    {
      return prod
    }

    return null
  })

  yield put({
    type: ProductsTypes.SEARCH_PRODUCT_SAGA,
    filtredProducts
  })
}

export {
  searchProducts
}