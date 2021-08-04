import React from "react";

export default function NavBar() {
  return (
    <div className="nav-container">
      <header>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <nav className="nav-menu">
          <ul className="nav-links">
            <li><a href="#">Gallery</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    </div>
  );
}
