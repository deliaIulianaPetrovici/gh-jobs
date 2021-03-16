import React from 'react';

import './heading-bar.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const HeadingBar=(props)=>{
    const {company, company_logo,company_url}=props.job;
    

    return(
    <div className="headingBar-container">
        <div className="companyLogo-container"
        style={{ 
            backgroundImage: `url(${company_logo})` 
           
          }}
        >

        </div>
        <div className="info-container">
            <h2>{company}</h2>
        </div>
        <div className="button-container">
               <CustomButton  onClick={()=> window.location.href=company_url} 
               type="button" lightThemeWhite>Company Site</CustomButton>
        </div>
    </div>
)};

export default HeadingBar;