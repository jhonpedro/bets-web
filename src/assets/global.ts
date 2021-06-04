import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
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
`
