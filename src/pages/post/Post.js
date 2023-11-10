import styled from 'styled-components'
import Nav from './Nav'
import PostContent from './PostContent'
import * as S from './PostStyledComponent'
import PostModal from '../../components/modal/PostModal'
import { useEffect, useState } from 'react'
import PostNoContent from '../post/PostNoContent'
import PostDeleteButton from './PostDeleteButton'
import { useLocation } from 'react-router-dom'

const Div = styled.div`
  position: relative;
  width: 100vw;
`

const Post = () => {
  const [isOpened, setIsOpened] = useState(false)
  const isData = true

  const state =
    useLocation().pathname.split('/').length === 4 ? 'answer' : 'default'

  useEffect(() => {
    isOpened
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [isOpened])
  return (
    <>
      <Div>
        <Nav />
        <S.Div className="Div">
          {state === 'answer' && (
            <S.DeleteButton>
              <PostDeleteButton />
            </S.DeleteButton>
          )}

          {isData ? (
            <PostContent
              setIsOpened={setIsOpened}
              state={state}
              isOpened={isOpened}
            />
          ) : (
            <PostNoContent setIsOpened={setIsOpened} isOpened={isOpened} />
          )}
        </S.Div>
      </Div>
      {isOpened && <PostModal setIsOpened={setIsOpened} isOpened={isOpened} />}
    </>
  )
}

export default Post
