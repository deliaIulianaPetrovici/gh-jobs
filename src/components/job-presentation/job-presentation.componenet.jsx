import React from 'react';

import './job-presentation.styles.scss';

import { createStructuredSelector } from 'reselect';
import { selectCollection } from '../../redux/jobs/jobs.selector';

import JobInfo from '../job-info/job-info.component';
import CustomButton from '../custom-button/custom-button.component';
import HeadingBar from '../headingBar/heading-bar.componenet';
import Footer from '../footer/footer.component';
import { connect } from 'react-redux';

const JobPresentation = ({ job }) => {
  console.log(job);
  const { description, how_to_apply, created_at} = job;
   
  let apply_link=how_to_apply.split('"');
  return (
    <div >
       <div className="jobDescription-content">
      <HeadingBar  job={job} className="heading-bar" />
      <div className="jobpresentation-container">
        <div className="jobpresentation-header">
          <JobInfo {...job} />
          <div className="btn-container">
          <CustomButton onClick={()=> window.location.href =apply_link[1]}>Apply Now</CustomButton>
          </div>
        </div>
        <div className="jobpresentation-body" dangerouslySetInnerHTML={{ __html: description }} >
        </div>
      </div>
      <div className="apply-container">
        <h3>How To Apply</h3>
        <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
      </div>
      </div>   
      <Footer {...job}/>
    </div>
  )
};


/*const mapStateToProps = (state, ownProps) => ({
    id:ownProps.match.params.positionId,
    jobCollections:state.jobs.jobCollections
  }); */

const mapStateToProps = (state, ownProps) => ({
  job: selectCollection(ownProps.match.params.positionId)(state)
});
export default connect(mapStateToProps)(JobPresentation);