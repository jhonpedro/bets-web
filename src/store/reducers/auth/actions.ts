import store from '../..'
import { LOGIN_FAILED, LOGIN_SUCCEED, LOGOUT } from './actionTypes'

interface ActionLoginRequestSucceed {
  type: typeof LOGIN_SUCCEED
  payload: {
    email: string
    name: string
  }
}

const actionLoginSucceed = (
  email: string,
  name: string
): ActionLoginRequestSucceed => ({
  type: LOGIN_SUCCEED,
  payload: {
    email,
    name,
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
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: PossibleActions) => void
  // eslint-disable-next-line no-unused-vars
  push(path: string): void
}

export const actionLoginRequest = ({
  email,
  password,
  dispatch,
  push,
}: ActionLoginRequestProps): void => {
  const { users } = store.root.getState()

  const isUserRegistered = users.find(
    (user) => user.email === email && user.password === password
  )

  if (!isUserRegistered) {
    dispatch(actionLoginFailed(`You're not registered yet!`))
  }

  dispatch(actionLoginSucceed(email, isUserRegistered!.name))
  push('/')
}

interface ActionLogout {
  type: typeof LOGOUT
}

export const actionLogout = (): ActionLogout => ({ type: LOGOUT })

export type PossibleActions =
  | ActionLoginRequestSucceed
  | ActionLoginRequestFailed
  | ActionLogout
