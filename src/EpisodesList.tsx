import React from 'react';
import { IEpisode, IAction, IState } from './interfaces';
import { toggleFavoriteAction } from './Actions';
import { Store } from './Store';

interface IProps {
    episodes: Array<IEpisode>;
    favorites: Array<IEpisode>;
}

const EpisodesList = ({ episodes, favorites }: IProps): JSX.Element => {
    const { state, dispatch } = React.useContext(Store);
    return (
        <>
            {episodes.map((episode: IEpisode) => {
                return (
                    <section className="episode-box" key={episode.id}>
                        <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                        <div>{`Rick and Morty ${episode.name}`}</div>
                        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                Season: {episode.season} number: {episode.number}
                            </div>
                            <button type="button" onClick={() => toggleFavoriteAction(state, dispatch, episode)}>
                                {favorites.includes(episode) ? 'Unfavorite' : 'Favorite'}
                            </button>
                        </section>
                    </section>
                );
            })}
        </>
    );
};

export default EpisodesList;
