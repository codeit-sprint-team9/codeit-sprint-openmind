import Stack from '@mui/material/Stack'
import { Pagination, createTheme, debounce } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const breakPoint = createTheme({
  breakpoints: {
    values: {
      tablet: 767,
    },
  },
})

const PaginatorContainer = styled('div')(({ theme }) => ({
  '& nav > ul > li': {
    [breakPoint.breakpoints.down(breakPoint.breakpoints.values.tablet)]: {
      width: '40px',
    },
  },
  '& nav > ul > li > button': {
    [breakPoint.breakpoints.down(breakPoint.breakpoints.values.tablet)]: {
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

function Paginator() {
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

  return (
    <PaginatorContainer>
      <Stack>
        <Pagination
          count={34}
          hidePrevButton
          hideNextButton
          size="large"
          siblingCount={windowSize.width < 767 ? 1 : 2}
          boundaryCount={1}
        />
      </Stack>
    </PaginatorContainer>
  )
}

export default Paginator
