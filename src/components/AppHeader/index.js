import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  IconButton
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import {
  RootHeader, SearchBar
} from './style';

const AppHeader = (props) => (
  <RootHeader>
    <div>
      <Link style={{ textDecoration: 'none', color: "black" }} to='/'>
        <Typography variant='h5'>
          NoLaVa!
        </Typography>
      </Link>
      <SearchBar placeholder='Pesquisar produtos'>

      </SearchBar>
      <Link style={{ textDecoration: 'none', color: "black" }} to='/cart'>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
      </Link>
    </div>
  </RootHeader>
)

export default AppHeader