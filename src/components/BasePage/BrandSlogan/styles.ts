import styled from 'styled-components'

export const WrapperContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const BrandSloganLeftSide = styled.div`
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
    border-radius: var(--roundness-3);
    margin: 2rem 0;
  }

  strong:last-child {
    font-size: 8rem;
  }

  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 992px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
