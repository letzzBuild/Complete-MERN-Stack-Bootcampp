import React from 'react'
import Son from './Son';
import Daughter from './Daughter';
import './styles.css'

function Father2() {
    return (
        <div className="father2">
            This is Mallapa
            <Son sonname="Vishal" age="40"/>
            <Daughter  daughtername="Nikita"/>
        </div>
    )
}

export default Father2
