import React,{useState} from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./Form.css";
import { useToasts } from 'react-toast-notifications';


function Form() {
  const { addToast } = useToasts();
  const [cgpa,setcgpa] = useState(0); 
  const schema = yup
    .object()
    .shape({
      sem1: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem2: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem3: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem4: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem5: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem6: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem7: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
      sem8: yup
        .number()
        .min(0, "Cgpa values cannot be negative")
        .max(10, "Cgpa value cannot be greater than "),
    });

  const formik = useFormik({
    initialValues: {
      sem1: 0,
      sem2: 0,
      sem3: 0,
      sem4: 0,
      sem5: 0,
      sem6: 0,
      sem7: 0,
      sem8: 0,
    },
    validationSchema: schema,
    onSubmit:(values)=>{
      //calculate cgpa

      //calculate grade points
      let gradepoints = [24,24,24,27,24,24,24,26]
      let totalgradepoints = 0
      for(let i=1;i<=8;i++){
        if(values[`sem${i}`]!=0){
            totalgradepoints += gradepoints[i-1]
        }

      }
    let tempcgpa = ((values.sem1*24) + (values.sem2*24) +(values.sem3*24)+(values.sem4*27)+(values.sem5*24)+(values.sem6*24)+(values.sem7*24)+(values.sem8*26))/totalgradepoints
    setcgpa(tempcgpa)  
    addToast(`CGPA  : ${tempcgpa}` , {'appearance': 'success','autoDismiss':true}) 
}
  });

  return (
    <div className="form">
      <h6>Enter 0 if semester not completed</h6>
      <form onSubmit={formik.handleSubmit} className="form">
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem1}
          type="number"
          name="sem1"
          placeholder="Enter SGPA of Sem 1"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem2}
          type="number"
          name="sem2"
          placeholder="Enter SGPA of Sem 2"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem3}
          type="number"
          name="sem3"
          placeholder="Enter SGPA of Sem 3"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem4}
          type="number"
          name="sem4"
          placeholder="Enter SGPA of Sem 4"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem5}
          type="number"
          name="sem5"
          placeholder="Enter SGPA of Sem 5"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem6}
          type="number"
          name="sem6"
          placeholder="Enter SGPA of Sem 6"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem7}
          type="number"
          name="sem7"
          placeholder="Enter SGPA of Sem 7"
        />
        <input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sem8}
          type="number"
          name="sem8"
          placeholder="Enter SGPA of Sem 8"
        />
        <button type="submit">Submit</button>
      </form>
      <h3>CGPA : {cgpa} </h3>
      <h3>Percentage: </h3>
    </div>
  );
}

export default Form;
