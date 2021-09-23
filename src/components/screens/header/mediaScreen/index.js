import React from 'react'
import { Links, MediaNavContainer, Title} from './styles'



export default function MediaLinks({isOpen, toggle}) {
    return (
        <>
        <MediaNavContainer isOpen = {isOpen} onClick = {toggle}>
                <Title>BROWSE</Title>
                <Links>Popular</Links>
                <Links>New</Links>
                <Links>Alphabetical</Links>
                <Links>Genres</Links>
                <hr style = {{opacity: '20%', marginTop: '10px'}}/>
                <Links>Manga</Links>
                <Links>Games</Links>
                <Links>Store</Links>
                <Links>News</Links>
        </MediaNavContainer>
        </>
    )
}
