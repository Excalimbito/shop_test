import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Cart,
  Dashboard,
  Product
} from './containers';

const rootRoutes = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/product/:category/:prodID" component={Product} />
    </Switch>
  </div>
)

export default rootRoutes