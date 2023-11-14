import styled, { css } from 'styled-components'
import { ReactComponent as ArrowIcon } from '../../asset/Button/button-icon-arrow-right.svg'
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
  height: 5rem;
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
  // background: var(--brown-10, #f5f1ee);
  background: var(--gray-50);
  // color: var(--brown-40, #542f1a);
  color: var(--gray-10);
  // border: 0.1rem solid var(--brown-40, #542f1a);
  border: 0.1rem solid var(--gray-10);
  &:hover {
    // border: 0.2rem solid var(--brown-40, #542f1a);
    border: 0.2rem solid var(--gray-10);
  }
  &:active {
    background: var(--brown-20, #e4d5c9);
    background: var(--gray-55);
  }
  @media ${device.mobile} {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
  svg > g > path {
    // fill: var(--brown-40);
    fill: var(--gray-10);
  }
`

function Button({ brown = false, text = '질문 받기', isValue, onClick }) {
  return (
    <>
      {brown ? (
        <ButtonInteractiveStyledComponent $isValue={isValue} onClick={onClick}>
          {text}
        </ButtonInteractiveStyledComponent>
      ) : (
        <ButtonArrowStyledComponent>
          {text}
          <ArrowIcon />
        </ButtonArrowStyledComponent>
      )}
    </>
  )
}

export default Button
