import React, {useState} from 'react'
import Video from '../../assets/video/water.mp4'
import { Button } from '../Buttons/ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    ArrowDown,
    ArrowButton
} from './HeroElements'

import { useSelector } from 'react-redux'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const toggleStatus = useSelector(state => state.toggleReducer.status)


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{width:'100%', height: '100%'}}/>
            </HeroBg>
            <HeroContent className={toggleStatus ? 'active' : null}>
                <HeroH1>Happiness...<br /><span>aventura pura como agua cristalina</span></HeroH1>
        
            {/* <HeroBtnWrapper>
                    <Button 
                        to='/' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        $smooth={true} 
                        duration={500}
                        $spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Start Travel {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper> */}
                
            </HeroContent>
               {/* <HeroBtnWrapper> */}
                        <ArrowButton 
                            to='about' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={0}
                            className={toggleStatus ? 'active' : null}
                        >
                            <ArrowDown />
                        </ArrowButton>
                {/* </HeroBtnWrapper> */}
        </HeroContainer>
  )
}

export default HeroSection