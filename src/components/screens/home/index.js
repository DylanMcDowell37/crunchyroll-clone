import React, {useState} from 'react'
import HeaderHome from './header'
import MediaLinks from './header/mediaScreen'
import BrowseScreen from './header/browseScreen'
import PremiumDrop from './header/premiumDrop'
import ProfileScreen from './header/profileScreen'
import HomeView from './homeview'
import { Container } from './styled'

export default function Home() {
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
            <HomeView/>
        </Container> 
    )
}