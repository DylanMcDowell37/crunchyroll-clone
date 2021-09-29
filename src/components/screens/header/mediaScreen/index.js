import React, {useState} from 'react'
import GenresScreen from './genresdrop'
import { Break, GenresContainer, Links, MediaNavContainer, Title} from './styles'



export default function MediaLinks({isOpen, toggle, toggleGenres, isOpenGenres}) {
    

    return (
        <>
        <MediaNavContainer isOpen = {isOpen}>
                <Title onClick = {toggle} >BROWSE</Title>
                <Links href = "/anime">Popular</Links>
                <Links href = "/anime/new">New</Links>
                <Links href = "/anime/alphabetical">Alphabetical</Links>
                <GenresContainer>
                    <Links onClick = {toggleGenres}>Genres </Links> 
                    <GenresScreen isOpenGenres = {isOpenGenres} toggleGenres ={toggleGenres}/>
                </GenresContainer>
                <Break onClick = {toggle}>
                    <hr style = {{opacity: '20%', width: '100%'}}/>
                </Break>
                <Links href = "/manga" >Manga</Links>
                <Links >Games</Links>
                <Links >Store</Links>
                <Links >News</Links>
        </MediaNavContainer>
        </>
    )
}
