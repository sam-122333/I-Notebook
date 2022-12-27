import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link
            style={{ marginLeft: "100px" }}
            className="navbar-brand text-light"
            to="/"
          >
            Navbar
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link text-${
                    location.pathname === "/home" ? "primary" : "white"
                  } `}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className={`nav-link text-${
                    location.pathname === "/about" ? "primary" : "white"
                  } `}
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>

            <Link type="button" className="btn btn-primary mx-2" to="/signup">
              Sign Up
            </Link>
            <Link type="button" className="btn btn-primary mx-2" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
