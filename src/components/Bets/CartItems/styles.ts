import styled from 'styled-components'

export const CartItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;

  svg {
    margin-right: auto;
    width: 15%;
    font-size: 2.5rem;
  }
`

export const BetInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 00;
  width: 85%;
  border-left: 0.4rem solid ${(props) => props.color};
  border-radius: 0.4rem;
  padding: 0.5rem 0 0.5rem 1rem;

  span {
    margin: 1rem 0;
    font-weight: bold;
  }

  strong {
    color: ${(props) => props.color};

    span {
      font-weight: lighter;
      color: var(--color-dark);
    }
  }
`
