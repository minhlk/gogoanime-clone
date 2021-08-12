import Item from '../Item/Item'
import React, { useState, useEffect } from 'react';
import {getHomeData} from '../Api/fetchGogo'

function Home() {
    const [animeList, setAnimeList] = useState([]);
    
    //ComponentDidMount
    useEffect(() => {
        (async () => {
            let animeList = (await getHomeData()).map(anime => {
                return <Item anime={anime}/>
            })
            setAnimeList(animeList);
        })();
    }, []);
    
    return (
        <div>
            <h1>Home page</h1>
            {animeList}
            {/* <Item anime={animeList}/>
            <Item anime={animeList}/>
            <Item anime={animeList}/> */}
        </div>
    )
}

export default Home;