import styled from "styled-components";
import {BsDiamondFill} from 'react-icons/bs'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: center;

`
export const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    flex-wrap: wrap;
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
export const Title = styled.h2`
    color: white;
  

`
export const Poster = styled.img`
    max-width: 420px;
    width: 35vw;
    padding-right: 30px;
    @media screen and (max-width: 800px){
        display: none;
                
    }
    @media screen and (max-width: 575px){
        display: block;
        width: 100%;
        padding-right: 0;
        max-width: 600px;
        padding-bottom: 20px;
    }

`
export const Featured = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    margin-left: -5px;
    @media screen and (max-width: 575px){
        flex-direction: column;
        
    }
    

`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    

`
export const MobilePoster = styled.img`
    display: none;
    @media screen and (max-width: 800px){
       display: block;
        padding-right: 30px;
    }
    @media screen and (max-width: 575px){
        display: none;
    }
`
export const FeaturedContainer = styled.div`
    max-width: 1050px;
    width: 90vw;
    margin-top: 40px;
    margin-left: 90px;
    margin-right: 90px;
    @media screen and (max-width: 975px){
       width: 88vw;
    }

`
export const PlayButton = styled.button`
    height: 40px;
    background-color: #ff5c33;
    color: black;
    margin-right: 5px;
    display: flex;
    align-items: center;
    border-color: #ff5c33;
    font-weight: bold;
    
    @media screen and (max-width: 850px){
        width: 100%;
        margin-right: 0;
        padding-left: calc(50% - 90px);
        margin-bottom: 10px;
    }
    @media screen and (max-width: 800px){
        width: auto;
        margin-right: 5px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 0;
    }
    @media screen and (max-width: 675px){
        width: 100%;
        padding-left: calc(50% - 90px);
        margin-bottom: 10px;
    }

`
export const AddToList = styled.button`
    height: 40px;
    border-color: #ff5c33;
    color: #ff5c33;
    background-color: black;
    display: flex;
    align-items: center;
    font-weight: bold;
    @media screen and (max-width: 850px){
        width: 100%;
        padding-left: calc(50% - 80px);
    }
    @media screen and (max-width: 800px){
        width: auto;
        margin-right: 5px;
        padding-left: 10px;
        padding-right: 10px;
        
    }
    @media screen and (max-width: 675px){
        width: 100%;
        padding-left: calc(50% - 80px);
        margin-bottom: 0;
    }
`