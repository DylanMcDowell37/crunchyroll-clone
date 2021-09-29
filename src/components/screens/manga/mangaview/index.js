import React, {useState, useEffect} from 'react'
import { Poster, Container, MangaContainer, TitleContainer, FetchMangaContainer, FetchContainer, MangaInfo, MangaTitle, Serialization, MangaDropView, DropContainer, Cover, Info, Status, Age, Rating, Description } from './styled'
import axios from 'axios'

export default function MangaView({fetchUrl, title}) {
    const [mangaList, setMangaList] = useState([])
    const [drop, setDrop] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            let newArray = []
            for(let i = 0; i < 100; i+=20){
                const response = await axios.get(`${fetchUrl}${i}`)
                console.log(response)
                response.data.data.map((manga) =>{
                    newArray.push(manga.attributes)
                }) 
            }
           
            setMangaList(newArray)
            
        }
        fetchData()
    },[fetchUrl])

    const handdleClick = () =>{
        setDrop(!drop)
    }
    return (
        <Container>
            <MangaContainer>
                <TitleContainer>
                    {title}
                </TitleContainer>
                <FetchMangaContainer>
                    {mangaList.map((list) =>(
                        <FetchContainer>
                            <Poster src = {list.posterImage.small}/>
                            <MangaInfo>
                                <MangaTitle>{list.canonicalTitle}</MangaTitle>
                                <Serialization>{list.serialization}</Serialization>
                            </MangaInfo>
                        </FetchContainer>
                    ))}
                </FetchMangaContainer>
            </MangaContainer>
            {drop && <MangaDropView>
                        <DropContainer>
                            <Cover src = {''}/>
                            <Info>
                                <Status></Status>
                                <Age></Age>
                                <Rating></Rating>
                            </Info>
                            <Description></Description>
                        </DropContainer>
                    </MangaDropView>}
        </Container>
    )
}