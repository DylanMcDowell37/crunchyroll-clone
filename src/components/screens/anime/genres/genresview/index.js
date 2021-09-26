import React, { useState, useEffect, useRef } from 'react'
import { Link, RightArrow, RightContainer, LeftArrow, LeftContainer, Type, Subbed, Text, RowContainer, Container, TitleHeader, Title, Row, Poster, AnimeRowContainer, Diamond, TextContainer } from './styled'
import axios from 'axios'



export default function Genres({fetchUrl, title, link}) {
    //https://simkl.in/posters/72/7248108487b1ea37_ca.webp
    const [animeList, setAnimeList] = useState([])
    let ref = useRef();
    let animeRef = useRef([])
    const [arrowLeft, setArrowLeft] = useState(false)
    const [arrowRight, setArrowRight] = useState(true)
    const [mediaArrow, setMediaArrow] = useState(false)

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            setAnimeList(response.data)
            
        }
        fetchData() 

    }, [fetchUrl])
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
    return (
        <Container>

            <AnimeRowContainer >
                <TextContainer>
                <TitleHeader>{title}</TitleHeader>
                <Link href = {link}>View All</Link>
                </TextContainer>
                <RowContainer ref = {ref} >
                    <LeftContainer  arrowLeft = {arrowLeft} >
                        <LeftArrow onClick = {() => scrollR()} mediaArrow = {mediaArrow}/>
                    </LeftContainer>
                    {animeList.map((anime)=>(
                        <Row ref = {animeRef}>                            
                            <Poster key = {anime.id} src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <Title>{anime.title}</Title>
                            <Text><Type>Series</Type><Subbed><Diamond/>Subtitled</Subbed></Text>
                        </Row>
                            
                    ))}
                    <RightContainer arrowRight = {arrowRight} >
                        <RightArrow onClick = {() => scrollL()} mediaArrow = {mediaArrow} />
                    </RightContainer>
                </RowContainer>
            </AnimeRowContainer>

        </Container>
    )
}
