import styled from 'styled-components'
import * as React from 'react'

import Stack from '@mui/material/Stack'
import { Pagination } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'

// const PageButton = styled.button`
//   width: 4rem;
//   height: 4rem;
//   color: var(--gray-40);
//   text-align: center;
//   font-size: 2rem;
//   font-weight: 400;
//   cursor: pointer;

//   &:hover {
//     color: var(--brown-40, #542f1a);
//   }
// `

const useStyles = makeStyles({
  PaginatorContainer: {
    '& div': {
      display: 'flex',
      justifyContent: 'center',
    },
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

    '& nav > ul > li > button .Mui-selected button': {
      backgroundColor: 'transparent',
    },

  },
})

function Paginator() {
  const classes = useStyles()
  return (
    <Stack spacing={0} className={classes.PaginatorContainer}>
      <Pagination
        isSelected={false}
        count={25}
        hidePrevButton
        hideNextButton
        size="large"
        siblingCount={3}
        boundaryCount={1}
      />
    </Stack>
    // <PaginatorContainer>
    //   <PageButton>{1}</PageButton>
    //   <PageButton>{2}</PageButton>
    //   <PageButton>{3}</PageButton>
    //   <PageButton>{4}</PageButton>
    //   <PageButton>{5}</PageButton>
    //   <PageButton>{6}</PageButton>
    //   <PageButton>{7}</PageButton>
    //   <PageButton>...</PageButton>
    //   <PageButton>25</PageButton>
    // </PaginatorContainer>
  )
}

export default Paginator
