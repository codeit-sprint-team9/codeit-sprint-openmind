import React from 'react'
import Loading from './pages/loading/LoadingPage'

const Home = React.lazy(() => import('./pages/home/Home'))
const Post = React.lazy(() => import('./pages/post/Post'))
const List = React.lazy(() => import('./pages/list/List'))

const NotFound = React.lazy(() => import('./pages/error/NotFound'))

const routes = [
  { path: '/', element: Home },
  { path: `/post/:id/*`, element: Post },
  { path: `/*`, element: NotFound },
  { path: '/list', element: List },
  { path: '/loading', element: Loading },
]

export default routes
