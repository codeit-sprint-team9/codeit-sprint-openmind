import styled from 'styled-components'

const ToastStyledComponent = styled.div`
  padding: 1.2rem 2rem;
  border-radius: 0.8rem;
  background: var(--gray-60, #000);
  box-shadow: 0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);
  color: var(--gray-10, #fff);
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
`

function Toast() {
  return <ToastStyledComponent>URL이 복사되었습니다</ToastStyledComponent>
}

export default Toast
