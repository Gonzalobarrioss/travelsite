import styled from "styled-components";

export const GlassContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    z-index: 1;
    backdrop-filter: blur(15px);
    box-shadow: 10px 0 15px rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    transition-delay: 1s;

    &.active{
        width: 100%;
        backdrop-filter: blur(20px);
        transition-delay: 0s;
        box-shadow: 10px 0 15px rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 961px){
        width: 50%;
    }
`
