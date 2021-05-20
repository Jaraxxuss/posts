import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const Item = ({ title, children }) => (
  <section className="item-container">
    <h2 className="item-container__title">{title}</h2>
    <div className="item-container__body">{children}</div>
  </section>
)

Item.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  //   enabled: PropTypes.bool.isRequired,
  //   id: PropTypes.number.isRequired,
}

export default Item
