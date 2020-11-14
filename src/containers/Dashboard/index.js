import React, { Component } from 'react';
import { ProductList } from '../../components';

class MainApp extends Component {
  render() {
    return (
      <ProductList products={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]} />
    )
  }
}

export default MainApp