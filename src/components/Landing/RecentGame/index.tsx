import React from 'react'
import { RecentGameContainer } from './styles'

export interface RecentGamesProps {
  numbers: number[]
  price: number
  type: string
  color: string
}

const RecentGame: React.FC<RecentGamesProps> = ({
  numbers,
  price,
  type,
  color,
}) => (
  <RecentGameContainer color={color}>
    <strong>{numbers}</strong>
    <span>{price}</span>
    <strong>{type}</strong>
  </RecentGameContainer>
)

export default RecentGame
