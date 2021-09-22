import React, { useState, useEffect, useRef} from 'react'
import { LeftArrow, RightArrow, LeftContainer, RightContainer, Container, MobilePoster, WebPoster, PosterContainer, TopContainer} from './styled'
import axios from 'axios'


export default function Top({fetchUrl}) {
    let ref = useRef();
    const [topList, setTopList] = useState([])
    const [arrowLeft, setArrowLeft] = useState(false)
    const [arrowRight, setArrowRight] = useState(true)
    const [background, setBackground] = useState(true)


    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(fetchUrl)
            console.log(response)
            setTopList(response.data)
            
        }
        fetchData() 


    }, [fetchUrl])

    // ref.current.scrollWidth
    const scroll = (scrollPos) => {

        ref.current.scrollLeft += scrollPos
         
    };
    const scrollL = () =>{
        if(ref.current.scrollLeft < (ref.current.scrollWidth - (window.innerWidth * 2))){
           scroll(window.innerWidth)
           setArrowLeft(true)
           setArrowRight(true) 
           setBackground(!background)
        }
        else{
            scroll(window.innerWidth)
            setArrowRight(false)
            setBackground(!background)
        }
        

    }
    const scrollR = () =>{
        if(ref.current.scrollLeft > window.innerWidth) {
            scroll(-window.innerWidth)
            setBackground(!background)
        }
        else{
            scroll(-window.innerWidth)
            setBackground(!background)
        }
        

    }
    const changeScreen = () => {
        return ref.current.scrollLeft
    }
    const autoScroll = () => {
        if(ref.current.scrollLeft < (ref.current.scrollWidth - window.innerWidth)){
            scroll(window.innerWidth)
            setBackground(!background)
        }
        else{
            scroll(-ref.current.scollWidth)
            
        }

    }
    const changeArrow = () => {
        if(ref.current.scrollLeft > 0){
            setArrowLeft(true)
        }
        else{
            setArrowLeft(false)
            setBackground(true)
        }
        if(ref.current.scrollLeft < (ref.current.scrollWidth - (window.innerWidth + 100 ))) {
            setArrowRight(true)
        }
        else{
            setArrowRight(false)
        }
    }
    useEffect(() => {
        // let change = changeScreen()
        var timer = setInterval(()=> autoScroll(), 10000)
        return function cleanup() {
            clearInterval(timer)
        }
        
    }, [changeScreen]);
    useEffect(() => {
        ref.current.addEventListener('scroll', changeArrow)
    }, [])
    console.log(arrowLeft)
    console.log(arrowRight)
    console.log(background)
    return (
        <>

        <TopContainer background = {background} >
            
                <Container ref = {ref} >
                    <LeftContainer  arrowLeft = {arrowLeft}>
                        <LeftArrow onClick = {() => scrollR()}/>
                    </LeftContainer>
                        {topList.map((top, index) =>(
                        <PosterContainer  key = {index} >
                            <MobilePoster src = {`https://simkl.in/posters/${top.poster}_ca.webp`} /> 
                            <WebPoster src = {`https://simkl.in/posters/${top.poster}_w.webp`}  />
                        </PosterContainer>
                        
                        ))}
                    <RightContainer arrowRight = {arrowRight}>
                        <RightArrow onClick = {() => scrollL()} />
                    </RightContainer>                       
                </Container> 


        </TopContainer >            

        </>
    )
}
