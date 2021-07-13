export type Dispatch = React.Dispatch<IAction>;

export interface IEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: { medium: string; original: string };
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    url: string;
}

// Using any because i dont know how to fix this yet. They always return the same thing, but still throwing ts error
export interface IState {
    episodes: Array<IEpisode>;
    favorites: Array<IEpisode> | any;
}

// Using any because i dont know how to fix this yet. They always return the same thing, but still throwing ts error
export interface IAction {
    type: string;
    payload: Array<IEpisode> | any;
}
