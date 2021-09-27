import styled from "styled-components"
import { GiLaurelCrown } from "react-icons/gi"
import { FaRegBookmark } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"
import { CgProfile } from "react-icons/cg"


export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #262626;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999; 
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    
    
`

export const NavLogo = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 25px;
    padding: 20px;
    text-decoration: none;
    :hover{
        color: white;
    }
    color: #ff5c33;
    font-family: Arial, Helvetica, sans-serif;

`
export const LogoContainer = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
`

export const Text = styled.div`

    padding: 5px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 575px){
        display: none;
    }


`

export const MiniText = styled.p`
    font-size: 9px;
    padding: 1px;
    color: #b0b0b0;
  
`

export const MediaNav = styled.div `
    display: none;
    @media screen and (max-width: 975px){
            display: flex;
            top: 0;
            left: 0;
            color: white;
            padding-left: 20px;
            padding: 20px;
            font-size: 25px;
            cursor: pointer;
            :hover{
                background-color: rgb(0, 0, 0, 0.65);
            }
            background-color: ${({ isOpen })=> (isOpen ? 'rgb(0, 0, 0, 0.65)': '#262626')};

    }

`
export const MediaMenuContainer = styled.div`
    display: none;
    @media screen and (max-width: 975px){
        display: block;
        overflow: hidden;
        width: 60px;
    }

`


export const PremiumContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 90px;
    :hover{
        background-color: black;
    }
    

`
export const SearchContainer = styled.div`
    height: 60px;
    width: 65px;
    display: flex;
    align-items: center;
    :hover{
        background-color: black;
    }
`
export const WatchListContainer = styled.div`
    height: 60px;
    width: 65px;
    display: flex;
    align-items: center;
    :hover{
        background-color: black;
    }
    @media screen and (max-width: 575px){
        display: none;
    }

`
export const MiniTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    @media screen and (max-width: 575px){
        display: none;
    }
`
export const CrownIcon = styled(GiLaurelCrown)` 
    color: #ffb100;
    font-size: 25px;
    padding-left: 9%;
    @media screen and (max-width: 575px){
        padding-left: 30%;
        
    }

`

export const Bookmark = styled(FaRegBookmark)`
    color: white;
    font-size: 20px;
    padding-left: 30%;
    
    
`
export const Search = styled(AiOutlineSearch)`
    color: white;
    font-size: 25px;
    padding-left: 26%;
    
    
`
export const ProfileContainer = styled.div`
    color: white;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 80px;
    :hover{
        background-color: black;
    }
    background-color: ${({ profileScreen })=> (profileScreen ? 'black': '#262626')};
    

`
export const Arrow = styled(IoMdArrowDropdown)`
    font-size: 20px;
    padding-top: 5px;
`
export const Profile = styled(CgProfile)`
    padding-left: 15%;
`
export const RightContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    overflow: hidden;
    width: 300px;
    @media screen and (max-width: 575px){
        width: 45%;
        
    }
    
`
export const LeftContainer = styled.div`
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: space-around;
        width: 220px;
        margin-left: 0;
    @media screen and (max-width: 975px){
        width: 280px;
        @media screen and (max-width: 575px){
            width: 30%;
        }
    }

`
export const MiddleContainer = styled.div`
    width: calc(100vw - 520px);
    @media screen and (max-width: 975px){
        width: calc(100vw - 580px);
        @media screen and (max-width: 575px){
            width: calc(100vw - 270px);
        }
    }
`
export const NavigationContainer = styled.div`
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 975px){
        display: none;
    }
`
export const BrowserContainer = styled.div`
    height: 60px;
    width: 90px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    :hover{
        background-color: black;
    }
    background-color: ${({ browse })=> (browse ? 'black': '#262626')};
`
export const MangaContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 75px;
    :hover{
        background-color: black;
    }
`
export const GamesContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 75px;
    :hover{
        background-color: black;
    }
`
export const NewsContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 75px;
    :hover{
        background-color: black;
    }
`
export const StoreContainer = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 75px;
    :hover{
        background-color: black;
    }
`