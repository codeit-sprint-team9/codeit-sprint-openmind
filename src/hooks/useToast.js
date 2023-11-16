import { toastState } from '../recoil/toast'
import { useRecoilState } from 'recoil'

const getRandomID = () => String(new Date().getTime())

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState)

  const removeToast = (toastID) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID))
  }

  const fireToast = (toast) => {
    const id = getRandomID()
    setToasts((prev) => [...prev, { ...toast, id: id }])
    setTimeout(() => removeToast(id), 8000)
  }

  return { toasts, fireToast }
}
