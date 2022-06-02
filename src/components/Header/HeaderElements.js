import styled from "styled-components";
import Menu from '../../assets/images/menu.png'
import Close from '../../assets/images/close.png'

export const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 1023px){
        padding: 20px;
    }

`
export const HeaderLogo = styled.a`
    position: relative;
    font-size: 2em;
    color: #fff;
    
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
    transition: 0.5s;
`

export const HeaderToggle = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    background: url(${Menu});
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    background-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before{
        content: 'Menu';
        position: absolute;
        right: 45px;
        text-transform: uppercase;
        color: #fff;
        letter-spacing: 2px;
        font-size: 14px;
        padding: 2px 5px;
        background: #fff;
        color: #111;
    }

    &.active {
        background: url(${Close});
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;
        background-size: 25px;

        &:before{
            content: 'Close';
        }
    }
`