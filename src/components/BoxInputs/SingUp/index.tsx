import React, { useCallback, useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import get from 'lodash/get'

import useTextInput from '../../../hooks/useTextInput'
import emailValidator from '../../../utils/emailValidator'
import ButtonRedirect from '../../UI/ButtonRedirect'
import Input from '../../UI/Input'
import Modal from '../../Layout/Modal'
import { BoxInputsContainer } from '../styles'
import { SingInInputsBox } from './styles'
import axios from '../../../services/axios'

const SingIn = () => {
  const { push } = useHistory()
  const [modal, setModal] = useState({
    show: false,
    title: '',
    message: '',
    disposedOnce: false,
    canRedirect: false,
  })

  useEffect(() => {
    if (modal.disposedOnce) {
      if (modal.canRedirect) {
        push('/login')
      }
    }
  }, [modal, modal.disposedOnce, modal.canRedirect])

  const [
    nameInput,
    setNameInput,
    isNameInputValid,
    showNameError,
    nameInputOnBlur,
  ] = useTextInput((toValidate) => toValidate.length >= 3)
  const [
    emailInput,
    setEmailInput,
    isEmailInputValid,
    showEmailError,
    emailInputOnBlur,
  ] = useTextInput(emailValidator)
  const [
    passwordInput,
    setPasswordInput,
    isPasswordInputValid,
    showPasswordError,
    passwordInputOnBlur,
  ] = useTextInput((toValidate) => toValidate.length >= 6)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAllOnblur()

    if (!isNameInputValid || !isEmailInputValid || !isPasswordInputValid) {
      return
    }

    try {
      await axios.post('/users', {
        email: emailInput,
        name: nameInput,
        password: passwordInput,
        password_confirmation: passwordInput,
      })

      setModal((prevState) => ({
        ...prevState,
        title: 'Success',
        message: 'Sing up success, now you can enter with your account!',
        show: true,
        canRedirect: true,
      }))
    } catch (error) {
      setModal((prevState) => ({
        ...prevState,
        title: 'Sing up failed',
        message: get(error, 'response.data[0].message', 'Try again later'),
        show: true,
        canRedirect: false,
      }))
    }
  }

  const handleDisposed = () => {
    setModal((prevState) => ({
      ...prevState,
      show: false,
      disposedOnce: prevState.title === 'Success',
    }))
  }

  const setAllOnblur = useCallback(() => {
    nameInputOnBlur()
    emailInputOnBlur()
    passwordInputOnBlur()
  }, [])

  const handleChangeName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNameInput(event.target.value)
    },
    []
  )
  const handleChangeEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmailInput(event.target.value)
    },
    []
  )
  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordInput(event.target.value)
    },
    []
  )

  return (
    <>
      <Modal
        showModal={modal.show}
        title={modal.title}
        message={modal.message}
        onDispose={handleDisposed}
      />
      <BoxInputsContainer>
        <strong>Registration</strong>
        <SingInInputsBox onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            errorMessage="Check your name"
            showError={showNameError}
            value={nameInput}
            onChange={handleChangeName}
            onBlur={nameInputOnBlur}
          />
          <Input
            placeholder="Email"
            type="email"
            showError={showEmailError}
            errorMessage="Check your e-mail"
            value={emailInput}
            onChange={handleChangeEmail}
            onBlur={emailInputOnBlur}
          />
          <Input
            placeholder="Password"
            type="password"
            showError={showPasswordError}
            errorMessage="Your password must have at least 6 characters"
            value={passwordInput}
            onChange={handleChangePassword}
            onBlur={passwordInputOnBlur}
          />
          <ButtonRedirect>
            Register <FiArrowRight />
          </ButtonRedirect>
        </SingInInputsBox>
        <ButtonRedirect goBack>
          <FiArrowLeft /> Back
        </ButtonRedirect>
      </BoxInputsContainer>
    </>
  )
}

export default SingIn
