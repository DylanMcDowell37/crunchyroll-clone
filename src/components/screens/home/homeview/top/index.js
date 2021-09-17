import React, { useState, useEffect } from 'react'
import { MobilePoster, WebPoster, PosterContainer, TopContainer } from './styled'
import axios from 'axios'

export default function Top({fetchUrl}) {
    const [topList, setTopList] = useState([])
    const [scroll, setScroll] = useState(0)
   

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
                    {topList.map((top) =>(
                    <PosterContainer>
                        <MobilePoster src = {`https://simkl.in/posters/${top.poster}_ca.webp`} /> 
                        <WebPoster src = {`https://simkl.in/fanart/${top.fanart}_w.webp`} />
                    </PosterContainer>
                    ))}     
        </TopContainer>
    )
}
