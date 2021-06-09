import styled from 'styled-components'

export const ButtonNoBorder = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: inherit;
  font: inherit;

  svg {
    margin: 0 1rem;
  }
`

export const ButtonOutline = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
  font: inherit;
  border: 2px solid ${(props) => props.color};
  transition: 300ms ease;
  padding: 1rem 2rem;
  border-radius: var(--roundness-1);

  :hover {
    background-color: ${(props) => props.color};
    color: white;
  }

  svg {
    margin-right: 1rem;
    font-size: 2rem;
  }
`
