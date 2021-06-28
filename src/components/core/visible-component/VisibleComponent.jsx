import React from 'react'
import './VisibleComponent.css'
import PropTypes from 'prop-types'

const DEVICE_VISIBLE_COMPONENT = 'device'
const DESKTOP_VISIBLE_COMPONENT = 'desktop'

export const visibleComponentTypes = {
  [DEVICE_VISIBLE_COMPONENT]: { className: 'visible-device' },
  [DESKTOP_VISIBLE_COMPONENT]: { className: 'visible-desktop' },
}

const VisibleComponent = ({ visibleComponentType, children }) => (
  <div className={visibleComponentTypes[visibleComponentType].className}>
    {children}
  </div>
)

export { DEVICE_VISIBLE_COMPONENT, DESKTOP_VISIBLE_COMPONENT }

export default VisibleComponent

VisibleComponent.propTypes = {
  visibleComponentType: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}
