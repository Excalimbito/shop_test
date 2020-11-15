import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import CartPage from '../../components/CartPage';

class MainApp extends Component {
  render()
  {
    const { cartState } = this.props;

    return (
      <CartPage products={cartState.products}/>
    )
  }
}

const mapStateToProps = store => ({
  cartState: store.cart
})

export default connect(mapStateToProps)(MainApp);