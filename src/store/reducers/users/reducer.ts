import produce from 'immer'
import { CartItem } from '../cart/reducer'
import { PossibleActions } from './actions'
import { ADD_RECENT_GAMES, ADD_USER } from './actionTypes'

interface Users {
  name: string
  email: string
  password: string
  recentGames: CartItem[]
}

const initialState: Array<Users> = [
  {
    name: 'Joao',
    email: 'joao@gmail.com',
    password: '123123',
    recentGames: [],
  },
]

type Action = PossibleActions

const usersReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_USER: {
        draft.push({ ...action.payload, recentGames: [] })
        break
      }
      case ADD_RECENT_GAMES: {
        const userToAddRecentGames = draft.find(
          (user) => user.email === action.payload.email
        )

        userToAddRecentGames!.recentGames.push(...action.payload.games)

        break
      }
      default: {
        break
      }
    }
  })

export default usersReducer
