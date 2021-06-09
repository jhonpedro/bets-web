import useAppSelector from '../../../hooks/useAppSelector'

const useGetRecentGames = () =>
  useAppSelector(
    (state) =>
      state.users.find((user) => user.email === state.auth.email)?.recentGames
  )

export default useGetRecentGames
