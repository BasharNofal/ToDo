import React, { useContext } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';
import { Sort } from '../../context/sort';

const SortList = (props) => {
    const context = useContext(Sort);
    const sortMethodAll = () => {
        context.setSortKey('All');
    }

    const sortMethodDiff = () => {
        context.setSortKey('Difficulty');
    }

    return (
        <DropdownButton id="dropdown-basic-button" title={context.sortKey}>
            <DropdownItem onClick={sortMethodAll} >All</DropdownItem>
            <DropdownItem onClick={sortMethodDiff} >Difficulty</DropdownItem>
        </DropdownButton>
    );
}

export default SortList;