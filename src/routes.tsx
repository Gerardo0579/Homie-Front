import React, { FC } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Main } from './AppComponents/Main/Main'

export const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={Main} />>
      <Route path='*'>
        <Redirect to='/yknx4' />
      </Route>
    </Switch>
  </Router>
)
