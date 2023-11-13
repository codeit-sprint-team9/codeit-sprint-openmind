import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const loading = <div>화면을 불러오는 중 입니다.</div>

const Page404 = React.lazy(() => import('./pages/error/Page404'))
const Page500 = React.lazy(() => import('./pages/error/Page500'))
const DefaultLayout = React.lazy(() =>
  import('./components/common/DefaultLayout')
)

function App() {
  document.documentElement.setAttribute('color-theme', 'light')
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
