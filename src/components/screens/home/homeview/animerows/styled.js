import styled from "styled-components"
import {BsDiamondFill, BsFillDiamondFill} from 'react-icons/bs'

export const AnimeRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 1050px;
    margin: 90px;
    @media screen and (max-width: 975px){
       width: 88vw;
    }

`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: center;
   
    
`
export const Poster = styled.img`
    
    object-fit: contain;
    max-width: 150px;
    width: 12.5vw;
    @media screen and (max-width: 975px){
       width: 20vw;
       max-width: 220px;   
        @media screen and (max-width: 575px){
            width: 42vw;
            max-width: 250px;
        }
    }



`
export const Title = styled.p`
    color: white;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const Row = styled.div`

    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    width: 16vw;
    max-width: 150px;
    margin-right: 19px;
    margin-top: 15px;
    padding: 5px;
    :hover{
        transition: ease-in-out 0.3s;
        opacity: 80%;
        background-color: #0d0d0d;
    }
    @media screen and (max-width: 975px){
        width: 25vw;
        max-width: 230px;
        margin-right: 1.1vw;
        @media screen and (max-width: 575px){
             width: 42vw;
             max-width: 250px;
             margin-right: 0.3vw;
        } 
    }

`
export const TitleHeader = styled.div`
    color: white;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 15px;
`
export const Line = styled.div`
    height: 3px;
    width: 100%;
    background-color: #ffb100;
    
`
export const RowContainer = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    margin-left: -5px;
    ::-webkit-scrollbar{
        display: none;
    }
    @media screen and (max-width: 575px){
        margin-right: -20px;
    }
`
export const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Type = styled.p`
    color: teal;
`
export const Subbed = styled.p`
    color: gray;
`
export const Diamond = styled(BsDiamondFill)`
    font-size: 5px;
    padding: 2px;
`