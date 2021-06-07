import React from 'react'
import {
  Redirect,
  Route as RouteDOM,
  RouteProps as RouteDOMProps,
} from 'react-router-dom'
import useGetAuth from '../store/selectors/auth/useGetAuth'

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean
}

const Route: React.FC<RouteProps> = ({
  isPrivate,
  children,
  path,
  ...rest
}) => {
  const { isLoggedIn } = useGetAuth()

  if (isPrivate && !isLoggedIn) {
    return <Redirect to="/login" />
  }

  return (
    <RouteDOM path={path} {...rest}>
      {children}
    </RouteDOM>
  )
}

export default Route
