import React, { useState } from "react";
import { Link } from "react-router-dom";
import Magnetic from "../Pages/Magnetic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [mobileNav, setMobileNav] = useState(/* initial state */);

  function toggleNavbar() {
    setMobileNav(!mobileNav);
  }

  function closeNavbar() {
    setMobileNav(false);
  }

  return (
    <div>
      <div className="nav-container">
        <h1 className="logo">Favour</h1>

        <div>
          <nav className={mobileNav ? "open" : "close"}>
            {mobileNav && (
              <div className="nav__close-container">
                <FontAwesomeIcon
                  icon={faClose}
                  className="nav__close"
                  onClick={closeNavbar}
                />
              </div>
            )}

            {/* Navigation links */}
            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </Magnetic>
            </div>

            <div>
              <Magnetic style={{ zIndex: 9999 }}>
                <Link to="/work" className="nav-link">
                  Project
                </Link>
              </Magnetic>
            </div>

            <div className="nav-toggler-links">
              <Magnetic style={{ zIndex: 9999 }}>
                <a
                  href=" https://ng.linkedin.com/in/favour-nelson-a0164523a"
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedln
                </a>
              </Magnetic>
            </div>

            <div className="nav-toggler-links">
              <Magnetic style={{ zIndex: 9999 }}>
                <a
                  href="https://github.com/Nel-tech"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  Github
                </a>
              </Magnetic>
            </div>

            {/* ... other nav links */}
          </nav>

          <div>
            <Magnetic>
              <FontAwesomeIcon
                icon={faBars}
                className="nav__bars"
                onClick={toggleNavbar}
              />
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
