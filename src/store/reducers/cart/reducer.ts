import produce from 'immer'
import { REHYDRATE } from 'redux-persist/es/constants'
import { CartActions } from './actions'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './actionTypes'

export interface CartItem {
  numbers: number[]
  type: string
  price: number
  color: string
}

export interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

type Action = CartActions

/* eslint-disable no-param-reassign */
const cartReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART: {
        draft.items.push(action.payload)
        break
      }
      case REMOVE_FROM_CART: {
        draft.items.splice(action.payload.index, 1)
        break
      }
      case CLEAR_CART: {
        draft.items = []
        break
      }
      case REHYDRATE: {
        if (action.payload) {
          draft.items = [...action.payload.cart.items]
        }
        break
      }
      default: {
        return { ...state }
      }
    }
  })

export default cartReducer
