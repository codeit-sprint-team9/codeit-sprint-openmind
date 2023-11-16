import styled from 'styled-components'
import errorIcon from '../../../asset/Error/error-icon.svg'
import { useEffect, useState } from 'react'
import { device } from '../../styles'

export default function ErrorToast({ content, state }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const setExistTimeout = setTimeout(() => {
      setIsClosing(true)
      clearTimeout(setExistTimeout)
    }, 6500)
  })

  return (
    <Div $isClosing={isClosing} $state={state}>
      <img src={errorIcon} alt="에러 아이콘" />
      <div className="content">{content}</div>
      <div className="mobileContent">다시 시도해주세요</div>
    </Div>
  )
}

const Div = styled.div`
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
  margin-bottom: 2rem;
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
  animation: 1s forwards
    ${({ $isClosing }) => ($isClosing ? 'fadeOut' : 'fadeIn')};
  .content {
    display: block;
    @media all and ${device.mobile} {
      display: ${(props) => (props.$state === 'apiError' ? 'none' : 'block')};
    }
  }
  .mobileContent {
    display: none;
    @media all and ${device.mobile} {
      display: ${(props) => (props.$state === 'apiError' ? 'block' : 'none')};
    }
  }
`
