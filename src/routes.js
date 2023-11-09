import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const List = React.lazy(() => import('./pages/list/List'))

const routes = [
  { path: '/', element: Home },
  { path: '/list', element: List },
]

export default routes
