import React from 'react'
import { BrowseContainer } from './styles'

export default function BrowseScreen({browse, toggleBrowse}) {
    return (
        <>
            <BrowseContainer browse = {browse} onClick = {toggleBrowse}/>
        </>
    )
}
