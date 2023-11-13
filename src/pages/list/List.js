import CardList from './UserCard'
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
  const [pageCount, setPageCount] = useState(0)
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
      console.log(data)
      if (!data) return
      setPageCount(data.count)
      setLastPage(calculatePage(data.count))
      setSubjectData(data.results)
    },
    [getSubjectAsync]
  )

  const handleLoadByPage = async (pageIndex) => {
    await handleLoad({ order, offset: pageIndex * limit, limit })
  }
  const handleSort = (para) => {
    setOrder(para)
  }

  useEffect(() => {
    handleLoad({ order, offset: 0, limit })
  }, [handleLoad, order, limit])

  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth)
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth < 868) {
      setLimit(6)
      setLastPage(calculatePage(pageCount))
    }
    if (windowWidth > 868) {
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
      <Paginator lastPage={lastPage} handleLoadByPage={handleLoadByPage} />
    </>
  )
}

export default List
