export const Types = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  ADD_PRODUCT_SAGA: 'ADD_PRODUCT_SAGA',
  REMOVE_PRODUCT: 'REMOVE_PRODUCT',
  REMOVE_PRODUCT_SAGA: 'REMOVE_PRODUCT_SAGA',
  ADD_QUANTITY: "ADD_QUANTITY",
  ADD_QUANTITY_SAGA: "ADD_QUANTITY_SAGA",
  REMOVE_QUANTITY: "REMOVE_QUANTITY",
  REMOVE_QUANTITY_SAGA: "REMOVE_QUANTITY_SAGA"
}

const INITIAL_STATE = {
  products: []
}

export default function cartReducer(state = INITIAL_STATE, payload) {
  switch (payload.type) {
    case Types.ADD_PRODUCT_SAGA:
      return { ...state, products: payload.products }
    case Types.REMOVE_PRODUCT_SAGA:
      return { ...state, products: payload.products }
    case Types.ADD_QUANTITY_SAGA:
      return { ...state, products: payload.products }
    case Types.REMOVE_QUANTITY_SAGA:
      return { ...state, products: payload.products }
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
  },

  addQuantity: productID => {
    return {
      type: Types.ADD_QUANTITY,
      productID
    }
  },
  
  removeQuantity: productID => {
    return {
      type: Types.REMOVE_QUANTITY,
      productID
    }
  }
}