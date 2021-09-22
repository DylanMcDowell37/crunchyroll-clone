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
    padding-top: 15px;
    padding-bottom: 15px;

`
export const Poster = styled.img`
    width: 420px;
    padding-right: 30px;
    padding-bottom: 30px;
    @media screen and (max-width: 975px){
        display: none;
                
    }

`
export const Featured = styled.div`
    display: flex;
    align-items: center;
    

`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
   

`
export const MobilePoster = styled.img`
    display: none;
    @media screen and (max-width: 975px){
       display: block;
        padding-right: 30px;
    }
`
export const FeaturedContainer = styled.div`
    max-width: 1050px;
    width: 90vw;
    margin-left: 90px;
    margin-right: 90px;
    @media screen and (max-width: 975px){
       width: 88vw;
    }

`