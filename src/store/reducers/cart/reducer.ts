import produce from 'immer'
import { REHYDRATE } from 'redux-persist/es/constants'
import { CartActions } from './actions'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './actionTypes'

export interface CartItem {
  // eslint-disable-next-line camelcase
  game_id: number
  numbers: number[]
  type: string
  price: number
  color: string
}

export interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = {
  items: [],
  total: 0,
}

type Action = CartActions

/* eslint-disable no-param-reassign */
const cartReducer = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART: {
        draft.items.push(action.payload)
        draft.total += action.payload.price
        break
      }
      case REMOVE_FROM_CART: {
        draft.total -= draft.items[action.payload.index].price
        draft.items.splice(action.payload.index, 1)
        break
      }
      case CLEAR_CART: {
        draft.items = []
        draft.total = 0
        break
      }
      case REHYDRATE: {
        if (action.payload) {
          draft.items = [...action.payload.cart.items]
          draft.total = draft.items.reduce((acc, item) => acc + item.price, 0)
        }
        break
      }
      default: {
        return { ...state }
      }
    }
  })

export default cartReducer
