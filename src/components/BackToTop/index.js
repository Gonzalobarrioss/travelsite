import React from 'react'
import { ArrowButton, ArrowUp, ArrowContainer } from './BackToTopElements'

function BackToTop() {
  return (
      <ArrowContainer>
        <ArrowButton 
            to='home' 
            smooth={true} 
            duration={500}
            spy={true}
            exact="true"
            offset={0}
        >
            <ArrowUp />
        </ArrowButton>
      </ArrowContainer>
    
  )
}

export default BackToTop