/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'
import MainLayout from './layout'

const MainLayoutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Route>
)

export default MainLayoutRoute
