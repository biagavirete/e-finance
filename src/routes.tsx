import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewTransaction from './components/NewTransaction';
import TransactionsTable from './components/TransactionsTable';
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
      <Route path="/newtransaction" exact component={NewTransaction} />
      <Route path="/transactionslist" exact component={TransactionsTable} />

    </Switch>
  )
}

export default Routes;