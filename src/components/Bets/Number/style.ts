import styled from 'styled-components'

interface NumberElementProps {
  isActive: boolean
  color: string
}

export const NumberElement = styled.button<NumberElementProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 3rem;
  border: none;
  background-color: ${(props) =>
    props.isActive ? props.color : 'var(--color-dark-light)'};

  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  margin: 1rem;
`
