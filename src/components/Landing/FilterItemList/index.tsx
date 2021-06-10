import React from 'react'
import GameButton from '../../Bets/GameButton'
import { ClearButton, FilterItemListContainer } from './styles'

interface FilterItemProps {
  items: {
    type: string
    color: string
  }[]
  isFilteringBy: string
  clearFilters: () => void
  // eslint-disable-next-line no-unused-vars
  setCurrentFilter: (newCurrentFilter: string) => void
}

const FilterItemList: React.FC<FilterItemProps> = ({
  items,
  isFilteringBy,
  setCurrentFilter,
  clearFilters,
}) => {
  const handleClear = () => {
    clearFilters()
  }

  return (
    <FilterItemListContainer>
      {items.map((item, _, arr) => (
        <GameButton
          key={`${item.type}_${arr.join()}`}
          title={item.type}
          color={item.color}
          isActive={item.type === isFilteringBy}
          setCurrentGame={setCurrentFilter}
        />
      ))}
      <ClearButton onClick={handleClear}>Clear filters</ClearButton>
    </FilterItemListContainer>
  )
}

export default FilterItemList
