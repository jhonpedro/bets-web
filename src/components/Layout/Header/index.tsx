import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { actionLogout } from '../../../store/reducers/auth/actions'
import { ButtonNoBorder } from '../../UI/Button'
import { Actions, BrandHeading, HeaderContainer } from './styles'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const handleLogout = () => {
    dispatch(actionLogout())
    push('/login')
  }

  return (
    <HeaderContainer className="container">
      <BrandHeading>
        <Link to="/">TGL</Link>
      </BrandHeading>
      <Actions>
        <Link to="/account">Account</Link>
        <ButtonNoBorder onClick={handleLogout}>
          Logout
          <FiLogOut />
        </ButtonNoBorder>
      </Actions>
    </HeaderContainer>
  )
})

export default Header
