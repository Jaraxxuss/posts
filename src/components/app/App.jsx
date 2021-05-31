import React from 'react'
import './App.css'
import RouterComponents from '../router-components'
import PostsContextProvider from '../context-provider'

const App = () => (
  <PostsContextProvider>
    <RouterComponents />
  </PostsContextProvider>
)

export default App
