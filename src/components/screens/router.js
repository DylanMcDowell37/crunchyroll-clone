import React, {useState} from 'react'
import Home from './home'
import styled from "styled-components"
import HeaderHome from './header'
import MediaLinks from './header/mediaScreen'
import BrowseScreen from './header/browseScreen'
import ProfileScreen from './header/profileScreen'
import Footer from './footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AnimeView from './anime'
import Manga from './manga'


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
    const [isOpenGenres, setIsOpenGenres] = useState(false)
    const toggleGenres = () =>{
        setIsOpenGenres(!isOpenGenres)
        setIsOpen(true)
        
      }
    
    return (
    <BrowserRouter>
        <Container isOpen = {isOpen}>
            <MediaLinks 
                isOpen = {isOpen} 
                toggle = {toggle}
                isOpenGenres = {isOpenGenres}
                toggleGenres = {toggleGenres}
                />
            <BrowseScreen 
                browse = {browse}
                toggleBrowse = {toggleBrowse}
            />            
            <ProfileScreen
                profileScreen = {profileScreen}
                toggleProfileScreen = {toggleProfileScreen}
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
            <Switch>
                <Route exact path = "/">
                    <Home />
                </Route>
                <Route path = "/anime">
                    <AnimeView />
                </Route>
                <Route path = '/manga'>
                    <Manga />
                </Route>
                
            </Switch>
            <Footer/>
        </Container>
    </BrowserRouter>
    )
}

export const Container = styled.div`
    overflow-x: hidden;
   ::-webkit-scrollbar{
       display: none;
   }
    
    
 
  
`