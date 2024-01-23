import React from "react";
import { Link } from "react-router-dom";
import Magnetic from "../Pages/Magnetic";

function Nav() {
  return (
    <div>
      <div className="nav-container">
        <h1 className="logo">Favour</h1>

        <nav>
          <div className="container-link">
            <div>
              <Magnetic>
                <Link to="/Home" className="nav-link">
                  Home
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic>
                <Link to="/work" className="nav-link">
                  Project
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic>
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </Magnetic>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
