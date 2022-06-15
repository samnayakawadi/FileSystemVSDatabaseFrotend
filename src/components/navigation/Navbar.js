import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import logo from "./imgs/cdacnew.png";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("login") === "yes") {
      setIsLoggedIn(true);
    }
  }, []);

  const [isActive, setisActive] = useState(false);

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%"
        }}
        className="box navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div href="/" className="mt-2 navbar-item">
            <Link to="/">
              {/* <img src={logo} alt="Logo" width={90} height={600} /> */}
              eAssessment
            </Link>
          </div>

          <div
            onClick={() => {
              setisActive(!isActive);
            }}
            type="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div
          onClick={() => {
            setisActive(!isActive);
          }}
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div>
              <div className="navbar-start mt-4">
                <Link to="/">
                  <p className="navbar-item ">Home</p>
                </Link>
                {isLoggedIn && (
                  <Link to="/dashboard">
                    <p className="navbar-item">Dashboard</p>
                  </Link>
                )}
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link">More</p>
                  <div className="navbar-dropdown">
                    {/* <p className="navbar-item"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/samnayakawadi/">Follow on Instagram</a></p>
                    <p className="navbar-item"><a target="_blank" rel="noreferrer" href="http://samnayakawadi.epizy.com/">Go to Website</a></p>
                    <hr className="navbar-divider" /> */}
                    <p className="navbar-item"><a target="_blank" rel="noreferrer" href="mailto:samnayakawadi@gmail.com">Report a Problem</a></p>
                    {/* <p className="navbar-item">Report an issue</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/filesystem">
                <button className="m-3 button is-success">File System</button>
              </Link>
              <Link to="/mongodb">
                <button className="m-3 button is-info">Mongo DB</button>
              </Link>
              {/* <a target="_blank" className="m-3 button is-primary" rel="noreferrer" href="https://drive.google.com/file/d/1aCWpqd0OSHu-XUVmZ5kWKA-ppKLBV5bP/view?usp=sharing">Download App</a> */}
            </div>
          </div>
        </div>
      </nav>
      <div
        style={{
          marginBottom: "120px"
        }}
      ></div>
    </div>
  );
}