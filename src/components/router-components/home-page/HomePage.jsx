import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <Link to="/posts">Posts</Link>
  </div>
)

export default Home
