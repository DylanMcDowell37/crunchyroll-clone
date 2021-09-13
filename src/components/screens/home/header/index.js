import React  from 'react'
import { MiniText, Search, Bookmark, Right, CrownIcon, Text, MediaNav,  NavList, NavLogo, NavLink, Nav, HeaderContainer, Profile, Arrow, Premium, MiniTextContainer} from './styles'
import { CgProfile } from "react-icons/cg" 
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { SiCrunchyroll } from "react-icons/si"
import { IoMdArrowDropdown } from "react-icons/io"





export default function HeaderHome({toggle, isOpen}) {
    


    return (
        <>
        <HeaderContainer >
            <Nav > 
                <MediaNav isOpen = {isOpen} onClick = {toggle}>
                    <AiOutlineMenu/>
                </MediaNav>
                <NavLogo href = "#/">
                    <SiCrunchyroll/> 
                    <Text>
                        crunchyroll
                        <MiniText>CLONE</MiniText>
                    </Text>
                </NavLogo>
            </Nav>
            <Right>
                <Premium>
                    <CrownIcon/>
                    <MiniTextContainer>
                        <MiniText style = {{color: "#ffb100"}}>TRY FREE</MiniText>
                        <MiniText style = {{color: "white"}}>PREMIUM</MiniText>
                    </MiniTextContainer>
                    
                </Premium>
                   <Search/>
                   <Bookmark />
                   <Profile>
                        <CgProfile/>
                        <Arrow/>
                   </Profile>
            </Right>
             
        </HeaderContainer>
       
     </>
    )
}