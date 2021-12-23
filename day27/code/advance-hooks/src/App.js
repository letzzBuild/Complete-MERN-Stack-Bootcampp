import React,{useEffect,useState} from 'react'
import axios from 'axios'
import  Card from './Card'

function App() {

 
  // const [data,setData] = useState([])
  const [counter,setcounter] = useState(0)




  useEffect(()=>{

    console.log('useEffect')

  //  const interval = setInterval(()=>{
     
  //   console.log('useEffect called after components are mounted')
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
  //     setData(res.data)  
  //   }).catch((err)=>{
  //           console.log(err)
  //   })

  //   },5000)


  },[counter]);

  //only one time
  // useEffect(()=>{

  // },[])

  //unmount condition -->componentwillunmount
  // useEffect(()=>{
  //   //write your code 

  //   return ()=>{
          // clearInterval(interval)
  //   }

  // })

  

  
  return (
    console.log('App'),
    <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',flexDirection:'column'}}>
    <h1>Exprementing with useEffect</h1>
    {/* {
      data.map((ele)=>{
        return <Card key={ele.id}  id={ele.id} title={ele.title} body={ele.body}/>
      })
    } */}
    <h1>{counter}</h1>
    <button onClick={()=>{setcounter(counter+1)}}>Increment</button>
    </div>
  )
}

export default App;
