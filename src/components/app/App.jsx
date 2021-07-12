import React from 'react'
import './App.css'
import RouterComponents from '../router-components'
import PostsContextProvider from '../context-provider'
import 'reactjs-popup/dist/index.css'

const App = () => (
  <PostsContextProvider>
    <RouterComponents />
  </PostsContextProvider>
)

export default App
