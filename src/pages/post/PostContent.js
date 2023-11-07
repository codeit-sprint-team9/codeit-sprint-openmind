import MessageImg from '../../asset/post/message.svg'
import * as S from './PostStyledComponent'

export default function PostContent() {
  return (
    <S.ContentWrapper>
      <S.Content>
        <S.ContentHeader>
          <img src={MessageImg} alt="메세지 이미지" />
          <div>몇개의 질문이 있습니다</div>
        </S.ContentHeader>
        <S.ContentDiv>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </S.ContentDiv>
      </S.Content>
      <S.DivButton>질문 작성하기</S.DivButton>
    </S.ContentWrapper>
  )
}
