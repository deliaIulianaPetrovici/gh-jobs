import React from 'react';
import {Route} from 'react-router-dom';

import './job-description.styles.scss';

import JobPresentation from '../../components/job-presentation/job-presentation.componenet';

const JobDescription =({match})=>{
    return (
    <div className="jobDescription-container">
        <Route path={`${match.path}/:positionId`}
        component={JobPresentation}/>
    </div>
)};



export default JobDescription;