import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
<<<<<<< HEAD
const Post = React.lazy(() => import('./pages/post/Post'))
const routes = [
  { path: '/', element: Home },
  { path: '/post/', element: Post },
]

=======
const List = React.lazy(() => import('./pages/list/List'))

const routes = [
  { path: '/', element: Home },
  { path: '/list', element: List },
]

>>>>>>> 598c8bffa433239e755de4af57ab32597444bba6
export default routes
