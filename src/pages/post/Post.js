import styled from 'styled-components'
import Nav from './Nav'
import PostContent from './PostContent'
import * as S from './PostStyledComponent'
import PostModal from '../../components/modal/PostModal'
import { useState } from 'react'
import PostNoContent from '../post/PostNoContent'
import PostDeleteButton from './PostDeleteButton'

const Div = styled.div`
  position: relative;
  width: 100%;
`

const Post = () => {
  const [isOpened, setIsOpened] = useState(false)
  const isData = true
  const state = 'default'

  isOpened
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll')
  return (
    <>
      <Div isOpened={isOpened}>
        <Nav />
        <S.Div state={state}>
          {state === 'answer' && (
            <S.DeleteButton>
              <PostDeleteButton text="삭제하기" fontSize="1.5rem" />
            </S.DeleteButton>
          )}

          {isData ? (
            <PostContent
              setIsOpened={setIsOpened}
              state={state}
              isOpened={isOpened}
            />
          ) : (
            <PostNoContent />
          )}
        </S.Div>
      </Div>
      {isOpened && <PostModal setIsOpened={setIsOpened} isOpened={isOpened} />}
    </>
  )
}

export default Post
