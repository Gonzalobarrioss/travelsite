import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward, MdOutlineArrowDownward} from 'react-icons/md'
import { Link as LinkS } from 'react-scroll'


export const HeroContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Dancing+Script:wght@700&display=swap');


    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    text-align: center;
    transition: 0.5s;
    transition-delay: 1s;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.active{
        opacity: 0;
        visibility: hidden;
        transform: translateX(-200px);
        transition-delay: 0s;
    }
`

export const HeroH1 = styled.h1`
    position: relative;
    color: #fff;
    font-size: 10vw;
    line-height: 0.55em;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    font-family: "Dancing Script", cursive;

    @media screen and (max-width: 981px){
        font-size: 18vw;
    }

    span{
        font-size: 0.2em;
        font-weight: 300;
        letter-spacing: 5px;
        background: #fff;
        color: #111;
        padding: 0 10px;
        text-shadow: 0 5px 5px rgba(0, 0, 0, 0);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;

        @media screen and (max-width: 981px){
            font-size: 0.25em;
            letter-spacing: 2px;
            padding: 0 5px;
        }
    }
    
`

export const HeroP = styled.span`
      
`

export const ArrowButton = styled(LinkS)`
    display: flex;
    background: #fff;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 100px;
    background: #fff;
    border-radius: 50%;
    padding: 5px 5px;
    width: 30px;
    height: 30px;
    color: #111;
    
    transition: 0.5s;

    &:hover{
        transform: scale(1.2);       
    }

    &.active{
        opacity: 0;
        visibility: hidden;
        transform: translateX(-200px);
        transition-delay: 0s;
    }
`



export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    height: 2px;
    width: 10px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowDown = styled(MdOutlineArrowDownward)`
    
    
`
