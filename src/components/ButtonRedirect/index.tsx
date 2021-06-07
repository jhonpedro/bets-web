import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonNoBorderStyled from './styles'

interface ButtonRedirectProps {
  goBack?: boolean
  goTo?: string
}

const ButtonRedirect: React.FC<ButtonRedirectProps> = React.memo(
  ({ children, goBack, goTo, ...rest }) => {
    const { goBack: goBackHistory, push } = useHistory()

    const handleClick = () => {
      if (goBack) {
        goBackExecute()
      }

      if (goTo) {
        push(goTo)
      }
    }

    const goBackExecute = () => {
      goBackHistory()
    }

    return (
      <ButtonNoBorderStyled onClick={handleClick} {...rest}>
        {children}
      </ButtonNoBorderStyled>
    )
  }
)

export default ButtonRedirect
