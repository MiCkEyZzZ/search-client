import {useAuth} from '../../hooks/auth.hook'
import {REGISTER_SUCCESS, SET_MESSAGE} from '../types'
import {toast} from 'react-toastify'

export const register = (name, email, password) => async (dispatch) => {
  try {
    useAuth.registration(name, email, password)
  } catch (error) {
    console.log()
  }
  return useAuth.registration(name, email, password)
      .then(
          response => {
            dispatch({
              type: REGISTER_SUCCESS
            })

            dispatch({
              type: SET_MESSAGE,
              payload: toast.success(response.data.message)
            })

            return Promise.resolve()
          }
      )
}
