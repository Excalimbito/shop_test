export const Types = {
  SET_PRODUCT_LIST: 'SET_PRODUCT_LIST',
  SEARCH_PRODUCT: 'SEARCH_PRODUCT',
  SEARCH_PRODUCT_SAGA: 'SEARCH_PRODUCT_SAGA',
  REFRESH_DASHBOARD: 'REFRESH_DASHBOARD'
}

const INITIAL_STATE = {
  products: [],
  resetDashboard: false
}

export default function productsReducer(state = INITIAL_STATE, payload)
{
  switch(payload.type)
  {
    case Types.SET_PRODUCT_LIST:
      return {
        ...state,
        products: payload.productList
      }
    case Types.SEARCH_PRODUCT_SAGA:
      return {...state, products: payload.filtredProducts}
    case Types.REFRESH_DASHBOARD:
      return {...state, resetDashboard: !state.resetDashboard}
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
  },

  refreshDashboard: () => {
    return { type: Types.REFRESH_DASHBOARD }
  }
}