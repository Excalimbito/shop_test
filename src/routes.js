import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Cart,
  Dashboard,
  Product
} from './containers';

const rootRoutes = () => (
  <Switch>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/product/:category/:prodID" component={Product} />
    </div>
  </Switch>
)

export default rootRoutes