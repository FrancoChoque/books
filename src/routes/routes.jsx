import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import SignInPage from '../pages/SignIn/SignInPage';
import SignUpPage from '../pages/SignUp/SignUpPage';

const Routes = () => (
  <>
    <Route path="/">
      <HomePage />
    </Route>
    <Route path="/signIn">
      <SignInPage />
    </Route>
    <Route path="/signUp">
      <SignUpPage />
    </Route>
  </>
);

export default Routes;
