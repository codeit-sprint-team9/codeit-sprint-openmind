import Stack from '@mui/material/Stack'
import { Pagination, createTheme, debounce } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const breakPoint = createTheme({
  mobile: 767,
})

const PaginatorContainer = styled('div')(() => ({
  '& nav > ul > li': {
    [breakPoint.breakpoints.down(breakPoint.mobile)]: {
      width: '40px',
    },
  },
  '& nav > ul > li > button': {
    [breakPoint.breakpoints.down(breakPoint.mobile)]: {
      fontSize: '1.6rem',
    },
    color: 'var(--gray-40)',
    textAlign: 'center',
    fontSize: '2rem',
    cursor: 'pointer',
    fontFamily: 'Actor',
  },
  '& nav > ul > li > button.Mui-selected': {
    color: 'var(--brown-40)',
  },
}))

const mobileSize = 767
function Paginator({ lastPage, handleLoadByPage }) {
  const [page, setPage] = useState(1)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handlePage = async (_, value) => {
    await handleLoadByPage(Number(value - 1))
    setPage(value)
  }

  return (
    <PaginatorContainer>
      <Stack>
        <Pagination
          count={lastPage}
          hidePrevButton
          hideNextButton
          size="large"
          siblingCount={windowSize.width <= mobileSize ? 1 : 2}
          boundaryCount={1}
          onChange={handlePage}
          page={page}
        />
      </Stack>
    </PaginatorContainer>
  )
}

export default Paginator
