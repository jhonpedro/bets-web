import React from 'react'
import { Redirect, Switch } from 'react-router-dom'

import Route from './Route'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SingUp from '../pages/SingUp'
import NewBet from '../pages/NewBet'

function Routes() {
  return (
    <Switch>
      <Route path="/" isPrivate exact>
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/sing-in">
        <SingUp />
      </Route>
      <Route path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route path="/new-bet" isPrivate>
        <NewBet />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
}

export default Routes
