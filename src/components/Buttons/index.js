import React from 'react'
import { ButtonContainer } from './ButtonElement'

function Button({children}) {
  return (
    <ButtonContainer>{children}</ButtonContainer>
  )
}

export default Button