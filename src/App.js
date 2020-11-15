import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import {
  RootHeader
} from './style';

import store from './store';
import Routes from './routes';
import { Typography } from '@material-ui/core';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <RootHeader>
              <Link style={{ textDecoration: 'none', color: "black" }} to='/'>
                <Typography variant='h5'>
                  NoLaVa!
                </Typography>
              </Link>
            </RootHeader>
            <Routes />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default AppRoot