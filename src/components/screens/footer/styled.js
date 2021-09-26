import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, #000000 30%, #060d13, #0d1a26, #132639);
   
    align-items: center;

`



export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1050px;
    width: 90vw;
    margin-top: 40px;
    margin-left: 90px;
    margin-right: 90px;
    @media screen and (max-width: 975px){
       width: 88vw;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 575px){
        flex-direction: column;
    }

`
export const Break = styled.hr`
    display: none;
    @media screen and (max-width: 575px){
        display: block;
        opacity: 10%;
        margin-top: 10px;
        margin-bottom: 20px; 
    }
    

`
export const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;

`
export const Title = styled.h4`
    color: white;
    padding-bottom: 20px;
`
export const Links = styled.a`
    color: gray;
    padding-bottom: 15px;

`
export const BottomContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;

`
export const Tag = styled.p`
    color: gray;
    font-size: 14px;
`
export const Language = styled.p`
    color: gray;
    font-weight: bold;
`
