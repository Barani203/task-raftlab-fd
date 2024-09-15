import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      //   alert(JSON.stringify(values, null, 2));
      try {
        let loginData= await axios.post("https://task-raftlab-edh.onrender.com/login",values);
        // window.localStorage.setItem("my_token",loginData.data.token)
        // alert("login success");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
<div className='container-fluid'>

<div className="container">
  <div className="row">
    <form onSubmit={formik.handleSubmit}>
      <div className="col-lg-6">
        <label htmlFor="title">email
        </label>
        <input
          id="title"
          name="email"
          type="text"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div className="col-lg-6">
        <label htmlFor="description">password</label>
        <input
          type="text"
          className="form-control"
          id="desciption"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
    
      <button className="btn btn-primary mt-3 text-center">Sumbit</button>
    </form>
  </div>
</div>
</div> 
    
    </>
  );
}



