import React from 'react'
import Table from './components/Table'

import Button from './components/Button'
import Template from './components/Template'

function Lobby(){

    return (
        <Template>
        
            <div>
            <Button name="방만들기" />
            <Button name="빠른시작" />

            </div>
            <div>
                <Table />
            </div>
            
        
    </Template>


    );
}

export default Lobby;