import React from 'react'
import Number from '../Number'

interface NumbersListProps {
  color: string
  range: number
  actives: number[]
  // eslint-disable-next-line no-unused-vars
  toggleNumberToBet: (numberToToggle: number) => void
}

const NumbersList: React.FC<NumbersListProps> = React.memo(
  ({ range, actives, color, toggleNumberToBet }) => (
    <>
      {new Array(range).fill(null).map((_, index) => {
        const number = index + 1
        const isActive = actives.includes(number)
        return (
          <Number
            color={color}
            key={number}
            number={number}
            isActive={isActive}
            toggleNumberToBet={toggleNumberToBet}
          />
        )
      })}
    </>
  )
)

export default NumbersList
