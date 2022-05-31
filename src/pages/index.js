import React from 'react'

import HeroSection from '../components/HeroSection/Index'
import InfoSection from '../components/InfoSection'
//import { about, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'

import Footer from '../components/Footer'
import { LayoutContainer } from '../components/Layout/LayoutElements'
import Header from '../components/Header'

import Content from '../components/Content'
import Main from '../components/Main'

const Home = () => {

  

  return (
    <LayoutContainer>
      <Header/>

        <Content>
        
          <Main>
            <HeroSection />
           {/* <InfoSection {...about}/>
            <Skills />
            <Works />
            <Services />*/}
            {/*<InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            */}
 
          </Main>
          
        <Footer />
      </Content>
      
    </LayoutContainer>
  )
}

export default Home