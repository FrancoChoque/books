import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    ) 
;}
}

export default App;
