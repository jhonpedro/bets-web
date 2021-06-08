import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ButtonNoBorder } from '../../UI/Button'
import { Actions, BrandHeading, HeaderContainer } from './styles'

const Header = React.memo(() => (
  <HeaderContainer className="container">
    <BrandHeading>TGL</BrandHeading>
    <Actions>
      <Link to="/profile">Account</Link>
      <ButtonNoBorder>
        Logout
        <FiLogOut />
      </ButtonNoBorder>
    </Actions>
  </HeaderContainer>
))

export default Header
