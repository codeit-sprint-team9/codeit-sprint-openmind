import styled from 'styled-components'
import CardList from './UserCard'
import Paginator from './Paginator'
import Header from './Header'

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
