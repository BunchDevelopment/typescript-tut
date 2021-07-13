import React from 'react';

import { Link } from '@reach/router';
import { Store } from './Store';

const App = (props: any): JSX.Element => {
    const { state } = React.useContext(Store);

    return (
        <>
            <header className="header">
                <h1>Rick and Morty</h1>
                <div>
                    <p>Pick your favorite episode!!!</p>
                    <p>
                        <Link to="/">Home</Link>
                    </p>
                    <p>
                        <Link to="/Favorites">Current Favorite Count: {state.favorites.length}</Link>
                    </p>
                </div>
            </header>
            {props.children}
        </>
    );
};

export default App;
