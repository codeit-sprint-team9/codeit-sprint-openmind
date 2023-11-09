import styled, { css } from 'styled-components'
import arrowIcon from '../../asset/Button/button-icon-arrow-right.svg'
import { device } from '../styles'

const ButtonFlexBoxStyledComponent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
`

export const ButtonInteractiveStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  background: ${({ $isValue }) =>
    $isValue ? 'var(--brown-40, #542f1a);' : 'var(--brown-30, #C7BBB5);'}
  color: var(--gray-10, #fff);
  ${({ $isValue }) =>
    $isValue &&
    'cursor: pointer; &:hover {border: 0.2rem solid var(--brown-50, #341909)}; &:active {background: var(--brown-50, #341909);}'}
`

const ButtonArrowStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  cursor: pointer;
  background: var(--brown-10, #f5f1ee);
  color: var(--brown-40, #542f1a);
  border: 0.1rem solid var(--brown-40, #542f1a);
  &:hover {
    border: 0.2rem solid var(--brown-40, #542f1a);
  }
  &:active {
    background: var(--brown-20, #e4d5c9);
  }
  img {
    filter: brightness(0) saturate(100%) invert(16%) sepia(7%) saturate(5607%)
      hue-rotate(340deg) brightness(101%) contrast(87%);
  }
  @media ${device.mobile} {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`

function Button({ brown = false, text = '질문 받기', isValue }) {
  return (
    <>
      {brown ? (
        <ButtonInteractiveStyledComponent $isValue={isValue}>
          {text}
        </ButtonInteractiveStyledComponent>
      ) : (
        <ButtonArrowStyledComponent>
          {text}
          <img src={arrowIcon} alt="arrowIcon" />
        </ButtonArrowStyledComponent>
      )}
    </>
  )
}

export default Button
