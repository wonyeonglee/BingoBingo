import React, { Component } from 'react';
import './Combobox.css'

//배열을 받아서 배열안에 있는 값들을 콤보박스에 넣어준다..
//option 배열은 [{key,name들을가진다}]
function Combobox(props){
    
    return (
        <div>
            <h2>{props.name}</h2>

        <form>
            <select className="selectbox">
                <option value="select">=============선택=============</option>
                {props.options.map(option => {
                return <option key={option.key} value={option.name}>{option.name}</option>
            })}
            </select>
        </form>
        </div>


    );

}

export default Combobox;