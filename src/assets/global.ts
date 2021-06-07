import { createGlobalStyle, keyframes } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-green: #B5C401;
    --color-red: #D03434;
    --color-bg-light: #F7F7F7;
    --color-dark-lighter: #C1C1C1;
    --color-dark-light: #9D9D9D;
    --color-dark: #707070;
    --color-darker: #535351;
    --color-box-line-op: #00000014;
    --color-dark-op: #70707090;
    --color-box-line: #EBEBEB;
    --color-box-shadow: #DDDDDD;

    --roundness-1: 1rem;
    --roundness-2: 1.5rem;
    --roundness-3: 2rem;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
  }

  body {
    background-color: var(--color-bg-light);
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const fadeDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
