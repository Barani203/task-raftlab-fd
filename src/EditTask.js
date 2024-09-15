import React from 'react'
import  { useEffect } from 'react'
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  let params = useParams()
 useEffect(() => {
  async function fetchData(){
    let userData = await axios.get(`http://localhost:3001/task/${params.id}`)
    formik.setValues(userData.data)
  }
  fetchData();
 }, [])
 
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        title: "",
        description: "",
        date:""
      },
      onSubmit: (values) => {
          // alert(JSON.stringify(values, null, 2));
        try {
          axios.put(`http://localhost:3001/task-update/${params.id}`,values);
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      },
    });
  
    return (
      <>
        <div className="container">
        
          <form onSubmit={formik.handleSubmit}>
            <div className="col-lg-6">
              <label htmlFor="title">Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="description">descripetion</label>
              <input
                type="text"
                className="form-control"
                id="desciption"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="date">Date and Time</label>
              <input
                type="datetime-local"
                className="form-control"
                id="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </div>
            <button type='Submit' className="btn btn-primary mt-3 text-center">Sumbit</button>
          </form>
        </div>
      
      </>
)}
