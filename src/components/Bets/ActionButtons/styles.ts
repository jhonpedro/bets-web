import styled from 'styled-components'
import { ButtonOutline } from '../../UI/Button'

export const ActionButtonsContainer = styled.div`
  margin: 4rem 0;
  display: flex;

  ${ButtonOutline}:nth-child(2) {
    margin: 0 2rem;
  }
  ${ButtonOutline}:last-child {
    margin-left: auto;
  }

  @media (max-width: 992px) {
    flex-direction: column;

    ${ButtonOutline} {
      margin: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    ${ButtonOutline}:nth-child(2) {
      margin: 0;
    }
  }
`
