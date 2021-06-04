import styled from 'styled-components'

export const BrandSloganContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--color-dark);

  strong {
    text-align: center;
  }

  strong:first-child {
    font-size: 6rem;
    > span {
      display: block;
      width: 100%;
    }
  }

  > span {
    padding: 0.5rem 6rem;
    font-size: 2rem;
    color: white;
    background-color: var(--color-green);
    border-radius: 2rem;
    margin: 2rem 0;
  }

  strong:last-child {
    font-size: 8rem;
  }
`
