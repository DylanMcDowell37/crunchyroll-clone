import styled from "styled-components"


export const TopContainer = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    background-color: lightblue;
    position: relative;
    margin-top: 60px;
    right: 0; 
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    align-items: center;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    
    
`
export const PosterContainer = styled.div`
    width: 100vw;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const Poster = styled.img`
    height: calc(100vh - 100px);
    width: 75vw;
    
    
   


    

`