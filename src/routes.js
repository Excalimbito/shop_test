import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Cart,
  MainApp
} from './containers';

const rootRoutes = () => (
  <Switch>
    <Route path="/" exact component={MainApp}/>
    <Route path="/cart" exact component={Cart}/>
  </Switch>
)

export default rootRoutes