import React, {useState, useEffect} from 'react'
import {AnimeInfo, EpisodeCount, EpisodeInfo, EpisodeOverview, EpisodeTitle, Certification, Subtitle, Rating, RatingContainer, Exit, YouTubeContainer, Poster, Subbed, Diamond, AnimeContainer, AnimeTitle, Container, FectchedContainer, FetchedAnime, InfoContainer, Series, Title, TitleContainer } from './styled'
import axios from 'axios'
import YouTube from 'react-youtube'

export default function GenresCategory({fetchUrl, title, type, n}) {
    const [animeList, setAnimeList] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [animeUrl, setAnimeUrl] = useState('')
    const [overview, setOverview] = useState('')
    const [rating, setRating] = useState('')
  

    useEffect(() => {
        async function fetchData(){
            let newArray = []
            for(let i = 1; i < n; i++){               
                const response = await axios.get(`${fetchUrl}${i}`)
                console.log(response)
                response.data.map((anime) =>{
                    newArray.push(anime)
                })
                
            }
            setAnimeList(newArray)
            console.log(animeList)
            
            
        }
        fetchData() 

    }, [fetchUrl])
    console.log(animeList)
    const opts = {
        playerVars: {
            autoplay: 1,
        }

    }
    useEffect(() =>{
        async function fetchAnime(){
            const response = await axios.get(`https://api.simkl.com/${animeUrl}?extended=full`)
            console.log(response.data)
            setTrailerUrl(response.data.trailers[0].youtube)
            setRating(response.data.ratings.mal)
            setOverview(response.data)
        }
        fetchAnime()
    }, [animeUrl])
   
    const handdleVid = (anime) =>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        
            setAnimeUrl(anime || '')
        
        
    }
     

    return (
        <Container >         
            <AnimeContainer >
                <TitleContainer>
                    <Title>{type}/{title}</Title>
                </TitleContainer> 
                <FetchedAnime>
                {animeList.map((anime)=>(
                        <FectchedContainer key = {anime.id} onClick = {() => handdleVid(anime.url)}>                            
                            <Poster  src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <AnimeTitle>{anime.title}</AnimeTitle>
                            <InfoContainer><Series>Series</Series><Subbed><Diamond/>Subtitled</Subbed></InfoContainer>
                        </FectchedContainer>
                            
                    ))}
                </FetchedAnime>
                
                {trailerUrl && <YouTubeContainer>
                        <Exit onClick = {() => setTrailerUrl('')}>X</Exit>
                        <YouTube videoId = {trailerUrl} opts = {opts} />
                            <AnimeInfo>
                                <EpisodeTitle>{overview.title}</EpisodeTitle>
                                <EpisodeInfo>
                                    <EpisodeCount>{overview.total_episodes} Videos</EpisodeCount>
                                    <Certification>{overview.certification}</Certification>
                                    <Subtitle>Subtitled</Subtitle>
                                </EpisodeInfo>
                                <RatingContainer>
                                    <Rating>Average Rating: {rating.rating}/10</Rating>
                                </RatingContainer>
                                <EpisodeOverview>{overview.overview}</EpisodeOverview>
                                
                                
                            </AnimeInfo>
                    </YouTubeContainer> }
            </AnimeContainer>
        </Container>
    )
}
