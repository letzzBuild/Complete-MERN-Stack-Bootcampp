import React from 'react'
import './style.css';
import {useFormik} from 'formik';
import * as yup from 'yup';


function App() {
  const formik = useFormik({
    initialValues: {
      "fullname" : "",
      "email" :"",
      "password" :"",
      "age" : ""
    },
    onSubmit:(data)=>{
      console.log(data)
     
       
    },
    validationSchema:yup.object().shape({
      fullname : yup.string().required("Fullname is a required field"),
      age:yup.number().required().positive().integer("Age must be a positive integer"),
      password : yup.string().required().min(8,"Password must be atleast 8 characters long"),
      email : yup.string().email("Enter a valid email").required()
    })
  });

  console.log(formik);


  return (
    <div className="container">
        {/* <Header/>
        <Beer/> */}
        <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.fullname} onBlur={formik.handleBlur} name="fullname" type="text" placeholder="full name"/> <br/>
        {
            formik.touched.fullname && <small>{formik.errors.fullname}</small> 
        }
        <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} name="email" type="email" placeholder="email"/><br/>
        {
            formik.touched.email && <small>{formik.errors.email}</small>
        }
        <input onChange={formik.handleChange} value={formik.values.age} onBlur={formik.handleBlur} name="age" type="number" placeholder="enter your age"/><br/>
        {
            formik.touched.age && <small>{formik.errors.age}</small>
        }
        <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} name="password" type="password" placeholder="password"/><br/>
        { 
            formik.touched.password && <small>{formik.errors.password}</small>
        }
        <button className="submit-button" disabled={(formik.isValid && formik.dirty) ? false : true} type="submit">Submit</button>
        </form>
        
    </div>
  )
}

export default App;
