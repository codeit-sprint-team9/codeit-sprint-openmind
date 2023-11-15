import styled from 'styled-components'
import errorIcon from '../../../asset/Error/error-icon.svg'
import { useEffect, useState } from 'react'

export default function ErrorToast({ content, duration }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true)
      clearTimeout(setExistTimeout)
    }, duration ?? 1000)
  })

  return (
    <Div $isClosing={isClosing}>
      <img src={errorIcon} alt="에러 아이콘" />
      <div>
        {content
          ? content
          : '알 수 없는 오류가 발생했습니다. 다시 시도해주세요'}
      </div>
    </Div>
  )
}

const Div = styled.div`
  max-width: 38rem;
  width: fit-content;
  height: 4rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  gap: 0.6rem;
  padding: 1rem 1.8rem;
  background: var(--red, #b93333);
  color: var(--gray-10, #ffffff);
  border-radius: 0.8rem;
  box-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
  img {
    margin-right: 1rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
  animation: 0.3s forwards
    ${({ $isClosing }) => ($isClosing ? 'fadeOut' : 'fadeIn')};
`
