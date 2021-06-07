import useAppSelector from '../../../hooks/useAppSelector'

const useGetAuth = () => useAppSelector((state) => state.auth)

export default useGetAuth
