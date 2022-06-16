import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header-bc">
        <div className="header-nav">
          <h2>Makers</h2>
          <nav>
            <ul className="header-ul">
              <li className="nav-li">contact</li>
              <li className="nav-li">address</li>
              <li className="nav-li">link</li>
              <li className="nav-li">link</li>
              <li className="nav-li">link</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
