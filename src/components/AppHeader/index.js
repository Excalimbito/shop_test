import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  IconButton,
  Badge
} from '@material-ui/core';
import { AddShoppingCart, Search } from '@material-ui/icons';

import {
  RootHeader, SearchBar, SearchContainer
} from './style';

const AppHeader = (props) => (
  <RootHeader>
    <div>
      <Link style={{ textDecoration: 'none', color: "black" }} to='/' onClick={props.resetSearch}>
        <Typography variant='h5'>
          NoLaVa!
        </Typography>
      </Link>
      <SearchContainer>
        <SearchBar
          placeholder='Buscar produtos'
          onKeyDown={({ key }) => props.onSearch(key)}
          onChange={({ currentTarget }) => props.onSearchInputChange(currentTarget.value)}
          value={props.searchTxt}/>
        <IconButton onClick={() => props.onSearch("Enter")}>
          <Search />
        </IconButton>
      </SearchContainer>
      <Link style={{ textDecoration: 'none', color: "black" }} to='/cart'>
        <IconButton>
          <Badge badgeContent={props.cartQuantity} color='primary'>
            <AddShoppingCart />
          </Badge>
        </IconButton>
      </Link>
    </div>
  </RootHeader>
)

export default AppHeader