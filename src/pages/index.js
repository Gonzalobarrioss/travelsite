import React from 'react'

import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection'
import { about, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'

import Footer from '../components/Footer'
import { LayoutContainer } from '../components/Layout/LayoutElements'
import Header from '../components/Header'
import Glass from '../components/Glass'
import Content from '../components/Content'
import Main from '../components/Main'
import Aside from '../components/Aside'

import { useSelector } from 'react-redux'
import Blur from 'react-css-blur'

const Home = () => {

  const toggleStatus = useSelector(state => state.toggleReducer.status)


  return (
    <LayoutContainer >
      <Header/>
      <Glass />
      <Aside/>

      <HeroSection  />

      <Blur radius={ toggleStatus ? '20px' : '0' } transition="2500ms">
 
        <InfoSection {...about}  />
        <Footer />
      </Blur>
     {/* <Main>
      
        <InfoSection {...about}/>
            <Skills />
            <Works />
            <Services />
            {/*<InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
           
 
      </Main>
         
    <Footer /> */}
      
    </LayoutContainer>
  )
}

export default Home