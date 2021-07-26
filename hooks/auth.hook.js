import {useState, useCallback, useEffect} from 'react'

const storageUsers = 'usersData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userName, setUserName] = useState(null)

  const login = useCallback((jwtToken, id, name, email) => {
    setToken(jwtToken)
    setUserId(id)
    setUserName(name)
    setUserEmail(email)

    localStorage.setItem(storageUsers, JSON.stringify({
      token: jwtToken, userId: id, email: email
    }))
  }, [])

  const registration = useCallback((jwtToken, id, name, email) => {
    setToken(jwtToken)
    setUserName(name)
    setUserEmail(email)
    setUserId(id)
  }, [])

  const logOut = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserName(null)
    setUserName(null)

    localStorage.removeItem(storageUsers)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageUsers))

    if (data && data.token) {
      login(data.token, data.userId, data.userName, data.userEmail)
    }
  }, [login])

  return {login, registration, logOut, userId, userName, userEmail, token}
}
