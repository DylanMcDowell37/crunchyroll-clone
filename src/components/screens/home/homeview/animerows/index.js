import React, { useState, useEffect } from 'react'
import { Type, Subbed, Text, RowContainer, Line, Container, TitleHeader, Title, Row, Poster, AnimeRowContainer, Diamond } from './styled'
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
   
            <AnimeRowContainer>
                <TitleHeader>{title}</TitleHeader>
                <Line/>
                <RowContainer>
                    {animeList.map((anime)=>(
                        <Row>                            
                            <Poster key = {anime.id} src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <Title>{anime.title}</Title>
                            <Text><Type>Series</Type><Subbed><Diamond/>Subtitled</Subbed></Text>
                        </Row>
                            
                    ))}
                </RowContainer>
            </AnimeRowContainer>
        </Container>
    )
}
