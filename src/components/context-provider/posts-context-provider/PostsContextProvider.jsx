import React from 'react'
import PropTypes from 'prop-types'
import PostsContext from '../../context/posts-context'
import postService from '../../../service/post-service'

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = React.useState([])
  const [favoritePosts, setFavoritePosts] = React.useState([])
  const [unfavoritePosts, setUnfavoritePosts] = React.useState([])

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await postService.getPosts()
        setPosts(data)
        setUnfavoritePosts(data)
      } catch (err) {
        throw new Error(err.message)
      }
    }
    fetchPosts()
  }, [])

  const onToggleFavoritePost = ({ id, isFavorite }) => {
    if (isFavorite) {
      const post = postService.findById(favoritePosts, id)
      post.isFavorite = !isFavorite
      setFavoritePosts(postService.removePostById(favoritePosts, id))
      setUnfavoritePosts(postService.addPost(unfavoritePosts, post))
      return
    }
    const post = postService.findById(unfavoritePosts, id)
    post.isFavorite = !isFavorite
    setUnfavoritePosts(postService.removePostById(unfavoritePosts, id))
    setFavoritePosts(postService.addPost(favoritePosts, post))
  }

  const onFilterUnfavoritePosts = (inputText) => {
    const filterFrom = postService.postsDifferenceBy(posts, favoritePosts)
    if (inputText.length < 3) {
      setUnfavoritePosts(filterFrom)
      return
    }

    setUnfavoritePosts(postService.filterPosts(filterFrom, inputText))
  }

  return (
    <PostsContext.Provider
      value={{
        favoritePosts,
        unfavoritePosts,
        onFilterUnfavoritePosts,
        onToggleFavoritePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

PostContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PostContextProvider
