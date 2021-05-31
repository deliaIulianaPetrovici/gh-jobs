import React, {useState, useEffect}  from 'react';
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


const SearchBar=({updatePageNumber, updateSearchOptions, page_number})=>
    {
        const [location, setLocation]=useState('');
       const [description, setDescription]=useState('');
       const [fullTime, setFullTime]=useState(false);
       const [width, setWidth]=useState(window.innerWidth);
     
    

       useEffect(()=>{
        window.addEventListener("resize", ()=>{
            if(window.innerWidth!==width) 
            setWidth(window.innerWidth);
        })  
        return function cleanup() {
            window.removeEventListener("resize", ()=>{
                if(window.innerWidth!==width) 
                setWidth(window.innerWidth);
            })  
          };
       })

       

        const handleSubmit= event=>{
            if(page_number!==1) updatePageNumber(1);
            updateSearchOptions(`description=${description}&location=${location}&full_time=${fullTime}`);
    
        }


        const handleChange = event => {
            
            const { value, name } = event.target; 
            if(name==='description')  setDescription( value);
            if(name==='location')  setLocation( value);
            if(name==='fullTime')  setFullTime( value);
           
          };

          
         const handleChecked = event => {
            setFullTime(!fullTime);
          };

    
           const breakpoint =767;
          
            return width<=breakpoint ?
            ( <SearchBarPhone location={location}
                description={description}
                fullTime={fullTime}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleChecked={handleChecked}
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
                                value={description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="locationInput-container">
                            <SearchBox icon={iconLocation}
                                placeholder="Filter by location.."
                                name="location"
                                value={location}
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <div className="search-container">
                        <div className="checkBox-container">
                            <CustomCheckbox 
                            name="full_time"
                            defaultChecked={fullTime}
                            onChange={handleChecked}
                            />
                        </div>
                        <div className="button-container">
                            <CustomButtom onClick={handleSubmit} type="submit"  >Search</CustomButtom>
                        </div>
                    </div>


                </div>
            );
        };
    const mapStateToProps=(state)=>({ 
        page_number:state.searchOptions.pageNumber,
       
   })
    
    const mapDispatchToProps=(dispatch)=>({
        updateSearchOptions:(searchOptions)=>dispatch(updateSearchOptions(searchOptions)),
        updatePageNumber:(page_number)=>dispatch(updatePageNumber(page_number))
        
   });


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
