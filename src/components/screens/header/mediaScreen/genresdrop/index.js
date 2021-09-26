import React from 'react'
import { Container, Links} from './styled'
export default function GenresScreen({isOpenGenres, toggleGenres}) {
    return (
        <>
                    <Container isOpenGenres = {isOpenGenres} onClick = {toggleGenres}> 
                            <Links href = "/anime/action">Action</Links>
                            <Links href = "/anime/adventure">Adventure</Links>
                            <Links href = "/anime/comedy">Comedy</Links>
                            <Links href = "/anime/drama">Drama</Links>
                            <Links href = "/anime/fantasy">Fantasy</Links>
                            <Links href = "/anime/magic">Magic</Links>
                            <Links href = "/anime/romance">Romance</Links>
                            <Links href = "/anime/scifi">Sci-Fi</Links>
                            <Links href = "/anime/seinen">Seinen</Links>
                            <Links href = "/anime/shoujo">Shoujo</Links>
                            <Links href = "/anime/shonen">Shonen</Links>
                            <Links href = "/anime/sliceoflife">Slice of life</Links>
                            <Links href = "/anime/sports">Sports</Links>
                            <Links href = "/anime/supernatural">Supernatural</Links>
                            <Links href = "/anime/thriller">Thriller</Links>
                    </Container>
 
        </>
    )
}
