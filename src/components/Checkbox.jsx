import React, { Component } from 'react';

import './Checkbox.css'

function Checkbox(){

    return (
        <div className="checkboxdiv">
            
                <label><input type="radio" name="isSecret" value={false}/>공개</label>
                <label><input type="radio" name="isSecret" value={true}/>비공개</label>

            
        </div>
        


    );

}

export default Checkbox;