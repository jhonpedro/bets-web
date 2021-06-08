import React from 'react'
import { NumberElement } from './style'

interface NumberProps {
  number: number
  isActive: boolean
  color: string
  // eslint-disable-next-line no-unused-vars
  toggleNumberToBet: (numberToToggle: number) => void
}

const Number: React.FC<NumberProps> = React.memo(
  ({ number, isActive, color, toggleNumberToBet }) => (
    <NumberElement
      color={color}
      isActive={isActive}
      onClick={() => toggleNumberToBet(number)}
    >
      {number}
    </NumberElement>
  )
)

export default Number
