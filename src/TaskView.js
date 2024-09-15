import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "./Search";

export default function TaskView() {
  const [UserList, setUserList] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  let fetchUsers = async () => {
    let userData = await axios.get("http://localhost:3001/task");
    console.log(userData.data);
    setUserList(userData.data);
  };

  let handledelete = async (id) => {
    try {
      let result = window.confirm("Are you sure do you want to delete ?");
      if (result) {
        await axios.delete(`http://localhost:3001/task/${id}`);
        alert("Task  deleted");
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-4">
          <h3>OverAll Task Here</h3>
        </div>
        <div className="col-lg-4">
          {/* <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"

             
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 " type="submit">
              Search
            </button>
          </form> */}


          <Search/>
        </div>
        <div className="col-lg-4 mt-1 mb-1 text-end">
          <Link to={"/create-task"}>
            <button className="btn btn-primary">CreaTeask</button>
          </Link>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">description</th>
            <th scope="col">Date And Time</th>
          </tr>
        </thead>
        <tbody>
          {UserList.map((user) => {
            return (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.title}</td>
                <td>{user.description}</td>
                <td>{user.date}</td>
                <Link to={`/edit/${user._id}`}>
                  <button className="btn btn-sm btn-primary mr-2">Edit</button>
                </Link>
                <button
                  onClick={() => handledelete(user._id)}
                  className="btn btn-sm ml-3 btn-danger"
                >
                  delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
