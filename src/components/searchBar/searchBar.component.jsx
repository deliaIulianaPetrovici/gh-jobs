import React from 'react';
import './searchBar.styles.scss';

import CustomButtom from '../custom-button/custom-button.component';
import SearchBox from '../searchBox/searchBox.component';
import CustomCheckbox from '../custom-checkBox/custom-checkBox.component';
import SearchBarPhone from '../searchBar-phone/searchBar-phone.component';

import iconSearch from '../../assets/desktop/icon-search.svg';
import iconLocation from '../../assets/desktop/icon-location.svg';



import { connect } from 'react-redux';

import { updatePageNumber,
    updateSearchOptions} from '../../redux/searchOptions/searchOptions.actions';


class SearchBar extends React.Component  
    {
        constructor(props) {
            super(props);
            
            this.state = {
                location:'',
                description:'',
                full_time:false,
                width:window.innerWidth
            }
        }

        componentDidMount(){
            window.addEventListener("resize", ()=>{
                if(window.innerWidth!=this.state.width) 
                this.setState({width:window.innerWidth});
            })  
        }
        

        componentWillUnmount(){
            window.removeEventListener("resize", ()=>{
                if(window.innerWidth!=this.state.width) 
                this.setState({width:window.innerWidth});
            })  
        }

        handleSubmit= event=>{
            const {location,description,full_time}=this.state;
            const {updatePageNumber, updateSearchOptions, page_number}=this.props;
            
            if(page_number!=1) updatePageNumber(1);
            updateSearchOptions(`description=${description}&location=${location}&full_time=${full_time}`);
    
        }


        handleChange = event => {
            const { value, name } = event.target; 
            this.setState({ [name]: value });
          };

          
          handleChecked = event => {
             this.setState({full_time:!this.full_time});
          };

    render() {
           const breakpoint =767;
          
            return this.state.width<=breakpoint ?
            ( <SearchBarPhone location={this.state.location}
                description={this.state.description}
                full_time={this.state.full_time}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleChecked={this.handleChecked}
            >

            </SearchBarPhone>)
            :
            (
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
                            name="full_time"
                            defaultChecked={this.state.full_time}
                            onChange={this.handleChecked}
                            />
                        </div>
                        <div className="button-container">
                            <CustomButtom onClick={this.handleSubmit} type="submit"  >Search</CustomButtom>
                        </div>
                    </div>


                </div>
            );
        }
    };
    const mapStateToProps=(state)=>({ 
        page_number:state.searchOptions.pageNumber,
       
   })
    
    const mapDispatchToProps=(dispatch)=>({
        updateSearchOptions:(searchOptions)=>dispatch(updateSearchOptions(searchOptions)),
        updatePageNumber:(page_number)=>dispatch(updatePageNumber(page_number))
        
   });


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
