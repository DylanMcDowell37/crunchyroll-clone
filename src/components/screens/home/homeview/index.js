import React from 'react'
import AnimeRow from './animerows'
import Top from './top'
import { requestAnime } from '../../../content/AnimeList'
import { Container } from "./styled"
import FeaturedAnime from './featuredAnime'
import Footer from './footer'

export default function HomeView() {
    //background-image: linear-gradient(to right, #00ccff, #003d4d);
    return (
        <Container>
            <Top fetchUrl = {requestAnime.fetchTopFeature}/>
            <AnimeRow title = {'Most Popular'} fetchUrl = {requestAnime.fetchPopular} color1 = {'#ff5c33'} color2 ={'#ffb100'}/>
            <AnimeRow title = {'Just Updated'} fetchUrl = {requestAnime.fetchUpdatedThisWeek} color1 = {'#00ccff'} color2 ={'#003d4d'}/>
            <FeaturedAnime fetchUrl = {`${requestAnime.fetchFeatured}action/all-types/all-networks/this-year`} n = {2} />
            <AnimeRow title = {'Slice Of Life'} fetchUrl = {requestAnime.fetchSliceOfLife} color1 = {'#ff5c33'} color2 ={'#ffb100'}/>
            <FeaturedAnime fetchUrl = {`${requestAnime.fetchFeatured}seinen/all-types/all-networks/this-week`} n = {1} />
            <AnimeRow title = {'Comedy'} fetchUrl = {requestAnime.fetchComedy} color1 = {'#00ccff'} color2 ={'#003d4d'} />
            <AnimeRow title = {'Back To School'} fetchUrl = {requestAnime.fectchBackToSchool} color1 = {'#00ccff'} color2 ={'#003d4d'}/>
            <FeaturedAnime fetchUrl = {`${requestAnime.fetchFeatured}magic/all-types/all-networks/2019`} n = {2} />
            <AnimeRow title = {'Magic'} fetchUrl = {requestAnime.fetchMagic} color1 = {'#ff5c33'} color2 ={'#ffb100'} />
            <Footer/>
        </Container>
    )
}
