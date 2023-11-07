import logoImage from '../../asset/logo.svg'
import styled from 'styled-components'
import CardList from './UserCard'
import { device } from '../../components/styles'
import { Link } from 'react-router-dom'

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

  // 공용 컴포넌트
  button {
    border: 1px solid;
    width: 166px;
    height: 46px;
  }

  @media ${device.mobile} {
    gap: 20px;
    flex-direction: column;
    align-items: center;
    button {
      width: 127px;
      height: 32px;
      padding: 8px 12px;
    }
  }
`

const HeaderContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
  margin-bottom: 25px;

  div {
    color: var(--grayscale-60, #000);
    font-size: 40px;
    font-weight: 400;
  }

  //스타일드 컴포넌트
  .sort {
    font-size: 20px;
  }

  @media ${device.mobile} {
    flex-direction: row;
    gap: 42px;

    div {
      font-size: 24px;
    }
    .sort {
      font-size: 24px;
    }
  }
`
function Header() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={logoImage}></img>
        </Link>
        <button>답변하러 가기</button>
      </HeaderContainer>

      <HeaderContainer2>
        <div>누구에게 질문할까요?</div>
        {/*스타일드 컴포넌트*/}
        <div className="sort">이름순</div>
      </HeaderContainer2>
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
