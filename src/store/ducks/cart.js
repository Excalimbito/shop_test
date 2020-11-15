export const Types = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_PRODUCT_SAGA: 'ADD_PRODUCT_SAGA',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  REMOVE_PRODUCT_SAGA: 'REMOVE_PRODUCT_SAGA'
}

const INITIAL_STATE = {
  products: []
}

export default function cartReducer(state = INITIAL_STATE, payload)
{
  switch(payload.type)
  {
    case Types.ADD_PRODUCT_SAGA:
      return {...state, products: payload.products}
    case Types.REMOVE_PRODUCT_SAGA:
      return {...state}
    default:
      return state
  }
}

export const Actions = {
  addNewProduct: newProduct => {
    return {
      type: Types.ADD_PRODUCT,
      newProduct
    }
  },

  removeProduct: productID => {
    return {
      type: Types.REMOVE_PRODUCT,
      productID
    }
  }
}