import axios from '../../../axios'

const POSTS_PATH = '/posts'

const getPosts = () => axios.get(`${POSTS_PATH}`)

const postsRequests = {
  getPosts,
}

export default postsRequests
