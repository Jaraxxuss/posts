import React from 'react'
import './ItemList.css'
import PropTypes from 'prop-types'

const ItemList = ({ items, title, children: renderItem }) => {
  const mappedItems = items.map((item) => {
    const renderedItem = renderItem(item)

    return React.cloneElement(renderedItem, { key: item.id })
  })

  return (
    <div className="item-list-container">
      <h2>{title}</h2>
      <div className="item-list-container__items">{mappedItems}</div>
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
}

export default ItemList
