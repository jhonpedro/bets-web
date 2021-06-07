import React from 'react'
import { FiXCircle } from 'react-icons/fi'
import { CloseButton, ModalBoxContainer } from './styles'

export interface ModalBoxProps {
  title: string
  message: string
}

const ModalBox: React.FC<ModalBoxProps> = ({ title, message }) => (
  <ModalBoxContainer>
    <CloseButton>
      <FiXCircle />
    </CloseButton>
    <strong>{title}</strong>
    <p>{message}</p>
    <button type="button">Ok</button>
  </ModalBoxContainer>
)

export default ModalBox
