import React, { useCallback, useState } from 'react'
import ActionButtons from '../../components/Bets/ActionButtons'
import Cart from '../../components/Bets/Cart'
import GameButtonList from '../../components/Bets/GameButtonList'
import NumbersList from '../../components/Bets/NumbersList'
import Header from '../../components/Layout/Header'
import Modal from '../../components/Layout/Modal'
import useGetGames, { GameI } from '../../hooks/useGetGames'
import generateRandomArrayInRange from '../../utils/generateRandomArrayInRange'
import { CartItem } from '../../store/reducers/cart/reducer'
import { ChooseGameContainer, NewBetContainer, Strong } from './styles'
import ScrollBarDiv from '../../components/UI/ScrollBarDiv/styles'

export interface CurrentGame extends GameI {
  numbers: number[]
}

const NewBet = () => {
  const [modal, setModal] = useState({
    isShowing: false,
    title: '',
    message: '',
  })
  const [currentGame, setCurrentGame] = useState<CurrentGame>({} as CurrentGame)
  const [loading, games] = useGetGames((game) => {
    setCurrentGame((prevState) => ({ ...prevState, ...game, numbers: [] }))
  })

  const getMinCartValue = useCallback(
    () =>
      games.reduce((acc, game) => acc + game.min_cart_value, 0) / games.length,
    [games]
  )

  const onGetCurrentBetGame = useCallback((): CartItem | undefined => {
    if (currentGame.numbers.length !== currentGame.max_number) {
      setShowModal(
        'More numbers',
        `You haven't select all numbers required to add this game to the cart`
      )
      return
    }

    setShowModal('Bet added', 'Your bet was added to the cart!')
    onClearCurrentBetGame()

    return {
      game_id: currentGame.id,
      color: currentGame.color,
      numbers: currentGame.numbers,
      price: currentGame.price,
      type: currentGame.type,
    }
  }, [
    currentGame.numbers,
    currentGame.color,
    currentGame.price,
    currentGame.type,
  ])

  const onCompleteCurrentBetGame = useCallback(() => {
    setCurrentGame((prevState) => ({
      ...prevState,
      numbers: generateRandomArrayInRange(
        [1, prevState.range],
        prevState.max_number - prevState.numbers.length,
        prevState.numbers
      ),
    }))
  }, [])
  const onClearCurrentBetGame = useCallback(() => {
    setCurrentGame((prevState) => ({ ...prevState, numbers: [] }))
  }, [])

  const onDisposeModal = useCallback(() => {
    setModal((prevState) => ({ ...prevState, isShowing: false }))
  }, [])

  const setShowModal = useCallback((title: string, message: string) => {
    setModal({ title, message, isShowing: true })
  }, [])

  const handleSetCurrentGame = useCallback(
    (gameType: string) => {
      const newGameInfo = games.find((game) => game.type === gameType)
      if (!newGameInfo) {
        return
      }
      setCurrentGame((prevState) => ({
        ...prevState,
        ...newGameInfo,
        actual: gameType,
        numbers: prevState.numbers.filter(
          (n, index) => n <= prevState.range && index < newGameInfo.max_number
        ),
      }))
    },
    [games]
  )

  const handleToggleNumbers = useCallback(
    (toToggle: number) => {
      const isAlreadyActive = currentGame.numbers.includes(toToggle)

      if (isAlreadyActive) {
        setCurrentGame((prevState) => ({
          ...prevState,
          numbers: prevState.numbers.filter((number) => number !== toToggle),
        }))
        return
      }

      if (currentGame.numbers.length === currentGame.max_number) {
        setShowModal(
          'Max numbers per this bet achieved!',
          'Try add this to cart and bet another game.'
        )
        return
      }

      setCurrentGame((prevState) => ({
        ...prevState,
        numbers: [toToggle, ...prevState.numbers],
      }))
    },
    [currentGame]
  )

  return (
    <>
      <Modal
        title={modal.title}
        message={modal.message}
        showModal={modal.isShowing}
        onDispose={onDisposeModal}
      />
      {!loading ? (
        <>
          <Header />
          <NewBetContainer className="container">
            <div className="bet">
              <h3>
                <span>NEW BET</span> FOR {currentGame.type}
              </h3>
              <ChooseGameContainer>
                <Strong>Choose Game</Strong>
                <ScrollBarDiv>
                  <GameButtonList
                    games={games}
                    setCurrentGame={handleSetCurrentGame}
                    currentGameType={currentGame.type}
                  />
                </ScrollBarDiv>
              </ChooseGameContainer>
              <Strong>Fill your bet</Strong>
              <p>{currentGame.description}</p>
              <NumbersList
                color={currentGame.color}
                range={currentGame.range}
                toggleNumberToBet={handleToggleNumbers}
                actives={currentGame.numbers}
              />
              <ActionButtons
                onGetCurrentBetGame={onGetCurrentBetGame}
                onCompleteCurrentBetGame={onCompleteCurrentBetGame}
                onClearCurrentBetGame={onClearCurrentBetGame}
              />
            </div>
            <div className="cart">
              <Cart showModal={setShowModal} minCartValue={getMinCartValue()} />
            </div>
          </NewBetContainer>
        </>
      ) : null}
    </>
  )
}

export default NewBet
