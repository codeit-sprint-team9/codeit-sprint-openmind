import styled from 'styled-components'
import { darkMode } from '../../recoil/theme'
import { useRecoilValue } from 'recoil'

const ToastStyledComponent = styled.div`
  padding: 1.2rem 2rem;
  border-radius: 0.8rem;
  background: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-60);' : 'var(--gray-10);'}
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: ${({ $theme }) =>
    $theme === 'light' ? 'var(--gray-10);' : 'var(--gray-60);'}
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`

function Toast() {
  const theme = useRecoilValue(darkMode)
  return (
    <ToastStyledComponent $theme={theme}>
      URL이 복사되었습니다
    </ToastStyledComponent>
  )
}

export default Toast
