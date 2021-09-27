import React  from 'react'
import { Profile, MiddleContainer, WatchListContainer, SearchContainer, StoreContainer, NewsContainer, GamesContainer, MangaContainer, BrowserContainer, NavigationContainer, LogoContainer, MediaMenuContainer, LeftContainer, MiniText, Search, Bookmark, RightContainer, CrownIcon, Text, MediaNav,  NavLogo, HeaderContainer, ProfileContainer, Arrow, PremiumContainer, MiniTextContainer, Drop} from './styles' 
import {AiOutlineMenu} from "react-icons/ai"
import { SiCrunchyroll } from "react-icons/si"
import PremiumDrop from './premiumDrop'






export default function HeaderHome({toggle, isOpen, browse, toggleBrowse, profileScreen, toggleProfileScreen, premium, togglePremium}) {
    


    return (
        <>
        <HeaderContainer >

            <LeftContainer>

                <MediaMenuContainer>
                    <MediaNav isOpen = {isOpen} onClick = {toggle}>
                        <AiOutlineMenu/>
                    </MediaNav>
                </MediaMenuContainer> 

                <LogoContainer>   
                    <NavLogo href = "/">
                        <SiCrunchyroll/> 
                        <Text>
                            crunchyroll
                            <MiniText>CLONE</MiniText>
                        </Text>
                    </NavLogo>
                </LogoContainer>

            </LeftContainer>

            <MiddleContainer>
                <NavigationContainer>

                    <BrowserContainer browse = {browse} onClick = {toggleBrowse}>
                        Browse
                        <Arrow/>
                    </BrowserContainer>

                    <MangaContainer>
                        Manga
                    </MangaContainer>
                        
                    <GamesContainer>
                        Games
                    </GamesContainer>

                    <NewsContainer>
                        News
                    </NewsContainer>

                    <StoreContainer>
                        Store
                    </StoreContainer>

                </NavigationContainer>
            </MiddleContainer>

            <RightContainer>
                <PremiumContainer onMouseEnter = {togglePremium} onMouseLeave = {togglePremium}>
                    
                    <CrownIcon/>
                    <MiniTextContainer>
                        <MiniText style = {{color: "#ffb100"}}>TRY FREE</MiniText>
                        <MiniText style = {{color: "white"}}>PREMIUM</MiniText>
                    </MiniTextContainer> 
                    <PremiumDrop 
                        togglePremium = {togglePremium} 
                         premium = {premium}
                    />                        
                </PremiumContainer>  
                <SearchContainer>
                    <Search/>
                </SearchContainer>

                <WatchListContainer>
                    <Bookmark />
                </WatchListContainer>   
                   
                <ProfileContainer profileScreen = {profileScreen} onClick = {toggleProfileScreen}>
                    <Profile/>
                    <Arrow/>
                </ProfileContainer>

            </RightContainer>
             
        </HeaderContainer>
       
     </>
    )
}