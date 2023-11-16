import CardList from './CardList'
import Paginator from './Paginator'
import Header from './Header'
import { useCallback, useEffect, useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { getSubject } from '../../api/list'
import { debounce } from '@mui/material'

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
  const [isSubjectLoading, , getSubjectAsync] = useAsync(getSubject)

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
