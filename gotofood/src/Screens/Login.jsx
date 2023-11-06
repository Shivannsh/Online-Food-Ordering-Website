import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handlechange = (event) => {
    const { name, value } = event.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleclick = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json_backend = await response.json();   
                                                                      // response.json() is a promise/ response cominf from server side is in json format
    console.log(json_backend);                                       // yh aapko console mei dekhne ko milega ki json mei kya kya hai
    if (!json_backend.success) {
                                                                          // if success is false then it will show alert(jaise backend p humne likha hai json==sucess to vo data aaya or us data ka naam bhi json hi h to isliye json check kiya)
                                                                          //save the auth token and redirect
      alert("Invalid Credentials");
    } else {
      localStorage.setItem("token", json_backend.Authtoken); // yh token ko local storage mei save kr dega
      console.log(localStorage.getItem("token"));
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleclick}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={handlechange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={handlechange}
            />
          </div>

          {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div> */}

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>

          <Link to="/createuser" className="m-3 btn btn-danger">
            Not an existing user? Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}
