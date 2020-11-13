import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';

import store from './store';
import Routes from './routes';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppBar position='static'>
            Test
        </AppBar>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default AppRoot