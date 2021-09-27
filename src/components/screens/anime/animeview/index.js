import React, {useState, useEffect} from 'react'
import { YouTubeContainer, Poster, Subbed, Diamond, AnimeContainer, AnimeTitle, Container, FectchedContainer, FetchedAnime, InfoContainer, Series, Sort, Title, TitleContainer } from './styled'
import axios from 'axios'
import YouTube from 'react-youtube'

export default function Anime({fetchUrl, title, sort, n}) {
    const [animeList, setAnimeList] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')
    const [animeUrl, setAnimeUrl] = useState('')

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
        width: '450px',
        height: '300px',
        playerVars: {
            
        }

    }
    useEffect(() =>{
        async function fetchAnime(){
            const response = await axios.get(`https://api.simkl.com/${animeUrl}?extended=full`)
            console.log(response.data)
            setTrailerUrl(response.data.trailers[0].youtube)
        }
        fetchAnime()
    }, [animeUrl])
    const handdleVid = (anime) =>{
        if(trailerUrl){
            setTrailerUrl('')
        }
        
            setAnimeUrl(anime)
        
        
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
                    {trailerUrl && <YouTubeContainer>
                        <YouTube videoId = {trailerUrl} opts = {opts} />
                    </YouTubeContainer> }
                </FetchedAnime>
                  
            </AnimeContainer>
          
        </Container>
    )
}
