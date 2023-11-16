import styled from 'styled-components'
import { device } from '../styles'
import { darkMode } from '../../atom/atom'
import { useRecoilValue } from 'recoil'

const FloatingButtonStyledComponent = styled.div`
  padding: 1.2rem 2.4rem;
  border-radius: 20rem;
  background: ${({ $theme }) =>
    $theme === 'light' ? 'var(--brown-40);' : 'var(--gray-50);'}
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: var(--gray-10);
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  width: 20.8rem;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    width: 12.7rem;
  }
`

function FloatingButton({ text = '질문 작성하기', onClick }) {
  const theme = useRecoilValue(darkMode)
  return (
    <FloatingButtonStyledComponent onClick={onClick} $theme={theme}>
      {text}
    </FloatingButtonStyledComponent>
  )
}

export default FloatingButton
