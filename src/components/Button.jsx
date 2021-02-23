import React, { Component } from 'react';
import styled from 'styled-components';
import './Button.css'

const style = {
    width : '130px',
    height : '40px',
    background : 'florawhite'
    
    
    
}
function Button (props){

    return (
        <div className="buttonorigin">
            <button style={style}>{props.name}</button>

        </div>


    );


}

export default Button;