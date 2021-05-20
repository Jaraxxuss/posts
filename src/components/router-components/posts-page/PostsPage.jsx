import React from 'react'
import './PostsPage.css'
import Item from '../../view/item'
import ItemList from '../../view/item-list'
import { compose, withData, withChildFunction, withFavorite } from '../../hoc'
import api from '../../../api'

export default compose(
  withData(api.posts.getPosts),
  withFavorite,
  withChildFunction(({ title, body }) => (
    <Item title={title}>
      <div>{body}</div>
    </Item>
  )),
)(ItemList)
