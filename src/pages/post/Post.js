import styled from 'styled-components'
import PostContent from '../../components/post/PostContent'
import * as S from './PostStyledComponent'
import PostModal from '../../components/modal/PostModal'
import { useEffect, useState } from 'react'
import PostNoContent from '../../components/post/PostNoContent'
import PostDeleteButton from '../../components/post/PostDeleteButton'
import { useNavigate, useParams } from 'react-router-dom'
import useAsync from '../../hooks/useAsync'
import { postMainData, postMainDelete, postUserData } from '../../api/post'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'
import { deleteQuestions } from '../../api/postCard'
import { modalState } from '../../recoil/modal'
import LoadingPage from '../loading/LoadingPage'
import PostHeader from './PostHeader'

const Div = styled.div`
  position: relative;
  width: 100vw;
`

const LIMIT = 4

const Post = ({ state }) => {
  const { id } = useParams()
  const [cnt, setCnt] = useState(0)
  const [items, setItems] = useState([])
  const [offset, setOffset] = useState(0)
  const [, isError, postMainDataAsync] = useAsync(postMainData)
  const [, , postMainDeleteAsync] = useAsync(postMainDelete)

  const count = items.length
  const { postModal } = useRecoilValue(modalState)

  const navigate = useNavigate()
  const theme = useRecoilValue(darkMode)

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
  }

  const handelLoadMore = () => {
    handleLoad({ id, limit: LIMIT, offset })
  }

  const handleDeleteButton = async (id) => {
    if (window.confirm('삭제 하시겠습니까?')) {
      const result = await postMainDeleteAsync(id)
      if (!result) return
      window.localStorage.removeItem('user')
      navigate('/')
    } else {
      return
    }
  }

  const [isPostUserDataLoading, isPostUserDataError, postUserDataAsync] =
    useAsync(postUserData)
  const [userData, setUserData] = useState({})

  const handleUserData = async (id) => {
    const result = await postUserDataAsync(id)

    if (!result) return

    setUserData(result)
  }

  useEffect(() => {
    postModal.display
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [postModal])

  useEffect(() => {
    if (isPostUserDataError === false && !isPostUserDataLoading) {
      handleLoad({ id, offset: 0, limit: LIMIT })
    }
  }, [isPostUserDataError, isPostUserDataLoading])

  useEffect(() => {
    if (isError || isPostUserDataError) {
      navigate('/list')
    }
  }, [isError, isPostUserDataError])

  useEffect(() => {
    handleUserData(id)
  }, [])

  const [, , deleteQuestionsAsync] = useAsync(deleteQuestions)

  const handleDeleteQuestion = async (questionId) => {
    await deleteQuestionsAsync(questionId)
    handleLoad()
  }

  return isPostUserDataLoading ? (
    <LoadingPage />
  ) : (
    <>
      {isError === false && (
        <>
          <Div $theme={theme}>
            <PostHeader userData={userData} />
            <S.Div $theme={theme}>
              {state === 'answer' && (
                <S.DeleteButton>
                  <PostDeleteButton onClick={() => handleDeleteButton(id)} />
                </S.DeleteButton>
              )}

              {count !== 0 ? (
                <PostContent
                  state={state}
                  items={items}
                  cnt={cnt}
                  handleLoadMore={handelLoadMore}
                  handleDeleteQuestion={handleDeleteQuestion}
                />
              ) : (
                <PostNoContent state={state} />
              )}
            </S.Div>
          </Div>
          {postModal.display && (
            <PostModal onClick={handleLoad} userData={userData} />
          )}
        </>
      )}
    </>
  )
}

export default Post
