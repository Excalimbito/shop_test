import React, { Component } from 'react';

import { ProductPage } from '../../components';

class Product extends Component {
  render()
  {
    return (
      <div>
        <ProductPage {...this.props}/>
      </div>
    )
  }
}

export default Product;