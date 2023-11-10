import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))

const Post = React.lazy(() => import('./pages/post/Post'))

const id = 1
const routes = [
  { path: '/', element: Home },
  { path: `/post/${id}/*`, element: Post },
]

export default routes
