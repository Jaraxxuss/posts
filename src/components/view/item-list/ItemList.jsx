import React from 'react'
import './ItemList.css'
import PropTypes from 'prop-types'

const ItemList = ({ data, onChangeFavorite, children: renderItem }) => {
  const items = data.map((item) => {
    const { id } = item
    const renderedItem = renderItem(item)

    return (
      <li key={id}>
        <div>
          <button type="button" onClick={() => onChangeFavorite(id)}>
            change
          </button>
        </div>
        <div>{renderedItem}</div>
      </li>
    )
  })

  return <ul>{items}</ul>
}

ItemList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onChangeFavorite: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
}

export default ItemList
