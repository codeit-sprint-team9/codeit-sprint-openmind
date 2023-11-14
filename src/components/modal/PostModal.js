import styled from 'styled-components'
import { ReactComponent as MessageIcon } from '../../asset/postModal/img_message.svg'
import { ReactComponent as CloseIcon } from '../../asset/postModal/img_close.svg'
import InputTextArea, {
  InputTextAreaStyledComponent,
} from '../common/InputTextArea'
import Button, { ButtonInteractiveStyledComponent } from '../common/Button'
import { device } from '../styles'
import { useState } from 'react'
import UserIcon from '../../asset/postCard/img_postCardUser.png'
import useAsync from '../../hooks/useAsync'
import { postQuestions } from '../../api/postModal'

const PostModal = ({ setIsOpened }) => {
  const [question, setQuestion] = useState('')
  const [isLoading, error, postQuestionAsync] = useAsync(postQuestions)
  // 홈 부분 병합 후 수정 예정
  const id = localStorage.getItem('userInfo') || 225

  const handlePostQuestion = async () => {
    const result = await postQuestionAsync(id, question)

    if (result) setIsOpened(false)
  }

  if (isLoading) {
    return <div>질문을 올리는 중입니다. 잠시만 기다려 주세요.</div>
  }

  if (error) {
    return <div>문제가 발생했습니다.</div>
  }

  return (
    <Overlay>
      <OuterModalContainer onClick={() => setIsOpened(false)} />

      <ModalMainContainer>
        <TitleContainer>
          <MessageIcon className="messageIcon" />
          <div className="title">질문을 작성하세요</div>
          <CloseIcon className="closeIcon" onClick={() => setIsOpened(false)} />
        </TitleContainer>

        <ContentContainer>
          <div className="userContainer">
            <div className="to">To.</div>
            <img className="userIcon" src={UserIcon} alt="userIcon" />
            <div className="userName">아초는고양이</div>
          </div>

          <InputTextArea setAnswer={setQuestion} />

          <Button
            brown={true}
            text="질문 보내기"
            isValue={question !== ''}
            onClick={handlePostQuestion}
          />
        </ContentContainer>
      </ModalMainContainer>
    </Overlay>
  )
}

export default PostModal

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
`

export const OuterModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--gray-60);
  opacity: 0.4;
`
export const ModalMainContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 61.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background-color: var(--gray-10);
  background-color: var(--gray-55);
  border-radius: 2.4rem;
  padding: 4rem 4rem 7rem;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media all and ${device.mobile} {
    width: 32.7rem;
    padding: 2.4rem;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;

  .messageIcon {
    margin-right: 0.8rem;
  }

  .title {
    // color: var(--gray-60);
    color: var(--gray-10);
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3rem;
    @media all and ${device.mobile} {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  .closeIcon {
    margin-left: auto;
    cursor: pointer;
    @media all and ${device.mobile} {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
  svg > path {
    fill: white;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  .userContainer {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    // color: var(--gray-60);
    color: var(--gray-10);
    font-weight: 400;
    margin-bottom: 0.4rem;

    .to {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    .userIcon {
      width: 2.8rem;
      height: 2.8rem;
    }

    .userName {
      font-size: 1.6rem;
      line-height: 2.2rem;
    }
  }

  ${InputTextAreaStyledComponent} {
    height: 18rem;
    @media all and ${device.mobile} {
      height: 35.8rem;
    }
  }

  ${ButtonInteractiveStyledComponent} {
    @media all and ${device.mobile} {
      padding: 1.2rem 2.4rem;
      font-size: 1.6rem;
    }
  }
`
