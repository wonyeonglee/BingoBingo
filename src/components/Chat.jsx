import React, {Component} from 'react';
import './Chat.css'

function Chat (){
    return (
        <div className="chatbody">
            <div className="chatview">


            </div>
            <div className="chatform">
                <form>
                <input type="text" id="msg" />
                <button className="send">send</button>
                </form>
            </div>

        </div>


    );

}

export default Chat;