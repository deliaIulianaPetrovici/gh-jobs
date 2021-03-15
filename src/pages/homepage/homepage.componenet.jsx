import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import './homepage.styles.scss';

import JobCollection from '../../components/job-collection/job-collection.componenet';
import SearchBar from '../../components/searchBar/searchBar.component';


import { updateJobCollections } from '../../redux/jobs/jobs.actions';

class Homepage extends React.Component {

     componentDidMount() {

          const { updateJobCollections } = this.props;
          fetch("https://cors.bridged.cc/https://jobs.github.com/positions.json?page=0")
               .then(res => res.json())
               .then(
                    (jobCollections) => {
                         
                         updateJobCollections(jobCollections);
                    }
               )
     }

     render() {
          const {match} =this.props;

          return (<div className="homepage-container">
               <SearchBar />
               <JobCollection />
          </div>);
     }
};

     const mapDispatchToProps=(dispatch)=>({
          updateJobCollections: (jobCollections)=>
          dispatch(updateJobCollections(jobCollections))
     });



export default connect(null, mapDispatchToProps)(Homepage);