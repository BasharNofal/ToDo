import React, { useState } from 'react';

export const Sort = React.createContext();

function SortProvider(props) {
    const [sortKey, setSortKey] = useState('All');
    const state = {
        sortKey, setSortKey
    }

    return (
        <Sort.Provider value={state}>
            {props.children}
        </Sort.Provider>
    )
}

export default SortProvider; 