import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 6rem;

  color: var(--color-dark);
`

export const HomeHeaderActions = styled.header`
  display: flex;
  width: 100%;

  h3 {
    display: flex;
    align-items: center;
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

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Filters = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  margin-left: 3rem;

  span {
    font-style: italic;
    padding-right: 1rem;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    overflow: auto;
  }
  @media (max-width: 1000px) {
    margin: 2rem 0;
    width: 100%;
  }
`
