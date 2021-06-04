import styled from 'styled-components'
import ButtonNoBorder from '../../ButtonNoBorder'
import BoxInputsStyle from '../styles'

export const BoxInputsContainer = styled(BoxInputsStyle)`
  .forgot-password {
    display: flex;
    justify-content: flex-end;

    a {
      margin-top: 1rem;
      display: block;
      text-align: right;
      font-size: 1.5rem;
      color: var(--color-dark-lighter);
    }
  }

  ${ButtonNoBorder} {
    color: var(--color-green);
    font-size: 4rem;
    font-weight: bold;
  }
`
