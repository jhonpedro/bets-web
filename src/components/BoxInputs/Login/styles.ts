import styled from 'styled-components'
import ButtonNoBorder from '../../UI/ButtonRedirect/styles'
import BoxInputsStyle from '../styles'

export const LoginInputsBox = styled(BoxInputsStyle)`
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
  }
`

export const LoginErrorMessage = styled.strong`
  display: block;

  font-size: 1.6rem;
  color: var(--color-red);
  text-align: center;
  margin-bottom: 1rem;
`
