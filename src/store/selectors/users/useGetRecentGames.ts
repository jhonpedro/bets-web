import { useEffect, useState } from 'react'
import axios from '../../../services/axios'
import { CartItem } from '../../reducers/cart/reducer'

const useGetRecentGames = () => {
  const [games, setGames] = useState<CartItem[]>([])

  useEffect(() => {
    axios
      .get('bets')
      .then((response) => {
        setGames(response.data)
      })
      .catch()
  }, [])

  return games
}

export default useGetRecentGames
