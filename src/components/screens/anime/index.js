import React from 'react'
import Anime from './animeview'
import GenreView from './genres'
import { requestAnime } from '../../content/AnimeList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


export default function AnimeView() {
    
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path = "/anime/">
                    <Anime fetchUrl = {`${requestAnime.fetchAll}rank?page=`} title = {'Popular'} sort = {'POPULARITY'} n = {11} />
                </Route>
                <Route path = "/anime/new">
                    <Anime fetchUrl = {`${requestAnime.fetchAll}release-date?page=`} title = {'New'} sort = {'NEW'} n ={11}/>
                </Route>
                <Route path = "/anime/alphabetical">
                    <Anime fetchUrl = {`${requestAnime.fetchAll}a-z?page=`} title = {'Alphabetical'} sort = {'ALPHABETICAL'} n = {11}/>
                </Route>
                
                <GenreView />
                
                 
            </Switch>
        </BrowserRouter>
    )
}

