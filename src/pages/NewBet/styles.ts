import styled from 'styled-components'
import { GameButtonElement } from '../../components/Bets/GameButton/styles'

export const Strong = styled.strong`
  display: block;
  font-size: 1.9rem;
  font-style: italic;
`

export const NewBetContainer = styled.div`
  margin-top: 6rem;
  color: var(--color-dark);
  display: flex;
  justify-content: space-between;

  h3 {
    margin-bottom: 3rem;
    font-size: 2.3rem;
    font-style: italic;
    font-weight: lighter;
    text-transform: uppercase;

    span {
      font-weight: bold;
    }
  }

  .bet {
    width: 70%;
    > ${Strong} {
      margin: 3rem 0 1rem;
    }
    p {
      font-style: italic;
    }
  }

  .cart {
    width: 29%;
  }
`

export const ChooseGameContainer = styled.div`
  ${Strong} {
    margin: 3rem 0;
  }

  > div {
    width: 90%;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 1rem;

    /* width */
    ::-webkit-scrollbar {
      height: 0.6rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--color-dark-lighter);
      border-radius: 1rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--color-green);
      border-radius: 1rem;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--color-green);
    }

    ${GameButtonElement} + ${GameButtonElement} {
      margin-left: 1rem;
    }
  }
`
