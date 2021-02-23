
import React, { Component} from 'react';
import './Square.css'

//선택 아닐때 배경색 white-글씨 black
//선택 되면 배경색 

class Square extends Component{
    render(){
        return (
            <button className="square">1
            </button>
        );
    }
}

export default Square;