import React, { useCallback } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import formatToReal from '../../../utils/formatToReal'
import { BetInfo, CartItemsContainer } from './styles'

interface CartItemProps {
  numbers: number[]
  type: string
  color: string
  price: number
  cartIndex: number
  // eslint-disable-next-line no-unused-vars
  removeItemFromCart: (index: number) => void
}

const CartItem: React.FC<CartItemProps> = React.memo(
  ({ numbers, type, color, price, cartIndex, removeItemFromCart }) => {
    const handleClickRemove = useCallback(() => {
      removeItemFromCart(cartIndex)
    }, [])

    return (
      <CartItemsContainer>
        <FiTrash2 onClick={handleClickRemove} />
        <BetInfo color={color}>
          <span>{numbers.join(', ')}</span>
          <strong>
            {type} <span>R$ {formatToReal(price)}</span>
          </strong>
        </BetInfo>
      </CartItemsContainer>
    )
  }
)

export default CartItem
