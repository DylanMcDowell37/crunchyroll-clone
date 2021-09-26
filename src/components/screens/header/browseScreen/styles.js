import styled from "styled-components";


export const BrowseContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: calc(60% - 60px);
    background-color: #0d0d0d;
    display: flex;
    align-items: center;
    margin-top: 60px;
    padding: 20px;
    left: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ browse })=> (browse ? '100%': '0')};
    top: ${({ browse })=> (browse ? '0' : '-100%')};



`
export const Title = styled.p`
    color: gray;
    

`
export const Links = styled.a`
    color: white;
    padding-bottom: 20px;
    padding-right: 60px;
    text-decoration: none;
    :hover{
        color: gray;
       
    }

`
export const  LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    padding: 40px;
`
export const GenresContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
`
export const Genres = styled.div`
     display: flex;
     flex-direction: column;
     padding: 15px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
`