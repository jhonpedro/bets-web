import styled from 'styled-components'
import { InputContainer } from '../Input/styles'

const BoxInputsContainer = styled.form`
  padding: 2rem;

  ${InputContainer} {
    font-weight: bold;
    font-style: italic;
    font-size: 1.8rem;
  }

  ${InputContainer} + ${InputContainer} {
    margin-top: 2rem;
  }

  > ${InputContainer}:after {
    content: '';
    display: block;
    position: absolute;
    width: 120%;
    height: 2px;
    background-color: var(--color-box-line);
    bottom: 0;
    left: -2rem;
    right: 0;
  }
`

export default BoxInputsContainer
