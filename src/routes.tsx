import React, { FC } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Main } from './Components/Main/Main'

export const AppRouter: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/:username" component={Main} />
    </Switch>
  </Router>
)
