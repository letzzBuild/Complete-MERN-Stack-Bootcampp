import React from 'react'
// import Header from './components/Header/Header.jsx';
import './style.css';
import {useFormik} from 'formik';
// import Beer from './components/Beer/Beer.jsx';

function App() {
  const formik = useFormik({
    initialValues:{
      "fullname":"",
      "email":"",
      "age":0,
      "password":""
    },
    onSubmit:(values)=>{
      console.log(values);

    }
  })
  return (
    <div className="container">
        {/* <Header/>
        <Beer/> */}
        <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} name="fullname" type="text" placeholder="full name"/> <br/>
        <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} name="email" type="email" placeholder="email"/><br/>
        <input onChange={formik.handleChange} value={formik.values.age} onBlur={formik.handleBlur} name="age" type="number" placeholder="enter your age"/><br/>
        <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} name="password" type="password" placeholder="password"/><br/>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
