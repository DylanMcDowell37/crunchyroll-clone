import styled from "styled-components";


export const MediaNavContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 300px;
    height: calc(100% - 60px);
    background-color: #0d0d0d;
    display: grid;  
    align-items: center;
    margin-top: 60px;
    left: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%': '0')};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
    @media screen and (max-width: 768px){
        width: 100%;
    }
    @media screen and (min-width: 975px){
        display: none
    }


`
export const Title = styled.p`
    color: gray;
    margin-left: 20px;
    font-size: 12px;

`
export const Links = styled.a`
    color: white;
    font-size: 18px;
    margin-left: 20px;
`
 
