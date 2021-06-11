import React from 'react'
import RecentGame, { RecentGamesProps } from '../RecentGame'

interface RecentGameListProps {
  items: RecentGamesProps[]
}

const RecentGameList: React.FC<RecentGameListProps> = ({ items }) => (
  <>
    {items.map((item) => (
      <RecentGame
        key={`${item.type}_${item.numbers.join()}_${Math.random()}`}
        numbers={item.numbers}
        price={item.price}
        type={item.type}
        color={item.color}
      />
    ))}
  </>
)

export default RecentGameList
