import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  color: var(--color-dark);
  height: 7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid var(--color-box-line);
`

export const BrandHeading = styled.strong`
  font-size: 5rem;
  position: relative;

  :after {
    content: '';
    display: block;
    position: absolute;
    width: 130%;
    height: 0.6rem;
    background-color: var(--color-green);
    border-radius: var(--roundness-1);
    // Subtract 30%/2 - 30% because of 130% if it was 150% it would be 50%/2
    left: -15%;
    bottom: -1rem;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: auto;
  font-weight: bold;

  a {
    margin-right: 3rem;
  }

  button svg {
    font-size: 1.8rem;
  }
`
