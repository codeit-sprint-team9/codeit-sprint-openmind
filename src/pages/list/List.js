import styled from 'styled-components'
import CardList from './UserCard'
import Paginator from './Paginator'
import Header from './Header'
import { useCallback, useEffect, useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { getSubject } from '../../api/list'

function List() {
  const [subjectData, setSubjectData] = useState([])
  const [order, setOrder] = useState('name')
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(8)

  const [isSubjectLoading, isSubjectError, getSubjectAsync] =
    useAsync(getSubject)

  const handleLoad = useCallback(
    async (options) => {
      const { results } = await getSubjectAsync(options)
      setSubjectData(results)
    },
    [getSubjectAsync]
  )

  // const handleLoadMore = 
  const handleSort = (para) => {
    setOrder(para)
  }

  useEffect(() => {
    handleLoad({ order, offset, limit })
  }, [handleLoad, order])

  if (isSubjectLoading) {
    return <div>화면을 불러오는 중입니다.</div>
  }

  if (isSubjectError) {
    return <div>문제가 발생했습니다.</div>
  }
  return (
    <>
      <Header />
      <CardList
        subjectData={subjectData}
        order={order}
        handleSort={handleSort}
      />
      <Paginator />
    </>
  )
}

export default List
