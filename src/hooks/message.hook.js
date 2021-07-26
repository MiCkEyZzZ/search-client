import {useCallback} from 'react'

export const useMessage = () => {
  return useCallback((text) => {
    if (window.Toast && text) {
      window.Toast.add({text})
    }
  }, [])
}
