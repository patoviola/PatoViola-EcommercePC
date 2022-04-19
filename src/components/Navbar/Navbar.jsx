import React from "react";
import logo from "../../logo.svg"


export default function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light navbar navbar-dark bg-dark justify-content-end">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      TuHardware
    </a>
  <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled">Disabled</a>
  </li>
</ul>
  </div>
</nav>
    )

}