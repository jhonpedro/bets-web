import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { FiArrowRight } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import ButtonRedirect from '../../UI/ButtonRedirect'
import ButtonRedirectElement from '../../UI/ButtonRedirect/styles'
import Input from '../../UI/Input'
import { LoginInputsBox, LoginErrorMessage } from './styles'
import { BoxInputsContainer } from '../styles'
import useTextInput from '../../../hooks/useTextInput'
import emailValidator from '../../../utils/emailValidator'
import { actionLoginRequest } from '../../../store/reducers/auth/actions'
import useGetAuth from '../../../store/selectors/auth/useGetAuth'

const Login: React.FC = () => {
  const { error: loginError } = useGetAuth()
  const dispatch = useDispatch()
  const { push } = useHistory()

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

  const setAllOnBlur = useCallback(() => {
    emailInputOnBlur()
    passwordInputOnBlur()
  }, [])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setAllOnBlur()

    if (!isEmailInputValid || !isPasswordInputValid) {
      return
    }

    dispatch(
      actionLoginRequest({
        email: emailInput,
        password: passwordInput,
        callback: () => {
          push('/')
        },
      })
    )
  }

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
    <BoxInputsContainer>
      <strong>Authentication</strong>
      <LoginInputsBox onSubmit={handleSubmit}>
        {loginError && <LoginErrorMessage>{loginError}</LoginErrorMessage>}
        <Input
          placeholder="E-mail"
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
          errorMessage="Your password should have at least 6 characters"
          value={passwordInput}
          onChange={handleChangePassword}
          onBlur={passwordInputOnBlur}
        />
        <div className="forgot-password">
          <Link to="/forgot-password">I forget my password</Link>
        </div>
        <ButtonRedirectElement type="submit">
          Log In <FiArrowRight />
        </ButtonRedirectElement>
      </LoginInputsBox>
      <ButtonRedirect goTo="/sing-in">
        Sing Up <FiArrowRight />
      </ButtonRedirect>
    </BoxInputsContainer>
  )
}

export default Login
