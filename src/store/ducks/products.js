export const Types = {
  SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
  SEARCH_PRODUCT: 'SEARCH_PRODUCT'
}

const INITIAL_STATE = {
  products: []
}

export default function productsReducer(state = INITIAL_STATE, payload)
{
  switch(payload.type)
  {
    case Types.SET_PRODUCT_LIST:
      return {...state, products: payload.productList}
    default:
      return state
  }
}

export const Actions = {
  setProductList: productList => {
    return {
      type: Types.SET_PRODUCT_LIST,
      productList
    }
  },

  searchProduct: searchString => {
    return {
      type: Types.SEARCH_PRODUCT,
      searchString
    }
  }
}