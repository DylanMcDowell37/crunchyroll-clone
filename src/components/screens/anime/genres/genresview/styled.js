import styled from "styled-components"
import {BsDiamondFill} from 'react-icons/bs'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export const AnimeRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 1050px;
    margin-left: 90px;
    margin-right: 90px;
    margin-top: 50px;
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
            width: 43vw;
            max-width: 275px;
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
             width: 43vw;
             max-width: 275px;
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

export const LeftArrow = styled(IoIosArrowBack)`
    font-size: 30px;
    position: absolute;
    color: white;
    :hover{
        font-size: 35px;
    }
    @media screen and (max-width: 575px){
            display: ${({ mediaArrow })=> (mediaArrow ? 'flex' : 'none')}; 
            font-size: 18px;
            background-color: rgb(102,102,102, 0.7);
            padding: 5px;
            :hover{
                font-size: 20px;
            }
        } 
`
export const RightArrow = styled(IoIosArrowForward)`
    font-size: 30px;
    position: absolute;
    margin-left: -10px;
    color: white;
    right: 0;
    :hover{
        font-size: 35px;
    }
    @media screen and (max-width: 575px){
            display: ${({ mediaArrow })=> (mediaArrow ? 'flex' : 'none')};
            font-size: 18px;
            background-color: rgb(102,102,102, 0.7);
            padding: 5px;
            :hover{
                font-size: 20px;
            }
        } 
    
`
export const LeftContainer = styled.div`
    position: absolute;
    height: 50%;
    max-height: 300px;
    margin-left: -4vw;
    display: flex;
    align-items: center;
    z-index: 1;
    transition: ease-in-out 0.1s;
    display: ${({ arrowLeft })=> (arrowLeft ? 'flex' : 'none')};
    @media screen and (max-width: 575px){
            height: 70%;
            margin-left: -4vw;
    } 
    @media screen and (min-width: 1225px){
        left: auto;
        margin-left: -50px;
    }
`
export const RightContainer = styled.div`
    position: absolute;
    height: 50%;
    max-height: 300px;
    left: 96.5vw;
    z-index: 1;
    display: flex;
    align-items: center;
    display: ${({ arrowRight })=> (arrowRight ? 'flex' : 'none')};
    @media screen and (max-width: 575px){
            height: 70%;
            right: 1vw;
    } 
    @media screen and (min-width: 1225px){
        left: auto;
        margin-left: 1110px;
    }
`
export const Link = styled.a`
    color: gray;
    font-size: 15px;
    transition: ease-in-out .2s;
    :hover{
        font-size: 17px;
    }

`
export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;

`