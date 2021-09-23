import React, {useState} from 'react'
import Home from './home'
import styled from "styled-components"
import HeaderHome from './header'
import MediaLinks from './header/mediaScreen'
import BrowseScreen from './header/browseScreen'
import PremiumDrop from './header/premiumDrop'
import ProfileScreen from './header/profileScreen'


export default function Router() {
    const [isOpen, setIsOpen] = useState(false)
    const [browse, setBrowse] = useState(false)
    const [premium, setPremium] = useState(false)
    const [profileScreen, setProfileScreen] = useState(false)
    const toggle = () =>{
      setIsOpen(!isOpen)
      setProfileScreen(false)
    }
    const toggleBrowse = () =>{
        setBrowse(!browse)
        setProfileScreen(false)
    }
    const togglePremium = () =>{
        setPremium(!premium)
    }
    const toggleProfileScreen = () =>{
        setProfileScreen(!profileScreen)
        setIsOpen(false)
    }

    return (
        <Container>
            <MediaLinks 
                isOpen = {isOpen} 
                toggle = {toggle}
                />
            <BrowseScreen 
                browse = {browse}
                toggleBrowse = {toggleBrowse}
            />            
            <ProfileScreen
                profileScreen = {profileScreen}
                toggleProfileScreen = {toggleProfileScreen}
            />
            <PremiumDrop
                premium = {premium}
                togglePremium = {togglePremium}
            />

            <HeaderHome 
                isOpen = {isOpen} 
                toggle = {toggle}
                browse = {browse}
                premium = {premium}
                profileScreen = {profileScreen}
                toggleBrowse = {toggleBrowse}
                togglePremium = {togglePremium}
                toggleProfileScreen = {toggleProfileScreen}
                />
            <Home/>
        </Container>
    )
}

export const Container = styled.div`
    ::-webkit-scrollbar{
      display: none;
    } 
`