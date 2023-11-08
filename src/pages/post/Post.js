import styled from 'styled-components'
import Nav from './Nav'
import PostContent from './PostContent'
import * as S from './PostStyledComponent'

const Div = styled.div`
  position: relative;
  width: 100%;
  background-color: #f9f9f9;
`

const Post = () => {
  return (
    <Div>
      <Nav />
      <S.Div>
        <PostContent />
        {/* {hasNext && <button onClick={handleLoadMore}>더보기</button>} */}
        {/* <PostNoContent />
        <PostAnswerContent /> */}
      </S.Div>
    </Div>
  )
}

export default Post
