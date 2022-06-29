import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

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
              eAssessment using MongoDB
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
                <Link to="/mongodb">
                    <p className="navbar-item">Dashboard</p>
                  </Link>
                <div className="navbar-item has-dropdown is-hoverable">
                  <p className="navbar-link">More</p>
                  <div className="navbar-dropdown">
                    <p className="navbar-item"><a target="_blank" rel="noreferrer" href="mailto:samnayakawadi@gmail.com">Report a Problem</a></p>
                  </div>
                </div>
              </div>
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