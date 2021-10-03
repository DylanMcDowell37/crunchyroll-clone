import styled from "styled-components";


export const MediaNavContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 300px;
    height: calc(100vh - 60px);
    background-color: #0d0d0d;
    display: grid;
    margin-top: 60px;
    left: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
    transition: 0.1s ease-in-out;
    display: ${({ isOpen })=> (isOpen ? 'grid': 'none')};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
    @media screen and (max-width: 575px){
        width: 100%;
    }
    @media screen and (min-width: 975px){
        display: none
    }


`
export const Title = styled.p`
    color: gray;
    font-size: 12px;    
    width: 100%;
    padding: 17px;
    display: flex;
    align-items: center;

`
export const Break = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;

`
export const Links = styled.a`
    color: white;
    font-size: 17px;
    width: 100%;
    padding: 18px;
    text-decoration: none;
    @media (hover: hover){
        :hover{
        background-color: rgb(26, 26, 26, 0.6);
       
    } 
    }
   
`
export const GenresContainer = styled.div`
    display: flex;
    flex-direction: column;

`
 
