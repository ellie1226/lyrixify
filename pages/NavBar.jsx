import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [isActive, setActive] = useState(false);
  const node = useRef();

  // navBar links and paths
  const menuList = ["About Us", "Sign Up"];

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setActive(false);
    }
  };

  return (
    <div className="nav-container">
      <header>
        <div className="logo">
          <h2>Lyrixify</h2>
        </div>
        <SearchBar />
        <nav className="nav-menu">
          <ul className={isActive ? "nav-active nav-links" : "nav-links"}>
            {menuList.length &&
              menuList.map((link, i) => {
                return (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                );
              })}
          </ul>
          <div
            className={isActive ? "hamburger toggle" : "hamburger"}
            onClick={() => setActive(!isActive)}
            ref={node}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
}
