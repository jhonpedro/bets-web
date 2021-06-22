import { useEffect, useState } from 'react'
import axios from '../services/axios'

export interface GameI {
  id: number
  type: string
  description: string
  range: number
  price: number
  // eslint-disable-next-line camelcase
  max_number: number
  color: string
  // eslint-disable-next-line camelcase
  min_cart_value: number
}

const useGetGames = (
  // eslint-disable-next-line no-unused-vars
  setFirstGame: (game: GameI) => void
): [boolean, Array<GameI>] => {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState<Array<GameI>>([])

  useEffect(() => {
    axios
      .get<GameI[]>('/games')
      .then((res) => {
        setResponse(res.data)
        if (res.data) {
          setFirstGame(res.data[0])
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return [loading, response]
}

export default useGetGames
