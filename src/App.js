import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store';
import Routes from './routes';

const AppRoot = () => (
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
)

export default AppRoot