import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppHeader } from './components';

import store from './store';
import Routes from './routes';

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <AppHeader/>
            <Routes />
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default AppRoot