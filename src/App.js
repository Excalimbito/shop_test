import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { AppHeader } from './components';

import { ProductsActions } from './store/ducks';
import Routes from './routes';

class AppRoot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTxt: ''
    }

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  onSearchInputChange(newSearchTxt) {
    this.setState({
      searchTxt: newSearchTxt
    })
  }

  onSearch(keyPressed) {
    if (keyPressed === "Enter") {
      const { setProductList, searchProduct, history } = this.props;

      setProductList([])
      searchProduct(this.state.searchTxt, history)
    }
  }

  resetSearch() {
    const { setProductList, refreshDashboard } = this.props;

    setProductList([])
    refreshDashboard()
    this.setState({
      searchTxt: ''
    })
  }

  render() {
    const { cartState } = this.props;
    const { searchTxt } = this.state;

    return (
      <div>
        <AppHeader
          searchTxt={searchTxt}
          onSearchInputChange={this.onSearchInputChange}
          onSearch={this.onSearch}
          resetSearch={this.resetSearch}
          cartQuantity={cartState.products.length > 0 
            ? cartState.products.map(prod => prod.quantity).reduce((total, quant) => total + quant)
            : 0
          }
          />
        <Routes />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  cartState: store.cart
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ProductsActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRoot));