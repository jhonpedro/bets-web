import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Header from '../../components/Layout/Header'
import ButtonRedirect from '../../components/UI/ButtonRedirect'
import { Filters, HomeContainer, HomeHeaderActions } from './styles'

const Home = () => (
  <>
    <Header />
    <HomeContainer className="container">
      <HomeHeaderActions>
        <h3>RECENT GAMES</h3>
        <Filters>
          <span>Filters</span>
          <div>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
        </Filters>

        <ButtonRedirect goTo="/new-bet">
          New Bet
          <FiArrowRight />
        </ButtonRedirect>
      </HomeHeaderActions>
    </HomeContainer>
  </>
)

export default Home
