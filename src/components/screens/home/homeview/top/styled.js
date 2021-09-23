import styled from "styled-components"
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

export const TopContainer = styled.div`
    width: 100vw;
    background-image: ${({ background })=> (background ? 'linear-gradient(.15turn, #ff5c33, #ffcc00)' : 'linear-gradient(.15turn, #00ccff, #003d4d)')};;
    position: relative;
    margin-top: 60px;
    right: 0; 
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-y: hidden;
    
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: hidden;
    align-items: center;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{
        display: none;
        
    }
    @media screen and (max-width: 975px){
        height: auto;
    }
`

export const PosterContainer = styled.div`
    display: block;
    position: relative;
    padding-top: 40px;
    padding-bottom: 40px;
    justify-content: space-evenly;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
    scroll-snap-align: start;
    
    @media screen and (max-width: 975px){
        padding-left: 25vw;
        padding-right: 25vw;
         
            @media screen and (max-width: 575px){
                padding-left: 10vw;
                padding-right: 10vw;
                
            }
        }
    
    
    
`

export const WebPoster = styled.img`
    width: 75vw;
    max-height: 85vh;
    @media screen and (max-width: 975px){
        display: none;
    }
`
export const MobilePoster = styled.img`
    display: none;
        @media screen and (max-width: 975px){
            display: flex;
            width: 50vw;
            @media screen and (max-width: 575px){
                width: 80vw;
            }
        }
`

export const LeftArrow = styled(IoIosArrowBack)`
    font-size: 30px;
    position: absolute;
    color: white;
    :hover{
        font-size: 35px;
    }
`
export const RightArrow = styled(IoIosArrowForward)`
    font-size: 30px;
    position: absolute;
    margin-left: -20px;
    color: white; 
    
    :hover{
        font-size: 35px;
    }
    
`
export const LeftContainer = styled.div`
    position: absolute;
    height: 50%; 
    display: flex;
    align-items: center;
    z-index: 5;
    display: ${({ arrowLeft })=> (arrowLeft ? 'flex' : 'none')};
    
`
export const RightContainer = styled.div`
    position: absolute;
    height: 50%;
    width: 3vw;
    z-index: 5;
    display: flex;
    right: 0;
    align-items: center;
    display: ${({ arrowRight })=> (arrowRight ? 'flex' : 'none')};
`