import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))

const Post = React.lazy(() => import('./pages/post/Post'))

const NotFound = React.lazy(() => import('./pages/error/NotFound'))

const routes = [
  { path: '/', element: Home },
  { path: `/post/:id/*`, element: Post },
  { path: `/*`, element: NotFound },
]

export default routes
