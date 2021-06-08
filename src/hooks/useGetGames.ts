import { useEffect, useState } from 'react'
import axios from '../services/axios'

export interface GameI {
  type: string
  description: string
  range: number
  price: number
  'max-number': number
  color: string
  'min-cart-value': number
}

interface AxiosResponse {
  types: GameI[]
}

const useGetGames = (
  // eslint-disable-next-line no-unused-vars
  setFirstGame: (firstGame: string) => void
): [boolean, Array<GameI>] => {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState<Array<GameI>>([])

  useEffect(() => {
    axios
      .get<AxiosResponse>('/games.json')
      .then((res) => {
        setResponse(res.data.types)
        if (res.data.types) {
          setFirstGame(res.data.types[0].type)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return [loading, response]
}

export default useGetGames
