import { Dispatch } from 'react'
import { actionClearCart } from '../cart/actions'
import { CartItem } from '../cart/reducer'
import { ADD_USER, ADD_RECENT_GAMES } from './actionTypes'

interface ActionAddUserProps {
  name: string
  email: string
  password: string
}

interface ActionAddUser {
  type: typeof ADD_USER
  payload: ActionAddUserProps
}

export const actionAddUser = ({
  name,
  email,
  password,
}: ActionAddUserProps): ActionAddUser => ({
  type: ADD_USER,
  payload: {
    name,
    email,
    password,
  },
})

interface ActionAddRecentGames {
  type: typeof ADD_RECENT_GAMES
  payload: {
    games: CartItem[]
    email: string
  }
}

const actionAddRecentGames = (games: CartItem[], email: string) => ({
  type: ADD_RECENT_GAMES,
  payload: { games, email },
})

export const actionCreatorAddRecentGames = (
  games: CartItem[],
  email: string,
  dispatch: Dispatch<any>
) => {
  dispatch(actionClearCart())

  dispatch(actionAddRecentGames(games, email))
}
export type PossibleActions = ActionAddUser | ActionAddRecentGames
