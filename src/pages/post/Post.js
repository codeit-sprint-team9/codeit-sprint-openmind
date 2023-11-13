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
const userData = JSON.parse(localStorage.getItem('user'))
const id = userData.id

const Post = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [isLoading, isError, postMainDataAsync] = useAsync(postMainData)
  const [isDeleteLoading, isDeleteError, postMainDeleteAsync] =
    useAsync(postMainDelete)
  const [item, setItem] = useState([])
  const [userId, setUserId] = useState(0)
  const count = item.length
  const state =
    useLocation().pathname.split('/').length === 4 ? 'answer' : 'default'
  const navigate = useNavigate()
  console.log(userData)

  const handlePost = async (userId) => {
    const result = await postMainDataAsync(userId)
    if (!result) return
    const { results } = result
    setItem(results)
    if (isError) return <div>에러!</div>
    if (isLoading) return <div>로딩중!</div>
  }

  const handleDeleteButton = async (userId) => {
    console.log(id)
    const result = await postMainDeleteAsync(userId)
    if (!result) return
    window.localStorage.clear()
    if (isDeleteError) return <div>에러!</div>
    if (isDeleteLoading) return <div>로딩중!</div>
    navigate('/')
  }

  useEffect(() => {
    isOpened
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [isOpened])

  useEffect(() => {
    setUserId(id)
    handlePost(userId)
  }, [userId])
  return (
    <>
      <Div>
        <Nav userData={userData} />
        <S.Div className="Div">
          {state === 'answer' && (
            <S.DeleteButton onClick={() => handleDeleteButton(id)}>
              <PostDeleteButton />
            </S.DeleteButton>
          )}

          {count !== 0 ? (
            <PostContent
              setIsOpened={setIsOpened}
              state={state}
              items={item}
              isOpened={isOpened}
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
      {isOpened && <PostModal setIsOpened={setIsOpened} isOpened={isOpened} />}
    </>
  )
}

export default Post
