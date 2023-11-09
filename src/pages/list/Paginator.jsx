import Stack from '@mui/material/Stack'
import { Pagination, createTheme, debounce } from '@mui/material'
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
    '& nav > ul > li': {
      [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
        width: '40px',
      },
    },
    '& nav > ul > li > button': {
      [theme.breakpoints.down(theme.breakpoints.values.tablet)]: {
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
