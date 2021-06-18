import React from 'react'
import './PostsPage.css'
import classnames from 'classnames'
import { map } from 'lodash'
import PostsContext from '../../context'
import ItemList from '../../view/item-list'
import Post from '../../view/post'

const PostsPage = () => {
  const { unfavoritePosts, favoritePosts, onToggleFavoritePost } =
    React.useContext(PostsContext)

  const [isFavoritePostsVisible, setIsFavoritePostsVisible] =
    React.useState(false)

  const withPostList = (postsData, itemListTitle) => () =>
    (
      <ItemList title={itemListTitle}>
        {map(postsData, ({ id, title, body, isFavorite }) => (
          <Post
            key={id}
            id={id}
            body={body}
            isFavorite={isFavorite}
            title={title}
            onToggleFavoritePost={onToggleFavoritePost}
          />
        ))}
      </ItemList>
    )

  const onToggleFavoritePostsVisible = () => {
    setIsFavoritePostsVisible((prev) => !prev)
  }

  const PostList = withPostList(unfavoritePosts, 'Posts')
  const FavoritePostList = withPostList(favoritePosts, 'Favorite Posts')

  return (
    <div className="posts-page-container">
      <button type="button" onClick={onToggleFavoritePostsVisible}>
        open/close
      </button>
      <div className="posts-page-container__posts-wrapper">
        <div
          className={classnames(
            {
              'posts-page-container__posts_zero-width': isFavoritePostsVisible,
            },
            'posts-page-container__posts',
            'posts-page-container__unfavorite-posts',
          )}
        >
          <PostList />
        </div>
        <div
          className={classnames(
            {
              'posts-page-container__posts_zero-width': !isFavoritePostsVisible,
            },
            'posts-page-container__posts',
            'posts-page-container__favorite-posts',
          )}
        >
          <FavoritePostList />
        </div>
      </div>
    </div>
  )
}

export default PostsPage
