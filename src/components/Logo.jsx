import React, { Component } from 'react';
import imgfile from './logo.jpg';
import './Logo.css';
class Logo extends Component{
    render() {

        return(
            
            <div className="logo">
                 <img className="logoimg" src={imgfile} />
            </div>
            


        );
    }
}

export default Logo;