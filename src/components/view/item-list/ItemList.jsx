import React from 'react'
import './ItemList.css'
import PropTypes from 'prop-types'

const ItemList = ({ title, children }) => (
  <div className="item-list-container">
    <h2 className="item-list-container__title">{title}</h2>
    <div className="item-list-container__items">{children}</div>
  </div>
)

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ItemList
