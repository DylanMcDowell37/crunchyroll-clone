import React from 'react'
import { Links, MediaNavContainer, Title} from './styles'



export default function MediaLinks({isOpen, toggle}) {
    return (
        <>
        <MediaNavContainer isOpen = {isOpen} onClick = {toggle}>
                <Title>BROWSE</Title>
                <Links href = "/anime">Popular</Links>
                <Links href = "/anime/new">New</Links>
                <Links href = "/anime/alpabetical">Alphabetical</Links>
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
