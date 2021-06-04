import styled, { css } from 'styled-components'

interface InputPlaceholderProps {
  isUp: boolean
}

interface InputContainerProps {
  showErrorBorder: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  position: relative;
  padding: 1.5rem 0.5rem 0.5rem;

  ${(props) => {
    if (props.showErrorBorder) {
      return css`
        border: 1px solid var(--color-red);
      `
    }
    return css``
  }}
`

export const ErrorMessage = styled.span`
  display: block;
  font-weight: bold;
  text-align: center;
  color: var(--color-red);
`

export const InputPlaceholder = styled.label<InputPlaceholderProps>`
  position: absolute;
  top: 1.6rem;
  left: 1.5rem;
  color: var(--color-dark);
  transition: 300ms;

  ${(props) => {
    if (props.isUp) {
      return css`
        top: 0rem;
        color: var(--color-green);
      `
    }
    return css``
  }}
`

export const InputElement = styled.input`
  width: 100%;

  font-family: inherit;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
`
