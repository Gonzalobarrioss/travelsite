import React, {useState}  from 'react'
import Aside from '../Aside'
import Navbar from '../Navbar'
import { HeaderContainer, HeaderLogo, HeaderToggle } from './HeaderElements'


import { store } from '../../redux/store'
import { toggle } from '../../redux/actions/ToggleAction'
import { useSelector } from 'react-redux'


function Header() {
    /*const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    */
    const toggleStatus = useSelector(state => state.toggleReducer.status)

  return (

      <HeaderContainer>
        <HeaderLogo href="#" onClick={()=>console.log(store.getState())}>Travel.</HeaderLogo>
        <HeaderToggle 
          onClick={() => store.dispatch(toggle(!toggleStatus))}
          className={toggleStatus ? 'active' : null}
        >  
        </HeaderToggle>
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