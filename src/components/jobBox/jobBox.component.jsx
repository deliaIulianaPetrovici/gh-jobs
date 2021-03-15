import React from 'react';
import { withRouter } from 'react-router';

import './jobBox.styles.scss';

import JobInfo from '../job-info/job-info.component';

const JobBox=({company_logo, ...otherProps})=>{
   
    return(
   <div className="jobBox-container"
   >
       <div className="jobIcon" style={{ 
      backgroundImage: `url(${company_logo})` 
     
    }}   >
           
       </div>
       <JobInfo 
         {...otherProps} />
   </div>
)};

export default JobBox;