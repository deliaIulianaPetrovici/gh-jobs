import React from 'react';
import './header.styles.scss';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lightMode: 'default',
     
    };
  }
  toogleChecked = () => {
    const localTheme = window.localStorage.getItem('lightMode');
    if (localTheme === 'default') {
      window.localStorage.setItem('lightMode', 'inverted')
      this.setState({ lightMode: 'inverted', })
   //   this.checked=true ;
     
    } else {
      window.localStorage.setItem('lightMode', 'default');
      this.setState({ lightMode: 'default' });
   //   this.checked=false;
      
    }
  }
   
  changeTheme=()=>{
    
    const localTheme = window.localStorage.getItem('lightMode');
    const btn=document.querySelector(".light-theme-white");
   
    
    if (localTheme === 'inverted') {
      document.body.classList.add('is_inverted');
      this.checked=false;
      if(btn) btn.classList.add('dark-theme');
    }
    else {
      document.body.classList.remove('is_inverted');
     
      this.checked=true;
      if(btn) btn.classList.remove('dark-theme');
    }
  }

  componentDidMount(){
    this.changeTheme();
  }

  componentDidUpdate(){
    this.changeTheme();
  }


  render() {

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
        <div className="logo-container">
        </div>
        <div className="theme-container">
          <div className="theme-icon-light"></div>
          <CustomSwitch checked={this.checked} onChange={this.toogleChecked} ></CustomSwitch>
          <div className="theme-icon-dark"></div>

        </div>
      </div>

    </div>
    )
  }
};

export default Header;