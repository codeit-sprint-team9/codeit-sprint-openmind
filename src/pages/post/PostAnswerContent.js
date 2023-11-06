import styled from 'styled-components'
import MessageImg from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'

const Button = styled.div`
  text-align: right;
`

export default function PostAnswerContent() {
  return (
    <S.ContentWrapper>
      <Button>삭제하기</Button>
      <S.Content>
        <S.ContentHeader>
          <img src={MessageImg} alt="메세지 이미지" />
          <div>몇개의 질문이 있습니다</div>
        </S.ContentHeader>
        <S.ContentDiv>내용</S.ContentDiv>
      </S.Content>
    </S.ContentWrapper>
  )
}
