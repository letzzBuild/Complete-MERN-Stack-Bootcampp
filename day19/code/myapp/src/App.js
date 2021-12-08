import './style.css'
import {useState} from 'react';

function App() {
  let initialState = 0;
  const [count,setcount]  = useState(initialState) //call use State Hook
 

  const handleChange = ()=>{
    console.log('button-clicked')
    //incremneting counter
    setcount(count+1)
  }

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h1>Counter Value : {count} </h1>
      <button onClick={handleChange} className="button">Increment</button>
    </div>
  )
}

export default App
