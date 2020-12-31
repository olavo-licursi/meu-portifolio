import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Sobre from '../pages/Sobre';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/sobre" exact component={Sobre} />
  </Switch>
);

export default Routes;