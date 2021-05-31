import React from 'react';
import './searchBox.styles.scss';

const SearchBox = ({icon, ...otherProps}) => (
        <div className="customInput-container">
        <img src={icon} />
        <input type="text" {...otherProps}></input>
    </div>
);

export default SearchBox;