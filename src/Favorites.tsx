import React from 'react';

import { Store } from './Store';
import { fetchDataAction } from './Actions';
const EpisodesList = React.lazy(() => import('./EpisodesList'));

const Favorites = (): JSX.Element => {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch);
    });

    return (
        <>
            <React.Suspense fallback={<div>Loading...</div>}>
                <section className="episode-layout">
                    <EpisodesList episodes={state.favorites} favorites={state.favorites} />
                </section>
            </React.Suspense>
        </>
    );
};

export default Favorites;
