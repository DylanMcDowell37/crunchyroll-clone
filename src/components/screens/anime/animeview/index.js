import React, {useState, useEffect} from 'react'
import { AnimeInfo, Exit, YouTubeContainer, Poster, Subbed, Diamond, AnimeContainer, AnimeTitle, Container, FectchedContainer, FetchedAnime, InfoContainer, Series, Sort, Title, TitleContainer, EpisodeOverview, EpisodeTitle, EpisodeInfo, EpisodeCount, Certification, Subtitle, RatingContainer, Rating, Genres } from './styled'
import axios from 'axios'
import YouTube from 'react-youtube'

export default function Anime({fetchUrl, title, sort, n}) {
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
        width: '100%',
        height: '100%',
        playerVars: {
           autoplay: 1, 
        }

    }
    useEffect(() =>{
        async function fetchAnime(){
            const response = await axios.get(`https://api.simkl.com/${animeUrl}?extended=full`)
            console.log(response.data)
            setTrailerUrl(response.data.trailers[0].youtube || '')
            setRating(response.data.ratings.mal || '')
            setOverview(response.data)
        }
        fetchAnime()
    }, [animeUrl])
    const handdleVid = (anime) =>{    
        setAnimeUrl(anime)
        
        
    }
    const handdleExit = () =>{
        setTrailerUrl('')
        setAnimeUrl('')
    }
    return (
        <Container>         
            <AnimeContainer>
                <TitleContainer>
                    <Title>Browse {title}</Title>
                    <Sort>{sort}</Sort>
                </TitleContainer> 
                <FetchedAnime>
                {animeList.map((anime)=>(
                        <FectchedContainer key = {anime.id} onClick = {() => handdleVid(anime.url)}>                            
                            <Poster  src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <AnimeTitle>{anime.title}</AnimeTitle>
                            <InfoContainer><Series>Series</Series><Subbed><Diamond/>Subtitled</Subbed></InfoContainer>
                            
                        </FectchedContainer>
                            
                    ))}
                   {animeUrl && <YouTubeContainer>
                        <Exit onClick = {() => handdleExit()}>X</Exit>
                        <YouTube videoId = {trailerUrl || 'V_MX0HiIgRQ'} opts = {opts} />
                            <AnimeInfo>
                                <EpisodeTitle>{overview.title || 'No Title'}</EpisodeTitle>
                                <EpisodeInfo>
                                    <EpisodeCount>{overview.total_episodes || "0"} Videos</EpisodeCount>
                                    <Certification>{overview.certification}</Certification>
                                    <Subtitle>Subtitled</Subtitle>
                                </EpisodeInfo>
                                <RatingContainer>
                                    <Rating>Average Rating: {rating.rating || 'N/A'}/10</Rating>
                                </RatingContainer>
                                <EpisodeOverview>{overview.overview}</EpisodeOverview>
                                
                                
                            </AnimeInfo>
                    </YouTubeContainer> }
                </FetchedAnime>
                  
            </AnimeContainer>
          
        </Container>
    )
}
