import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'

export const ContactContainer = styled.div`
    
    background: #fff;
    width: 100%;
    display: flex;
    position: relative;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    z-index:10;
`

export const ContactWrapper = styled.div`
    display: grid;
    
    
    width: 100%;
   // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: flex-start;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
    }

`

export const Column1 = styled.div`
    
    margin-bottom: 15px;
    padding: 30px 15px;
    grid-area: col1;

    @media screen and (min-width: 1024px){
        padding: 80px 25px;
    }

`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 30px 15px;
    grid-area: col2;

    @media screen and (min-width: 1024px){
        padding: 80px 25px;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;


`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    background: transparent;
    
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;   
`


export const ContactVideo = styled.video`
    /*width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;*/
    
    width: 100%;
    height: 100%;
    max-height: 600px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 10px;
`

export const Button = styled.a`
    border-radius: 50px;
    background: #f9f9f9;
    white-space: nowrap;
    padding: 12px 30px;
    color: #111;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    z-index:10;
    
    transition: 0.5s;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);

    &:hover{
        transform: translateY(-5px);
    }
    
`