import styled, { css } from 'styled-components'
import { ReactComponent as ArrowIcon } from '../../asset/Button/button-icon-arrow-right.svg'
import { device } from '../styles'
import { darkMode } from '../../atom/atom'
import { useRecoilValue } from 'recoil'

const ButtonFlexBoxStyledComponent = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  line-height: 2.2rem;
  height: 4.6rem;
  @media ${device.mobile} {
    height: 3.4rem;
  }
`

export const ButtonInteractiveStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  color: var(--gray-10, #fff);
  ${({ $theme, $isValue }) =>
    $theme === 'light'
      ? $isValue
        ? 'background: var(--brown-40); cursor: pointer; &:hover {border: 0.2rem solid var(--brown-50)}; &:active {background: var(--brown-50);}'
        : 'background: var(--brown-30);'
      : $isValue
      ? 'background: var(--gray-50); cursor: pointer; &:hover { border: 0.2rem solid var(--gray-10); } &:active { background: var(--gray-55);}'
      : 'background: var(--gray-30);'}
`

const ButtonArrowStyledComponent = styled.div`
  ${ButtonFlexBoxStyledComponent}
  cursor: pointer;
  ${({ $theme }) =>
    $theme === 'light'
      ? 'background: var(--brown-10); color: var(--brown-40); border: 0.1rem solid var(--brown-40); &:hover { border: 0.2rem solid var(--brown-40); } &:active { background: var(--brown-20); } svg > g > path { fill: var(--brown-40); }'
      : 'background: var(--gray-50); color: var(--gray-10); border: 0.1rem solid var(--gray-10); &:hover { border: 0.2rem solid var(--gray-10); } &:active { background: var(--gray-55); } svg > g > path { fill: var(--gray-10); }'}

  @media ${device.mobile} {
    padding: 0.8rem 1.2rem;
    font-size: 1.4rem;
  }
`

function Button({ brown = false, text = '질문 받기', isValue, onClick }) {
  const theme = useRecoilValue(darkMode)
  console.log(theme)
  return (
    <>
      {brown ? (
        <ButtonInteractiveStyledComponent
          $theme={theme}
          $isValue={isValue}
          onClick={onClick}
        >
          {text}
        </ButtonInteractiveStyledComponent>
      ) : (
        <ButtonArrowStyledComponent $theme={theme} onClick={onClick}>
          {text}
          <ArrowIcon />
        </ButtonArrowStyledComponent>
      )}
    </>
  )
}

export default Button
