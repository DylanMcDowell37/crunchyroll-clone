import React from 'react'
import Genres from './genresview'
import { requestAnime } from '../../../content/AnimeList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { GenresContainer } from './styled'
import GenreCategoryView from './genresview/genrescategory'

export default function GenreView({toggleEpisode}) {
    return (
        <BrowserRouter >
            <Switch>
                <GenresContainer>
                    <Route exact path = "/anime/action" >
                        <Genres fetchUrl = {`${requestAnime.fetchActionAll}rank`} title = {'Popular Action'} link = {'/anime/action/popular'} toggleEpisode = {toggleEpisode}/>
                        <Genres fetchUrl = {`${requestAnime.fetchActionAll}release-date`} title = {'New'}  link = {'/anime/action/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchActionAll}a-z`} title = {'Alphabetical'}  link = {'/anime/action/alphabetical'}/>
                    </Route>                   
                    <Route exact path = "/anime/adventure">
                        <Genres fetchUrl = {`${requestAnime.fetchAdventureAll}rank`} title = {'Popular Adventure'}   link = {'/anime/adventure/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchAdventureAll}release-date`} title = {'New'}  link = {'/anime/adventure/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchAdventureAll}a-z`} title = {'Alphabetical'}  link = {'/anime/adventure/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/comedy">
                        
                        <Genres fetchUrl = {`${requestAnime.fetchComedyAll}rank`} title = {'Popular Comedy'}  link = {'/anime/comedy/popular'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchComedyAll}release-date`} title = {'New'}  link = {'/anime/comedy/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchComedyAll}a-z`} title = {'Alphabetical'}  link = {'/anime/comedy/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/drama">
                        <Genres fetchUrl = {`${requestAnime.fetchDramaAll}rank`} title = {'Popular Drama'} link = {'/anime/drama/popular'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchDramaAll}release-date`} title = {'New'} link = {'/anime/drama/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchDramaAll}a-z`} title = {'Alphabetical'} link = {'/anime/drama/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/fantasy">
                        <Genres fetchUrl = {`${requestAnime.fetchFantasyAll}rank`} title = {'Popular Fantasy'} link = {'/anime/fantasy/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchFantasyAll}release-date`} title = {'New'} link = {'/anime/fantasy/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchFantasyAll}a-z`} title = {'Alphabetical'} link = {'/anime/fantasy/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/magic">
                        <Genres fetchUrl = {`${requestAnime.fetchMagicAll}rank`} title = {'Popular Magic'} link = {'/anime/magic/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchMagicAll}release-date`} title = {'New'} link = {'/anime/magic/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchMagicAll}a-z`} title = {'Alphabetical'} link = {'/anime/magic/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/romance">
                        <Genres fetchUrl = {`${requestAnime.fetchRomanceAll}rank`} title = {'Popular Romance'} link = {'/anime/romance/popular'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchRomanceAll}release-date`} title = {'New'}  link = {'/anime/romance/new'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchRomanceAll}a-z`} title = {'Alphabetical'} link = {'/anime/romance/alphabetical'} />  
                    </Route>
                    <Route exact path = "/anime/scifi">
                        <Genres fetchUrl = {`${requestAnime.fetchSciFiAll}rank`} title = {'Popular Sci-Fi'} link = {'/anime/scifi/popular'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchSciFiAll}release-date`} title = {'New'} link = {'/anime/scifi/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSciFiAll}a-z`} title = {'Alphabetical'} link = {'/anime/scifi/alphabetical'} />                    
                    </Route>
                    <Route exact path = "/anime/seinen">
                        <Genres fetchUrl = {`${requestAnime.fetchSeinenAll}rank`} title = {'Popular Seinen'} link = {'/anime/seinen/popular'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchSeinenAll}release-date`} title = {'New'}  link = {'/anime/seinen/new'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchSeinenAll}a-z`} title = {'Alphabetical'} link = {'/anime/seinen/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/shoujo">
                        <Genres fetchUrl = {`${requestAnime.fetchShojoAll}rank`} title = {'Popular Shoujo'} link = {'/anime/shoujo/popular'} /> 
                        <Genres fetchUrl = {`${requestAnime.fetchShojoAll}release-date`} title = {'New'} link = {'/anime/shoujo/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchShojoAll}a-z`} title = {'Alphabetical'} link = {'/anime/shoujo/alphabetical'} />                   
                    </Route>
                    <Route exact path = "/anime/shonen">
                        <Genres fetchUrl = {`${requestAnime.fetchShonenAll}rank`} title = {'Popular Shonen'} link = {'/anime/shonen/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchShonenAll}release-date`} title = {'New'} link = {'/anime/shonen/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchShonenAll}a-z`} title = {'Alphabetical'} link = {'/anime/shonen/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/sliceoflife">
                        <Genres fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}rank`} title = {'Popular Slice of Life'} link = {'/anime/sliceoflife/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}release-date`} title = {'New'} link = {'/anime/sliceoflife/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}a-z`} title = {'Alphabetical'} link = {'/anime/sliceoflife/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/sports">
                        <Genres fetchUrl = {`${requestAnime.fetchSportsAll}rank`} title = {'Popular Sports'} link = {'/anime/sports/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSportsAll}release-date`} title = {'New'}  link = {'/anime/sports/new'}/>
                        <Genres fetchUrl = {`${requestAnime.fetchSportsAll}a-z`} title = {'Alphabetical'} link = {'/anime/sports/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/supernatural">
                        <Genres fetchUrl = {`${requestAnime.fetchSupernaturalAll}rank`} title = {'Popular Supernatural'} link = {'/anime/supernatural/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSupernaturalAll}release-date`} title = {'New'} link = {'/anime/supernatural/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchSupernaturalAll}a-z`} title = {'Alphabetical'} link = {'/anime/supernatural/alphabetical'} />
                    </Route>
                    <Route exact path = "/anime/thriller">
                        <Genres fetchUrl = {`${requestAnime.fetchThrillerAll}rank`} title = {'Popular Thriller'} link = {'/anime/thriller/popular'} />
                        <Genres fetchUrl = {`${requestAnime.fetchThrillerAll}release-date`} title = {'New'} link = {'/anime/thriller/new'} />
                        <Genres fetchUrl = {`${requestAnime.fetchThrillerAll}a-z`} title = {'Alphabetical'} link = {'/anime/thriller/alphabetical'} />
                    </Route>
                    <GenreCategoryView/>
                </GenresContainer>
            </Switch>
        </BrowserRouter>
    )
}
