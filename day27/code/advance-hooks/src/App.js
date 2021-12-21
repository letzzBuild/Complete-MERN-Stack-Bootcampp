import React,{useEffect,useState} from 'react'
import axios from 'axios'

function App() {
 
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then((res)=>{
      setData(res.data.data)  
    }).catch((err)=>{

    })
  });
  

  return (
    console.log('App'),
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
    <h1>Exprementing with useEffect</h1>
    </div>
  )
}

export default App;
