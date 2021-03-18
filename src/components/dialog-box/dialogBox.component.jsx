import React, { Children } from 'react';

import './dialog-box.styles.scss';

import Dialog from '@material-ui/core/Dialog';

import SearchBox from '../searchBox/searchBox.component';
import CustomButton from '../custom-button/custom-button.component';
import CustomCheckbox from '../custom-checkBox/custom-checkBox.component';


import iconLocation from '../../assets/desktop/icon-location.svg';


const DialogBox =(props)=>{
    const {onClose,selectedValue, open,
       location,
       handleChange,
       handleClose,

       full_time,
       handleChecked}=props;

   
    

    return (
        <Dialog onClose={onClose} fullWidth={true} aria-labelledby="simple-dialog-title" open={open}>
          <div className="dialog-container">
          <div className="locationInput-container">
                            <SearchBox icon={iconLocation}
                                placeholder="Filter by location.."
                                name="location"
                                value={location}
                                onChange={handleChange}
                                />
                        </div>
                  <div className="checkBox-container">
                            <CustomCheckbox 
                            name="description"
                            defaultChecked={full_time}
                            onChange={handleChecked}
                            />
                        </div>
                        <div className="button-container">
                            <CustomButton onClick={handleClose}  type="submit"  >Search</CustomButton>
                        </div>
            
          </div>

        </Dialog>
    )
}

export default DialogBox;