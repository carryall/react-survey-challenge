import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../screens/Login'

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  )
}

export default Routes
