import React, { useState } from 'react';

export const Pagination = React.createContext();

function PaginationProvider(props) {
    const [currentPageNumber, setPageNumber] = useState(1);
    const [postsPerPage] = useState(3);
    const state = {currentPageNumber, postsPerPage, setPageNumber};

    return (
        <Pagination.Provider value={state}>
            {props.children}
        </Pagination.Provider>
    )   
}

export default PaginationProvider;