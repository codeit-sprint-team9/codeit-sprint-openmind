import * as S from '../../pages/post/PostStyledComponent'
import { ReactComponent as MessageImg } from '../../asset/post/message.svg'
import { ReactComponent as NoQuestionImg } from '../../asset/post/no-question-img.svg'
import FloatingButton from '../common/FloatingButton'
import { useEffect, useState } from 'react'
import { device } from '../styles'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'
import { modalState } from '../../recoil/modal'
import { useRecoilState } from 'recoil'

export default function PostNoContent({ state }) {
  const [modalOpened, setModalOpened] = useRecoilState(modalState)

  const handleModal = () => {
    setModalOpened((prev) => ({
      ...prev,
      postModal: {
        display: true,
      },
    }))
  }
  const [text, setText] = useState(window.innerWidth < 767 ? true : false)
  const theme = useRecoilValue(darkMode)

  const screenChange = (event) => {
    const matches = event.matches
    setText(matches)
  }

  useEffect(() => {
    let myMedia = window.matchMedia(device.mobile)
    myMedia.addEventListener('change', screenChange)
    return () => myMedia.removeEventListener('change', screenChange)
  }, [])
  return (
    <>
      <S.ContentWrapper $state={state}>
        <S.Content $theme={theme}>
          <S.ContentHeader $theme={theme}>
            <MessageImg className="content-header-img" />
            <div>아직 질문이 없습니다</div>
          </S.ContentHeader>
          <S.ContentNoQuestion $theme={theme}>
            <NoQuestionImg className="no-question-img" />
          </S.ContentNoQuestion>
        </S.Content>
      </S.ContentWrapper>
      <S.DivButton $isOpened={modalOpened.postModal.display}>
        {state === 'default' && (
          <FloatingButton
            text={text ? '질문 작성' : '질문 작성하기'}
            onClick={handleModal}
          />
        )}
      </S.DivButton>
    </>
  )
}
