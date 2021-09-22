import React from 'react'
import AnimeRow from './animerows'
import Top from './top'
import { requestAnime } from '../../../content/AnimeList'
import { Container } from "./styled"
import FeaturedAnime from './featuredAnime'

export default function HomeView() {
    return (
        <Container>
            <Top fetchUrl = {requestAnime.fetchTopFeature}/>
            <AnimeRow title = {'Most Popular'} fetchUrl = {requestAnime.fetchPopular}/>
            <FeaturedAnime fetchUrl = {`${requestAnime.fetchFeatured}action/all-types/all-networks/this-year`} n = {2} />
        </Container>
    )
}
