import React from 'react'

const withChildFunction = (func) => (WrappedComponent) => (props) =>
  React.createElement(WrappedComponent, props, func)

export default withChildFunction
