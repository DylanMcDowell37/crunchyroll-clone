import React, {useState, useEffect} from 'react'
import { Poster, Subbed, Diamond, AnimeContainer, AnimeTitle, Container, FectchedContainer, FetchedAnime, InfoContainer, Series, Title, TitleContainer } from './styled'
import axios from 'axios'

export default function GenresCategory({fetchUrl, title, type, n}) {
    const [animeList, setAnimeList] = useState([])

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
    return (
        <Container>         
            <AnimeContainer>
                <TitleContainer>
                    <Title>{type}/{title}</Title>
                </TitleContainer> 
                <FetchedAnime>
                {animeList.map((anime)=>(
                        <FectchedContainer key = {anime.id}>                            
                            <Poster  src = {`https://simkl.in/posters/${anime.poster}_ca.webp`} alt = {anime.title}/> 
                            <AnimeTitle>{anime.title}</AnimeTitle>
                            <InfoContainer><Series>Series</Series><Subbed><Diamond/>Subtitled</Subbed></InfoContainer>
                        </FectchedContainer>
                            
                    ))}
                </FetchedAnime>
            </AnimeContainer>
        </Container>
    )
}
