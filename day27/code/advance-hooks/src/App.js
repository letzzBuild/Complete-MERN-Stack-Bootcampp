import React,{useEffect,useState} from 'react'
import axios from 'axios'
import  Card from './Card'

function App() {
 
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setData(res.data)  
    }).catch((err)=>{
            console.log(err)
    })
  },[]);
  

  return (
    console.log('App'),
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
    <h1>Exprementing with useEffect</h1>
    {
      data.map((ele)=>{
        return <Card key={ele.id}  id={ele.id} title={ele.title} body={ele.body}/>
      })
    }
    </div>
  )
}

export default App;
