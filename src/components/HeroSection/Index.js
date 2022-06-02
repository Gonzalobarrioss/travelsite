import React, {useState} from 'react'
import Video from '../../assets/video/water.mp4'
import { Button } from '../ButtonElement'
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' style={{width:'100%', height: '100%'}}/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Happiness...<br /><span>crystal clear ocean water</span></HeroH1>
            <HeroP>
                
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                    to='/' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    $smooth={true} 
                    duration={500}
                    $spy={true}
                    exact="true"
                    offset={-80}
                >
                    Start Travel {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection