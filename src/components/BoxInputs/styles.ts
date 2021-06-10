import styled from 'styled-components'
import ButtonRedirect from '../UI/ButtonRedirect/styles'
import { InputContainer } from '../UI/Input/styles'

export const BoxInputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  strong {
    font-size: 3.5rem;
    color: var(--color-dark);
    text-align: center;
    margin-bottom: 2rem;
  }

  ${ButtonRedirect} {
    color: var(--color-dark);
    margin: 4rem auto 1rem;
  }
`

const BoxInputsBox = styled.form`
  padding: 2rem;
  width: 50%;
  overflow: hidden;
  border-radius: var(--roundness-2);
  background-color: white;
  box-shadow: 0 0 1rem var(--color-box-shadow);
  border: 1px solid var(--color-box-line-op);

  ${ButtonRedirect} {
    color: var(--color-green);
  }

  ${InputContainer} {
    font-weight: bold;
    font-style: italic;
    font-size: 1.8rem;
  }

  ${InputContainer} + ${InputContainer} {
    margin-top: 2rem;
  }

  ${InputContainer}:after {
    content: '';
    display: block;
    position: absolute;
    width: 120%;
    height: 2px;
    background-color: var(--color-box-line);
    bottom: 0;
    left: -2rem;
    right: 0;
    transition: 300ms ease;
  }
  ${InputContainer}.invalid:after {
    background-color: var(--color-red);
  }

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    width: 90%;
  }
`

export default BoxInputsBox
