const initialState = {
  isAuthenticated: true,
  user: {
    id: null,
    name: null,
    email: null,
    token: null
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state, currentUser: action.payload, isAuthenticated: true}
    default: return state
  }
}
