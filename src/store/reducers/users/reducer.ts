import produce from 'immer'
import { actionCreatorAddUser } from './actions'
import { ADD_USER } from './actionTypes'

interface Users {
  name: string
  email: string
  password: string
}

const initialState: Array<Users> = [
  { name: 'Joao', email: 'joao@gmail.com', password: '123123' },
]

type Action = actionCreatorAddUser

const usersReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_USER: {
        draft.push(action.payload)
        break
      }
      default: {
        break
      }
    }
  })

export default usersReducer
