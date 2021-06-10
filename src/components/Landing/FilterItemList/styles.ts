import styled from 'styled-components'
import { GameButtonElement } from '../../Bets/GameButton/styles'

export const FilterItemListContainer = styled.div`
  width: 100%;

  ${GameButtonElement} + ${GameButtonElement} {
    margin-left: 1rem;
  }
`

export const ClearButton = styled(GameButtonElement)`
  border: none;
  background-color: var(--color-darker);
  color: white;
`
