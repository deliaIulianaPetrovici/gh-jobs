import React from 'react';
import { withRouter } from 'react-router';

import './jobBox.styles.scss';

import JobInfo from '../job-info/job-info.component';

const JobBox=(props)=>{
     
    const {company_logo} =props;
    return(
   <div className="jobBox-container"
   >
       <div className="jobIcon" style={{ 
      backgroundImage: `url(${company_logo})` 
     
    }}   >
           
       </div>
       <JobInfo 
        {...props} />   </div>
)};

export default JobBox;