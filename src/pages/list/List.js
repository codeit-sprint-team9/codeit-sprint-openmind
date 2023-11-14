import CardList from './CardList'
import Paginator from './Paginator'
import Header from './Header'
import { useCallback, useEffect, useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { getSubject } from '../../api/list'
import { debounce } from '@mui/material'

<<<<<<< HEAD
const HeaderTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 13rem;
  align-items: center;

  .answer-button {
    width: 16.8rem;
  }

  @media ${device.mobile} {
    gap: 2rem;
    flex-direction: column;
    align-items: center;

    .answer-button {
      width: 13.1rem;
    }
  }
`

const HeaderBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1.2rem;

  .answer-who {
    color: var(--gray-60, #000);
    font-size: 4rem;
    font-weight: 400;
  }

  @media ${device.mobile} {
    flex-direction: row;
    gap: 4.2rem;
    margin-top: 1.2rem;
    .answer-who {
      font-size: 2.4rem;
    }
  }
`
function Header() {
  return (
    <>
      <HeaderTopContainer>
        <Link to="/">
          <img src={logoImage}></img>
        </Link>
        <div className="answer-button">
          <Button text="답변하러 가기" isValue={true} />
        </div>
      </HeaderTopContainer>

      <HeaderBottomContainer>
        <div className="answer-who">누구에게 질문할까요?</div>
        <Dropdown />
      </HeaderBottomContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
=======
>>>>>>> 61dfa6ab250ad8b6cafad0313b4e91d518932efc
function List() {
  const [subjectData, setSubjectData] = useState([])
  const [order, setOrder] = useState('name')
  const [lastPage, setLastPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [limit, setLimit] = useState(window.innerWidth < 868 ? 6 : 8)

  const calculatePage = (num) => {
    return Math.ceil(num / limit)
  }
  const [isSubjectLoading, isSubjectError, getSubjectAsync] =
    useAsync(getSubject)

  const handleLoad = useCallback(
    async (options) => {
      const data = await getSubjectAsync(options)
      if (!data) return
      setTotalPage(data.count)
      setLastPage(calculatePage(data.count))
      setSubjectData(data.results)
    },
    [getSubjectAsync]
  )

  const onClickPage = (pageIndex) => {
    setCurrentPageIndex(pageIndex)
  }
  const handleSort = (para) => {
    setOrder(para)
  }

  useEffect(() => {
    handleLoad({ order, offset: currentPageIndex * limit, limit })
  }, [handleLoad, order, limit, currentPageIndex])

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth)
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const cardBreakPoint = 868

  useEffect(() => {
    if (windowWidth < cardBreakPoint) {
      setLimit(6)
      setLastPage(calculatePage(totalPage))
    }
    if (windowWidth > cardBreakPoint) {
      setLimit(8)
    }
  })

  return (
    <>
      <Header />
      <CardList
        subjectData={subjectData}
        order={order}
        handleSort={handleSort}
        isLoading={isSubjectLoading}
        isError={isSubjectError}
      />
      <Paginator
        lastPage={lastPage}
        onClickPage={onClickPage}
        windowWidth={windowWidth}
      />
    </>
  )
}

export default List
