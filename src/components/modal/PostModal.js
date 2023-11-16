import styled from 'styled-components'
import { ReactComponent as MessageIcon } from '../../asset/postModal/img_message.svg'
import { ReactComponent as CloseIcon } from '../../asset/postModal/img_close.svg'
import InputTextArea, {
  InputTextAreaStyledComponent,
} from '../common/InputTextArea'
import Button, { ButtonInteractiveStyledComponent } from '../common/Button'
import { device } from '../styles'
import { useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { postQuestions } from '../../api/postModal'
import Loading from '../common/Loading'
import { useEffect } from 'react'
import { modalState } from '../../recoil/modal'
import { useResetRecoilState } from 'recoil'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'

const PostModal = ({ onClick, userData }) => {
  const [question, setQuestion] = useState('')
  const [isLoading, error, postQuestionAsync] = useAsync(postQuestions)
  const theme = useRecoilValue(darkMode)
  const resetModalState = useResetRecoilState(modalState)

  const handlePostQuestion = async () => {
    if (question !== '') {
      const result = await postQuestionAsync(userData.id, question)

      if (result) {
        resetModalState()
        onClick()
      }
    }
  }

  useEffect(() => {
    if (error) {
      setQuestion('')
    }
  }, [error])

  return (
    <Overlay>
      <OuterModalContainer onClick={() => resetModalState()} />

      <ModalMainContainer $theme={theme}>
        <TitleContainer $theme={theme}>
          <MessageIcon className="messageIcon" />
          <div className="title">질문을 작성하세요</div>
          <CloseIcon className="closeIcon" onClick={() => resetModalState()} />
        </TitleContainer>

        <ContentContainer $theme={theme}>
          <div className="userContainer">
            <div className="to">To.</div>
            <img
              className="userIcon"
              src={userData.imageSource}
              alt="userIcon"
            />
            <div className="userName">{userData.name}</div>
          </div>

          {isLoading ? (
            <div className="loadingContainer">
              <Loading />
            </div>
          ) : (
            <>
              <InputTextArea
                setAnswer={setQuestion}
                onKeyDown={handlePostQuestion}
              />

              <Button
                brown={true}
                text="질문 보내기"
                isValue={question !== ''}
                onClick={handlePostQuestion}
              />
            </>
          )}
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
  background-color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-10);' : 'var(--gray-40);'}
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
    color: ${({ $theme }) =>
      $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'}
    font-size: 2.4rem;
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
  ${({ $theme }) => ($theme === 'light' ? '' : 'svg > path {fill: white;}')}
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  .loadingContainer {
    align-self: center;
  }

  .userContainer {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color: ${({ $theme }) =>
      $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'}
    font-weight: 400;
    margin-bottom: 0.4rem;

    .to {
      font-size: 1.8rem;
      line-height: 2.4rem;
    }

    .userIcon {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
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
