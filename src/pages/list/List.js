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
  const [limit, setLimit] = useState(8)
  const [lastPage, setLastPage] = useState(0)

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
      setLastPage(calculatePage(data?.count))
      setSubjectData(data?.results)
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

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  })
  const handleResize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
    })
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowSize.width < 1199) {
      setLimit(6)
    }
    if (windowSize.width > 1199) {
      setLimit(8)
    }
  }, [limit])

  return (
    <>
      <Header />
      <CardList
        subjectData={subjectData}
        order={order}
        handleSort={handleSort}
        isLoading={isSubjectLoading}
      />
      <Paginator lastPage={lastPage} handleLoadByPage={handleLoadByPage} />
    </>
  )
}

export default List
