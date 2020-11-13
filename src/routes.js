import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Cart,
  Dashboard
} from './containers';

const rootRoutes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/cart" exact component={Cart}/>
  </Switch>
)

export default rootRoutes