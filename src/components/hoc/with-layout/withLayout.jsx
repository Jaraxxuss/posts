/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

const withLayout =
  (Layout) =>
  ({ component: Component, ...rest }) =>
    (
      <Route {...rest}>
        <Layout>
          <Component />
        </Layout>
      </Route>
    )

export default withLayout
