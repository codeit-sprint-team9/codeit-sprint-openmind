import styled from 'styled-components'
import messageIcon from '../../asset/list/Messages.svg'
import { device } from '../../components/styles'
import Dropdown from '../../components/common/Dropdown'
import { useCallback, useEffect, useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { getSubject } from '../../api/api'

function CardList() {
  const [subjectData, setSubjectData] = useState([])
  const [order, setOrder] = useState('time')
  const [offset, setOffset] = useState(0)

  const [isSubjectLoading, isSubjectError, getSubjectAsync] =
    useAsync(getSubject)

  const handleLoad = useCallback(async (options) => {
    const { results } = await getSubjectAsync(options)
    console.log(results)
    if (!results) return
    setSubjectData(results)
  }, [getSubjectAsync])

  useEffect(() => {
    handleLoad({ order, offset, limit: 8 })
  }, [])

  if (isSubjectLoading) {
    return <div>화면 로딩 중</div>
  }
  return (
    <>
      <Dropdown />
      <CardListContainer>
        {subjectData.map((subject) => {
          return (
            <UserCard
              key={subject.id}
              name={subject.name}
              imageSource={subject.imageSource}
              questionCount={subject.questionCount}
            />
          )
        })}
      </CardListContainer>
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
  display: flex;
  height: 18.6rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.6rem;
  border: 0.1rem solid var(--gray-40);

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
  }

  div {
    color: var(--gray-60);
    font-size: 2rem;
    font-weight: 400;
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
