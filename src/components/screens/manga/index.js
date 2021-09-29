import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MangaView from './mangaview'
import { requestManga } from '../../content/MangaList'

export default function Manga() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = '/manga/'>
                    <MangaView fetchUrl = {`${requestManga.fetchManga}manga?page%5Blimit%5D=20&page%5Boffset%5D=`} title = {'Manga'}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

