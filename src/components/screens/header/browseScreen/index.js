import React from 'react'
import { LinkContainer, Genres, GenresContainer, Container, Title, Links, BrowseContainer } from './styles'
import {Link} from "react-router-dom"
export default function BrowseScreen({browse, toggleBrowse}) {
    return (
        <>
            <BrowseContainer browse = {browse} onClick = {toggleBrowse}>
                <LinkContainer>
                    <Links href = "/anime">Popular</Links>
                    <Links href = "/anime/new">New</Links> 
                    <Links href = "/anime/alphabetical">Alphabetical</Links>
                    
                </LinkContainer>
                <hr style = {{opacity: '20%', height: '100%'}}/>
                <GenresContainer>
                    <Title>GENRES</Title>
                    <Container> 
                        <Genres>
                            <Links href = "/anime/action">Action</Links>
                            <Links href = "/anime/adventure">Adventure</Links>
                            <Links href = "/anime/comedy">Comedy</Links>
                            <Links href = "/anime/drama">Drama</Links>
                            <Links href = "/anime/fantasy">Fantasy</Links>
                        </Genres>
                        <Genres>
                            <Links href = "/anime/magic">Magic</Links>
                            <Links href = "/anime/romance">Romance</Links>
                            <Links href = "/anime/scifi">Sci-Fi</Links>
                            <Links href = "/anime/seinen">Seinen</Links>
                            <Links href = "/anime/shoujo">Shoujo</Links>
                        </Genres>
                        <Genres>
                            <Links href = "/anime/shonen">Shonen</Links>
                            <Links href = "/anime/sliceoflife">Slice of life</Links>
                            <Links href = "/anime/sports">Sports</Links>
                            <Links href = "/anime/supernatural">Supernatural</Links>
                            <Links href = "/anime/thriller">Thriller</Links>
                        </Genres>
                    </Container>
                </GenresContainer>
            </BrowseContainer>
        </>
    )
}
