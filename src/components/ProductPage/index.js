import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { ProductList } from '../'
import {
  PageContainer,
  InfoContainer,
  AddCartBtn
} from './style';

import { CartActions } from '../../store/ducks';
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
      this.setState({ loading: true })
      this.getInfoProducts()
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
    const { addNewProduct } = this.props;
    const {
      loading,
      product,
      categoryList
    } = this.state;

    return (
      !loading &&
      <PageContainer>
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
                <AddCartBtn onClick={() => addNewProduct(product)}>
                  <Typography className='mainInfoTxt' variant='h4'>
                    R${product.price.toFixed(2)}
                  </Typography>
                  <AddShoppingCart />
                </AddCartBtn>
              </div>
            </div>
          </div>
          <Typography>
            {product.description}
          </Typography>
        </InfoContainer>
        <Typography variant='h6' style={{marginLeft: '15px'}}>
          Mais produtos dessa categoria:
        </Typography>
        <ProductList products={categoryList} style={{maxWidth: '610px'}}/>
      </PageContainer>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(CartActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ProductPage);