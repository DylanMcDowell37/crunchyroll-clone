import styled from "styled-components"


export const AnimeRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: black;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    ::-webkit-scrollbar{
        display: none;
    }
   
  
`
export const Poster = styled.img`
    object-fit: contain;
    max-height: 170px;
    margin-right: 10px;


`
export const Title = styled.p`
    color: white;
    font-size: 8px;
    padding: 5px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: column;
`