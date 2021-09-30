import styled from 'styled-components'
import { BsDiamondFill } from 'react-icons/bs'

export const Container = styled.div`
    /* margin-top: 60px; */
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;

`
export const MangaContainer = styled.div`
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
export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 5px;
    align-items: baseline;
    

`
export const FetchMangaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -40px;
    margin-left: -5px;
    
`
export const Poster = styled.img`
    max-width: 150px;
    width: 29vw;
    padding-bottom: 5px;
`
export const FetchContainer = styled.div`
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
        margin-right: 1px;
    }
`

export const MangaInfo = styled.div`
   


`
export const MangaTitle = styled.div`
    color: white;
    font-size: 15px;
    padding-top: 15px;
    padding-bottom: 15px;

`
export const Serialization = styled.div`
    font-size: 10px;
    display: flex;
    align-items: center;
    color: gray;
`
export const Type = styled.div`
    font-size: 10px;
    color: teal;
`
export const TypeContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`
export const MangaDropView = styled.div`
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
export const DropContainer = styled.div`
    max-width: 1050px;
    width: 80vw;
    display: flex;
    flex-direction: column; 
    align-items: center;
    height: 100%;
    padding-bottom: 300px;
   

`
export const Description = styled.div`
    flex-wrap: flex;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 14px;
`
export const Cover = styled.img`

`
export const Status = styled.div`
    padding-left: 15px;
    display: flex;
    color: white;
`
export const Rating = styled.div`
    padding-left: 10px;
    display: flex;
    color: white;
`
export const Age = styled.div`
    padding-left: 10px;
    color: white;
    display: flex;
`
export const Info = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    font-size: 10px;
    justify-content: space-evenly;
    
`
export const TextContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-around;
`
export const Text = styled.div`
    font-size: 10px;
    cursor: pointer;
    @media( hover: hover ){
        :hover{
           color: gray;
        }
    } 
    color: white;
`
export const Title = styled.div`
    font-size: 20px;
    cursor: pointer;
    @media( hover: hover ){
        :hover{
           color: gray;
        }
    } 
    color: white;
`
export const Exit = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    padding: 20px;
    color: white;
    z-index: 20;
    background-color: rgb(26, 26, 26, 0.5);
    cursor: pointer;
`
export const Diamond = styled(BsDiamondFill)`
    font-size: 4px;
    padding: 2px;
`