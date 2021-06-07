import styled from 'styled-components'
import { fadeIn } from '../../../assets/global'

export const ModalBackdropContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-dark-op);
  overflow: hidden;

  animation: ${fadeIn} 300ms ease;
`
