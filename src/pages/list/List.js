import styled from 'styled-components'
import CardList from './UserCard'
import Paginator from './Paginator'
import Header from './Header'
import useAsync from '../../hooks/useAsync'
import { getSubject } from '../../api/api'
import { useEffect, useState } from 'react'
import Dropdown from '../../components/common/Dropdown'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function List() {

  return (
    <>
      <Header />
      {/* <MainContainer> */}

      <CardList />
      <Paginator />
      {/* </MainContainer> */}
    </>
  )
}

export default List
