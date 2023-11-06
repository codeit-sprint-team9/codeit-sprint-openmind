import * as S from './PostStyledComponent'
import MessageImg from '../../asset/post/message.svg'
import NoQuestionImg from '../../asset/post/no-question-img.svg'

export default function PostNoContent() {
  return (
    <S.ContentWrapper>
      <S.Content>
        <S.ContentHeader>
          <img src={MessageImg} alt="메세지 이미지" />
          <div>아직 질문이 없습니다</div>
        </S.ContentHeader>
        <S.ContentNoQuestion>
          <img
            src={NoQuestionImg}
            alt="질문이 없습니다"
            className="no-question-img"
          />
        </S.ContentNoQuestion>
      </S.Content>
    </S.ContentWrapper>
  )
}
