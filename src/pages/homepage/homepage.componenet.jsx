import React, { useEffect} from 'react';
import { connect } from 'react-redux';


import './homepage.styles.scss';

import JobCollection from '../../components/job-collection/job-collection.componenet';
import SearchBar from '../../components/searchBar/searchBar.component';


import { updateJobCollections,loadMoreJobs } from '../../redux/jobs/jobs.actions';
import { updatePageNumber } from '../../redux/searchOptions/searchOptions.actions';
import CustomButtom from '../../components/custom-button/custom-button.component';


const  Homepage =({updatePageNumber,page_number, searchOptionsUrl, jobs, loadMoreJobs, updateJobCollections})=> {


     useEffect(()=>{
           const fetchData=async()=>{
         try{
          await fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${page_number}&${searchOptionsUrl}`)
          .then(res => res.json())
          .then(
               (jobCollections) => {
                   
                    if(page_number===1)
                    updateJobCollections(jobCollections);
                    else loadMoreJobs(jobCollections)

                    

               }
          )
         
         }catch(e){
              console.log(e);
         }
             
          };
          fetchData();
     },[searchOptionsUrl,page_number, updateJobCollections,loadMoreJobs]);


     const handleLoadMoreItems=()=>{
          updatePageNumber((page_number+1));  
     }

          let button=jobs.length/50 <page_number;
         
         
          return (
          <div className="homepage-container">
          <SearchBar/>
            <JobCollection/>
            
                  
               <div className="loadMore-btn-container">
               {  button ? (<div></div>):
               <CustomButtom onClick={handleLoadMoreItems} >Load More</CustomButtom> 
          }
               </div>
              
          </div>);
     };

    const mapStateToProps=(state)=>({ 
         page_number:state.searchOptions.pageNumber,
         searchOptionsUrl: state.searchOptions.searchOptionsUrl,
         jobs:state.jobs.jobCollections
    })

     const mapDispatchToProps=(dispatch)=>({
          updateJobCollections: (jobCollections)=>
          dispatch(updateJobCollections(jobCollections)),
          updatePageNumber:(pageNo)=>dispatch(updatePageNumber(pageNo)),
          loadMoreJobs:(jobCollections)=>dispatch(loadMoreJobs(jobCollections))
     });



export default connect(mapStateToProps, mapDispatchToProps)(Homepage);