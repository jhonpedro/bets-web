import React from 'react'
import { GameI } from '../../../hooks/useGetGames'
import GameButton from '../GameButton'

interface GameButtonListProps {
  games: Array<GameI>
  // eslint-disable-next-line no-unused-vars
  setCurrentGame: (gameType: string) => void
  currentGameType: string
}

const GameButtonList: React.FC<GameButtonListProps> = ({
  games,
  setCurrentGame,
  currentGameType,
}) => (
  <>
    {games.map((game) => (
      <GameButton
        key={game.type}
        color={game.color}
        title={game.type}
        isActive={game.type === currentGameType}
        setCurrentGame={setCurrentGame}
      />
    ))}
  </>
)

export default GameButtonList
