import React, { useState, useEffect, useRef } from 'react'
import {AnimeInfo, EpisodeCount, EpisodeInfo, EpisodeOverview, EpisodeTitle, Certification, Subtitle, Rating, RatingContainer, YouTubeContainer, Exit, TextContainer, Link, RightArrow, RightContainer, LeftArrow, LeftContainer, Type, Subbed, Text, RowContainer, Line, Container, TitleHeader, Title, Row, Poster, AnimeRowContainer, Diamond } from './styled'
import axios from 'axios'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


export default function AnimeRow({fetchUrl, title, color1, color2, link}) {
    //https://simkl.in/posters/72/7248108487b1ea37_ca.webp
    const [animeList, setAnimeList] = useState([])
    let ref = useRef();
    let animeRef = useRef([])
    const [arrowLeft, setArrowLeft] = useState(false)
    const [arrowRight, setArrowRight] = useState(true)
    const [mediaArrow, setMediaArrow] = useState(false)
    const [trailerUrl, setTrailerUrl] = useState('')
    const [animeUrl, setAnimeUrl] = useState('')
    const [overview, setOverview] = useState('')
    const [rating, setRating] = useState('')
  
    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            setAnimeList(response.data)
            
        }
        fetchData() 

    }, [fetchUrl])
    const opts = {
        playerVars: {
            autoplay: 1,
        }
        

    }
    console.log(animeList)
    const scroll = (scrollPos) => {
        ref.current.scrollLeft += scrollPos         
    };
    const scrollL = () =>{
           scroll(animeRef.current.scrollWidth)
    }
    const scrollR = () =>{
            scroll(-animeRef.current.scrollWidth)
    }
    const changeArrow = () => {
        if(ref.current.scrollLeft >= 10){
            setArrowLeft(true)
        }
        else{
            setArrowLeft(false)
        }
        if(ref.current.scrollLeft < (ref.current.scrollWidth - window.innerWidth  )) {
            setArrowRight(true)
        }
        else{
            setArrowRight(false)
        }
    }
    const mouseOverArrowMedia = () =>{
        setMediaArrow(true)
    }
    const mouseOutArrowMedia = () =>{
        setMediaArrow(false)
    }
    useEffect(() => {
        ref.current.addEventListener('scroll', changeArrow)
    }, [])
    useEffect(() =>{
        ref.current.addEventListener('mouseover', mouseOverArrowMedia)
    })
    useEffect(() =>{
        ref.current.addEventListener('mouseout', mouseOutArrowMedia)
    })
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
        
            setAnimeUrl(anime)
        
        
    }
    console.log(trailerUrl)
    return (
        <Container>

            <AnimeRowContainer >
                <TextContainer>
                    <TitleHeader>{title}</TitleHeader>
                    <Link href = {link}>View All</Link>
                </TextContainer>
                <Line style = {{backgroundImage: `linear-gradient(to right, ${color1}, ${color2})`}}/>
                <RowContainer ref = {ref} >
                    <LeftContainer  arrowLeft = {arrowLeft} >
                        <LeftArrow onClick = {() => scrollR()} mediaArrow = {mediaArrow}/>
                    </LeftContainer>
                    {animeList.map((anime)=>(
                        <Row ref = {animeRef} onClick = {() => handdleVid(anime.url)}>                            
                            <Poster  key = {anime.id} src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <Title>{anime.title}</Title>
                            <Text><Type>Series</Type><Subbed><Diamond/>Subtitled</Subbed></Text>
                        </Row>
                            
                    ))}
                    <RightContainer arrowRight = {arrowRight} >
                        <RightArrow onClick = {() => scrollL()} mediaArrow = {mediaArrow} />
                    </RightContainer>
                </RowContainer>
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
            </AnimeRowContainer>

        </Container>
    )
}
