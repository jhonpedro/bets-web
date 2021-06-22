import produce from 'immer'
import get from 'lodash/get'
import { REHYDRATE } from 'redux-persist/es/constants'
import { RootState } from '../..'
import axios from '../../../services/axios'
import { PossibleActions } from './actions'
import { CLEAR_ERROR, LOGIN_FAILED, LOGIN_SUCCEED, LOGOUT } from './actionTypes'

const initialState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false,
  error: '',
}

type Action = PossibleActions | { type: typeof REHYDRATE; payload: RootState }

/* eslint-disable no-param-reassign */
const authReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCEED: {
        draft.email = action.payload.email
        draft.name = action.payload.name
        draft.token = action.payload.token
        draft.isLoggedIn = true
        break
      }
      case LOGIN_FAILED: {
        draft.error = action.payload.message
        break
      }
      case LOGOUT: {
        draft.name = ''
        draft.email = ''
        draft.isLoggedIn = false
        draft.error = ''
        break
      }
      case CLEAR_ERROR: {
        draft.error = ''
        break
      }
      case REHYDRATE: {
        axios.defaults.headers.common[
          // eslint-disable-next-line dot-notation
          'Authorization'
        ] = `Bearer ${get(action, 'payload.auth.token')}`
        break
      }
      default:
        break
    }
  })

export default authReducer
