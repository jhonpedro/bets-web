import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import get from 'lodash/get'

import useTextInput from '../../../hooks/useTextInput'
import emailValidator from '../../../utils/emailValidator'
import ButtonRedirect from '../../UI/ButtonRedirect'
import Input from '../../UI/Input'
import Modal from '../../Layout/Modal'
import { BoxInputsContainer } from '../styles'
import { ResetPasswordBox, SubmitButton } from './styles'
import axios from '../../../services/axios'

const Password = () => {
  const [
    emailInput,
    setEmailInput,
    isEmailInputValid,
    showEmailError,
    emailInputOnBlur,
  ] = useTextInput(emailValidator)
  const [modal, setModal] = useState({
    title: '',
    message: '',
    show: false,
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!isEmailInputValid) {
      return
    }

    try {
      await axios.post('/forgot-password', {
        email: emailInput,
        redirect_url: 'http://localhost:3000',
      })
      setModal((prevState) => ({
        ...prevState,
        title: 'Success',
        message: 'Check your email for more instructions.',
        show: true,
      }))
    } catch (error) {
      const message =
        get(error, 'response.data[0].message') === 'Not found'
          ? 'Are you sure that you have registered your self?'
          : 'Something went wrong with our machines, try again later.'

      setModal((prevState) => ({
        ...prevState,
        title: 'Failed',
        message,
        show: true,
      }))
    }
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value)
  }

  const handleDisposeModal = () => {
    setModal((prevState) => ({ ...prevState, show: false }))
  }

  return (
    <BoxInputsContainer>
      <Modal
        showModal={modal.show}
        title={modal.title}
        message={modal.message}
        onDispose={handleDisposeModal}
      />
      <strong>Reset password</strong>
      <ResetPasswordBox onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          value={emailInput}
          onChange={handleChangeEmail}
          showError={showEmailError}
          errorMessage="Check your email"
          onBlur={emailInputOnBlur}
        />
        <SubmitButton type="submit">
          Send link <FiArrowRight />
        </SubmitButton>
      </ResetPasswordBox>
      <ButtonRedirect goBack>
        <FiArrowLeft />
        Back
      </ButtonRedirect>
    </BoxInputsContainer>
  )
}

export default Password
