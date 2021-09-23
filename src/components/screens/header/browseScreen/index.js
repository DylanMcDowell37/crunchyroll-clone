import React from 'react'
import { LinkContainer, Genres, GenresContainer, Container, Title, Links, BrowseContainer } from './styles'

export default function BrowseScreen({browse, toggleBrowse}) {
    return (
        <>
            <BrowseContainer browse = {browse} onClick = {toggleBrowse}>
                <LinkContainer>
                    <Links>Popular</Links>
                    <Links>New</Links>
                    <Links>Alphabetical</Links>
                    <Links>Genres</Links>
                </LinkContainer>
                <hr style = {{opacity: '20%', height: '100%'}}/>
                <GenresContainer>
                    <Title>GENRES</Title>
                    <Container> 
                        <Genres>
                            <Links>Action</Links>
                            <Links>Adventure</Links>
                            <Links>Comedy</Links>
                            <Links>Drama</Links>
                            <Links>Fantasy</Links>
                        </Genres>
                        <Genres>
                            <Links>Music</Links>
                            <Links>Romance</Links>
                            <Links>Sci-Fi</Links>
                            <Links>Seinen</Links>
                            <Links>Shojo</Links>
                        </Genres>
                        <Genres>
                            <Links>Shonen</Links>
                            <Links>Slice of life</Links>
                            <Links>Sports</Links>
                            <Links>Supernatural</Links>
                            <Links>Thriller</Links>
                        </Genres>
                    </Container>
                </GenresContainer>
            </BrowseContainer>
        </>
    )
}
