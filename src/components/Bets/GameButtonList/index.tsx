import React from 'react'
import { GameI } from '../../../hooks/useGetGames'
import GameButton from '../GameButton'

interface GameButtonListProps {
  games: Array<GameI>
  // eslint-disable-next-line no-unused-vars
  setCurrentGame: (gameType: string) => void
  currentGameActual: string
}

const GameButtonList: React.FC<GameButtonListProps> = ({
  games,
  setCurrentGame,
  currentGameActual,
}) => (
  <>
    {games.map((game) => (
      <GameButton
        key={game.type}
        color={game.color}
        title={game.type}
        isActive={game.type === currentGameActual}
        setCurrentGame={setCurrentGame}
      />
    ))}
  </>
)

export default GameButtonList
