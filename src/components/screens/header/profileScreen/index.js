import React from 'react'
import { Text, Image, ProfileScreenContainer, Link } from './styles'

export default function ProfileScreen({profileScreen, toggleProfileScreen}) {
    return (
        <>
            <ProfileScreenContainer profileScreen = {profileScreen} onClick = {toggleProfileScreen}>
                <Text>
                    Thank you for visiting my Crunchyroll Clone Project.
                    <br/>
                    For more information please feel to get in touch with me:
                    <br/>
                    <br/>
                    <Link href = "https://www.linkedin.com/in/dylan-lee-mcdowell/">LinkedIn</Link>
                    <br/>
                    <Link href = "https://github.com/DylanMcDowell37">GitHub</Link>
                    <br/>
                    <Link href = "https://dylanmcdowell.herokuapp.com/">Portfolio</Link>
                    <br/> 
                    Project was inspired by my love for anime and Crunchyroll.
                </Text>
                <Image src = "https://static.crunchyroll.com/fms/promoted_feed/350x446/1623697830701__all_ime_xcited_maller.png"/>
            </ProfileScreenContainer>
        </>
    )
}
