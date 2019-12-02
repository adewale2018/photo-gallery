import React from "react";
import './NavigationBar.css';

const NavigationBar = props => {
  return (
    <div className='ui fixed borderless menu' id='navigation-bar'>
      <a href="/" className="item">
        <i className='camera retro icon' style={{fontSize: "20px", color: '#fff'}}/>
      </a>
      <a className='header item' href='/' style={{fontSize: "18px", textTransform: "uppercase", color: "#22a2ff", fontFamily: "'Kavivanar', cursive", fontWeight: "bolder", letterSpacing: "3px"}}>
        Photo Gallery
      </a>

      <div className='right menu'>
        <a className='item' href='/' style={{color: "#fff", fontSize: "17px", letterSpacing: "2px"}}>
          Home
        </a>
        <a className='item' href='/about' style={{color: "#fff", fontSize: "17px", letterSpacing: "2px"}}>
          About
        </a>
        <a className='item' href='/contact' style={{color: "#fff", fontSize: "17px", letterSpacing: "2px"}}>
          Contact
        </a>
      </div>
    </div>
    
      

  );
};

export default NavigationBar;
