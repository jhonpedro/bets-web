import React from 'react'
import { BrandSloganLeftSide, RightSide, WrapperContainer } from './styles'

const BrandSlogan: React.FC = ({ children }) => (
  <WrapperContainer>
    <BrandSloganLeftSide>
      <strong>
        <span>The</span> <span>Greatest</span> <span>App</span>
      </strong>
      <span>for</span>
      <strong>LOTTERY</strong>
    </BrandSloganLeftSide>
    <RightSide>{children}</RightSide>
  </WrapperContainer>
)

export default BrandSlogan
