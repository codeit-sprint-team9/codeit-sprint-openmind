import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './pages/loading/LoadingPage'

const loading = <LoadingPage />
const DefaultLayout = React.lazy(() =>
  import('./components/common/DefaultLayout')
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
