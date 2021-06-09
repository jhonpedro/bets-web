import styled from 'styled-components'
import { ButtonOutline } from '../../UI/Button'

export const ActionButtonsContainer = styled.div`
  margin: 4rem 0;
  display: flex;

  ${ButtonOutline}:nth-child(2) {
    margin-left: 2rem;
  }
  ${ButtonOutline}:last-child {
    margin-left: auto;
  }
`
