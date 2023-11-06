import styled from 'styled-components'

const ToastStyledComponent = styled.div`
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--gray-60, #000);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--grayscale-10, #fff);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  font-family: Pretendard;
`

function Toast() {
  return <ToastStyledComponent>URL이 복사되었습니다</ToastStyledComponent>
}

export default Toast
