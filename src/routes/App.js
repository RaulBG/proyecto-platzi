import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Fly from '../pages/Fly';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/fly' component={Fly} />
    </Switch>
  </BrowserRouter>
);

export default App;