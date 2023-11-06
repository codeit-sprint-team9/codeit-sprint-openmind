
import logoImage from '../../asset/logo.svg'
import styled from 'styled-components'
import CardList from './UserCard'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 40px 100px;

  div {
    color: var(--gray-60);
    text-align: center;
    font-size: 40px;
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
    <>
      <Header />

      <CardList />
    </>
  )
}

export default List
