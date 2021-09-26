import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 999;
    background-color: #0d0d0d;
    transition: 0.1s ease-in-out;
    opacity: ${({ isOpenGenres })=> (isOpenGenres ? '100%': '0')};
    top: ${({ isOpenGenres })=> (isOpenGenres ? '0' : '-100%')};
    @media screen and (min-width: 975px){
        display: none
    }
    
`
export const Links = styled.a`
    padding: 10px;

`