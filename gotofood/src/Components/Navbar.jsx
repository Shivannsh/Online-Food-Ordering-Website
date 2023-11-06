import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

const navigate = useNavigate();
const handlelogout = () => {
  localStorage.removeItem("token");
  navigate("/");
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <Link className="navbar-brand mx-2 fs-2 fst-italic" to="/">
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active fs-6" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            {localStorage.getItem("token") ? (
              <li className="nav-item">
                <Link className="nav-link active fs-6" to="/">
                  My Orders <span className="sr-only"></span>
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>

          {!localStorage.getItem("token") ? 
          <div className="d-flex">
            <Link className="btn bg-white text-success mx-1 fs-6" to="/login">
              Login
            </Link>

            <Link className="btn bg-white text-success mx-1 fs-6" to="/createuser">
              Sign Up
            </Link>
          </div>
          : 
          <div>
             <Link className="btn bg-white text-success mx-3 fs-6" to="/cart"> My Cart </Link>
          <Link className="btn bg-white text-danger me-4 fs-6" onClick={handlelogout}> Logout </Link>
          </div>
          }
        </div>
      </nav>
    </>
  );
}
