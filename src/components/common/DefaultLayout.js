import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import routes from '../../routes'
import Loading from '../../pages/loading/LoadingPage'
import { darkMode } from '../../atom/atom'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
const loading = <Loading />

const DefaultLayout = () => {
  const [theme, setTheme] = useRecoilState(darkMode)
  useEffect(() => {
    const localTheme = localStorage.getItem('darkMode')
    if (!localTheme) {
      localStorage.setItem('darkMode', 'light')
      setTheme('light')
    } else if (localTheme) {
      if (localTheme === 'dark') {
        setTheme('dark')
      }
    }
    theme === 'light'
      ? (document.body.style.background = 'var(--gray-20)')
      : (document.body.style.background = 'var(--gray-60)')
  }, [theme])
  return (
    <>
      {/* 헤더 자리 */}
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
      {/* 푸터 자리 */}
    </>
  )
}

export default DefaultLayout
