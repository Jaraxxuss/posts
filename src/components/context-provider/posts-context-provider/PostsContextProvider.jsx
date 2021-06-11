import React from 'react'
import PropTypes from 'prop-types'
import { map, partition, findIndex, concat, slice, nth, merge } from 'lodash'
import PostsContext from '../../context/posts-context'
import api from '../../../api'

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([])

  const [favoritePosts, unfavoritePosts] = partition(posts, 'isFavorite')

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.posts.getPosts()
        setPosts(map(data, (it) => ({ ...it, isFavorite: false })))
      } catch (err) {
        throw new Error(err.message)
      }
    }
    fetchPosts()
  }, [])

  const onToggleFavoritePost = (id) => {
    const idx = findIndex(posts, { id })

    setPosts(
      concat(
        slice(posts, 0, idx),
        merge(nth(posts, idx), { isFavorite: !nth(posts, idx).isFavorite }),
        slice(posts, idx + 1),
      ),
    )
  }

  return (
    <PostsContext.Provider
      value={{ favoritePosts, unfavoritePosts, onToggleFavoritePost }}
    >
      {children}
    </PostsContext.Provider>
  )
}

PostContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PostContextProvider
