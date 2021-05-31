import React, {useState, } from 'react';

import './searchBar-phone.styles.scss';

import SearchBox from '../searchBox/searchBox.component';
import CustomButtom from '../custom-button/custom-button.component';
import DialogBox from '../dialog-box/dialogBox.component';

import iconFilter from '../../assets/mobile/icon-filter.svg';
import iconSearch from '../../assets/mobile/icon-search.svg';
import {ReactComponent as IconFilter} from '../../assets/mobile/icon-filter.svg';

const  SearchBarPhone=({location, description,
    fullTime,
      handleChange,
       handleSubmit,
       handleChecked})=>{
    const [open,setOpen]=useState(false);
   

    const handleFilter=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        handleSubmit();
        setOpen(false)
    }
    const handleDialogClose=()=>{
        setOpen(false)
    }


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
               <IconFilter onClick={handleFilter}/>
           </div>

         <DialogBox 
         open={open}
         onClose={handleDialogClose}
         location={location}
         handleChange={handleChange}
         fullTime={fullTime}
         handleChecked={handleChecked}
         handleClose={handleClose}
         ></DialogBox>

        <div className="searchBtn-container">
            <CustomButtom onClick={handleSubmit} type="submit">
                <img src={iconSearch} ></img>
            </CustomButtom>
        </div>
       </div>
    )
};

export default SearchBarPhone;