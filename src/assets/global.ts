import { createGlobalStyle, keyframes } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;

    --color-water-green: #27C383;
    --color-green: #B5C401;
    --color-red: #D03434;
    --color-bg-light: #F7F7F7;
    --color-dark-lighter: #C1C1C1;
    --color-dark-light: #9D9D9D;
    --color-dark: #707070;
    --color-darker: #535351;
    --color-box-line-op: #00000014;
    --color-box-line: #E2E2E2;
    --color-dark-op: #70707090;
    --color-box-line: #EBEBEB;
    --color-box-shadow: #DDDDDD;
    --color-button-light: #F4F4F4;

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
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  .container {
    padding: 0 12rem;
  }

  @media (max-width: 768px){
    .container {
      padding: 0 4rem;
    }
  }
  @media (max-height: 768px){
    :root {
      font-size: 50%;
    }
  }
  @media (max-width: 576px){
    :root {
      font-size: 45%;
    }
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
