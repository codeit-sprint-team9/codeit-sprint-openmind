import logoImage from '../../asset/logo.svg'
import styled from 'styled-components'
import CardList from './UserCard'
import { device } from '../../components/styles'

const ListContainer = styled.div`
  width: 100vw;
  padding: 32px 0;

  
  @media ${device.tablet} {
    padding: 32px;
  }

  @media ${device.mobile} {
    padding: 24px;
  }
`
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem 6.25rem;

  div {
    color: var(--gray-60);
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
  }
`
function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logoImage}></img>
        <button>답변하러 가기</button>
      </HeaderContainer>
      <div>누구에게 질문할까요?</div>
    </>
  )
}
function List() {
  return (
    <ListContainer>
      <Header />

      <CardList />
    </ListContainer>
  )
}

export default List
