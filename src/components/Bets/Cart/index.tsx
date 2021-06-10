import React from 'react'
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actionRemoveFromCart } from '../../../store/reducers/cart/actions'
import { actionCreatorAddRecentGames } from '../../../store/reducers/users/actions'
import useGetAuth from '../../../store/selectors/auth/useGetAuth'
import useGetCart from '../../../store/selectors/cart/usetGetCart'
import formatToReal from '../../../utils/formatToReal'
import CartItem from '../CartItems'
import { BetsContainer, CartBox } from './styles'

interface CartProps {
  minCartValue: number
  // eslint-disable-next-line no-unused-vars
  showModal: (title: string, message: string) => void
}

const Cart: React.FC<CartProps> = React.memo(({ showModal, minCartValue }) => {
  const { email } = useGetAuth()
  const cart = useGetCart()
  const dispatch = useDispatch()
  const { push } = useHistory()

  const onRemoveItem = (cartItemIndex: number) => {
    dispatch(actionRemoveFromCart(cartItemIndex))
  }

  const handleSaveBets = () => {
    if (cart.total < minCartValue) {
      showModal(
        'We need more bets',
        `To save your game we need at least R$ ${minCartValue} in games`
      )
      return
    }

    actionCreatorAddRecentGames(cart.items, email, dispatch)
    push('/')
  }

  return (
    <CartBox>
      <div>
        <strong>CART</strong>
        <BetsContainer>
          {cart.items.length === 0 && (
            <strong>
              The cart is empty <FiShoppingCart />
            </strong>
          )}
          {cart.items.map((item, index) => (
            <CartItem
              key={`${item.type}_${index + 0}`}
              type={item.type}
              color={item.color}
              numbers={item.numbers}
              price={item.price}
              cartIndex={index}
              removeItemFromCart={onRemoveItem}
            />
          ))}
        </BetsContainer>
        <strong>
          CART <span>TOTAL: R$ {formatToReal(cart.total)}</span>
        </strong>
      </div>

      <button type="button" onClick={handleSaveBets}>
        Save <FiArrowRight />
      </button>
    </CartBox>
  )
})

export default Cart
