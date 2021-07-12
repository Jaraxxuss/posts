import React from 'react'
import './PostsPage.css'
import classnames from 'classnames'
import { map, debounce } from 'lodash'
import Highlight from 'react-highlighter'
import Popup from 'reactjs-popup'
import PostsContext from '../../context'
import ItemList from '../../view/item-list'
import Post from '../../view/post'
import VisibleComponent, {
  DEVICE_VISIBLE_COMPONENT,
  DESKTOP_VISIBLE_COMPONENT,
} from '../../core/visible-component'

const PostsPage = () => {
  const {
    favoritePosts,
    unfavoritePosts,
    onFilterUnfavoritePosts,
    onToggleFavoritePost,
  } = React.useContext(PostsContext)

  const debouncedOnFilterUnfavoritePosts = debounce(
    (text) => onFilterUnfavoritePosts(text),
    500,
  )

  const [isFavoritePostsVisible, setIsFavoritePostsVisible] =
    React.useState(false)

  const [inputText, setInputText] = React.useState('')
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      debouncedOnFilterUnfavoritePosts(inputText)
    }
  }, [inputText])

  const onChangeInputText = (event) => {
    setInputText(event.target.value)
  }

  const closeModal = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  const onConfirmBtnPressed = () => {
    closeModal()
    onFilterUnfavoritePosts(inputText)
  }

  const withPostList = (postsData, itemListTitle) => () =>
    (
      <ItemList title={itemListTitle}>
        {map(postsData, ({ id, title, body, isFavorite }) => (
          <Post
            key={id}
            id={id}
            body={<Highlight search={inputText}>{body}</Highlight>}
            isFavorite={isFavorite}
            title={<Highlight search={inputText}>{title}</Highlight>}
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
      <VisibleComponent visibleComponentType={DESKTOP_VISIBLE_COMPONENT}>
        <input type="text" value={inputText} onChange={onChangeInputText} />
      </VisibleComponent>
      <VisibleComponent visibleComponentType={DEVICE_VISIBLE_COMPONENT}>
        <div>
          <div>
            <button type="button" onClick={openModal}>
              open search
            </button>
          </div>
          <div>
            <Popup open={open} modal>
              <div>
                <div>
                  <input
                    type="text"
                    value={inputText}
                    onChange={onChangeInputText}
                  />
                </div>
                <div>
                  <button type="button" onClick={onConfirmBtnPressed}>
                    ok
                  </button>
                  <button type="button" onClick={closeModal}>
                    close modal
                  </button>
                </div>
              </div>
            </Popup>
          </div>
        </div>
      </VisibleComponent>
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
