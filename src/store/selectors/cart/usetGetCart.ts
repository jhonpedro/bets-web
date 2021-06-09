import useAppSelector from '../../../hooks/useAppSelector'

const useGetCart = () => useAppSelector((state) => state.cart)

export default useGetCart
