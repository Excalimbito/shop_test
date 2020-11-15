import React from 'react';
import { Typography } from '@material-ui/core';

import { PageContainer, ProdItem } from './style';

const CartPage = (props) => {
  return (
    <PageContainer>
      <Typography className='listHeader' variant='h5'>
        Meu Carrinho:
      </Typography>
      {props.products.map(prod => (
        <ProdItem>
          <img src={prod.product.image}/>
          <Typography variant='subtitle1' className='prodName'>
            {prod.product.title}
          </Typography>
          <Typography variant='h6'>
            R${prod.product.price.toFixed(2)}
          </Typography>
        </ProdItem>
      ))}
    </PageContainer>
  )
}

export default CartPage