import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai"


export const MediaNavContainer = styled.div`
    position: fixed;
    z-index: 2;
    width: 40%;
    height: calc(100% - 60px);
    background-color: #0d0d0d;
    display: grid;
    align-items: center;
    margin-top: 60px;
    left: 0;
    transition: 0.1s ease-in-out;
    opacity: ${({ isOpen })=> (isOpen ? '100%': '0')};
    top: ${({ isOpen })=> (isOpen ? '0' : '-100%')};
    @media screen and (max-width: 768px){
        width: 100%;
    }


`
export const MediaNavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


`
export const MediaNavLink = styled.a`
    text-decoration: none;
    color: white;
    padding: 50px;
    :hover{
        font-size: 20px;
        color: #b0b0b0;
        transition: 0.3s ease-in-out;
    }

`

export const Icon = styled.div`
    position: absolute;
    top: 16px;
    background: transparent;
    font-size: 20px;
    cursor: pointer;
    outline: none;
`

export const MediaLinkIcons = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`
export const MediaIcon = styled.a `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration:none;
    color: white;
        :hover{
            font-size: 25px;
            transition: .3s ease-in-out;
        }
    

`
export const Text = styled.div`
    font-size: 12px;
    padding: 5px;
 

`
 
