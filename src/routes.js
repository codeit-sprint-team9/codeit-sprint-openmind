import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const AnswerPost = React.lazy(() => import('./pages/post/AnswerPost'))
const DefaultPost = React.lazy(() => import('./pages/post/DefaultPost'))
const List = React.lazy(() => import('./pages/list/List'))

const NotFound = React.lazy(() => import('./pages/error/NotFound'))

const routes = [
  { path: '/', element: Home },
<<<<<<< HEAD
  { path: `/post/:id/answer`, element: AnswerPost },
  { path: `/post/:id`, element: DefaultPost },
=======
  { path: `/post/:id/*`, element: Post },
  { path: `/*`, element: NotFound },
>>>>>>> 16531932cd8816742f6029f45667ed81f8fb9052
  { path: '/list', element: List },
]

export default routes
