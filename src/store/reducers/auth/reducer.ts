import produce from 'immer'
import { PossibleActions } from './actions'
import { LOGIN_FAILED, LOGIN_SUCCEED } from './actionTypes'

const initialState = {
  username: '',
  email: '',
  isLoggedIn: false,
  error: '',
}

type Action = PossibleActions

/* eslint-disable no-param-reassign */
const authReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCEED: {
        draft.email = action.payload.email
        draft.username = action.payload.name
        draft.isLoggedIn = true
        break
      }
      case LOGIN_FAILED: {
        draft.error = action.payload.message
        break
      }
      default:
        break
    }
  })

export default authReducer
