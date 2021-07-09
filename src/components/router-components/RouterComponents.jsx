import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import MainLayout from '../layout-components'
import HomePage from './home-page'
import PostsPage from './posts-page'
import NotFoundPage from './not-found-page'

const RouterComponents = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <MainLayout>
        <Route path="/posts" component={PostsPage} />
      </MainLayout>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default RouterComponents
