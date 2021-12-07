import React from 'react'
import Son from './Son';
import Daughter from './Daughter';
import './styles.css'


function Father3() {
    return (
        <div className="father3">
            This is Parshuram
            <Son sonname="Suchitra" age="22"/>
            <Daughter  daughtername="Justin"/>
        </div>
    )
}

export default Father3
