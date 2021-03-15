import React from 'react';
import './searchBox.styles.scss';
import iconSearch from '../../assets/desktop/icon-search.svg';
import iconLocation from '../../assets/desktop/icon-location.svg';

const SearchBox = ({icon, ...otherProps}) => (
        <div className="customInput-container">
        <img src={icon} />
        <input type="text" {...otherProps}></input>
    </div>
);

export default SearchBox;