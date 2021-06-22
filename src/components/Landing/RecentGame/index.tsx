import React from 'react'
import formatToReal from '../../../utils/formatToReal'
import { RecentGameContainer } from './styles'

export interface RecentGamesProps {
  id?: number
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
    <strong>{numbers.join(', ')}</strong>
    <span>R$ {formatToReal(price)}</span>
    <strong>{type}</strong>
  </RecentGameContainer>
)

export default RecentGame
