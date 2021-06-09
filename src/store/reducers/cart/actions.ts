import { REHYDRATE } from 'redux-persist/es/constants'
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from './actionTypes'
import { CartItem, CartState } from './reducer'

interface ActionAddToCart {
  type: typeof ADD_TO_CART
  payload: CartItem
}

export const actionAddToCart = (newCartItem: CartItem): ActionAddToCart => ({
  type: ADD_TO_CART,
  payload: newCartItem,
})

interface ActionRemoveFromCart {
  type: typeof REMOVE_FROM_CART
  payload: {
    index: number
  }
}

export const actionRemoveFromCart = (
  indexCartItem: number
): ActionRemoveFromCart => ({
  type: REMOVE_FROM_CART,
  payload: {
    index: indexCartItem,
  },
})

interface ActionClearCart {
  type: typeof CLEAR_CART
}

export const actionClearCart = (): ActionClearCart => ({
  type: CLEAR_CART,
})

export type CartActions =
  | ActionAddToCart
  | ActionRemoveFromCart
  | ActionClearCart
  | { type: typeof REHYDRATE; payload: { cart: CartState } | undefined }
