import React from 'react';
import './header.styles.scss';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';


const Header = () => {
    const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
    const borderWidth = 2;
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
          padding:pxToRem(gap),
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
          boxSizing:'border-box',
        },
        checked: {},
      }))(Switch);


    return (<div className="header-background">
        <div className="container" >
            <div className="logo-container">
            </div>
            <div className="theme-container">
                <div className="theme-icon-light"></div>
                <CustomSwitch ></CustomSwitch>
                <div className="theme-icon-dark"></div>

            </div>
        </div>

    </div>
    )
};

export default Header;