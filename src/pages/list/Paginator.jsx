import Stack from '@mui/material/Stack'
import { Pagination, createTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const breakPoint = createTheme({
  mobile: 767,
})

const PaginatorContainer = styled('div')(() => ({
  '& nav > ul > li > div': {
    fontSize: '1.6rem',
  },
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

function Paginator({ lastPage, onClickPage, windowWidth }) {
  const [page, setPage] = useState(1)

  const handlePage = (_, value) => {
    onClickPage(Number(value - 1))
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
          siblingCount={windowWidth <= mobileSize ? 1 : 2}
          boundaryCount={1}
          onChange={handlePage}
          page={page}
        />
      </Stack>
    </PaginatorContainer>
  )
}

export default Paginator
