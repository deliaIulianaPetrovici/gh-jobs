import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';



import {selectCollectionsForPreview} from '../../redux/jobs/jobs.selector';

import './job-collection.styles.scss';

import JobBox from '../jobBox/jobBox.component';



const JobCollection=({  jobCollections})=>{
    return(
    <div className="jobCollection-container">
        <div className="item-container">
        {
            jobCollections.map(({ ...otherCollectionsProps})=>(
                <JobBox  {...otherCollectionsProps}/>
            ))
        }
        </div>
    </div>
)};



const mapStateToProps = createStructuredSelector({
    jobCollections: selectCollectionsForPreview
  });
  

export default connect(mapStateToProps)(JobCollection);