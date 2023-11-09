import { useEffect, useState } from 'react'

const useAsync = (fetchFn) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const res = await fetchFn()
        setData(res)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [fetchFn])

  return { isLoading, error, data }
}

export default useAsync
