import styled from "styled-components";


export const ProfileScreenContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 400px;
    height: calc(100% - 60px);
    background-color: #0d0d0d;
    background-image: linear-gradient(to bottom, #000000 30%, #060d13, #0d1a26, #132639, #204060);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: smooth;
    ::-webkit-scrollbar{
        display: none;
    }
    margin-top: 60px;
    right: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ profileScreen })=> (profileScreen ? '100%': '0')};
    top: ${({ profileScreen })=> (profileScreen ? '0' : '-100%')};
    @media screen and (max-width: 575px){
        width: 100%;
    }


`
export const Text = styled.p`
    color: white;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-indent: 25px;
`
export const Image = styled.img`
        
`
export const Link = styled.a`
    text-decoration: none;
    color: teal;
`