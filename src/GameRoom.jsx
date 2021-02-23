import React, { Component} from 'react'
import Board from './components/Board'
import Roominfo from './components/Roominfo'
import Users from './components/Users'
import Button from './components/Button'
import Chat from './components/Chat'
import './GameRoom.css'


const users = [
    {number : 0,
    nickname : "wonyeong",
    bingo_lines : 1},
    {
        number : 1,
        nickname : "jinmyeong",
        bingo_lines : 0
    },
    {
        number:2,
        nickname:"soyeon",
        bingo_lines: 1

    },
   
  
    
  
]; 
//user 정보 담는 배열  
class GameRoom extends Component{
    render(){
        return(
            //빙고판 만들기 클릭 -> 빙고판이 랜덤으로 바뀐다 
            //방정보  맨위에 뜨고 
            //왼쪽 : 유저 정보 + 채팅
            //오른쪽 : 빙고판 
            <div>
                <div>
                    <Roominfo roomname="진짜반갑다어서오고이게몇자인지최대글자세기ㅇㅇ" roomsize="4" roommap="숫자" roompeople="2" roommax="6"/>
                </div>
                <div className="bodyroot">
                    <div className="usersbody">
                        <div className="usersinfo">
                        {users.map(user => (
                        <Users nickname={user.nickname} key = {user.number} lines={user.bingo_lines}/>
                        ))}
                        </div>
                    <div className="chat">
                    <Chat />
                    

                    </div>
                </div>
                <div className="bingobody">

                    <Board  value="5"/>
                

                <div className="makebutton">
                    <Button name="랜덤 빙고판 만들기" />
                    </div>
                    </div>
                    
                
                </div>
                

            


            

            </div>
            
        );
    }
}


export default GameRoom;