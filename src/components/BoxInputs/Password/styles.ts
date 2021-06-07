import styled from 'styled-components'
import ButtonNoBorder from '../../ButtonRedirect/styles'
import BoxInputsBox from '../styles'

export const ResetPasswordBox = styled(BoxInputsBox)`
  ${ButtonNoBorder} {
    color: var(--color-green);
  }
`