import {useState} from 'react';



function App() {
 const [bulb,setbulb] = useState(false);
 const makebulbOn = () => {
   setbulb(true);

   
 } 
 const makebulbOff = () => {
  setbulb(false);
    
 }
  return (
    console.log(bulb),
    <center>
       <h1>The Bulb Show</h1>
       {
         bulb==true ?   <img width="300px" height="300px" src="https://blog.pegasuslighting.com/wp-content/uploads/2013/06/light-bulb.jpg" alt="not found"/> : <img width="300px" height="300px" src="https://media.istockphoto.com/photos/light-bulb-picture-id185099361" alt="not found"/> 
       }
       
      
       <button onClick={makebulbOn}>Bulb On</button>
       <button onClick={makebulbOff}>Bulb Off</button>
    </center>
  )
}

export default App
