import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 6rem;

  color: var(--color-dark);
`

export const HomeHeaderActions = styled.header`
  display: flex;
  width: 100%;

  h3 {
    font-size: 2.5rem;
  }

  > button {
    margin-left: auto;
    color: var(--color-green);
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    margin-left: auto;
  }
`

export const Filters = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  margin-left: 3rem;

  span {
    font-style: italic;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    overflow: auto;
  }
`
