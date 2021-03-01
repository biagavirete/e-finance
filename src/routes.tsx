import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Currency from './pages/Currency';
import Dashboard from './pages/Dashboard';
import Finances from './pages/Finances';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={SignIn} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/currency" exact component={Currency} />
      <Route path="/finances" exact component={Finances} />
    </Switch>
  )
}

export default Routes;