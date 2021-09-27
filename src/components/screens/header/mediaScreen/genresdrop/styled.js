import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    flex-direction: column;
    padding-left: 30px;
    z-index: 999;
    overflow-y: scroll;
    margin-left: -30px;
    ::-webkit-scrollbar{
        display: none;
    }
    background-color: #1a1a1a;
    transition: 0.1s ease-in-out;
    display: ${({ isOpenGenres })=> (isOpenGenres ? 'flex': 'none')};
    opacity: ${({ isOpenGenres })=> (isOpenGenres ? '100%': '0')};
    top: ${({ isOpenGenres })=> (isOpenGenres ? '0' : '-100%')};
    @media screen and (min-width: 975px){
        display: none
    }
    @media screen and (max-width: 575px){
        width: 100%;
    }
    
`
export const Links = styled.a`
    padding: 20px;
    font-size: 14px;
    text-decoration: none;
    color: white;
    width: 100%;
    :hover{
        background-color: rgb(0, 0, 0, 0.2);
       
    }

`

