import { useCallback, useState } from 'react'

const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false)
  const [isError, setIsError] = useState(null)

  const wrappedFunction = useCallback(
    async (...args) => {
      setPending(true)
      setIsError(false)
      try {
        return await asyncFunction(...args)
      } catch (error) {
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
