import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled(Link)`
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
    
    
    backdrop-filter: blur(20px);
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.2);
    
    
    &:hover {
        
        background: transparent;
        color: #fff;
        box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.5);
    }
`