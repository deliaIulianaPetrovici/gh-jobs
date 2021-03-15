import React from 'react';

import './footer.styles.scss';

import JobInfo from '../job-info/job-info.component';
import CustomButton from '../custom-button/custom-button.component';

import { useHistory  } from 'react-router-dom';

const Footer=(job)=>{
    let history = useHistory();
    const {company_url, how_to_apply}=job;
 

    let apply_link=how_to_apply.split('"');
    console.log(apply_link[1]);

    return(
    <div className="footer-container">
        <div className="footer-content">
            <JobInfo {...job}/>
            <CustomButton onClick={()=> window.location.href =apply_link[1]}>Apply Now</CustomButton>
        </div>
    </div>
)};


export default Footer;