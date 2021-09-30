import React, {useState, useEffect} from 'react'
import { Title, Text, Poster, Container, MangaContainer, TitleContainer, FetchMangaContainer, FetchContainer, MangaInfo, MangaTitle, Serialization, MangaDropView, DropContainer, Cover, Info, Status, Age, Rating, Description, Exit, TypeContainer, Type, Diamond, TextContainer } from './styled'
import axios from 'axios'



export default function MangaView({fetchUrl, title}) {
    const [mangaList, setMangaList] = useState([])
    const [drop, setDrop] = useState(false)
    const [originalList, setOriginalList] = useState([])
    const [popularityList, setPopularityList] = useState([])
    const [currentManga, setCurrentManga] = useState([])
    const [finishedManga, setFinishedManga] = useState([])
    const [newRelease, setNewRelease] = useState([])
    const [mangaInfo, setMangaInfo] = useState([])
    const [changeScreen, setChangeScreen] = useState(true)

    useEffect(()=>{
        async function fetchData(){
            let newArray = []
            for(let i = 0; i < 200; i+=20){
                const response = await axios.get(`${fetchUrl}${i}`)
                console.log(response)
                response.data.data.map((manga) =>{
                    if(manga.attributes.popularityRank < 1000){
                         newArray.push(manga.attributes)
                    }
                   
                }) 
                setOriginalList(newArray)      
        }}
       fetchData()
       setMangaList(originalList)
       let popular = [...originalList]
       setPopularityList(popular.sort((a, b) => a.popularityRank - b.popularityRank))
       let newR = [...originalList]
       setNewRelease(newR.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)))
       const getStatus = () =>{
           let state = [...originalList]
           let current = []
           let finished = []
           for(let i = 0; i < state.length; i++){
               if(state[i].status === 'current'){
                    current.push(state[i])
               }
               else{
                   finished.push(state[i])
               }
           }
           setCurrentManga(current)
           setFinishedManga(finished)
       }
       getStatus()
    }, [fetchUrl]) 

    // console.log(originalList)
    // console.log(popularityList)
    console.log(mangaList)

    // console.log(newRelease)

    // console.log(currentManga)
    // console.log(finishedManga)

    const handdlePopular = () =>{
        setMangaList(popularityList)
           

    }

    const handdleCurrent = () =>{
       setMangaList(currentManga)
         
        
    }
    const handdleFinished = () =>{
        setMangaList(finishedManga)

    }

    const handdleRelease = () =>{
        setMangaList(newRelease)

    }
    const handdleReset = () =>{
        setMangaList(originalList)
    }
    const handdleDrop = (list) =>{
        setMangaInfo(list)
        setDrop(!drop)
    }
    const handdleExit = () =>{
        setMangaInfo([])
        setDrop(!drop)
    }
    return (
        <Container>
            {mangaList &&
            <MangaContainer>
                <TitleContainer >
                    <Title onClick = {() => handdleReset()}>{title}</Title>
                    <TextContainer>
                        <Text onClick = {() => handdlePopular()}>Popular</Text>
                        <Text onClick = {() => handdleCurrent()}>On Going</Text>
                        <Text onClick = {() => handdleFinished()}>Finished</Text>
                        <Text onClick = {() => handdleRelease()}>Release Date</Text>
                    </TextContainer>
                </TitleContainer>
                <FetchMangaContainer>
                    {mangaList.map((list) =>(
                        <FetchContainer onClick = {() => handdleDrop(list)}>
                            <Poster src = {list.posterImage.small}/>
                            <MangaInfo>
                                <MangaTitle>{list.canonicalTitle}</MangaTitle>
                                <TypeContainer>
                                    <Type>{list.subtype}</Type>
                                    <Serialization><Diamond/>{list.serialization}</Serialization>
                                </TypeContainer>
                            </MangaInfo>
                        </FetchContainer>
                    ))}
                </FetchMangaContainer>
            </MangaContainer> }
            {drop && <MangaDropView>
                        <Exit onClick = {() => handdleExit()}>X</Exit>
                        <DropContainer>
                            <Cover src = {mangaInfo.coverImage.small || mangaInfo.posterImage.original}/>
                            <MangaTitle>{mangaInfo.canonicalTitle}</MangaTitle>
                            <Info>
                                <Status>Manga Status: {mangaInfo.status}</Status>
                                <Age>Rated: {mangaInfo.ageRating}</Age>
                                <Rating>Average Rating: {mangaInfo.averageRating}/100</Rating>
                            </Info>
                            <Description>{mangaInfo.description}</Description>
                        </DropContainer>
                    </MangaDropView>}
        </Container>
    )
}