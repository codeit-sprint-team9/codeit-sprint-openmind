import styled from 'styled-components'
import messageIcon from '../../asset/list/Messages.svg'
import { device } from '../../components/styles'
import Dropdown from '../../components/common/Dropdown'
import { Link } from 'react-router-dom'
import Loading from '../../components/common/Loading'

function CardList({ subjectData, handleSort, order, isLoading, isError }) {
  if (isError) {
    return <div>에러가 발생했습니다.</div>
  }
  return (
    <>
      <Dropdown handleSort={handleSort} order={order} />

      {isLoading ? (
        <Loading />
      ) : (
        <CardListContainer>
          {subjectData?.map((subject) => (
            <Link to={`/post/${subject.id}`} key={subject.id}>
              <UserCard
                name={subject.name}
                imageSource={subject.imageSource}
                questionCount={subject.questionCount}
              />
            </Link>
          ))}
        </CardListContainer>
      )}
    </>
  )
}
function UserCard({ name, imageSource, questionCount }) {
  return (
    <CardContainer>
      <CardProfile>
        <img src={imageSource} />
        <div>{name}</div>
      </CardProfile>

      <CardContent>
        <div>
          <img src={messageIcon} />
          <span>받은 질문</span>
        </div>
        <div>{questionCount}개</div>
      </CardContent>
    </CardContainer>
  )
}

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22rem);
  grid-gap: 2rem;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 4rem;

  @media ${device.tablet} {
    width: calc(100% - 6.4rem);
    max-width: 94rem;
    grid-template-columns: repeat(auto-fill, minmax(18.6rem, 1fr));
    @media (max-width: 868px) {
      max-width: 70rem;
    }
  }

  @media ${device.mobile} {
    width: calc(100% - 4.8rem);
    grid-template-columns: repeat(2, 15.5rem);
    padding-top: 1.8rem;
    padding-bottom: 3rem;
  }
`

const CardContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 18.6rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--gray-40);
  background-color: var(--gray-10);
  @media ${device.mobile} {
    padding: 1.6rem;
    width: 15.5rem;
  }
`

const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
  }

  div {
    color: var(--gray-60);
    font-size: 2rem;
    line-height: 2.4rem;
  }

  @media ${device.mobile} {
    img {
      width: 4.8rem;
      height: 4.8rem;
    }

    div {
      font-size: 1.8rem;
    }
  }
`

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--gray-40);
  font-size: 1.6rem;

  line-height: 2.2rem;

  img {
    margin-right: 0.4rem;
  }
  div {
    text-align: center;
    display: flex;
  }

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
`

export default CardList
