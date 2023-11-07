import styled, { css } from 'styled-components'
import arrowIcon from '../../asset/Button/button-icon-arrow-right.svg'
import { device } from '../styles'

const ButtonFlexBoxStyledComponent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  @media ${device.mobile} {
    padding: 8px 12px;
    font-size: 14px;
  }
`

const ButtonInteractiveStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  background: ${({ $isValue }) =>
    $isValue ? 'var(--brown-40, #542f1a);' : 'var(--brown-30, #C7BBB5);'}
  color: var(--gray-10, #fff);
  ${({ $isValue }) =>
    $isValue &&
    'cursor: pointer; &:hover {border: 2px solid var(--brown-50, #341909)}; &:active {background: var(--brown-50, #341909);}'}
`

const ButtonArrowStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  cursor: pointer;
  background: var(--brown-10, #f5f1ee);
  color: var(--brown-40, #542f1a);
  border: 1px solid var(--brown-40, #542f1a);
  &:hover {
    border: 2px solid var(--brown-40, #542f1a);
  }
  &:active {
    background: var(--brown-20, #e4d5c9);
  }
  img {
    filter: brightness(0) saturate(100%) invert(16%) sepia(7%) saturate(5607%)
      hue-rotate(340deg) brightness(101%) contrast(87%);
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
