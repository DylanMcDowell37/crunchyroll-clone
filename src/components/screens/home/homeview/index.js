import React from 'react'
import AnimeRow from './animerows'
import Top from './top'
import { requestAnime } from '../../../content/AnimeList'
import { Container } from "./styled"

export default function HomeView() {
    return (
        <Container>
            <Top/>
            <AnimeRow fetchUrl = {requestAnime.fetchPopular}/>
        </Container>
    )
}
