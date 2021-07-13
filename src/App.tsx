import React from 'react';

import { Store } from './Store';

import { IAction, IEpisode } from './interfaces';
import EpisodesList from './EpisodesList';

const App = (): JSX.Element => {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction();
    });

    const fetchDataAction = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-%26-morty&embed=episodes';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embedded.episodes.splice(0, dataJSON._embedded.episodes.length - 7)
        });
    };

    const toggleFavoriteAction = (episode: IEpisode): IAction => {
        const episodeInFav = state.favorites.includes(episode);
        let dispatchObj = {
            type: 'ADD_FAV',
            payload: episode
        };
        if (episodeInFav) {
            const favWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id);
            dispatchObj = {
                type: 'REMOVE_FAV',
                payload: favWithoutEpisode
            };
        }
        return dispatch(dispatchObj);
    };

    return (
        <>
            <header className="header">
                <h1>Rick and Morty</h1>
                <div>
                    <p>Pick your favorite episode!!!</p>
                    <p>Current Favorite Count: {state.favorites.length}</p>
                </div>
            </header>
            <section className="episode-layout">
                <EpisodesList episodes={state.episodes} toggleFavoriteAction={toggleFavoriteAction} favorites={state.favorites} />
            </section>
        </>
    );
};

export default App;
