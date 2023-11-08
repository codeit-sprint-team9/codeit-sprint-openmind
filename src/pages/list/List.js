import logoImage from '../../asset/logo.svg'
import styled from 'styled-components'
import CardList from './UserCard'
import { device } from '../../components/styles'
import { Link } from 'react-router-dom'

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

const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const PageButton = styled.button`
  width: 4rem;
  height: 4rem;
  color: var(--gray-40);
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: var(--brown-40, #542f1a);
  }
`

function Pagination() {
  // const count = 400
  return (
    <PaginationContainer>
      <PageButton>{1}</PageButton>
      <PageButton>{2}</PageButton>
      <PageButton>{3}</PageButton>
      <PageButton>{4}</PageButton>
      <PageButton>{5}</PageButton>
      <PageButton>{6}</PageButton>
      <PageButton>{7}</PageButton>
      <PageButton>...</PageButton>
      <PageButton>25</PageButton>
    </PaginationContainer>
  )
}
function List() {
  return (
    <>
      <Header />
      <CardList />
      <Pagination />
    </>
  )
}

export default List
