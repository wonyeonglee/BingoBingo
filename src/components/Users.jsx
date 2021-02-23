import React, {Component} from 'react'
import imgfile2 from './member.png'
import './Users.css'


const style = {
    border : 'solid 1px',
    width : '150px',
    height : '40px',
    

}
//user 이미지(구글프로필사진)와 닉네임 렌더링
//user의 현재 빙고 상황 (bingo_lines)
function Users(props){
    return (
        <div className="usersroot">
            <div >
                <img className="userimg" src={imgfile2} />

            </div>
            <div style={style} className="userinfo">
            닉네임:{props.nickname}<br/>
            빙고 수 :{props.lines}

            </div>

        </div>
        

        

    );

}

export default Users;