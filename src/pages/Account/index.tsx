import React from 'react'
import Header from '../../components/Layout/Header'
import useGetAuth from '../../store/selectors/auth/useGetAuth'
import { AccountContainer } from './styles'

const Account = () => {
  const { name, email } = useGetAuth()

  return (
    <>
      <Header />
      <AccountContainer className="container">
        <strong>{name}</strong>
        <span>{email}</span>
      </AccountContainer>
    </>
  )
}

export default Account
