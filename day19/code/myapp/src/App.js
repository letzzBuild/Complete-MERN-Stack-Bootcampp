import './style.css'
import {useState} from 'react';

function App() {
  let initialState = 0;
  const [count,setcount]  = useState(initialState) //call use State Hook

  const increment = ()=>{
    //incremneting counter
    setcount(count+1)
  }

  const decrement = ()=>{

    if(count>0){
      setcount(count-1)

    }
   
    
  }

  return (
    <div className="container">
      <h1>Counter Application</h1>
      <h1>Counter Value : {count} </h1>
      <button onClick={increment} className="increment_button">Increment</button>
      {
        count>0 && <button onClick={decrement} className="decrement_button">Decrement</button> 
      }
    </div>
  )
}

export default App






