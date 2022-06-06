import styled from 'styled-components'
import { Link as LinkS} from 'react-scroll'
import {MdArrowUpward} from 'react-icons/md'

export const ArrowButton = styled(LinkS)`
    display: flex;
    background: lightslategrey;
    justify-content: center; 
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    padding: 5px 5px;
    width: 30px;
    height: 30px;
    transition: 0.5s;
    &:hover{
        transform: scale(1.2);       
    }
`

export const ArrowUp = styled(MdArrowUpward)`
    color: #fff;
    backdrop-filter: blur(15px);
`

export const ArrowContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 10px;
    
    justify-content: flex-end;
    align-items: center;
    padding: 5px 15px;
    z-index: 100;

    @media screen and (min-width: 1440px) {
        overflow-x: visible;
        transform: translateX(100px);    
        top: 30px;    
    }

    

    @media screen and (max-width: 968px) {
        display: none;
    }
`