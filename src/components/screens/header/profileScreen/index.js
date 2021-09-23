import React from 'react'
import { ProfileScreenContainer } from './styles'

export default function ProfileScreen({profileScreen, toggleProfileScreen}) {
    return (
        <>
            <ProfileScreenContainer profileScreen = {profileScreen} onClick = {toggleProfileScreen}/>
        </>
    )
}
