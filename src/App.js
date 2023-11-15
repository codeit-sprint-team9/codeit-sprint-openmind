import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from './pages/loading/LoadingPage'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './components/styles'

const loading = <Loading />

const Page404 = React.lazy(() => import('./pages/error/Page404'))
const Page500 = React.lazy(() => import('./pages/error/Page500'))
const DefaultLayout = React.lazy(() =>
  import('./components/common/DefaultLayout')
)

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/404" element={<Page404 />} />
            <Route path="/500" element={<Page500 />} />
            <Route path="/*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
