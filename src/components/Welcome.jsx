import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component{
    render(){

        return(
            <div>

                <h3 className="welcometext">환영합니다 ~^^</h3>
                <h3 className="welcometext">로그인하고 게임하러가기</h3>
            </div>


        );
    }
}

export default Welcome;