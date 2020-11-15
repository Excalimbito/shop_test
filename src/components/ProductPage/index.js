import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { ProductList } from '../'
import {
  PageContainer,
  InfoContainer,
  AddCartBtn
} from './style';

import { api } from '../../services';

const productsAPI = api("products");

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      loading: true,
      categoryList: []
    }

    this.getInfoProducts = this.getInfoProducts.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { prodID } = this.props.match.params;

    if (prevProps.match.params.prodID !== prodID) {
      this.props.history.go(0)
    }
  }

  componentDidMount() {
    this.getInfoProducts()
  }

  getInfoProducts() {
    const { prodID, category } = this.props.match.params;

    Promise.all([
      productsAPI.get(`/${prodID}`),
      productsAPI.get(`/category/${category}`)
    ])
      .then(allRes => {
        const categoryList = allRes[1].data.filter(prod => prod.id !== parseInt(prodID))

        this.setState({
          loading: false,
          product: allRes[0].data,
          categoryList
        })
      })
  }

  render() {
    const {
      loading,
      product,
      categoryList
    } = this.state;

    return (
      <PageContainer>
        {!loading &&
          <InfoContainer>
            <div>
              <div>
                <img className='prodImg' src={product.image} />
              </div>
              <div>
                <div className='mainInfoContainer'>
                  <Typography className='mainInfoTxt' variant='h6'>
                    {product.title}
                  </Typography>
                  <AddCartBtn>
                    <Typography className='mainInfoTxt' variant='h4'>
                      R${product.price.toFixed(2)}
                    </Typography>
                    <AddShoppingCartIcon/>
                  </AddCartBtn>
                </div>
              </div>
            </div>
            <Typography>
              {product.description}
            </Typography>
          </InfoContainer>
        }
        <Typography variant='h6'>
          Mais produtos dessa categoria:
        </Typography>
        <ProductList products={categoryList} />
      </PageContainer>
    )
  }
}

export default ProductPage;