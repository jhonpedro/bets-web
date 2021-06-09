import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { actionAddToCart } from '../../../store/reducers/cart/actions'
import { CartItem } from '../../../store/reducers/cart/reducer'
import { ButtonOutline } from '../../UI/Button'
import { ActionButtonsContainer } from './styles'

interface ActionButtonsProps {
  onGetCurrentBetGame: () => CartItem | undefined
  onCompleteCurrentBetGame: () => void
  onClearCurrentBetGame: () => void
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGetCurrentBetGame,
  onCompleteCurrentBetGame,
  onClearCurrentBetGame,
}) => {
  const dispatch = useDispatch()

  const handleAddCartGame = () => {
    const cartGame = onGetCurrentBetGame()
    if (!cartGame) {
      return
    }
    dispatch(actionAddToCart(cartGame))
  }

  const handleCompleteBet = () => {
    onCompleteCurrentBetGame()
  }

  const handleClearBet = () => {
    onClearCurrentBetGame()
  }

  return (
    <ActionButtonsContainer>
      <ButtonOutline
        color="var(--color-water-green)"
        onClick={handleCompleteBet}
      >
        Complete game
      </ButtonOutline>
      <ButtonOutline color="var(--color-water-green)" onClick={handleClearBet}>
        Clear game
      </ButtonOutline>
      <ButtonOutline
        color="var(--color-water-green)"
        onClick={handleAddCartGame}
      >
        <FiShoppingCart /> Add to cart
      </ButtonOutline>
    </ActionButtonsContainer>
  )
}

export default ActionButtons
