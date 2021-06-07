import React from 'react'
import { ModalBackdropContainer } from './styles'

interface ModalBackdropProps {
  dispose: () => void
}

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ dispose, children }) => {
  const handleClick = () => {
    dispose()
  }

  return (
    <ModalBackdropContainer onClick={handleClick}>
      {children}
    </ModalBackdropContainer>
  )
}

export default ModalBackdrop
