import styled from 'styled-components'
import Nav from './Nav'
import PostContent from './PostContent'
import * as S from './PostStyledComponent'
import PostModal from '../../components/modal/PostModal'
import { useEffect, useState } from 'react'
import PostNoContent from '../post/PostNoContent'
import PostDeleteButton from './PostDeleteButton'
import { useLocation, useNavigate } from 'react-router-dom'
import useAsync from '../../hooks/useAsync'
import { postMainData, postMainDelete } from '../../api/post'

const Div = styled.div`
  position: relative;
  width: 100vw;
`

const LIMIT = 4

const Post = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const id = userData.id

  const [isOpened, setIsOpened] = useState(false)
  const [cnt, setCnt] = useState(0)
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)
  const [isLoading, isError, postMainDataAsync] = useAsync(postMainData)
  const [isDeleteLoading, isDeleteError, postMainDeleteAsync] =
    useAsync(postMainDelete)
  const count = items.length

  const state =
    useLocation().pathname.split('/').length === 4 ? 'answer' : 'default'
  const navigate = useNavigate()

  const handleLoad = async (options = { id: id, offset: 0, limit: LIMIT }) => {
    const result = await postMainDataAsync(options)
    if (!result) return
    const { results } = result
    setCnt(result.count)
    if (options.offset === 0) {
      setItems(results)
    } else {
      setItems((prevItems) => [...prevItems, ...results])
    }
    setOffset(options.offset + options.limit)
    if (isError) return <div>에러!</div>
    if (isLoading) return <div>로딩중!</div>
  }

  const handelLoadMore = () => {
    handleLoad({ id, limit: LIMIT, offset })
  }

  const handleDeleteButton = async (id) => {
    if (window.confirm('삭제 하시겠습니까?')) {
      const result = await postMainDeleteAsync(id)
      if (!result) return
      window.localStorage.clear()
      if (isDeleteError) return <div>에러!</div>
      if (isDeleteLoading) return <div>로딩중!</div>
      navigate('/')
    } else {
      return
    }
  }

  useEffect(() => {
    isOpened
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [isOpened])

  useEffect(() => {
    handleLoad({ id, offset: 0, limit: LIMIT })
  }, [])

  return (
    <>
      <Div>
        <Nav userData={userData} />
        <S.Div>
          {state === 'answer' && (
            <S.DeleteButton onClick={() => handleDeleteButton(id)}>
              <PostDeleteButton />
            </S.DeleteButton>
          )}

          {count !== 0 ? (
            <PostContent
              setIsOpened={setIsOpened}
              isOpened={isOpened}
              state={state}
              items={items}
              cnt={cnt}
              handleLoadMore={handelLoadMore}
            />
          ) : (
            <PostNoContent
              setIsOpened={setIsOpened}
              isOpened={isOpened}
              state={state}
            />
          )}
        </S.Div>
      </Div>
      {isOpened && (
        <PostModal
          onClick={handleLoad}
          setIsOpened={setIsOpened}
          isOpened={isOpened}
        />
      )}
    </>
  )
}

export default Post
