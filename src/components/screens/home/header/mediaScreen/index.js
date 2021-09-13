import React from 'react'
import { MediaNavLink, MediaNavContainer, MediaNavList} from './styles'



export default function MediaLinks({isOpen, toggle}) {
    return (
        <>
        <MediaNavContainer isOpen = {isOpen} onClick = {toggle}>
            <MediaNavList> 
                <MediaNavLink > </MediaNavLink>
                <MediaNavLink > </MediaNavLink>
                <MediaNavLink > </MediaNavLink>   
            </MediaNavList>
        </MediaNavContainer>
        </>
    )
}
