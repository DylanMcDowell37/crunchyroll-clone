import styled from "styled-components"


export const TopContainer = styled.div`
    width: 100vw;
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