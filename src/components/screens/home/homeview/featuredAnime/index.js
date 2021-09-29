import React, {useState, useEffect} from 'react'
import { AnimeInfo, EpisodeCount, EpisodeInfo, EpisodeOverview, EpisodeTitle, Certification, Subtitle, Rating, RatingContainer, YouTubeContainer, FeaturedContainer, MobilePoster, InfoContainer, Featured, Poster, Diamond, Subbed, Type, Text, Title, Container, PlayButton, AddToList, Exit } from './styled'
import axios from 'axios'
import {FiPlay} from 'react-icons/fi'
import {FaRegBookmark} from 'react-icons/fa'
import YouTube from 'react-youtube'

export default function FeaturedAnime({fetchUrl, n}) {
    const [featuredList, setFeaturedList] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [animeUrl, setAnimeUrl] = useState('')
    const [overview, setOverview] = useState('')
    const [rating, setRating] = useState('')
  

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            let newArray = []
            for(let i = 0; i < n; i++){
                newArray.push(response.data[i])
            }
            setFeaturedList(newArray)                        
        }


        fetchData()
    }, [fetchUrl])
    

    console.log(featuredList)
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
            <FeaturedContainer>
            {featuredList.map((anime)=>(
            <Featured >                            
                <Poster key = {anime.id} src = {`https://simkl.in/fanart/${anime.fanart}_w.webp`} alt = {anime.title}/>
                <MobilePoster src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} /> 
                <InfoContainer>
                    <Title>{anime.title}</Title>
                    <Text><Type>Series</Type><Subbed><Diamond/>Subtitled</Subbed></Text>
                    <Text><PlayButton onClick = {() => handdleVid(anime.url)}><FiPlay/>START WATCHING S1 E1</PlayButton><AddToList><FaRegBookmark style = {{paddingRight: '2px'}}/>ADD TO WATCHLIST</AddToList></Text>
                </InfoContainer>
            </Featured>
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
            </FeaturedContainer>
        </Container>

    )
}
