import useAppSelector from '../../../hooks/useAppSelector'

const useGetRecentGames = () =>
  useAppSelector((state) => {
    const currentUser = state.users.find(
      (user) => user.email === state.auth.email
    )
    if (!currentUser) {
      return []
    }
    return currentUser.recentGames
  })

export default useGetRecentGames
