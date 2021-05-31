import React, {useState, useEffect} from 'react';
import './header.styles.scss';

import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';


const Header =()=> {
  const [lightMode, setLightMode]=useState('default');
  const [switchDark, setSwitchDark]=useState(false);

 
  const toogleChecked = () => {
    const localTheme = window.localStorage.getItem('lightMode');
    if (localTheme === 'default') {
      window.localStorage.setItem('lightMode', 'inverted')
      setLightMode('inverted');
    } else {
      window.localStorage.setItem('lightMode', 'default');
      setLightMode('default' );   
    }
  }
   
  const changeTheme=()=>{
    
    const localTheme = window.localStorage.getItem('lightMode');
    const btn=document.querySelector(".light-theme-white");
   
    
    if (localTheme === 'inverted') {
      document.body.classList.add('is_inverted');
      if(btn) btn.classList.add('dark-theme');
      if(switchDark!=true) setSwitchDark(true);
    }
    else {
      document.body.classList.remove('is_inverted');
      if(switchDark!=false) setSwitchDark(false);
      if(btn) btn.classList.remove('dark-theme');
    }
  }

  useEffect(()=>{
    changeTheme();
  });

 


    const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
    const width = pxToRem(48);
    const height = pxToRem(24);
    const size = pxToRem(15);
    const gap = (24 - 15) / 2;

    const CustomSwitch = withStyles((theme) => ({
      root: {
        width,
        height,
        padding: 0,
        overflow: 'unset',
      },
      switchBase: {
        padding: pxToRem(gap),
        color: 'rgb(89,100,224)',
        '&$checked': {
          transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
          color: 'rgb(89,100,224)',
          '& + $track': {
            opacity: 1,
            backgroundColor: "#FFFFFF",
            borderColor: "none",
          },
        },
        '&$hover': {
          backgroundColor: '#FFFFFF',
        },
      },
      thumb: {
        width: size,
        height: size,
        boxShadow: 'none',
      },
      track: {
        border: `solid #FFFFFF`,
        borderRadius: 40,
        opacity: 1,
        backgroundColor: "#FFFFFF",
        boxSizing: 'border-box',
      },
      checked: {},
    }))(Switch);




    return (<div className="header-background">
      <div className="container" >
       
          <Link className="logo-link" to="/"> 
          <div className="logo-container"></div></Link>
        
        <div className="theme-container">
          <div className="theme-icon-light"></div>
          <CustomSwitch 
          checked={switchDark} 
          onChange={toogleChecked} ></CustomSwitch>
          <div className="theme-icon-dark"></div>

        </div>
      </div>

    </div>
    )
  };

export default Header;