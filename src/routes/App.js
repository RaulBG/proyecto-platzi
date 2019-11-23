import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Fly from '../pages/Fly';
import Cart from '../pages/Cart';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/fly' component={Fly} />
        <Route exact path='/cart' component={Cart} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
