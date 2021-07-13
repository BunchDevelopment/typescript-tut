import React from 'react';
import { IEpisode, IAction } from './interfaces';

interface Props {
    episodes: Array<IEpisode>;
    toggleFavoriteAction: (episode: IEpisode) => IAction;
    favorites: Array<IEpisode>;
}

const EpisodesList = ({ episodes, toggleFavoriteAction, favorites }: Props): JSX.Element => {
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
                            <button type="button" onClick={() => toggleFavoriteAction(episode)}>
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
