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
  width: 100%;
`

const Post = () => {
  const [isOpened, setIsOpened] = useState(false)
  const isData = true

  const location = useLocation().pathname.split('/').length

  useEffect(() => {
    isOpened
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'scroll')
  }, [isOpened])
  return (
    <>
      <Div>
        <Nav />
        <S.Div>
          {location === 4 && (
            <S.DeleteButton>
              <PostDeleteButton />
            </S.DeleteButton>
          )}

          {isData ? (
            <PostContent
              setIsOpened={setIsOpened}
              state={location}
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
