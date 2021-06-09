import styled from 'styled-components'

export const CartBox = styled.div`
  background-color: white;
  border: 1px solid var(--color-box-line);
  border-radius: 1rem;
  box-shadow: 0 0 1rem var(--color-box-shadow);
  overflow: hidden;

  > div {
    padding: 2rem;
  }

  > strong {
    display: block;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-water-green);

    border: none;
    border-top: var(--color-box-line);
    width: 100%;
    padding: 3rem 0;
    background-color: var(--color-button-light);
    font-size: 3rem;
  }
`

export const BetsContainer = styled.div`
  > strong {
    display: flex;
    margin: 5rem 0;
    font-size: 1.6rem;
    color: var(--color-dark);
    align-items: center;

    svg {
      margin-left: 1rem;
      font-size: 2.5rem;
    }
  }
`
