import styled from 'styled-components'
import { fadeDown } from '../../../assets/global'

export const ModalBoxContainer = styled.div`
  padding: 2rem;
  border-radius: var(--roundness-3);
  background-color: var(--color-bg-light);
  box-shadow: 0 0 1rem var(--color-darker);
  width: 40%;

  animation: ${fadeDown} 500ms ease;

  position: relative;

  strong {
    font-size: 2rem;
    text-align: center;
    color: var(--color-green);
  }

  p {
    margin: 2rem 0;
    color: var(--color-dark);
  }

  button:last-child {
    display: flex;
    border: 1px solid var(--color-green);
    background-color: transparent;
    color: var(--color-green);
    padding: 0.5rem 2rem;
    margin-left: auto;
    transition: 300ms ease;
    border-radius: var(--roundness-1);

    :hover {
      background-color: var(--color-green);
      color: white;
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  background: none;
  color: var(--color-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  svg {
    font-size: 2rem;
  }
  :hover {
    color: white;
    background: var(--color-green);
  }
`
