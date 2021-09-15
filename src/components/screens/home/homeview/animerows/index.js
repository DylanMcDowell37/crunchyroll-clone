import React, { useState, useEffect } from 'react'
import { Container, TitleHeader, Title, Row, Poster, AnimeRowContainer } from './styled'
import axios from 'axios'

export default function AnimeRow({fetchUrl, title}) {
    //https://simkl.in/posters/72/7248108487b1ea37_ca.webp
    const [animeList, setAnimeList] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            setAnimeList(response.data)
            
        }
        fetchData() 

    }, [fetchUrl])
    console.log(animeList)
    return (
        <Container>
            <TitleHeader>{title}</TitleHeader>
            <AnimeRowContainer>
                
                {animeList.map((anime)=>(
                    <Row>
                            
                        <Poster key = {anime.id} src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                        <Title>{anime.title}</Title>
                    </Row>
                        
                ))}
                
            </AnimeRowContainer>
        </Container>
    )
}
