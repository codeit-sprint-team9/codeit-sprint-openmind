import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))

const Post = React.lazy(() => import('./pages/post/Post'))
const routes = [
  { path: '/', element: Home },
  { path: '/post/', element: Post },
]

export default routes
