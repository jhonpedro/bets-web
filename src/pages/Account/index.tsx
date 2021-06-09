import React from 'react'
import Header from '../../components/Layout/Header'
import useGetAuth from '../../store/selectors/auth/useGetAuth'
import { AccountContainer } from './styles'

const Account = () => {
  const { username, email } = useGetAuth()

  return (
    <>
      <Header />
      <AccountContainer className="container">
        <strong>{username}</strong>
        <span>{email}</span>
      </AccountContainer>
    </>
  )
}

export default Account
