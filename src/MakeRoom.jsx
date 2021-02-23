import React from 'react'

import Template from './components/Template'
import Nameinput from './components/Nameinput'
import Button from './components/Button'
import Combobox from './components/Combobox'
import './MakeRoom.css'
import Emptyspace from './components/Emptyspace'
import Checkbox from './components/Checkbox'
import { Link } from 'react-router-dom'

const sizes = [
    {
        key: 4,
        name: "4*4"


    },
    {
        key: 5,
        name: "5*5"
    },
    {
        key: 6,
        name: "6*6"
    }
]

const maps = [
    {
        key: 1,
        name: "숫자"
    },
    {
        key: 2,
        name: "과일"
    },
    {
        key: 3,
        name: "여자아이돌 그룹"
    },
    {
        key: 4,
        name: "남자아이돌 그룹"
    },

]

const peoples = [
    {
        key: 5,
        name: "5명"
    },
    {
        key: 6,
        name: "6명"
    },
    {
        key: 7,
        name: "7명"
    },
    {
        key: 8,
        name: "8명"
    },
]
function MakeRoom() {
    return (
        <Template>
            <div className="makeroomheader">
                <h1>방 만들기</h1>
            </div>
            <div>
                <Nameinput name="제목" isDisable={false} />
                <Combobox name="크기" options={sizes} key={"size"} />
                <Combobox name="map" options={maps} key={"map"} />
                <Checkbox />
                <Nameinput name="암호" isDisable={true} />
                <Combobox name="인원수" options={peoples} key={"people"} />
            </div>
            <Emptyspace height="100px"></Emptyspace>
            <div className="buttons">
                <Link to="/gameroom">
                    <Button name="확인" />
                </Link>
                <Link to="/lobby">
                    <Button name="취소" />
                </Link>
            </div>







        </Template>

    );
}

export default MakeRoom;