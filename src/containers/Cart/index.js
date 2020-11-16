import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import CartPage from '../../components/CartPage';

import { CartActions } from '../../store/ducks';

class MainApp extends Component {
  render()
  {
    const {
      cartState,
      removeProduct,
      addQuantity,
      removeQuantity
    } = this.props;

    return (
      <CartPage
        products={cartState.products}
        removeProduct={removeProduct}
        addQuantity={addQuantity}
        removeQuantity={removeQuantity}/>
    )
  }
}

const mapStateToProps = store => ({
  cartState: store.cart
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);