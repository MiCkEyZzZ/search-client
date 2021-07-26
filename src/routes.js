import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

import {Favorite, Home, Login, Registration} from './pages'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/favorite'>
          <Favorite />
        </Route>
        <Redirect to='/' />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/registration'>
        <Registration />
      </Route>
      <Redirect to='/login' />
    </Switch>
  )
}
