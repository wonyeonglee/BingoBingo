import React, { Component } from 'react';
import './Table.css';


function Table (){
    return (

        <div className="lobbyTableWrapper">
        <div className="lobbytable">
            <table border="1">
                <th>No.</th>
                <th width="300px" align="center">제목</th>
                <th width="50px" align="center">크기</th>
                <th width="70px" align="center">map</th>
                <th width="60px" align="center">인원</th>
                <tr>
                    <td align="center">1</td>
                    <td>어서와~</td>
                    <td align="center">4*4</td>
                    <td align="center">숫자</td>
                    <td align="center">1/5</td>
                </tr>
            
            </table>
        </div>
        </div>
    );
}

export default Table;