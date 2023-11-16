import { useCallback, useState } from 'react'
import { useToast } from './useToast'

const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false)
  const [isError, setIsError] = useState(null)
  const { fireToast } = useToast()

  const wrappedFunction = useCallback(
    async (...args) => {
      setPending(true)
      setIsError(false)
      try {
        return await asyncFunction(...args)
      } catch (error) {
        fireToast({
          state: 'apiError',
          content: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.',
        })
        setIsError(true)
      } finally {
        setPending(false)
      }
    },
    [asyncFunction]
  )

  return [pending, isError, wrappedFunction]
}

export default useAsync
