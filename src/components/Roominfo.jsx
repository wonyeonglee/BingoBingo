import React, {Components} from 'react';
import './Roominfo.css'

//방이름(roomname, roomsize,roommap, roompeople,roommax)
//한 줄에 표시 
//table 로 만들어야겠다 
//name 최대길이 공백포함 23글자 
function Roominfo (props){
    return (
        <div className="roominfo">
                    제목 : {props.roomname}
                    크기 : {props.roomsize}
                    map :{props.roommap}
                    인원 : {props.roompeople}/
                    {props.roommax}

                
            
    
        </div>
        
    );


}

export default Roominfo;