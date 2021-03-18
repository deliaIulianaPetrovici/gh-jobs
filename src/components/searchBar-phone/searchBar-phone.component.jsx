import React from 'react';

import './searchBar-phone.styles.scss';

import SearchBox from '../searchBox/searchBox.component';
import CustomButtom from '../custom-button/custom-button.component';
import DialogBox from '../dialog-box/dialogBox.component';

import iconFilter from '../../assets/mobile/icon-filter.svg';
import iconSearch from '../../assets/mobile/icon-search.svg';
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg';

class SearchBarPhone extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           open:false,
        }
    }
  

    handleFilter=()=>{
         
         console.log("HEllo");
        this.setState({open:true})
    }
    handleClose=()=>{
        const {handleSubmit}=this.props;
        handleSubmit();
        this.setState({open:false})
    }
    handleDialogClose=()=>{
        this.setState({open:false})
    }


    render() {
        const {location, description,
             full_time,
              handleChange,
               handleSubmit,
               handleChecked} = this.props;
        return (
        <div className="searchBar-phone-container">

       <div className="phone-descrInput-container">
           <SearchBox
                                placeholder="Enter job description"
                                name="description"
                                value={description}
                                onChange={handleChange}
           />
         
       </div>
       <div className="filterBtn-container" >
               <IconFilter onClick={this.handleFilter}/>
           </div>

         <DialogBox 
         open={this.state.open}
         onClose={this.handleDialogClose}
         location={location}
         handleChange={handleChange}
         full_time={full_time}
         handleChecked={handleChecked}
         handleClose={this.handleClose}
         ></DialogBox>

        <div className="searchBtn-container">
            <CustomButtom onClick={handleSubmit} type="submit">
                <img src={iconSearch} ></img>
            </CustomButtom>
        </div>
       </div>
    )
}
}

export default SearchBarPhone;