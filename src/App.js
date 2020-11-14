import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import {
  RootHeader
} from './style';

import store from './store';
import Routes from './routes';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <RootHeader>
            LOJINHA
          </RootHeader>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default AppRoot