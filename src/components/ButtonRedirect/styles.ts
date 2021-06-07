import styled from 'styled-components'

const ButtonNoBorderStyled = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;

  margin: 5rem auto 2rem;
  font-size: 3.5rem;
  font-weight: bold;

  svg {
    margin-left: 1rem;
  }
`
export default ButtonNoBorderStyled
