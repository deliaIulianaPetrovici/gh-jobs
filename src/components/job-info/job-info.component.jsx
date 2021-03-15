import React from 'react';
import { Link } from 'react-router-dom';

import './job-info.styles.scss';

const JobInfo = ({history, match, id,company,  created_at, location, title, type}) => (
    <div className="jobInfo-container" 
    >
        <p className="post-info">{created_at} <strong > . </strong> {type}</p>
        <h1 >{title}</h1>
        <h2 >{title}</h2>
        <h3 >{title}</h3>
        <Link className="styled-link" to={`position/${id}`}>{title}</Link>
        
        <p className="company-name">{company}</p>
        <p className="location">{location}</p>
    </div>
);

export default JobInfo;

