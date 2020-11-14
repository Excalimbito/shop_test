import React from 'react';
import { Grid } from '@material-ui/core';

import {
  ListContainer,
  ProductLink,
  PriceContainer
} from './style';

const ProductList = props => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ListContainer>
        <Grid container spacing={2} xs={12}>
          {props.products.map((prod, indx) => (
            <Grid item xs={4}>
              <ProductLink to="/cart">
                <img src={prod.image}/>
                {prod.title}
              </ProductLink>
              <PriceContainer>
                R${prod.price.toFixed(2)}
              </PriceContainer>
            </Grid>
          ))}
        </Grid>
      </ListContainer >
    </div >
  )
}

export default ProductList;