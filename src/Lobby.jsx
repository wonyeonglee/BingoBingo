import React from 'react'
import Table from './components/Table'

import Button from './components/Button'
import Template from './components/Template'
import { Link } from 'react-router-dom';

function Lobby() {

    return (
        <Template>

            <div>
                <Link to="/makeroom">

                    <Button name="방만들기" />
                </Link>

                <Button name="빠른시작" />

            </div>
            <div>
                <Table />
            </div>


        </Template>


    );
}

export default Lobby;