import React, { useCallback, useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import FilterItemList from '../../components/Landing/FilterItemList'
import RecentGameList from '../../components/Landing/RecentGameList'
import Header from '../../components/Layout/Header'
import ButtonRedirect from '../../components/UI/ButtonRedirect'
import ScrollBarDiv from '../../components/UI/ScrollBarDiv/styles'
import { CartItem } from '../../store/reducers/cart/reducer'
import useGetRecentGames from '../../store/selectors/users/useGetRecentGames'
import { Filters, HomeContainer, HomeHeaderActions } from './styles'

export interface FilteredGames {
  filtered: CartItem[]
  items: { type: string; color: string }[]
  current: string
}

const Home = () => {
  const recentGames = useGetRecentGames()
  const [filterGames, setFilterGames] = useState({
    filtered: [],
    items: [],
    current: '',
  } as FilteredGames)

  useEffect(() => {
    if (recentGames) {
      setFilterGames(
        recentGames.reduce(
          (acc, cartItem) => {
            const newAcc = { ...acc, filtered: [...acc.filtered, cartItem] }

            if (acc.items.find((item) => item.type === cartItem.type)) {
              return newAcc
            }

            return {
              ...newAcc,
              items: [
                { type: cartItem.type, color: cartItem.color },
                ...acc.items,
              ],
            }
          },
          {
            filtered: [],
            items: [],
            current: '',
          } as FilteredGames
        )
      )
    }
  }, [recentGames])

  const handleChangeCurrentFilter = useCallback((newCurrentFilter: string) => {
    setFilterGames((prevState) => ({
      ...prevState,
      filtered: recentGames.filter(
        (recentGame) => recentGame.type === newCurrentFilter
      ),
      current: newCurrentFilter,
    }))
  }, [])

  const handleClearFilters = useCallback(() => {
    setFilterGames((prevState) => ({
      ...prevState,
      filtered: recentGames,
      current: '',
    }))
  }, [])

  return (
    <>
      <Header />
      <HomeContainer className="container">
        <HomeHeaderActions>
          <h3>RECENT GAMES</h3>
          <Filters>
            <span>Filters</span>
            <ScrollBarDiv>
              <FilterItemList
                items={filterGames.items}
                isFilteringBy={filterGames.current}
                setCurrentFilter={handleChangeCurrentFilter}
                clearFilters={handleClearFilters}
              />
            </ScrollBarDiv>
          </Filters>

          <ButtonRedirect goTo="/new-bet">
            New Bet
            <FiArrowRight />
          </ButtonRedirect>
        </HomeHeaderActions>

        <RecentGameList items={filterGames.filtered} />
      </HomeContainer>
    </>
  )
}

export default Home
