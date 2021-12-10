import React from 'react'
import logo from './assets/beer.webp'

function App() {
  //assuming that you have pulled some data from backend (Database) and stored it in a list
  const subjects = ["Angular","React", "Node", "JavaScript", "HTML", "CSS","CSS"]
  
  return (
    <div>
      <h1>Keys and Lists in React</h1>
      <label>Select Subject</label>
      <select>
        {
          subjects.map((ele,index)=>{
            return <option key={index}>{ele}</option>

          })
        }
            

      </select>
        
      
    </div>
  )
}

export default App
