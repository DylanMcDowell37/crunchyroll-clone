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
