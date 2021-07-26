import {useCallback, useState} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(() => {}, [])

  const clearError = useCallback(() => setError(null), [])

  return {loading, request, error, clearError}
}
