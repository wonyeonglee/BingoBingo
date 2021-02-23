import reactDom from "react-dom";
import React, { Component } from 'react';
import Square from './Square'
import './Board.css'


function Board(props){
    const row_number = props.value;
    let board = []
    // eslint-disable-next-line no-unused-vars
    const createSquare = ()  => {
        let index =0 
        for (let i=0; i<row_number; i++){
            index=index+1;
            
            for( let j=0; j<row_number; j++){
            board.push(<Square key={i+""+j}/>);
            }
            
            board.push(<br key={index} />);
            
            
        }
        return board;

    }
    return (//value 값 만큼 board를 만든다.
       <div className="bingoboard">
           {createSquare()}

       </div>

    );

}

export default Board;