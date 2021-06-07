import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword'
import Login from '../pages/Login'
import SingUp from '../pages/SingUp'

function Routes() {
  return (
    <Switch>
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
