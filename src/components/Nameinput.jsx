import React from 'react';
import './Nameinput.css'

const style = {
    width : '300px',
    height: '30px'
}
    function Nameinput({name,isDisable}){

        return(
            
            <div>            
                <h2>{name}</h2>
                <input type="text" placeholder="입력하세요"  style={style} disabled={isDisable} />
                
            </div>


        );
    }



export default Nameinput;
