import styled from "styled-components"


export const AnimeRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    ::-webkit-scrollbar{
        display: none;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
`
export const Poster = styled.img`
    object-fit: contain;
    max-height: 200px;
    margin: 10px;


`
export const Title = styled.p`
    color: white;
    font-size: 10px;
    padding: 5px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: column;
    :hover{
        opacity: 80%;
        background-color: #262626;
    }
`
export const TitleHeader = styled.div`
    color: white;
    padding-left: 20px;
    padding-top: 20px;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
`