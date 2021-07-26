import {useCallback, useState} from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userEmail, setUserEmail] = useState(null)

  const login = useCallback((id, jwtToken, name, email) => {
    setUserId(id)
    setToken(jwtToken)
    setUserName(name)
    setUserEmail(email)

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, userName: name, userEmail: email
    }))
  }, [])

  const registration = useCallback((id, jwtToken, name, email) => {
    setUserId(id)
    setToken(jwtToken)
    setUserName(name)
    setUserEmail(email)
  }, [])

  const logOut = useCallback(() => {
    setUserId(null)
    setToken(null)
    setUserName(null)
    setUserEmail(null)

    localStorage.removeItem(storageName)
  }, [])

  const checkAuth = useCallback(() => {}, [])

  return {login, registration, logOut, checkAuth, userId, token, userName, userEmail}
}
