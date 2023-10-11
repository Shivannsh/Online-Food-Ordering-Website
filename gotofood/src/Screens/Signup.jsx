import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleclick = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.location,
      }),
    });
    const json = await response.json();   // response.json() is a promise/ response cominf from server side is in json format
    console.log(json);    // yh aapko console mei dekhne ko milega ki json mei kya kya hai
    if (!json.success) {    // if success is false then it will show alert(jaise backend p humne likha hai json==sucess to vo data aaya or us data ka naam bhi json hi h to isliye json check kiya)
      //save the auth token and redirect
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleclick}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={handlechange}
            />
          </div>

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

          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={credentials.location}
              onChange={handlechange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>

          <Link to="/login" className="m-3 btn btn-danger">
            Already have an account?
          </Link>
        </form>
      </div>
    </>
  );
}
