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
    @media (hover: hover){
       :hover{
        transition: ease-in-out 0.3s;
        opacity: 80%;
        background-color: #0d0d0d;
    }  
    }
   
    @media screen and (max-width: 575px){
        margin-right: 3px;
        width: 130px;
    }
`
export const Poster = styled.img`
    object-fit: contain;
    width: 150px;
    @media screen and (max-width: 575px){
        
        width: 130px;
    }
    
    
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
    z-index: 10;
    width: 100vw;
    background-color: black;
    top: 60px;
    left: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    overflow-y: scroll;
    padding: 20px;
    
    
    
`
export const Exit = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    color: white;
    z-index: 20;
    background-color: rgb(26, 26, 26, 0.5);


`
export const AnimeInfo = styled.div`
    max-width: 1050px;
    width: 80vw;
    display: flex;
    flex-direction: column; 
    align-items: center;
    height: 100%;
    padding-bottom: 100px;
    
    
    
    
`
export const EpisodeTitle = styled.h1`
    padding: 10px;
`
export const EpisodeOverview = styled.div`

`
export const RatingContainer = styled.div`
    padding: 20px;

`
export const Rating = styled.p`

`
export const Certification = styled.p`
    padding-left: 4px;
`
export const Subtitle = styled.p`
    padding-left: 4px;

`
export const EpisodeCount = styled.p`

`
export const Genres = styled.div`
    width: 100%;
    

`
export const EpisodeInfo = styled.div`
    display: flex;
    
    padding: 10px;
    
`