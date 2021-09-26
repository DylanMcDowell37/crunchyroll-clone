import React, {useState} from 'react'
import GenresScreen from './genresdrop'
import { Links, MediaNavContainer, Title} from './styles'



export default function MediaLinks({isOpen, toggle, toggleGenres, isOpenGenres}) {
    

    return (
        <>
        <MediaNavContainer isOpen = {isOpen} >
                <Title onClick ={toggle}>BROWSE</Title>
                <Links onClick ={toggle} href = "/anime">Popular</Links>
                <Links onClick ={toggle} href = "/anime/new">New</Links>
                <Links onClick ={toggle} href = "/anime/alphabetical">Alphabetical</Links>
                <Links onClick = {toggleGenres}>Genres <GenresScreen isOpenGenres = {isOpenGenres} toggleGenres ={toggleGenres}/> </Links>
                <hr style = {{opacity: '20%', marginTop: '10px'}}/>
                <Links onClick ={toggle}>Manga</Links>
                <Links onClick ={toggle}>Games</Links>
                <Links onClick ={toggle}>Store</Links>
                <Links onClick ={toggle}>News</Links>
        </MediaNavContainer>
        </>
    )
}
