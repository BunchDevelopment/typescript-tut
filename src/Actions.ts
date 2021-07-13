import { IAction, IEpisode, IState, Dispatch } from './interfaces';

export const fetchDataAction = async (dispatch: Dispatch) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-%26-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
        type: 'FETCH_DATA',
        payload: dataJSON._embedded.episodes.splice(0, dataJSON._embedded.episodes.length - 7)
    });
};

export const toggleFavoriteAction = (state: IState, dispatch: Dispatch, episode: IEpisode): void => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
        type: 'ADD_FAV',
        payload: episode
    };
    if (episodeInFav) {
        dispatchObj = {
            type: 'REMOVE_FAV',
            payload: state.favorites.filter((fav: IEpisode) => fav.id !== episode.id)
        };
    }
    return dispatch(dispatchObj);
};
