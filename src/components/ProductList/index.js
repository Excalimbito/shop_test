import React from 'react';
import { Grid } from '@material-ui/core';

import {
  ListContainer,
  ProductLink,
  PriceContainer
} from './style';

const ProductList = props => {
  return (
    <ListContainer>
      <Grid container spacing={2}>
        {props.products.map(prod => (
          <Grid item xs={4} key={`Product${prod.id}`}>
            <ProductLink to={`/product/${prod.category}/${prod.id}`}>
              <img src={prod.image} />
              {prod.title}
            </ProductLink>
            <PriceContainer>
              R${prod.price.toFixed(2)}
            </PriceContainer>
          </Grid>
        ))}
      </Grid>
    </ListContainer >
  )
}

export default ProductList;