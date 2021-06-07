import React from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import ButtonRedirect from '../../UI/ButtonRedirect'
import Input from '../../UI/Input'
import { BoxInputsContainer } from '../styles'
import { ResetPasswordBox } from './styles'

const Password = () => (
  <BoxInputsContainer>
    <strong>Reset password</strong>
    <ResetPasswordBox>
      <Input placeholder="Email" />
      <ButtonRedirect>
        Send link <FiArrowRight />
      </ButtonRedirect>
    </ResetPasswordBox>
    <ButtonRedirect goBack>
      <FiArrowLeft />
      Back
    </ButtonRedirect>
  </BoxInputsContainer>
)

export default Password
