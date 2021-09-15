import React, { useState, useEffect } from 'react'
import { Poster, PosterContainer, TopContainer } from './styled'
import axios from 'axios'

export default function Top({fetchUrl}) {
    const [topList, setTopList] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            setTopList(response.data)
            
        }
        fetchData() 

    }, [fetchUrl])
    return (
        <TopContainer>
            {topList.map((top)=>(
                <PosterContainer>
                    
                    <Poster src = {`https://simkl.in/posters/${top.poster}_w.webp`} /> 
                </PosterContainer>      
            ))}
            
        </TopContainer>
    )
}
