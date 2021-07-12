import React from 'react'
import './Post.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Post = ({ title, body, id, isFavorite, onToggleFavoritePost }) => {
  const onClickFavoriteBtn = () => {
    onToggleFavoritePost({ id, isFavorite })
  }

  return (
    <div className="post-container">
      <h3 className="post-container__title">{title}</h3>
      <div className="post-container__body">{body}</div>
      <button
        className={classnames('post-container__button', {
          'post-container__button_favorite': isFavorite,
        })}
        type="button"
        onClick={onClickFavoriteBtn}
      >
        <span>icon</span>
      </button>
    </div>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  onToggleFavoritePost: PropTypes.func.isRequired,
}

export default Post
