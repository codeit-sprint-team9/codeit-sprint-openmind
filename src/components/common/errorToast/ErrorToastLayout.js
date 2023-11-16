import { toastState } from '../../../recoil/toast'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import ErrorToast from './ErrorToast'

const ErrorToastLayout = () => {
  const toasts = useRecoilValue(toastState)

  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <ErrorToast key={toast.id} {...toast} />
      ))}
    </ToastContainer>
  )
}

export default ErrorToastLayout

const ToastContainer = styled.div`
  bottom: 10rem;
  left: 50%;
  position: fixed;
  z-index: 1000;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
