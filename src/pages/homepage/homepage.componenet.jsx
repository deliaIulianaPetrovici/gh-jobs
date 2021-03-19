import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './homepage.styles.scss';

import JobCollection from '../../components/job-collection/job-collection.componenet';
import SearchBar from '../../components/searchBar/searchBar.component';


import { updateJobCollections,loadMoreJobs } from '../../redux/jobs/jobs.actions';
import { updatePageNumber } from '../../redux/searchOptions/searchOptions.actions';
import CustomButtom from '../../components/custom-button/custom-button.component';

class Homepage extends React.Component {
  

     fetchData(page_number,url){
          const { updateJobCollections,loadMoreJobs } = this.props;
          fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${page_number}&${url}`)
               .then(res => res.json())
               .then(
                    (jobCollections) => {
                         if(page_number===1)
                         updateJobCollections(jobCollections);
                         else loadMoreJobs(jobCollections)
                    }
               )
     }
  

     componentDidMount() {
       const {page_number} = this.props;
        this.fetchData(page_number);
     }

     componentDidUpdate(prevProps){
          const {page_number,searchOptionsUrl}=this.props;
         
          if(prevProps.page_number!=page_number)  {
               this.fetchData(page_number,searchOptionsUrl);
          }else
          if(prevProps.searchOptionsUrl!=searchOptionsUrl){
               this.fetchData(page_number,searchOptionsUrl)
          }
     }
    
    

     handleLoadMoreItems=()=>{
          const {updatePageNumber}= this.props;
          const {page_number}=this.props;
          updatePageNumber((page_number+1));
          
          
         
     }


     render() {
          const {match,page_number,jobs} =this.props;
          let button;
         
          return (
          <div className="homepage-container">
               <SearchBar/>
               <JobCollection />
               <div className="loadMore-btn-container">
               {  jobs.length/50 <page_number ? (<div></div>):
               <CustomButtom onClick={this.handleLoadMoreItems} >Load More</CustomButtom> 
          }
               </div>
              
          </div>);
     }
};

    const mapStateToProps=(state)=>({ 
         page_number:state.searchOptions.pageNumber,
         searchOptionsUrl: state.searchOptions.searchOptionsUrl,
         jobs:state.jobs.jobCollections
    })

     const mapDispatchToProps=(dispatch)=>({
          updateJobCollections: (jobCollections)=>
          dispatch(updateJobCollections(jobCollections)),
          updatePageNumber:(page_number)=>dispatch(updatePageNumber(page_number)),
          loadMoreJobs:(jobCollections)=>dispatch(loadMoreJobs(jobCollections))
     });



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);