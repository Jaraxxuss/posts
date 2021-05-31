import React from 'react'
import PropTypes from 'prop-types'
import PostsContext from '../../context/posts-context'
import api from '../../../api'

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.posts.getPosts()
        setPosts(data.map((it) => ({ ...it, isFavorite: false })))
      } catch (err) {
        console.log(err)
      }
    }
    fetchPosts()
  }, [])

  const favoritePosts = posts.filter(({ isFavorite }) => isFavorite)

  const onToggleFavoritePost = (id) => {
    const idx = posts.findIndex((it) => it.id === id)
    setPosts([
      ...posts.slice(0, idx),
      { ...posts[idx], isFavorite: !posts[idx].isFavorite },
      ...posts.slice(idx + 1),
    ])
  }

  return (
    <PostsContext.Provider
      value={{ posts, favoritePosts, onToggleFavoritePost }}
    >
      {children}
    </PostsContext.Provider>
  )
}

PostContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PostContextProvider
