import styled from 'styled-components'

export const AsideContainer = styled.div`

`

export const AsideList = styled.ul`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
`

export const AsideItem = styled.li`
    list-style: none;
    text-align: center;
    margin: 15px 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    transform: translateX(200px);
    transition-delay: calc(0.2s * 1);

    &.active{
        opacity: 1;
        visibility: visible;
        transform: translateX(0px);
    }
`
export const AsideLink = styled.a`
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