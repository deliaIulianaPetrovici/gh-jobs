import React from 'react';
import './custom-button.styles.scss';

const CustomButtom=({children,darkTheme,lightThemeWhite,...otherProps})=>{
    
    return(
    
        <button className= {`${darkTheme ? 'dark-theme' :
        (lightThemeWhite ? 'light-theme-white' : 'light-theme')}
         custom-button `} 
        {...otherProps}>
            {children}
        </button>
    
)};

export default CustomButtom;