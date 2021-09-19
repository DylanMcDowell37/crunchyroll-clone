import styled from "styled-components"


export const AnimeRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 2.5vw;
    
`
export const Poster = styled.img`

    object-fit: contain;
    width: 20vw;
    max-width: 150px;
    max-height: 200px;
    margin: 2.2vw;


`
export const Title = styled.p`
    color: white;
    font-size: 10px;
    padding: 5px;
`
export const Row = styled.div`
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover{
        opacity: 80%;
        background-color: #262626;
    }
`
export const TitleHeader = styled.div`
    color: white;
    margin-left: 2.5vw;
    padding-bottom: 20px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
`
export const Line = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    height: 5px;
    background-color: #ffb100;
    
`