import React from 'react'

const Home = React.lazy(() => import('./pages/home/Home'))
const AnswerPost = React.lazy(() => import('./pages/post/AnswerPost'))
const DefaultPost = React.lazy(() => import('./pages/post/DefaultPost'))
const List = React.lazy(() => import('./pages/list/List'))

const routes = [
  { path: '/', element: Home },
  { path: `/post/:id/answer`, element: AnswerPost },
  { path: `/post/:id`, element: DefaultPost },
  { path: '/list', element: List },
]

export default routes
