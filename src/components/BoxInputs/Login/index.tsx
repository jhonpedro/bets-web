import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ButtonNoBorder from '../../ButtonNoBorder'
import Input from '../../Input'
import { BoxInputsContainer } from './styles'

const BoxInputs: React.FC = () => (
  <BoxInputsContainer>
    <Input placeholder="Name" />
    <Input placeholder="Password" type="password" />
    <div className="forgot-password">
      <Link to="/forgot-password">I forget my password</Link>
    </div>
    <ButtonNoBorder type="submit">
      Log In <FiArrowRight />
    </ButtonNoBorder>
  </BoxInputsContainer>
)

export default BoxInputs
