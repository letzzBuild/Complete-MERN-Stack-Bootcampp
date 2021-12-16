import React,{useState} from 'react'
import './beer.css'


function Beer() {
    const [age,setage] = useState(0);   
    const [state,setstate] = useState('');

    const handleChange = (event)=>{
        setage(event.target.value)
    }

    const handleSubmit = (event)=>{
      event.preventDefault(); 
      if(age<18){
        setstate("no beer")
        
      }
      else{
        setstate("beer") 
      }
    }

    return (
        console.log(age),
        <div className="beer">
            <h3>Enter your Age</h3>
            <form onSubmit={handleSubmit}>
            <input value={age} onChange={handleChange} className="input" type="number" /> <br /><br />
            <button className="button">Submit</button>
            </form>
            {
                state==="beer" && <h1>Your Beer is ready ..</h1>
                
            }
            {
                state==="no beer" && <h1>Sorry! No Beer for you ..</h1>
            }
            
        </div>
    )
}

export default Beer
