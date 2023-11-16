import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '../../routes'
import LoadingPage from '../../pages/loading/LoadingPage'

const loading = <LoadingPage />

const DefaultLayout = () => {
  return (
    <>
      {
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                )
              )
            })}
          </Routes>
        </Suspense>
      }
    </>
  )
}

export default DefaultLayout
