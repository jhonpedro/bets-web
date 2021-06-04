import styled from 'styled-components'

export const LoginCointainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
`

export const LoginBoxContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const LoginBox = styled.div`
  width: 50%;
  overflow: hidden;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0 0 1rem var(--color-box-shadow);
  border: 1px solid var(--color-box-line-op);
`
