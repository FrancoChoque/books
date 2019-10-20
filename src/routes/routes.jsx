import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Routes = () => (
  <Route path="/">
    <Home />
  </Route>
);

export default Routes;
