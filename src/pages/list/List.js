import logoImage from '../../asset/logo.svg'
import styled from 'styled-components'
import CardList from './UserCard'
import { device } from '../../components/styles'
import { Link } from 'react-router-dom'
import Paginator from './Paginator'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 6.25rem;

  div {
    color: var(--gray-60);
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
  }

  // 공용 컴포넌트
  button {
    border: 0.1rem solid;
    width: 16.6rem;
    height: 4.6rem;
  }

  @media ${device.mobile} {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    button {
      width: 12.7rem;
      height: 3.2rem;
      padding: 0.8rem 1.2rem;
    }
  }
`

const HeaderContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.2rem;

  div {
    color: var(--grayscale-60, #000);
    font-size: 4rem;
    font-weight: 400;
  }

  //스타일드 컴포넌트
  .sort {
    font-size: 2rem;
  }

  @media ${device.mobile} {
    flex-direction: row;
    gap: 4.2rem;

    div {
      font-size: 2.4rem;
    }
    .sort {
      font-size: 2.4rem;
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
      <Paginator />
    </>
  )
}

export default List
