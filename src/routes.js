import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const Post = React.lazy(() => import('./pages/post/Post'))
const List = React.lazy(() => import('./pages/list/List'))

const routes = [
  { path: '/', element: Home },
  { path: `/post/:id/*`, element: Post },
  { path: '/list', element: List },
]

export default routes
