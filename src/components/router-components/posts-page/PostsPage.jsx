import React from 'react'
import './PostsPage.css'
import classnames from 'classnames'
import PostsContext from '../../context'
import ItemList from '../../view/item-list'
import Post from '../../view/post'

const PostsPage = () => {
  const { posts, favoritePosts, onToggleFavoritePost } =
    React.useContext(PostsContext)

  const [isFavoritePostsVisible, setIsFavoritePostsVisible] =
    React.useState(false)

  const withPostList = (postsData, title, isFullWidthPost) => () =>
    (
      <ItemList items={postsData} title={title}>
        {(post) => (
          <Post
            post={post}
            isFullWidthPost={isFullWidthPost}
            onToggleFavoritePost={onToggleFavoritePost}
          />
        )}
      </ItemList>
    )

  const onToggleFavoritePostsVisible = () => {
    setIsFavoritePostsVisible((prev) => !prev)
  }

  const PostList = withPostList(posts, 'Posts', false)
  const FavoritePostList = withPostList(favoritePosts, 'Favorite Posts', true)

  return (
    <div>
      <button type="button" onClick={onToggleFavoritePostsVisible}>
        open/close
      </button>
      <div className="posts-page-container__posts-wrapper">
        <div
          className={classnames('posts-page-container__posts', {
            'posts-page-container__posts_fullWidth': !isFavoritePostsVisible,
          })}
        >
          <PostList />
        </div>
        <div
          className={classnames('posts-page-container__favorite-posts', {
            'posts-page-container__favorite-posts_zeroWidth':
              !isFavoritePostsVisible,
          })}
        >
          <FavoritePostList />
        </div>
      </div>
    </div>
  )
}

export default PostsPage
