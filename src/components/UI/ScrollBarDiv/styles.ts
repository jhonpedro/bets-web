import styled from 'styled-components'

const ScrollBarDiv = styled.div`
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
`

export default ScrollBarDiv
