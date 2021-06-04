import React from 'react'
import BoxInputs from '../../components/BoxInputs/Login'
import BrandSlogan from '../../components/BrandSlogan'
import { LoginBox, LoginBoxContainer, LoginCointainer } from './styles'

function LoginPage() {
  return (
    <LoginCointainer>
      <BrandSlogan />
      <LoginBoxContainer>
        <LoginBox>
          <BoxInputs />
        </LoginBox>
      </LoginBoxContainer>
    </LoginCointainer>
  )
}

export default LoginPage
