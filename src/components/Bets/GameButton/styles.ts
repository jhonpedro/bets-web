import styled, { css } from 'styled-components'

interface GameButtonProps {
  isActive?: boolean
  color?: string
}

export const GameButtonElement = styled.button<GameButtonProps>`
  padding: 0.5rem 2rem;
  background-color: white;
  font-style: italic;
  border: 2px solid ${(props) => props.color};
  border-radius: 2rem;
  transition: 300ms ease;

  ${(props) => {
    if (props.isActive) {
      return css`
        color: white;
        background-color: ${props.color};
      `
    }

    return css`
      background-color: white;
      color: ${props.color};
    `
  }}
`
