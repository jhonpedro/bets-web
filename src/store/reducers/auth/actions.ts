import { Dispatch } from 'react'
import get from 'lodash/get'
import axios from '../../../services/axios'
import { CLEAR_ERROR, LOGIN_FAILED, LOGIN_SUCCEED, LOGOUT } from './actionTypes'

interface ActionClearError {
  type: typeof CLEAR_ERROR
}

const actionClearError = (): ActionClearError => ({ type: CLEAR_ERROR })

interface ActionLoginRequestSucceed {
  type: typeof LOGIN_SUCCEED
  payload: {
    email: string
    name: string
    token: string
  }
}

const actionLoginSucceed = (
  email: string,
  name: string,
  token: string
): ActionLoginRequestSucceed => ({
  type: LOGIN_SUCCEED,
  payload: {
    email,
    name,
    token,
  },
})

interface ActionLoginRequestFailed {
  type: typeof LOGIN_FAILED
  payload: {
    message: string
  }
}

const actionLoginFailed = (message: string): ActionLoginRequestFailed => ({
  type: LOGIN_FAILED,
  payload: {
    message,
  },
})

interface ActionLoginRequestProps {
  email: string
  password: string
  callback: () => void
}

export const actionLoginRequest =
  ({ email, password, callback }: ActionLoginRequestProps) =>
  async (dispatch: Dispatch<any>) => {
    try {
      const session = await axios.post('/session', { email, password })

      // eslint-disable-next-line dot-notation
      axios.defaults.headers.common['Authorization'] = `${
        session.data.type === 'bearer' ? 'Bearer' : session.data.type
      } ${session.data.token}`

      const user = await axios.get('/users')

      dispatch(
        actionLoginSucceed(user.data.email, user.data.name, session.data.token)
      )

      callback()
    } catch (error) {
      const message = get(error, 'response.data[0].message', 'Try again later')
      dispatch(
        actionLoginFailed(
          `${
            message !== 'Try again later' ? 'You should sing up first' : message
          }`
        )
      )
      await new Promise((resolve) => {
        setTimeout(resolve, 6000)
      })
      dispatch(actionClearError())
    }
  }

interface ActionLogout {
  type: typeof LOGOUT
}

export const actionLogout = (): ActionLogout => ({ type: LOGOUT })

export type PossibleActions =
  | ActionLoginRequestSucceed
  | ActionLoginRequestFailed
  | ActionLogout
  | ActionClearError
