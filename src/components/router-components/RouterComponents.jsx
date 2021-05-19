import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './home-page'
import PostsPage from './posts-page'
import NotFoundPage from './not-found-page'

const RouterComponents = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/posts" exact component={PostsPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>
)

export default RouterComponents
