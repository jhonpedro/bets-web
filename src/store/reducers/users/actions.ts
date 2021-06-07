import { ADD_USER } from './actionTypes'

interface ActionAddUserProps {
  name: string
  email: string
  password: string
}

export const actionAddUser = ({
  name,
  email,
  password,
}: ActionAddUserProps) => ({
  type: ADD_USER,
  payload: {
    name,
    email,
    password,
  },
})

export type actionCreatorAddUser = ReturnType<typeof actionAddUser>
