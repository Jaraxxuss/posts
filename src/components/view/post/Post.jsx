import React from 'react'
import './Post.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Post = ({ post, isFullWidthPost, onToggleFavoritePost }) => (
  <div
    className={classnames('post-container', {
      'post-container_fullwidth': isFullWidthPost,
    })}
  >
    <div>{post.title}</div>
    <div>{post.body}</div>
    <button
      className={classnames('post-container__button', {
        'post-container__button_favorite': post.isFavorite,
      })}
      type="button"
      onClick={() => onToggleFavoritePost(post.id)}
    >
      <span>icon</span>
    </button>
  </div>
)

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  isFullWidthPost: PropTypes.bool.isRequired,
  onToggleFavoritePost: PropTypes.func.isRequired,
}

export default Post
