import Stack from '@mui/material/Stack'
import { Pagination, createTheme, debounce, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'

const theme = createTheme({
  breakpoints: {
    values: {
      tablet: 767,
    },
  },
})
const useStyles = makeStyles({
  PaginatorContainer: {
    // '& nav > ul': {
    //   [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
    //     width: '2rem',
    //   },
    // },
    // '& nav > ul': {},
    '& nav > ul > li > button': {
      width: '4rem',
      height: '4rem',
      color: 'var(--gray-40)',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 400,
      cursor: 'pointer',
      fontFamily: 'Actor',
    },

    '& nav > ul > li > button.Mui-selected': {
      color: 'var(--brown-40)',
    },
  },
})

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

  const classes = useStyles()

  return (
    <Stack className={classes.PaginatorContainer}>
      <Pagination
        isSelected={false}
        count={34}
        hidePrevButton
        hideNextButton
        size="large"
        siblingCount={windowSize.width < 767 ? 1 : 2}
        boundaryCount={1}
      />
    </Stack>
  )
}

export default Paginator
