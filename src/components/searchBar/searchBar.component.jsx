import React from 'react';
import './searchBar.styles.scss';

import CustomButtom from '../custom-button/custom-button.component';
import SearchBox from '../searchBox/searchBox.component';
import CustomCheckbox from '../custom-checkBox/custom-checkBox.component';

import iconSearch from '../../assets/desktop/icon-search.svg';
import iconLocation from '../../assets/desktop/icon-location.svg';


import { connect } from 'react-redux';
import {updateJobCollections} from '../../redux/jobs/jobs.actions';


class SearchBar extends React.Component  
    {
        constructor(props) {
            super(props);

            this.state = {
                location:'',
                description:'',
                full_time:false
            }
        }

        handleSubmit=async event=>{
            const {location,description,full_time}=this.state;

            const { updateJobCollections } = this.props;
            fetch(`https://cors.bridged.cc/https://jobs.github.com/positions.json?description=${description}&location=${location}&full_time=${full_time}`)
                 .then(res => res.json())
                 .then(
                      (jobCollections) => {
                           
                           updateJobCollections(jobCollections);
                      }
                 )



        }


        handleChange = event => {
            const { value, name } = event.target;
        
            this.setState({ [name]: value });
          };

          
          handleChecked = event => {
             this.setState({full_time:!this.full_time});
          };

    render() {
            return (
                <div className="searchBar-container">
                    <div className="input-container">
                        <div className="searchInput-container">
                            <SearchBox icon={iconSearch}
                                placeholder="Filter by title, companies, expertise.."
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="locationInput-container">
                            <SearchBox icon={iconLocation}
                                placeholder="Filter by location.."
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                                />
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="checkBox-container">
                            <CustomCheckbox 
                            name="description"
                            defaultChecked={this.state.full_time}
                            onChange={this.handleChecked}
                            />
                        </div>
                        <div className="button-container">
                            <CustomButtom onClick={this.handleSubmit} type="submit"  >Search</CustomButtom>
                        </div>
                    </div>


                </div>
            )
        }
    };

    
    const mapDispatchToProps=(dispatch)=>({
        updateJobCollections: (jobCollections)=>
        dispatch(updateJobCollections(jobCollections))
   });


export default connect(null,mapDispatchToProps)(SearchBar);
