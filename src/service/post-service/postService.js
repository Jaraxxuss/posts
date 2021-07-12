import { find, filter, concat, includes, map, differenceBy } from 'lodash'
import api from '../../api'

const removePostById = (posts, id) => filter(posts, (post) => post.id !== id)

const getPosts = async () => {
  try {
    const { data } = await api.posts.getPosts()
    return map(data, (it) => ({ ...it, isFavorite: false }))
  } catch (err) {
    throw new Error(err.message)
  }
}

const findById = (posts, id) => find(posts, ['id', id])

const addPost = (posts, post) => concat(posts, post)

const filterPosts = (posts, inputText) =>
  filter(
    posts,
    (post) => includes(post.body, inputText) || includes(post.title, inputText),
  )

const postsDifferenceBy = (lhr, rhs) => differenceBy(lhr, rhs, 'id')

export default {
  filterPosts,
  getPosts,
  findById,
  removePostById,
  addPost,
  postsDifferenceBy,
}
