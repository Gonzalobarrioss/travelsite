import React, {useState}  from 'react'
import Aside from '../Aside'
import Navbar from '../Navbar'
import { HeaderContainer, HeaderLogo, HeaderToggle } from './HeaderElements'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (

      <HeaderContainer>
        <HeaderLogo href="#">Water.</HeaderLogo>
        <HeaderToggle onClick={toggle}></HeaderToggle>
          {/*
          <a href="#" class="logo">Water.</a>
          <div class="toggle" onclick="menuToggle()"></div>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} /> 
          
          */}
      </HeaderContainer>
   
 
  )
}

export default Header