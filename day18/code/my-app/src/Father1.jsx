import Son from './Son';
import Daughter from './Daughter';
import './styles.css'

function Father1() {
    return (
        <div className="father1">
            This is Kallapa
            <Son sonname="Vikas" age="22"/>
            <Daughter  daughtername="Dolly"/>
        </div>
    )
}

export default Father1
