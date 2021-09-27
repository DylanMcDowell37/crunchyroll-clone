import styled from "styled-components";
import { BsDiamondFill } from "react-icons/bs";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    align-items: center;

`
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 5px;
`
export const Title = styled.h1`
    color: white;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const Sort = styled.h2`
    color: white;
    font-size: 12px;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const AnimeContainer = styled.div`
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
export const FetchedAnime = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -40px;
    margin-left: -5px;
    

`
export const FectchedContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    margin-right: 19px;
    margin-top: 15px;
    padding: 5px;
    :hover{
        transition: ease-in-out 0.3s;
        opacity: 80%;
        background-color: #0d0d0d;
    }
    @media screen and (max-width: 575px){
        margin-right: 1px;
    }
`
export const Poster = styled.img`
    object-fit: contain;
    width: 150px;
    
    
`
export const AnimeTitle = styled.p`
    color: white;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const Series = styled.p`
    color: teal;
`
export const Subbed = styled.p`
    color: gray;
`
export const Diamond = styled(BsDiamondFill)`
    font-size: 5px;
    padding: 2px;
`
export const YouTubeContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    top: 80px;
    left: 0;
`
