import React from 'react'
import GenresCategory from './genrescategoryview'
import { requestAnime } from '../../../../../content/AnimeList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


export default function GenreCategoryView() {
    return (
        <BrowserRouter >
            <Switch>
                    <Route path = "/anime/action/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchActionAll}rank`} title = {'Popular'} type = {'Action'} n = {12}/>
                    </Route>
                    <Route path = "/anime/action/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchActionAll}release-date`} title = {'New'} type = {'Action'} n = {12} />
                    </Route>
                    <Route path = "/anime/action alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchActionAll}a-z`} title = {'Alphabetical'} type = {'Action'} n = {12}/>
                    </Route>                   
                    <Route path = "/anime/adventure/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchAdventureAll}rank`} title = {'Popular'} type = {'Adventure'} n = {12} />
                    </Route>
                    <Route path = "/anime/adventure/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchAdventureAll}release-date`} title = {'New'}  type = {'Adventure'} n = {12}/>
                    </Route>
                    <Route path = "/anime/adventure/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchAdventureAll}a-z`} title = {'Alphabetical'} type = {'Adventure'}  n = {12} />
                    </Route>
                    <Route path = "/anime/comedy/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchComedyAll}rank`} title = {'Popular'} type = {'Comedy'} n = {12}/>
                    </Route>
                    <Route path = "/anime/comedy/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchComedyAll}release-date`} title = {'New'} type = {'Comedy'}   n = {12}/>
                    </Route>
                    <Route path = "/anime/comedy/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchComedyAll}a-z`} title = {'Alphabetical'} type = {'Comedy'} n = {12} />
                    </Route>
                    <Route path = "/anime/drama/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchDramaAll}rank`} title = {'Popular Drama'} type = {'Drama'} n = {12}/>
                    </Route>
                    <Route path = "/anime/drama/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchDramaAll}release-date`} title = {'New'} type = {'Drama'} n = {12} />
                    </Route>
                    <Route path = "/anime/drama/alphabetcial">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchDramaAll}a-z`} title = {'Alphabetical'} type = {'Drama'} n = {12} />
                    </Route>
                    <Route path = "/anime/fantasy/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchFantasyAll}rank`} title = {'Popular'} type = {'Fantasy'} n = {12}/>
                    </Route>
                    <Route path = "/anime/fantasy/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchFantasyAll}release-date`} title = {'New'} type = {'Fantasy'} n = {12} />
                    </Route>
                    <Route path = "/anime/fantasy/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchFantasyAll}a-z`} title = {'Alphabetical'} type = {'Fantasy'} n = {12} />
                    </Route>
                    <Route path = "/anime/magic/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchMagicAll}rank`} title = {'Popular'} type = {'Magic'} n = {12}/>
                    </Route>
                    <Route path = "/anime/magic/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchMagicAll}release-date`} title = {'New'} type = {'Magic'} n = {12} />
                    </Route>
                    <Route path = "/anime/magic/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchMagicAll}a-z`} title = {'Alphabetical'} type = {'Magic'} n = {12} />                    
                    </Route>
                    <Route path = "/anime/romance/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchRomanceAll}rank`} title = {'Popular'} type = {'Romance'} n = {12}/>
                    </Route>
                    <Route path = "/anime/romance/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchRomanceAll}release-date`} title = {'New'} type = {'Romance'}  n = {12}/>
                    </Route>
                    <Route path = "/anime/romance/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchRomanceAll}a-z`} title = {'Alphabetical'} type = {'Romance'} n = {12} />  
                    </Route>
                    <Route path = "/anime/scifi/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSciFiAll}rank`} title = {'Popular'} type = {'Sci-Fi'} n = {12} />
                    </Route>
                    <Route path = "/anime/scifi/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSciFiAll}release-date`} title = {'New'} type = {'Sci-Fi'} n = {12} />
                    </Route>
                    <Route path = "/anime/scifi/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSciFiAll}a-z`} title = {'Alphabetical'} type = {'Sci-Fi'}  n = {12} />                    
                    </Route>
                    <Route path = "/anime/seinen/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSeinenAll}rank`} title = {'Popular'} type = {'Seinen'}  n = {12} />
                    </Route>
                    <Route path = "/anime/seinen/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSeinenAll}release-date`} title = {'New'} type = {'Seinen'} n = {12} />
                    </Route>
                    <Route path = "/anime/seinen/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSeinenAll}a-z`} title = {'Alphabetical'} type = {'Seinen'}  n = {12}/>
                    </Route>
                    <Route path = "/anime/shoujo/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShojoAll}rank`} title = {'Popular'} type = {'Shoujo'} n = {12}/> 
                    </Route>
                    <Route path = "/anime/shoujo/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShojoAll}release-date`} title = {'New'} type = {'Shoujo'} n = {12}/>
                    </Route>
                    <Route path = "/anime/shoujo/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShojoAll}a-z`} title = {'Alphabetical'} type = {'Shoujo'} n = {12} />                   
                    </Route>
                    <Route path = "/anime/shonen/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShonenAll}rank`} title = {'Popular'} type = {'Shonen'} n = {12}/>
                    </Route>
                    <Route path = "/anime/shonen/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShonenAll}release-date`} title = {'New'} type = {'Shonen'} n = {12} />
                    </Route>
                    <Route path = "/anime/shonen/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchShonenAll}a-z`} title = {'Alphabetical'} type = {'Shonen'} n = {12} />
                    </Route>
                    <Route path = "/anime/sliceoflife/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}rank`} title = {'Popular'} type = {'Slice of Life'} n = {12}/>
                    </Route>
                    <Route path = "/anime/sliceoflife/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}release-date`} title = {'New'} type = {'Slice of Life'} n = {12} />
                    </Route>
                    <Route path = "/anime/sliceoflife/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSliceOfLifeAll}a-z`} title = {'Alphabetical'} type = {'Slice of Life'} n = {12} />
                    </Route>
                    <Route path = "/anime/sports/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSportsAll}rank`} title = {'Popular'} type = {'Sports'} n = {12}/>
                    </Route>
                    <Route path = "/anime/sports/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSportsAll}release-date`} title = {'New'} type = {'Sports'} n = {12}/>
                    </Route>
                    <Route path = "/anime/sports/alphabetcial">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSportsAll}a-z`} title = {'Alphabetical'} type = {'Sports'} n = {12} />
                    </Route>
                    <Route path = "/anime/supernatural/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSupernaturalAll}rank`} title = {'Popular'} type = {'Supernatural'} n = {12} />
                    </Route>
                    <Route path = "/anime/supernatural/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSupernaturalAll}release-date`} title = {'New'} type = {'Supernatural'} n = {12} />
                    </Route>
                    <Route path = "/anime/supernatural/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchSupernaturalAll}a-z`} title = {'Alphabetical'} type = {'Supernatural'} n = {12} />
                    </Route>
                    <Route path = "/anime/thriller/popular">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchThrillerAll}rank`} title = {'Popular'} type = {'Thriller'} n = {12}/>
                    </Route>
                    <Route path = "/anime/thriller/new">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchThrillerAll}release-date`} title = {'New'} type = {'Thriller'} n = {12} />
                    </Route>
                    <Route path = "/anime/thriller/alphabetical">
                        <GenresCategory fetchUrl = {`${requestAnime.fetchThrillerAll}a-z`} title = {'Popular'} type = {'Thriller'} n = {12} />
                    </Route>
            </Switch>
        </BrowserRouter>
    )
}
