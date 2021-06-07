import styled, { css, keyframes } from 'styled-components'

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
`

const fadeUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const ErrorMessage = styled.span`
  display: block;
  font-weight: bold;
  text-align: center;
  color: var(--color-red);

  animation: ${fadeUp} 300ms ease;
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
  border-radius: var(--roundness-1);
  outline: none;
  border: none;
`
