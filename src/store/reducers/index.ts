import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import cartReducer from './cart/reducer'
import usersReducer from './users/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  users: usersReducer,
})

export default rootReducer
