import React, { useState, useEffect, useRef } from 'react'
import { RightArrow, RightContainer, LeftArrow, LeftContainer, Type, Subbed, Text, RowContainer, Line, Container, TitleHeader, Title, Row, Poster, AnimeRowContainer, Diamond } from './styled'
import axios from 'axios'


export default function AnimeRow({fetchUrl, title}) {
    //https://simkl.in/posters/72/7248108487b1ea37_ca.webp
    const [animeList, setAnimeList] = useState([])
    let ref = useRef();
    let animeRef = useRef([])
    const [arrowLeft, setArrowLeft] = useState(false)
    const [arrowRight, setArrowRight] = useState(true)
    const [background, setBackground] = useState(true)

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
        if(ref.current.scrollLeft < (ref.current.scrollWidth - window.innerWidth )){
           scroll(animeRef.current.scrollWidth)
           setArrowLeft(true)
           setArrowRight(true) 
           setBackground(!background)
        }
        else{
            scroll(animeRef.current.scrollWidth)
            setArrowRight(false)
            setBackground(!background)
        }
        

    }
    const scrollR = () =>{
        if(ref.current.scrollLeft > window.innerWidth) {
            scroll(-animeRef.current.scrollWidth)
            setArrowLeft(true)
            setArrowRight(true)
            setBackground(!background)
        }
        else{
            scroll(-animeRef.current.scrollWidth)
            setArrowLeft(false)
            setBackground(!background)
        }
        

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


    useEffect(() => {
        ref.current.addEventListener('scroll', changeArrow)
    }, [])
    return (
        <Container>
            <LeftContainer  arrowLeft = {arrowLeft}>
                <LeftArrow onClick = {() => scrollR()}/>
            </LeftContainer>
            <AnimeRowContainer >
                <TitleHeader>{title}</TitleHeader>
                <Line/>
                <RowContainer ref = {ref} >
                    {animeList.map((anime)=>(
                        <Row ref = {animeRef}>                            
                            <Poster key = {anime.id} src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <Title>{anime.title}</Title>
                            <Text><Type>Series</Type><Subbed><Diamond/>Subtitled</Subbed></Text>
                        </Row>
                            
                    ))}
                </RowContainer>
            </AnimeRowContainer>
            <RightContainer arrowRight = {arrowRight}>
                <RightArrow onClick = {() => scrollL()} />
            </RightContainer>
        </Container>
    )
}
