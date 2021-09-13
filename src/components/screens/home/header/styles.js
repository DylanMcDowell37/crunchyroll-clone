import styled from "styled-components"
import { GiLaurelCrown } from "react-icons/gi"
import { FaRegBookmark } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"


export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #262626;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 5; 
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    
    
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    
    
`
export const NavLink = styled.a`
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    padding: 5px;
    :hover{
        text-decoration: underline 3px #b0b0b0;
        font-size: 18px;
        color: white;
        transition: .3s ease-in-out;
    }
    @media screen and (max-width: 768px){
        display: none;
    }

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
    font-family: 'Black Ops One', cursive;

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
export const NavList = styled.div`
    padding: 25px 25px 20px;

      
`
export const NavIcons = styled.div`
    display:flex;
    flex-direction: row;
    font-size: 15px;
    align-items: center;
    padding-left:200px;
    justify-content: space-between;
    
    @media screen and (max-width: 768px){
        display: none;
    }

`
export const Icon = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    color: white;
    padding: 5px;
    :hover{
        font-size: 20px;
        transition: .3s ease-in-out;
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
            z-index: 2;
            padding-left: 20px;
            padding: 20px;
            font-size: 25px;
            cursor: pointer;
            :hover{
                background-color: black;
            }
            background-color: ${({ isOpen })=> (isOpen ? 'black': '#262626')};

    }


`
export const Premium = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    

`
export const MiniTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`
export const CrownIcon = styled(GiLaurelCrown)` 
    color: #ffb100;
    font-size: 25px;

`

export const Bookmark = styled(FaRegBookmark)`
    color: white;
    font-size: 20px;
    padding: 20px;
    
`
export const Search = styled(AiOutlineSearch)`
    color: white;
    font-size: 25px;
    padding: 20px;
    
`
export const Profile = styled.div`
    color: white;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

`
export const Arrow = styled(IoMdArrowDropdown)`
    font-size: 15px;
`
export const Right = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    font-size: 25px;
    overflow: hidden;
    
`