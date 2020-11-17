import React from 'react';
import {
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import {
  Add,
  Remove,
  Cancel
} from '@material-ui/icons'

import {
  PageContainer,
  ProdItem,
  PriceContainer
} from './style';

const CartPage = (props) => {
  return (
    <PageContainer>
      <Typography className='listHeader' variant='h5'>
        Meu Carrinho:
      </Typography>
      {props.products.map((prod, indx) => (
        <ProdItem key={`CartProd${indx}`}>
          <img src={prod.product.image} />
          <Typography variant='subtitle1' className='prodName'>
            {prod.product.title}
          </Typography>
          <div>
            <Typography variant='h6'>
              R${(prod.product.price * prod.quantity).toFixed(2)}
            </Typography>
            <PriceContainer>
              <IconButton
                className='iconBtn'
                size='small'
                onClick={() => props.addQuantity(prod.product.id)}>
                <Add />
              </IconButton>
              <Typography variant='body1' className='prodName'>
                {prod.quantity}
              </Typography>
              <IconButton
                className='iconBtn'
                size='small'
                disabled={prod.quantity <= 1}
                onClick={() => props.removeQuantity(prod.product.id)}>
                <Remove />
              </IconButton>
            </PriceContainer>
            <Button
              variant="contained"
              disableElevation={true}
              startIcon={<Cancel />}
              style={{ backgroundColor: '#ec5858' }}
              onClick={() => props.removeProduct(prod.product.id)}
            >
              Delete
            </Button>
          </div>
        </ProdItem>
      ))}
    </PageContainer>
  )
}

export default CartPage