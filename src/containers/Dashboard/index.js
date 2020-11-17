import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { ProductList } from '../../components';

import { ProductsActions } from '../../store/ducks'
import { api } from '../../services';

const productsAPI = api("products");

class MainApp extends Component {
  constructor(props) {
    super(props);

    this.getAllProducts = this.getAllProducts.bind(this);
  }

  componentDidUpdate(prevProps) {
    const prevPropsResetDash = prevProps.productsState.resetDashboard;
    const propsResetDash = this.props.productsState.resetDashboard;

    if (prevPropsResetDash !== propsResetDash) {
      this.getAllProducts()
    }
  }

  componentDidMount() {
    const { productsState } = this.props;

    if (productsState.products.length <= 0) {
      this.getAllProducts()
    }
  }

  getAllProducts() {
    const { setProductList } = this.props;

    productsAPI.get()
      .then(res => {
        setProductList(res.data)
      })
  }

  render() {
    const { productsState } = this.props;

    return (
      <ProductList products={productsState.products} />
    )
  }
}

const mapStateToProps = store => ({
  productsState: store.products
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ProductsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp)