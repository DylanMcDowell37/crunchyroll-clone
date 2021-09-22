import React, {useState, useEffect} from 'react'
import { FeaturedContainer, MobilePoster, InfoContainer, Featured, Poster, Diamond, Subbed, Type, Text, Title, Container } from './styled'
import axios from 'axios'

export default function FeaturedAnime({fetchUrl, n}) {
    const [featuredList, setFeaturedList] = useState([])
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
                </InfoContainer>
            </Featured>
            ))}
            </FeaturedContainer>
        </Container>

    )
}
