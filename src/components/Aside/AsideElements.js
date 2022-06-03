import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const AsideList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;    
    z-index: 10;
`

export const AsideItem = styled.li`
    list-style: none;
    text-align: center;
    width: 0;
    margin: 15px 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    transform: translateX(200px);
    transition-delay: calc(0.2s * ${props => props.var});
    cursor: pointer;
`
export const AsideContainer = styled.aside`
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    z-index: 1;
    
    width: 0;

    //transition-delay: 1.1s;
    height: 100vh;
    &.active{

        width: 100%;
        z-index: 10;
        ${AsideItem}{
            width: 100%;
            opacity: 1;
            visibility: visible;
            transform: translateX(0px);
        }
    }
`

export const AsideLink = styled(LinkS)`
    color: #111;
    font-size: 1.5em;
    letter-spacing: 4px;
    text-decoration: none;
    font-weight: 300;
    text-transform: uppercase;
    background: #fff;
    padding: 4px 10px;
    display: inline-block;

    &:hover{
        background: #111;
        color: #fff;
        letter-spacing: 10px;
        text-transform: lowercase;
    }
`