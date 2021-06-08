import React from 'react'
import { GameButtonElement } from './styles'

interface GameButtonProps {
  title: string
  color: string
  isActive: boolean
  // eslint-disable-next-line no-unused-vars
  setCurrentGame: (gameType: string) => void
}

const GameButton: React.FC<GameButtonProps> = React.memo(
  ({ title, color, isActive, setCurrentGame }) => {
    const handleSetNewCurrentGame = () => {
      setCurrentGame(title)
    }

    return (
      <GameButtonElement
        color={color}
        isActive={isActive}
        onClick={handleSetNewCurrentGame}
      >
        {title}
      </GameButtonElement>
    )
  }
)

export default GameButton
