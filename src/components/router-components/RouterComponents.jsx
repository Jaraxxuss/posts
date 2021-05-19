import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainLayoutRoute from '../layout-components/main-layout-route'
import HomePage from './home-page'
import PostsPage from './posts-page'
import NotFoundPage from './not-found-page'

const RouterComponents = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <MainLayoutRoute path="/posts" exact component={PostsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
)

export default RouterComponents
