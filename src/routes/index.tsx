import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'
import ForgotPassword from '../pages/ForgotPassword'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SingUp from '../pages/SingUp'

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
    </Switch>
  )
}

export default Routes
