import React from 'react';

type ContextTypes = {
    text: string;
};

interface IChildren {
    children: React.ReactNode;
}

const Store = React.createContext<Partial<ContextTypes>>({});

export function Parent({ children }: IChildren) {
    const obj: object = { text: 'random text' };

    return <Store.Provider value={obj}>{children}</Store.Provider>;
}

export function Child() {
    const hook = React.useContext(Store);
    return <div>{hook.text}</div>;
}
